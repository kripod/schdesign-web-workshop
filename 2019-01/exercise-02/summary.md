# Második webtanfolyam

- [Disclaimer](#disclaimer)
  - [Akkor mi a cél?](#akkor-mi-a-c%C3%A9l)
  - [Erre minek kell három alkalom?](#erre-minek-kell-h%C3%A1rom-alkalom)
- [Az alkalom tematikája](#az-alkalom-tematik%C3%A1ja)
  - [Az alapoktól a flex-ig](#az-alapokt%C3%B3l-a-flex-ig)
  - [Izgalmasabb részletek](#izgalmasabb-r%C3%A9szletek)
  - [A flexen túl](#a-flexen-t%C3%BAl)
- [Hogyan tovább?](#hogyan-tov%C3%A1bb)
  - [Házifeladat](#h%C3%A1zifeladat)
  - [Merülj el egy témában](#mer%C3%BClj-el-egy-t%C3%A9m%C3%A1ban)
  - [Izgalmas játékok](#izgalmas-j%C3%A1t%C3%A9kok)
  - [Gyere el a következő alkalomra](#gyere-el-a-k%C3%B6vetkez%C5%91-alkalomra)

## Disclaimer

Két óra alatt nem lehet megtanulni se designolni, se ügyesen CSS-ezni. Ez itt nem is cél.
A CSS kifejezetten egy olyan része a webfejlesztésnek, amit nagyrészt Google keresések végtelen halmazával jellemezhetünk a legjobban.

### Akkor mi a cél?

Úgy lehet valamit megtanulni, ha foglalkozunk vele. Ahhoz, hogy időt szánjunk rá, motivációra van szükségünk. Itt ezt szeretném felkelteni bennetek.

### Erre minek kell három alkalom?

A motiváció mellett pár alapismeretet is szeretnénk átadni, amivel már önállóan is képesek lesztek fejlődni.
Rossz érzés, amikor egy új dologba kezdünk és minden ijesztő, bonyolult, távoli. Én ezt az érzést szeretném csökkenteni. Meg persze pár gyakorlati tippet is adni.

> **TL;DR**: Ha idáig eljutottál, ajánlom a [Hogyan tovább?](#hogyan-tov%C3%A1bb) rész átnézését, hátha lesz benne valami, ami érdekel.

## Az alkalom tematikája

> Ha más forrásból is meg szeretnéd ismerni az első lépéseket, akkor ajánlom [ezt az oldalt](https://www.w3schools.com/).
> A kezdetekben nagyon jó lesz, az advanced témák kapcsán kicsit hiányos.

### Az alapoktól a flex-ig

Kétféle nyelvet használtunk, a **HTML**-t és a **CSS**-t.

#### HTML

Fő részei:

- **\<html>**
  _Ilyet VS Codeban a `html:5` rövídítés beírásával, majd az `enter` lenyomásával készíthetünk (feltéve, hogy a fájl kiterjesztése .html)._
  - **\<head>**
    _Ide sok mindent írhatunk, egyelőre arra használtuk, hogy a css fájlainkat linkeljük a dokumentumunkhoz. Ezt VS Codeban a `link:css` rövidítés majd `enter` lenyomásával tehetjük meg. A keletkezett elem mezőit értelemszerűen töltsük ki._
  - **\</head>**
  - **\<body>**
    _Ide tudjuk írni magát a dokumentumunkat, a következőkben felsorolok pár elemet, amit használtunk._
    - **\<main>** _Akár további elemeket is írhatunk ide._ **\</main>**
    - **\<section>** _Akár további elemeket is írhatunk ide._ **\</section>**
    - **\<div>** _Akár további elemeket is írhatunk ide._ **\</div>**
    - **\<p>** _Ide (nagyjából) csak szöveget írhatunk, más elemet nem ágyazhatunk be._ **\</p>**
    - **\<h1>** _Ide (nagyjából) csak szöveget írhatunk, más elemet nem ágyazhatunk be._ **\</h1>**
  - **\</body>**
- **\</html>**

> [Ezekről részletesebben itt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
>   _Egyszer ezt érdemes átpörgetni._

> [Ha úgy érzed el vagy veszve a VS Codeben.](https://code.visualstudio.com/docs/getstarted/userinterface)
> Illetve [rövid leírás](https://docs.emmet.io/cheat-sheet/) a VS Codeos shortcutokhoz.

#### CSS

Mi a `.css` fájlokat egy `css` mappába helyeztük, ami a későbbiekben egy jó szokáshoz fog vezetni.

Ez a nyelv a következőkből áll:

- **selector**: Ezzel kijelölhetünk bizonyos elemeket (van, hogy egyet, van hogy az összeset).
- **property**: Kiválaszthatunk vele bizonyos tulajdonságo(ka)t.
- **érték**: A property-knek értéket adhatunk.

_Ez mit is jelent?_

### Izgalmasabb részletek

#### Az oldalunk bodyja

```HTML
<body>
    <main id="ez-egy-id">
        <section class="card">
            <p> Ez az én szövegem. </p>
        </section>
    </main>
</body
```
> Természetesen a **\<head>**-ben linkeltük az alábbi `CSS` fájlt.
#### Az ehhez tartozó CSS

```CSS

html {
  /*
  Színátmenetet állítunk be háttérként.
  További infók: https://www.w3schools.com/css/css3_gradients.asp
  */
  background: linear-gradient(90deg, #fff9e0 0, #ffd6d6 100%);
}

/*
A classok neve elé pontot írunk a kijelölésükhöz.
Az id-k neve elé pedig #-et, tehát például #ez-egy-id.
Az id selector erősebb, mint a class selector, az pedig
erősebb a sima tag-es kijelölésnél. 
*/
.card {
  background: white;

  /*
  A chrome F12-es módjában tudjuk finomhangolni. 
  Amúgy általában két árnyék szokott lenni, 
  egy a direkt fénynek egy pedig az indirektnek.
  */
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);

  /* Ekvivalens ezzel: padding: 10px 20px 10px 20px; */
  padding: 10px 20px;

  /* Ekvivalens ezzel: margin: 30px 30px 30px 30px; */
  margin: 30px;

  /* 
  Mennyire legyen lekerekített? 
  Ha nagy számot adunk, akkor kör alakú lesz.
  */
  border-radius: 15px;

  /* Pont, mint MS Wordben. Lehetne még: left, right és justify.*/
  text-align: center;

  /* Ha az első betűtípust nem találja, akkor a következővel próbálkozik. */
  font-family: "Open Sans", Arial, sans-serif;
}

```

Ennek kapcsán hasznos lehet a **box model**:
![box-model](https://www.w3.org/TR/CSS2/images/boxdim.png)

> [Ugyanez kifejtve részletesebben](https://medium.com/launch-school/https-medium-com-dembasiby-understanding-the-css-box-model-b005a82593a6).

#### Még miről volt szó?

```CSS
/* 
Hogyan csináljunk insetes képet. 
Erről a következő alkalmon kicsit részletesebben.
*/
.image-container {

  /* Érdeklődőknek: https://css-tricks.com/box-sizing/ */
  width: 100px;
  height: 100px;

  border-radius: 1000px;

  /* 
  Nem maga mögé, hanem saját magába veti az árnyékát
  az inset hatásásra.
  */
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.33);


  /* Itt az adott css fájltól relatíven adjuk meg a kép forrását. */
  background-image: url('../media/picture.jpg');
  background-position: center;
  background-size: cover;
}

/* Végül a lényeg. */
.flexible {
    display: flex;

    /* Alapértelmezetten row, ezen kívül, ami még érdekes az a column. */
    flex-direction: row;

    /* Törjön-e új sorba? Igen. */
    flex-wrap: wrap;

    /*
    flex-direction: row-nál az x-irányú elhelyezést írja le.
    flex-direction: column-nál az y-irányú elhelyezést írja le.
    */
    justify-content: space-evenly;

    /*
    Pont fordítva, mint az előbb:
    flex-direction: row-nál az y-irányú elhelyezést írja le.
    flex-direction: column-nál az x-irányú elhelyezést írja le.
    */
    align-items: center;
}
```

[A flex-ről kicsit részletesebben](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### A flexen túl

Ezen kívül természetesen egy csomó lehetőség van még a CSS-ben. Ezeket nem gond, ha nem tudjátok mind elsőre. Ha foglalkoztok vele, szép lassan a nagy részét meg fogjátok ismerni.

Ha elakadtok:

- [CSS referencia](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Google](http://google.com)
- Bátran keressetek engem is, szívesen segítek:
    - [Facebook](https://www.facebook.com/andras.schmelczer)
    - [email](mailto:andras.schmelzer@schdesign.hu) 

## Hogyan tovább?

### Házifeladat

**Csináljatok valamit CSS-sel.**
Bármit, ami érdekel, amit szépnek tartotok, vagy ami lehetőséget biztosít a gyakorlásra.

> Ha nincs más ötletetek, ajánlom ennek a képnek (vagy csak egy részének) a HTML + CSS-ben való megvalósítását. ![szép kártyák](http://schmelczer.hu/static/hf.png)

### Merülj el egy témában

Ezt úgy teheted meg, hogy a dokumentum bármelyik linkjére klikkelve kicsit utánaolvasol egy-két témának *(és természetesen utána ezt ki is próbálod a gyakorlatban)*.

### Izgalmas játékok


- [Hogyan működnek a CSS selectorok játék](http://flukeout.github.io/)
  > Ez egész jó.
- [Hogy működik a flexbox játék](http://flexboxfroggy.com/#hu)
  > Ez is tetszett.
- [Bátraknak ízelítő a CSS 3D transzformációkba](https://rupl.github.io/unfold/)

### Gyere el a következő alkalomra

Ott a webfejlesztés egy másik oldalába fogunk belenézni a `JavaScripten` keresztül.

|           Időpont            |         Hely         |
| :--------------------------: | :------------------: |
| **2019.02.21.  17:00-19:00** | _E-mailben küldjük._ |
