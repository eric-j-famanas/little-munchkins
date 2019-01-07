export function formatName(pathName: string): string {
  let headerName = '';
  for (let i = 0; i < pathName.length; i++) {
    if (i === 0 || pathName[i - 1] === '-') {
      headerName += pathName[i].toLocaleUpperCase();
    } else {
      headerName += pathName[i];
    }
  }
  return headerName;
}
