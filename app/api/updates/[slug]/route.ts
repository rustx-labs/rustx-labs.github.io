import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

interface Software {
  name: string;
  download_url: string;
  description: string;
}

interface UpdateFile {
  archive_name: string;
  target: string;
  archive_format: string;
  blob_path: string;
  url: string;
  sha256: string;
}

interface UpdateInfo {
  schema_version: number;
  product: string;
  channel: string;
  version: string;
  release_tag: string;
  published_at: string;
  files: UpdateFile[];
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

      // 将 files[].url 替换为本站地址
      const siteUrl = config.site_url.replace(/\/$/, '');
      updateInfo.files = updateInfo.files.map(file => ({
        ...file,
        url: `${siteUrl}/releases/${slug}/${file.archive_name}`,
      }));

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