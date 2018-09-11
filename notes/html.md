# HTML

A HTML egy weboldalak készítéséhez kifejlesztett leíró nyelv. Ez a dokumentum nagy mértékben követi az [MDN HTML alapokról szóló leírását][HTML alapok].

[HTML alapok]: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

## Elemek

A HTML elemek a dokumentumok építőelemeiként szolgálnak. Egy HTML elem az alábbi egységekből áll:

```html
<!-- Szöveg középre igazítása CSS osztály segítségével -->
<p class="text-center">Hello, világ!</p>
```

- Nyitó tag _(pl.: `<p>`)_
  - Attribútumok _(pl.: `class="text-center"`)_
- Tartalom _(pl.: `Hello, világ!`)_
- Záró tag _(pl.: `</p>`)_

### Elemek egymásba ágyazása

Bizonyos elemek egymásba ágyazhatók:

```html
<p>Nagyon fontos a szövegnek <strong>ezen része</strong></p>
```

#### Fizikai és logikai állapotok

[Fontos különbséget tenni] a fizikai _(prezentációs, pl.: [`b`][])_, illetve a logikai _(tartalmi, pl.: [`strong`][])_ állapotok közt. A HTML5 megjelenésével rengeteg tartalmi állapotot leíró elem került a nyelvbe.

**Cél:** Megfelelő logikai struktúrák használata minél kevesebb megjelenítési információval.

##### HTML4

```html
<body>
  <div id="header">
    Fejléc
  </div>

  <div>
    <div class="blog-post">
      Blogbejegyzés
    </div>
  </div>

  <div id="header">
    Lábléc
  </div>
</body>
```

##### HTML5

```html
<body>
  <header>
    Fejléc
  </header>

  <main>
    <article>
      Blogbejegyzés
    </article>
  </main>

  <footer>
    Lábléc
  </footer>
</body>
```

[Fontos különbséget tenni]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#Bold_vs._Strong
[`b`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
[`strong`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong

### Üres elemek

Léteznek olyan elemek, amelyeknek nem adható meg belső tartalom. Ezen elemekhez HTML-ben nem tartozik záró tag, azonban lehetséges az XML-hez hasonlóan önzáró tageket használni.

```html
<img src="/assets/logo.svg" alt="Simonyi logó" />
```

### Néhány hasznos elemtípus

- [Címek][]: `h1`, `h2`, `h3`, `h4`, `h5`, `h6` _(heading 1-6)_
- Lista
  - [Rendezetlen][Rendezetlen lista]: `ul` _(unordered list)_
  - [Rendezett][Rendezett lista]: `ol` _(ordered list)_
  - [Listaelem][]: `li` _(list item)_
- [Hivatkozás][]: `a` _(anchor)_

#### Példa különböző elemtípusok együttes használatára

```html
<body>
  <h1>Cím</h1>
  <h2>Alcím</h2>

  <p>Ez egy bekezdés (<a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p">p, avagy paragraph</a>).</p>

  <p>Az alábbiakban egy lista látható:</p>
  <ul>
    <li>Első elem</li>
    <li>Második elem</li>
    <li>Még egy elem</li>
  </ul>
</body>
```

[Címek]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
[Rendezetlen lista]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
[Rendezett lista]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
[Listaelem]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
[Hivatkozás]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

## Dokumentumok felépítése

Egy átlagos HTML5 dokumentum az alábbiakhoz hasonlóan néz ki:

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="utf-8" />
    <title>Tesztoldal címe</title>
  </head>

  <body>
    <p>Hello, világ!</p>
  </body>
</html>
```

- `head`: [Metaadatok][] tárolására használatos (pl.: cím (`title`), leírás, keresőszavak, stílusinformációk).
  - `meta charset`: A dokumentum karakterkészletét jelöli. Érdemes elsőként elhelyezni a fejrészben.
  - `title`: Az oldal címét tartalmazza, amely megjelenik a böngésző lapjának címeként.
- `body`: Az oldal lényegi tartalmának hordozója.

[Metaadatok]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

### Szemantikus weboldal struktúra

Az [MDN weblap strukturálási útmutatója][] alapján minden oldal törzsében (`body`) az alábbiakhoz hasonló felépítést javasolt követni:

```
+---------------------------------+
|              header             |
| +-----------------------------+ |
| |             nav             | |
| +-----------------------------+ |
+---------------------------------+

+---------------------------------+
|               main              |
| +-------------------+ +-------+ |
| | article / section | | aside | |
| +-------------------+ +-------+ |
+---------------------------------+

+---------------------------------+
|              footer             |
+---------------------------------+
```

- `header`: Az oldal fejléce, melyben elhelyezhető pl. egy logó. Tartalma többnyire állandó, aloldal váltáskor nem szokott jelentősen változni.
  - `nav`: Navigációs sáv, amely tartalmazza az oldal menüpontjait (általában linkekként vagy esetleg fülekként).
- `main`: Az aloldalhoz kötődő egyedi tartalom (pl. történet, videó, térkép).
  - `article`/`section`: Az oldal további tartalmától független egység, amely önmagában is értelmezhető (vagy akár megosztható).
  - `aside`: Oldalsáv, melyen a fő tartalomtól függő kontextuális információk jeleníthetők meg. Amennyiben nem kizárólagosan az aloldal tartalmához kötődik, a `main` elemen kívül is elhelyezhető.
- `footer`: Az oldal lábléce. Általában kapcsolati információk találhatók benne, tartalma aloldal váltáskor nem szokott jelentősen változni.

[MDN weblap strukturálási útmutatója]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure
