# A JS / Canvas workshop rövid összefoglalója

## Mi az a JavaScript?

- Egy magasszintű, gyengén típusos, értelmezett nyelv.
- A "böngészőben fut".
- Változatos módon tudja befolyásolni az oldal állapotát.
  - A háttérben aszinkron módon képes szerverekkel kommunikálni ([AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX))
  - A weboldal elemeit módosítani ([DOM manipulation](https://developer.mozilla.org/en-US/docs/Glossary/DOM))
  - Egy csomó HTML5-ös API-val kommunikálni:
    - [File](https://developer.mozilla.org/hu/docs/Web/API/File)
    - [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
    - **[Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)**
    - etc.
- És természetesen minden olyan dologra képes, ami egy magasszintű nyelvtől elvárható.

### [Kristóf nagyon jó JavaScript összefoglalója](https://github.com/kripod/schdesign-web-workshop/blob/master/notes/js.md)

### Egy nem annyira jó, viszont annál tömörebb összefoglaló

- A konzolra kiírni (böngészőben **F12**-vel megnyitható) a `console.log("szöveg");` hívással lehet.
- Alapvető szintaxisában olyan, mint a C.
- Leszámítva a típusokat, helyette van `let`, illetve `const`.
  - Előbbi változó deklarálásra jó, utóbbi konstans inicializáláshoz.
  - _Még sok helyen lehet látni a `var` kulcsszót, ezt ne használjuk._
- Vannak `class`-ok.
  > Nincsenek attribútumok, láthatóság.
- Van garbage collector.
- A `this` bonyolult, de majd mindenki ráérez. [Bővebb infó róla](https://zellwk.com/blog/this).
- Ezenfelül google, és előbb-utóbb mindent meg lehet tanulni.

Van egy csomó modern nyelvi elem benne, amikkel jobb és olvashatóbb kódot lehet írni. Ezeket célszerű használni, viszont nem kell egyből az összeset megtanulni. Először írjunk működő kódot, utána lehet refaktorálni, meg fancyzni.

**Ha ennél mélyebben is érdekel, akkor a fenti összefoglalót nézd meg, vagy olvass bele ebbe: [MDN JS](https://developer.mozilla.org/hu/docs/Web/JavaScript).**

## Canvas API

> [Kifejezetten jó dokumentáció](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

### Hogyan lehet használni?

- A HTML bodyjához add hozzá: `<canvas id="myCanvas"></canvas>`
- JS-ben pedig:

```javascript
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
```

- Adjunk meg egy rajzoló színt: `context.fillStyle = "rgba(255, 255, 0, 0.5)";`
- Rajzoljunk egy téglalapot: `context.fillRect(x0, y0, x1, y1);`

**További hasznos és szükséges információk: [MDN Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)**

## Animáció

A következő kódrészletet célszerű alkalmazni.

```javascript
function nextFrame(timestamp) {
  console.log(`Ennyi ideje fut a játék: ${timestamp}`);

  //animáció logikája

  requestAnimationFrame(nextFrame);
}
requestAnimationFrame(nextFrame);
```

> A `` ` `` (backticktől) ne ijedjünk meg, több infó róla: [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

> Természetesen a fenti `function` kulcsszó helyett egy [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)t is használhattunk volna.

## A végére

Ezekről a témákról rengeteg kifejezetten jó forrás található az interneten. A JavaScriptről is írtak már egy pár könyvet. Ha valakit érdekel a téma, akkor minden lehetősége megvan, hogy elmélyedjen benne. Ez a fél oldal talán egy elfogadható kiindulási pontot ad, vagy ha azt nem, legalább egy kis plusz motivációt, hogy még többen ismerkedjenek meg a webnek ezen részével is.
