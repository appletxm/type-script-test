interface ISquare {
    kind: 'square'
    size: number
}

interface IReactangle {
    kind: 'rectangle'
    width: number
    height: number
}

interface ICircle {
    kind: 'circle'
    radius: number
}

type ShapeUnio = ISquare | IReactangle | ICircle

function area(s: ShapeUnio): number {
    if (s.kind === 'square') {
        return s.size * s.size
    } else if (s.kind === 'rectangle') {
        return s.width * s.height
    } else if (s.kind === 'circle') {
        return Math.PI * s.radius * s.radius
    }
}

let circle:ShapeUnio = {
    kind: 'circle',
    radius: 30
}
let cArea = area(circle)
console.info(cArea)