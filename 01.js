function palindrome(kata) {

    var r = kata
        .replace(/[^A-Z0-9!@#$%^&*()_+<>,.?/:;"' ]/ig, "")
        .toLowerCase();
    var cekPalindrome = r
        .split('')
        .reverse()
        .join('');

    if (r === cekPalindrome) {
        console.log('true');
    } else {
        console.log('false');
    }
}


palindrome('ibu ratna antar ubi');
palindrome('kasur ini rusak');
palindrome('A nut for a jar of tuna.');
palindrome('Borrow or rob?');
palindrome('Was it a car or a cat I saw?');
palindrome('Yo, banana boy!');
palindrome('UFO tofu?');