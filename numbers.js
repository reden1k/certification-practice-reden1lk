export function calculateDistance(a, b) {
    if (a < b) {
        return Math.abs(Number(a) - Number(b));
    }
    else {
        return Math.abs(Number(b) - Number(a));
    }
}

export function calculateSegmentProduct(a, b, c) {
    let AC = 0;
    let BC = 0;
    if (a < c) {
        AC = c - a;
    }
    if (a > c) {
        AC = a - c;
    }
    if (b > c) {
        BC = b - c;
    }
    if (b < c) {
        BC = c - b;
    }
    return Number(AC) * Number(BC);
}

export function calculateKilobytes(fileSizeInBytes) {
    if (fileSizeInBytes % 1024 === 0) {
        return fileSizeInBytes / 1024;
    }
    return Math.floor(fileSizeInBytes / 1024);
}
console.log(calculateKilobytes(5000));

export function calculateSegments(a, b) {
    return Math.floor(a / b);
}

export function calculateDigitSum(value) {
    let sum = 0;
    for (const value1 of String(value)) {
        sum += Number(value1);
    }
    return sum
}

export function swapHundredsAndTens(value) {
    const lastPart = String(value).slice(2, value.length);
    let swapedNum = String(value).slice(0,2).split('').reverse().join('');
    swapedNum = `${swapedNum}${lastPart}`;
    return Number(swapedNum);
}

export function getHundredsDigit(value) {
    if (value > 999) {
        let hundreds = Math.floor(value / 100);
    return hundreds % 10
    }
    return 0;
}

export function getFullHours(seconds) {
    if (seconds % 3600 === 0) {
        return seconds / 3600;
    }
    return Math.floor(seconds / 3600);
}

export function getDayOfWeek(number) {
    const numOfWeek = [0,1,2,3,4,5,6];
    let k = 0;
    for (let i = 0; i < number; i += 1) {
        if (k === numOfWeek.length) {
            k = 0;
        }
        k += 1;
    }
    return numOfWeek[k];
}

export function countSquares(a, b, c) {
    return Math.floor((a * b)/ (c * c));
}