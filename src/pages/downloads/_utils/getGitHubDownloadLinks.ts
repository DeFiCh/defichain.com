export async function getGitHubDownloadLinks(repoName: string) {
  const baseUrl = `https://api.github.com/repos/${repoName}/releases/latest`
  const res = await fetch(baseUrl)
  const json = await res.json()

  const assets: Array<any> = json['assets']

  if (assets === undefined || assets.length === 0) {
    return []
  }

  assets.forEach(asset => {
    getLinkOS(asset['browser_download_url'])
  })
}

function getLinkOS(url: string) {
  const apple_keywords = ['apple', 'macos', '.dmg']
  const linux_keywords = ['linux', '.appimage']
  const window_keywords = ['w64', 'windows', '.exe']
  const blocklist = ['.sha256', '.blockmap', '.yml']

  if (apple_keywords.some(keyword => url.toLowerCase().includes(keyword.toLowerCase())) && !blocklist.some(blockWord => url.toLowerCase().includes(blockWord.toLowerCase()))) {
    console.log(url, 'apple')
  }

  if (linux_keywords.some(keyword => url.toLowerCase().includes(keyword.toLowerCase())) && !blocklist.some(blockWord => url.toLowerCase().includes(blockWord.toLowerCase()))) {
    console.log(url, 'linux')
  }

  if (window_keywords.some(keyword => url.toLowerCase().includes(keyword.toLowerCase())) && !blocklist.some(blockWord => url.toLowerCase().includes(blockWord.toLowerCase()))) {
    console.log(url, 'linux')
  }
}
