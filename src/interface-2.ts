interface SqureConfig {
  color?: string;
  width?: number;
  [propsName: string]: any;
}

interface AreaResult {
  color?: string;
  area: number;
}

const defaultConfig = {
  color: 'red',
  width: 40
}

function createSqureNew(config: SqureConfig): AreaResult {
  // let newConfig = Object.assign(defaultConfig, config)

  return {
    color: config.color,
    area: config.width * config.width
  }
}
let res = createSqureNew({color: 'green', width: 60, height: 60})
console.info('createSqure', res)

interface MyApi {
  age: number;
  name: string;
}
let myApi2: MyApi = {age: 10, name: 'cat'}
let myArr: ReadonlyArray<number> = [1, 2, 3]
let myArr2: Array<number> = [4, 5, 6, 7]
let myArr3: Array<any> = [8, 'string', {a:1, b:2}]
let myArr4 = myArr as Array<any>
myArr4[3] = 9
console.info('myArr4,', myArr4)