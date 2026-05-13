import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

interface Software {
  name: string;
  download_url: string;
  description: string;
}

interface Config {
  softwares: {
    [slug: string]: Software;
  };
}

interface UpdateInfo {
  version: string;
  notes?: string;
  pub_date?: string;
  platforms?: {
    [key: string]: {
      signature?: string;
      url: string;
    };
  };
  // 支持自定义格式
  schema_version?: number;
  product?: string;
  channel?: string;
  release_tag?: string;
  published_at?: string;
  files?: Array<{
    archive_name: string;
    target: string;
    archive_format: string;
    blob_path: string;
    url: string;
    sha256: string;
  }>;
}

export async function generateStaticParams() {
  const configPath = path.join(process.cwd(), 'config.json');
  const configData = fs.readFileSync(configPath, 'utf-8');
  const config: Config = JSON.parse(configData);

  return Object.keys(config.softwares).map(slug => ({
    slug
  }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // 读取配置文件
    const configPath = path.join(process.cwd(), 'config.json');
    const configData = fs.readFileSync(configPath, 'utf-8');
    const config: Config = JSON.parse(configData);

    const software = config.softwares[slug];

    if (!software) {
      return NextResponse.json(
        { error: 'Software not found' },
        { status: 404 }
      );
    }

    // 添加时间戳参数避免缓存
    const timestamp = Date.now();
    const separator = software.download_url.includes('?') ? '&' : '?';
    const downloadUrlWithTimestamp = `${software.download_url}${separator}t=${timestamp}`;

    // 从远程JSON文件获取更新信息
    let updateInfo: UpdateInfo;
    try {
      const response = await fetch(downloadUrlWithTimestamp);
      if (!response.ok) {
        throw new Error(`Failed to fetch update info: ${response.status}`);
      }
      updateInfo = await response.json();
    } catch (fetchError) {
      console.error('Error fetching update info:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch update information' },
        { status: 502 }
      );
    }

    // 构建Tauri升级响应格式
    let tauriResponse;

    if (updateInfo.platforms) {
      // 如果已经是Tauri格式，直接使用
      tauriResponse = {
        version: updateInfo.version,
        notes: updateInfo.notes || software.description,
        pub_date: updateInfo.pub_date || new Date().toISOString(),
        platforms: updateInfo.platforms
      };
    } else if (updateInfo.files) {
      // 如果是自定义格式，转换为Tauri格式
      const platforms: { [key: string]: { signature: string; url: string } } = {};

      updateInfo.files.forEach(file => {
        // 根据target映射到Tauri平台格式
        let platformKey: string;
        switch (file.target) {
          case 'aarch64-apple-darwin':
            platformKey = 'darwin-aarch64';
            break;
          case 'x86_64-apple-darwin':
            platformKey = 'darwin-x86_64';
            break;
          case 'x86_64-unknown-linux-gnu':
            platformKey = 'linux-x86_64';
            break;
          case 'x86_64-pc-windows-msvc':
            platformKey = 'windows-x86_64';
            break;
          default:
            platformKey = file.target;
        }

        // 添加时间戳参数避免缓存
        const timestamp = Date.now();
        const separator = file.url.includes('?') ? '&' : '?';
        const urlWithTimestamp = `${file.url}${separator}t=${timestamp}`;

        platforms[platformKey] = {
          signature: '',
          url: urlWithTimestamp
        };
      });

      tauriResponse = {
        version: updateInfo.version,
        notes: software.description,
        pub_date: updateInfo.published_at || new Date().toISOString(),
        platforms
      };
    } else {
      // 如果没有platforms和files，使用默认格式
      tauriResponse = {
        version: updateInfo.version,
        notes: software.description,
        pub_date: new Date().toISOString(),
        platforms: {
          'darwin-aarch64': {
            signature: '',
            url: downloadUrlWithTimestamp
          },
          'darwin-x86_64': {
            signature: '',
            url: downloadUrlWithTimestamp
          },
          'linux-x86_64': {
            signature: '',
            url: downloadUrlWithTimestamp
          },
          'windows-x86_64': {
            signature: '',
            url: downloadUrlWithTimestamp
          }
        }
      };
    }

    return NextResponse.json(tauriResponse);
  } catch (error) {
    console.error('Error checking for updates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}