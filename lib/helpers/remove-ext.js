import path from 'node:path';

export default function removeExt(filePath) {
  return filePath.slice(0, -path.extname(filePath).length);
}
