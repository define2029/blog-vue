export const getImg = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
// 导出一个函数，用于判断路径是否为外部链接
export function isExternal(path) {
  // 使用正则表达式测试路径是否以https?:、mailto:、tel:开头
  return /^(https?:|mailto:|tel:)/.test(path)
}
