export function modifyGoogleDriveURL(url) {
  if (!url.includes('drive.google.com')) {
    return url;
  }

  const match = url.match(/file\/d\/([^/]+)/);
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}` : url;
}
