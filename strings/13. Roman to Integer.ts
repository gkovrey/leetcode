function romanToInt(s: string): number {
    const map = new Map();
    if (s.indexOf("CM") != -1) {
        s = s.replace("CM", "")
        map.set(900, 1);
    }

    if (s.indexOf("CD") != -1) {
        s = s.replace("CD", "")
        map.set(400, 1);
    }

    if (s.indexOf("XC") != -1) {
        s = s.replace("XC", "")
        map.set(90, 1);
    }

    if (s.indexOf("XL") != -1) {
        s = s.replace("XL", "")
        map.set(40, 1);
    }

    if (s.indexOf("IX") != -1) {
        s = s.replace("IX", "")
        map.set(9, 1);
    }

    if (s.indexOf("IV") != -1) {
        s = s.replace("IV", "")
        map.set(4, 1);
    }

    while(s.length > 0) {
        if (s.indexOf("M") != -1) {
            s = s.replace("M", "");
            map.set(1000, (map.get(1000) || 0 ) + 1);
        }
        if (s.indexOf("D") != -1) {
            s = s.replace("D", "")
            map.set(500,  (map.get(500) || 0 ) + 1);
        }
        if (s.indexOf("C") != -1) {
            s = s.replace("C", "")
            map.set(100,  (map.get(100) || 0 ) + 1);
        }
        if (s.indexOf("L") != -1) {
            s = s.replace("L", "")
            map.set(50,  (map.get(50) || 0 ) + 1);
        }
        if (s.indexOf("X") != -1) {
            s = s.replace("X", "")
            map.set(10,  (map.get(10) || 0 ) + 1);
        }
        if (s.indexOf("V") != -1) {
            s = s.replace("V", "")
            map.set(5,  (map.get(5) || 0 ) + 1);
        }
        if (s.indexOf("I") != -1) {
            s = s.replace("I", "")
            map.set(1,  (map.get(1) || 0 ) + 1);
        }

    }

    let sum = 0;
    for (let val of map.entries()) {
        sum += val[0] * val[1];
    }
    return sum;
};


console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994