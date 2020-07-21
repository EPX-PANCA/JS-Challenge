const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?';
class Str {
    lower(low) {//1
        console.log(low.toLowerCase());
    }

    upper(up) {//2
        console.log(up.toUpperCase());
    }

    capitalize(capi) {//3
    let kata = capi.split(' ');  
    let Capitalize = [];  
    kata.forEach(element => {  
        Capitalize.push(element[0].toUpperCase() + element.slice(1, element.length));  
    });  
    console.log(Capitalize.join(' '));
    }

    reverse(rev){//4
        console.log(rev.split("").reverse().join(""));
    }

    contains(kata, con){//5
        console.log(kata, kata.includes(con));
        
    }

    random(ran = 16){//6
        const alfa = "abcdefghijklmnopqrstuvwxyz" ;
        const num = "1234567890";
        const char = alfa + alfa.toUpperCase + num;
        const arr = [];

        for (let i = 0; i<ran; i++){
            arr.push(char.charAt(Math.floor(Math.random()*char.length)));
        }
        console.log(arr.join(""));
    }

       
        slug(str, slug="-") {//7
        str = str.toLowerCase().replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, slug)
        .replace(/-+/g, slug);
      
        console.log(str);
      }



}
Str = new Str;

Str.lower('MAKAN');//1
Str.upper('malam');//2
Str.capitalize('saya ingin makan');//3
Str.reverse('kasur');//4
Str.contains('Saya ingin makan sate',['rujak']);//5
Str.random(8);//6
Str.slug(title,"_");//7