class PointNew {
  x: number;
  y: number;
}

interface Point3d extends PointNew {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};