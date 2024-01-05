export function getPath(path, keyword = "CLIENT") {
  let rootParentPath = path.split(keyword)[0];
  let rootPath = path.split(keyword)[0] + keyword;


  if (rootParentPath.endsWith("/")) {
    rootParentPath = rootParentPath.slice(0, -1);
  }
  if (rootPath.endsWith("/")) {
    rootPath = rootPath.slice(0, -1);
  }

  return { rootParentPath, rootPath };
}
