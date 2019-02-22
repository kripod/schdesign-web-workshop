# Harmadik webtanfolyam

- [A tanfolyamról röviden](#a-tanfolyamr%C3%B3l-r%C3%B6viden)
  - [Tematika](#tematika)
  - [JS-ről röviden](#js-r%C5%91l-r%C3%B6viden)
  - [Bevezető mintakód](#bevezet%C5%91-mintak%C3%B3d)
  - [Végeredmény](#v%C3%A9geredm%C3%A9ny)
- [Hogyan tovább?](#hogyan-tov%C3%A1bb)
  - [Pár jó kiindulási pont](#p%C3%A1r-j%C3%B3-kiindul%C3%A1si-pont)
  - [Házi feladat (opcionális)](#h%C3%A1zi-feladat-opcion%C3%A1lis)

> **TL;DR**: [MDN tutorial](https://developer.mozilla.org/hu/docs/Web/JavaScript) + [házi](#h%C3%A1zi-feladat-opcion%C3%A1lis) és menni fog.

## A tanfolyamról röviden

### Tematika

Megismerkedtünk a:

- [JSON](https://www.json.org/)-nel,
- a JS alapjaival:
  - let, const
  - function, class
- a webfejlesztéssel lényeges elemeivel.

### JS-ről röviden

- Egy magasszintű, gyengén típusos, értelmezett nyelv.
- A "böngészőben fut".
- Van garbage collector.
- Változatos módon tudja befolyásolni az oldal állapotát.
- A háttérben aszinkron módon képes szerverekkel kommunikálni ([AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX))
- A weboldal elemeit módosítani ([DOM manipulation](https://developer.mozilla.org/en-US/docs/Glossary/DOM))
- Egy csomó HTML5-ös API-val kommunikálni:
  - [File](https://developer.mozilla.org/hu/docs/Web/API/File)
  - [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
  - [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
  - [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
  - etc.
- És természetesen minden olyan dologra képes, ami egy magasszintű nyelvtől elvárható.

> Kristóf JavaScript összefoglalója: [link.](https://github.com/kripod/schdesign-web-workshop/blob/master/notes/js.md)

### Bevezető mintakód

```JS
let radius = 5;
const PI = 3.141592654;

let area = radius ** 2 * PI;  // a ** b = a^b
console.log(area);


function circleArea(r) {
  return r ** 2 * PI;
}

console.log(circleArea(radius));


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area());
```

### Végeredmény

A kész oldalt, aminek egy részét implementáltuk, [ezen a linken](https://github.com/schmelczerandras/schdesign-web-workshop/tree/master/2019-01/exercise-03/songs) találjátok. Kipróbálni pedig a [schmelczer.hu/songs](http://schmelczer.hu/songs) oldalon tudjátok.

## Hogyan tovább?

A tanfolyamon megismerkedtünk az alapokkal és a nyelv által nyújtott lehetőségekkel. Ha ehhez még hozzáveszed a meglévő programozói tudásodat, egy jó forrással relatíve könnyen fog menni a JS megtanulása. Lehet, hogy eleinte nem fog könnyen menni. Viszont egyre jobb leszel.

Tanuláshoz az alábbi forrásokat ajánlom. Természetesen ez nem egy kimerítő lista, most ezek jutottak eszembe.

### Pár jó kiindulási pont

- [MDN tutorial](https://developer.mozilla.org/hu/docs/Web/JavaScript).
  > Nem elég, hogy nagyon jó, még magyarul is van. Természetesen van angol verzió is.
- [Egy ígéretes weboldal](https://javascript.info/).
  > Részletesebben nem néztem bele, viszont nagyon jónak látszik.
- [Egy kicsit elavult tutorial](https://www.w3schools.com/js/).
  > Nem mondom, hogy jó szívvel ajánlom, de azért nem vállalhatatlan.

### Házi feladat (opcionális)

Készítsetek egy bármilyen (nagyon egyszerű) játékot JavaScripttel. Ehhez segítségül javaslom a [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)-t.

Aki egy kis jutalmat szeretne kapni ezért, az küldje el a [hazi@schdesign.hu](mailto:hazi@schdesign.hu) -ra.
