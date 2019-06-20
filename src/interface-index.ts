interface StringArray {
  [index: number]: string
}
let strArray: StringArray = ['Bob', 'Micke']
let str: string = strArray[0]
console.info('str:', str)