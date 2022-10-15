function romanToInt(s: string): number {
    const map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if ((map.get(s[i]) || 0) < (map.get(s[i+1]) || 0)) {
            sum -= map.get(s[i]) || 0;
        } else {
            sum += map.get(s[i]) || 0;
        }
    }

    return sum;
};


console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994