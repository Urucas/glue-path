import isPlainObj from 'is-plain-obj'

export default function glue(arr) {
  let glue = /^win/.test(process.platform) ? '\\' : '\/';
  if(!arr) return glue
  if(typeof arr == "string") return arr
  if(typeof arr == "number") return arr
  if(isPlainObj(arr)) return arr
  return arr.join(glue);
}
