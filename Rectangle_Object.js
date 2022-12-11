function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = (a+b)*2;
    this.area = a*b;
}



  const a = 5;
  const b = 4;

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
