interface LabelledValue {
  label: string
}

interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any
}

interface Point {
  readonly x: number,
  readonly y: number
}

function printLabel(labeledObj: LabelledValue) {
  console.info('printLabel:',labeledObj.label)
}

function createSqure(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: "white", area: 100}
  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

let myObj = {size: 10, label: "size 10 object"}
printLabel(myObj)
let obj = createSqure({color: 'red', width: 10})
let aro: ReadonlyArray<object> = [{a:1, b:2}, {c:3, d:4}]
let point: Point = {x: 1, y: 1}
console.info('interface:', obj)
console.info(aro[0])

interface SearchFunc {
  (source: string, subString: string): boolean;
}
let searchFunc: SearchFunc = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1

}
console.info('searchFunc:', searchFunc('12345', '45'))

function voidFn(config: SquareConfig) : void {
  console.info('--------', config)
}
voidFn({})
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let stringArray: ReadonlyStringArray = ['a', 'b']
console.info('=========', stringArray[0], stringArray[1])

