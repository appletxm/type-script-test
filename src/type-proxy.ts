type Proxy<T> = {
  get(): T
  set(value: T): void
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(o: T): Proxify<T> {
  let result2 = {}
  for(let key in o) {
    console.info(key)
    // let proxy = {
    //   get(){
    //     return o[key]
    //   },
    //   set(value: any){
    //     o[key] = value
    //   } 
    // }
    // result2[key] = proxy
    result2[key] = {
      get() {
        return o[key]
      },
      set(value: any){
        o[key] = value
      }
    }
  }

  console.info('result2:', result2)

  return result2
}

let props= {
  a: 1,
  b: 2
}
let proxyProps = proxify(props)

console.info('proxyProps:', proxyProps)
