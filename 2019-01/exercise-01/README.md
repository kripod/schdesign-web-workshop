# Web alapok

Modern webfejlesztéshez ajánlott a [Visual Studio Code][] fejlesztőkörnyezet és az ahhoz tartozó [Prettier kód formázó plugin][] használata.

Ezen workshop gyakorlati anyaga az [Inclusive Components blogon található kártya komponens](https://inclusive-components.design/cards/) leírása nyomán lett összeállítva.

[visual studio code]: https://code.visualstudio.com/
[prettier kód formázó plugin]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Projekt előkészítése

1. Készítsünk egy új HTML kiterjesztésű fájlt (`index.html`) VS Code-ban, majd nyissuk meg szerkesztésre!
2. A kódszerkesztőbe írjuk be, hogy `html:5`, majd nyomjunk entert! A parancs kiadásával egy mobilbarát HTML5 sablon kódrészletét illeszthetjük be üres dokumentumunkba.
3. Konfiguráljuk fel a Prettier plugint, hogy fájlok mentésekor automatikusan formázázza a kódunkat:
   - `Ctrl + Shift + P` → Preferences: Open Workspace Settings → Keressünk rá arra, hogy "format" → Editor: Format On Save → ☑
   - Ez csupán a megnyitott projektmappára fogja alkalmazni a beállítást, így minden új projekt esetén érdemes elvégezni

## Oldal vázának kialakítása

A Markdown fájlokról szóló [bevezetőn](../exercise-00) keresztül megismerkedhettünk a strukturáltság fogalmával. Az alábbiak során HTML-ben fogjuk felépíteni az oldal alapvázát:

1. Weblapunk `head` részében metaadatokat tárolunk, melyek a dokumentum egészére vonatkozó információkkal szolgálnak. Módosítsuk a generált `title` tag tartalmát "NyúzoSCH"-ra!
2. Lapunk lényegi tartalmát a `body` tagen belüli elemek hordozzák. Készítsünk benne egy fejlécet: `<h1>NyúzoSCH</h1>`

Érdeklődők számára egy modern HTML dokumentumok felépítéséről szóló leírás elérhető [itt](../../notes/html.md).

### Egy kártya elkészítése

1. Ágyazzunk be a dokumentumba egy kártya komponenst, melyen megjeleníthetjük egy hír kiemelt képét, címét, kivonatát és szerzőjét:

   ```html
   <div class="card">
     <img src="./images/laptops.jpg" alt="" />
     <div class="card-text">
       <h2>
         <a class="title" href="/post-1">Technológiai poszt</a>
       </h2>
       <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quam
         aspernatur quo quod illum deleniti!
       </p>
       <small>Írta: Névte Lenke</small>
     </div>
   </div>
   ```

2. CSS segítségével szabjuk személyre a kártya megjelenését egy `index.css` fájl létrehozásával:

   ```css
   .card {
     background: white; /* Háttér beállítása (akár kép/minta is megadható) */
     border-radius: 0.5rem; /* Sarkok lekerekítése */
   }

   .card > img {
     border-radius: 0.5rem 0.5rem 0 0; /* Csak a felső sarkok lekerekítése */
     height: 12em; /* Magasság korlátozása */
     width: 100%; /* Kényszerítsük a képet a kártya szélességének kitöltésére */
     object-fit: cover; /* Kerüljük el a képarány torzulását megfelelő vágással */
   }

   .card-text {
     padding: 1em;
   }
   ```

   (További stílusok elérhetők a forrásfájlban.)

3. A `link:css` parancs kiadásával illesszünk be HTML dokumentumunkba egy referenciát, mely az előbbi CSS fájlra hivatkozik:

   ```css
   <link rel="stylesheet" href="./index.css" />
   ```

### Több hír megjelenítése

Amennyiben adatstruktúrák (pl. hírek) egy listáját szeretnénk megjeleníteni, használjuk az `ul` (unordered list, rendezetlen lista) taget. Árulkodó jel lehet, ha egymást követik ugyanolyan felépítésű komponensek.

1. A `<div class="card">` kezdetű elemet ágyazzuk be `<ul>` és `</ul>` tagek közé!
2. A kártyát tartalmazó gyökér elemet változtassuk meg `div`-ről `li`-re (list item, listaelem)!
3. Illesszünk be további kártya komponenseket listaelemekként, megváltoztatott adatokkal!

## Kártya linkek felületének kiterjesztése

1. Hozzunk létre egy új [stacking contextet](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) az egyes kártya komponenseinknek:

   ```css
   .card {
     position: relative;
   }
   ```

2. A kártyákhoz tartozó linkek kattintófelületét terjesszük ki a kártya teljes felületére! Ezt egy [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) selector által generált úgynevezett pszeudo-elemmel tehetjük meg. A kártya gyökér elemén belül a linkhez tartozó pszeudo-elem a teljes kártyafelületet töltse ki:

   ```css
   .card .title::after {
     content: ""; /* Új pszeudo-elem létrehozása */
     position: absolute; /* Helye relatív a legközelebbi stacking contexthez */

     /* A legközelebbi stacking context oldalaihoz tapadjon a pszeudo-elem */
     /* Az említett stacking context a kártya gyökéreleme, emiatt */
     /* a pszeudo-elem mindig pontosan a kártya egészét fogja fedni */
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
   }
   ```

## Hasznos eszközök

- [Útmutató a VS Code gyorsbillentyűihez](../../notes/vscode.md)
- [CSS `clip-path` készítő (körbevágott elemekhez)](https://bennettfeely.com/clippy/)
- [Google Fonts](https://fonts.google.com/) → Number of styles: 10+

## Olvasmányok

- [Részletes leírás a Flexbox és Grid layoutokban alkalmazható elemtördelésről](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Árnyékvetés a `box-shadow` tulajdonság segítségével](https://codepen.io/sdthornton/pen/wBZdXq)
