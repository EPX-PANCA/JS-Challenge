const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
class Str {
    lower(low) { //1
        console.log(low.toLowerCase());
    }

    upper(up) { //2
        console.log(up.toUpperCase());
    }

    capitalize(capi) { //3
        let kata = capi.split(' ');
        let Capitalize = [];
        kata.forEach(element => {
            Capitalize.push(element[0].toUpperCase() + element.slice(1, element.length));
        });
        console.log(Capitalize.join(' '));
    }

    reverse(rev) { //4
        console.log(rev.split("").reverse().join(""));
    }

    contains(kata, con) { //5
        console.log(kata, kata.includes(con));

    }

    random(ran = 16) { //6
        const alfa = "abcdefghijklmnopqrstuvwxyz";
        const num = "1234567890";
        const char = alfa + alfa.toUpperCase + num;
        const arr = [];

        for (let i = 0; i < ran; i++) {
            arr.push(char.charAt(Math.floor(Math.random() * char.length)));
        }
        console.log(arr.join(""));
    }

    slug(str, slug = "-") { //7
        str = str
            .toLowerCase()
            .replace(/[^a-z0-9 ]/g, '')
            .replace(/\s+/g, slug)
            .replace(/-+/g, slug);

        console.log(str);
    }

    count(count) { //8
        console.log(count.length);
    }

    countWords(cw) { //9
        console.log(cw.split(" ").length);
    }

   trimWords(text, num = 100, t = "...") { //10
    text = text.split(" ");
    if (text.length > num) 
        text = text
            .slice(0, -text.length + num)
            .join(" ") + t;
    
    console.log(text);
}

}
Str = new Str;

Str.lower('MAKAN'); //1
Str.upper('malam'); //2
Str.capitalize('saya ingin makan'); //3
Str.reverse('kasur'); //4
Str.contains('Saya ingin makan sate', ['rujak']); //5
Str.random(8); //6
Str.slug(title, "_"); //7
Str.count('lorem ipsum'); //8
Str.countWords('lorem ipsum') //9
Str.trimWords(text, 20 , '......');