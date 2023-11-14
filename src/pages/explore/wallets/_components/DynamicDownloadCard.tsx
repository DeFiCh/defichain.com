import { PropsWithChildren, useEffect, useState } from "react";
import { DownloadCard } from "./DownloadCard";
import { CardLink, IconType } from "./CardLink";

interface DynamicDownloadCardProps {
  repoName: string;
  testid: string;
  title: string;
  desc: string;
  imageSrc: string | JSX.Element;
  keywords: {
    mac?: string;
    win?: string;
    linux?: string;
  };
}

interface DownloadLinks {
  mac?: string;
  win?: string;
  linux?: string;
}

export function DynamicDownloadCard(
  props: PropsWithChildren<DynamicDownloadCardProps>,
): JSX.Element {
  const [downloadLinks, setDownloadLinks] = useState<DownloadLinks>();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const links: DownloadLinks = {};

    getGitHubAssets(props.repoName).then((assets) => {
      if (assets === undefined) {
        setHasError(true);
        return;
      }

      Object.keys(props.keywords).forEach((key) => {
        const link = getLink(assets, props.keywords[key]);
        if (link === undefined) {
          setHasError(true);
        }
        links[key] = link;
      });

      setDownloadLinks(links);
      setLoading(false);
    });
  }, []);

  const OSIconMapping = {
    mac: "MACOS",
    win: "WINDOWS",
    linux: "LINUX",
  };

  return (
    <DownloadCard
      title={props.title}
      desc={props.desc}
      imageSrc={props.imageSrc}
      testid={props.testid}
    >
      <div className="flex items-center text-lg font-medium">
        {isLoading || hasError ? (
          <CardLink
            descText="View on"
            text={IconType.GITHUB}
            url={`https://github.com/${props.repoName}/releases/latest`}
          />
        ) : (
          <div className="flex items-center lg:space-x-4 space-x-3 text-lg font-medium">
            {Object.keys(props.keywords).map((key) =>
              downloadLinks && downloadLinks[key] ? (
                <CardLink
                  key={key}
                  descText="Download for"
                  text={IconType[OSIconMapping[key]]}
                  url={downloadLinks[key]}
                />
              ) : null,
            )}
          </div>
        )}
      </div>
    </DownloadCard>
  );
}

export async function getGitHubAssets(
  repoName: string,
): Promise<any | undefined> {
  const baseUrl = `https://api.github.com/repos/${repoName}/releases/latest`;
  const res = await fetch(baseUrl);
  const json = await res.json();

  const { assets } = json;

  if (assets === undefined || assets.length === 0) {
    return undefined;
  }

  return assets;
}

function getLink(assets, keyword: string): string | undefined {
  const invalidExtList = [".sha256", ".blockmap", ".yml"];

  const results = assets.filter((asset) => {
    const url: string = asset.browser_download_url;
    return (
      url.toLowerCase().includes(keyword.toLowerCase()) &&
      !invalidExtList.some((ext) => url.toLowerCase().includes(ext))
    );
  });

  if (results.length === 1) {
    return results[0].browser_download_url;
  }

  return undefined;
}
