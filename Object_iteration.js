function getCount(objects) {
  return objects.reduce((target, item) => {
    item.x === item.y && (target += 1);

    return target;
  }, 0);
}

    const n = 5;
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
