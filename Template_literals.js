function sides(literals, ...expressions) {
    const [a,p] = expressions;
    const value = Math.sqrt((p*p)-16*a);
    
    return [((p-value)/4),((p+value)/4)]
}



let s1 = 10;
let s2 = 14;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);
