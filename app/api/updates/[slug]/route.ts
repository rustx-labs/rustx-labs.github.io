import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

interface Software {
  name: string;
  download_url: string;
  description: string;
}

interface PlatformInfo {
  signature: string;
  url: string;
}

interface UpdateInfo {
  version: string;
  notes: string;
  pub_date: string;
  platforms: Record<string, PlatformInfo>;
  downloads: Record<string, Record<string, string>>;
}

interface Config {
  site_url: string;
  softwares: {
    [slug: string]: Software;
  };
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

    // 从远程JSON文件获取更新信息，并将下载地址替换为本站地址
    try {
      const response = await fetch(software.download_url);
      if (!response.ok) {
        throw new Error(`Failed to fetch update info: ${response.status}`);
      }
      const updateInfo: UpdateInfo = await response.json();

      // 将 platforms.*.url 和 downloads.*.* 替换为本站地址
      const siteUrl = config.site_url.replace(/\/$/, '');

      for (const platform of Object.values(updateInfo.platforms)) {
        const fileName = platform.url.split('/').pop()!;
        platform.url = `${siteUrl}/releases/${slug}/${fileName}`;
      }

      for (const osArchs of Object.values(updateInfo.downloads)) {
        for (const arch of Object.keys(osArchs)) {
          const fileName = osArchs[arch].split('/').pop()!;
          osArchs[arch] = `${siteUrl}/releases/${slug}/${fileName}`;
        }
      }

      return NextResponse.json(updateInfo);
    } catch (fetchError) {
      console.error('Error fetching update info:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch update information' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Error checking for updates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}