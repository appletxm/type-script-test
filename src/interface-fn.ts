interface SearchFun {
  (source: string, subsource: string): boolean;
}

let searchFun: SearchFun;
searchFun = function(source: string, subsource: string) {
  return source.length > subsource.length
}
console.info(searchFun('abc', 'a'))