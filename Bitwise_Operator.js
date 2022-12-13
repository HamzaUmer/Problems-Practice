function getMaxLessThanK(n, k) {
    let max = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let bw = (a & b);

            (bw < k && bw > max) && (max = bw);
        }
    }
 
    return max;
}

const n = 5;
const k =2;
        
console.log(getMaxLessThanK(n, k));
