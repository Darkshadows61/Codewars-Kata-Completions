function isPalindrome(x) {
    let y = x.toString().split('').reverse().join('');
    parseInt(y);
    if (x < 0) {
        return false;
    } else if (x == y) {
        return true;
    } else {
        return false;
    }
}