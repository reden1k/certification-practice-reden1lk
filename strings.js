export function countUppercaseLetters(text) {
    return text.length - text.replace(/[A-Z]/g, '').length;  
}

export function combineStrings(n1, n2, s1, s2) {
    return `${s1.slice(0,n1) }${s2.slice(0,n2)}`;
}