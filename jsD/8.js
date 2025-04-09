function Obj(x, y, z) {
  var x = x,
    y = y,
    z = z;
  this.toText = function () {
    return (
      (x ? "x=" + x + " " : "") +
      (y ? "y=" + y + " " : "") +
      (z ? "z=" + z + " " : "")
    );
  };
  this.toString = function () {
    return "x=" + x + ", y=" + y + ", z=" + z;
  };
  this.suma = function () {
    return x + y + z;
  };
}

var ob = new Obj(1, 4, 2);
alert(ob.suma());
