# Harmadik web tanfolyam

## Tematika

1. VS Code fájlkezelés
2. Ismerkedés a JSON-nel
3. Célkitűzések
   1. Weboldal bemutatás
   2. Disclaimer
4. [Last.fm](https://www.last.fm/api/show/artist.getSimilar) regisztráció
5. Alap JS
   1. let, const, műveletek
   2. function
   3. objektumok létrehozása, adattagok elérése
   4. Milyen a JS objektum?
   5. class, constructor
6. Feladatok elvégzése
   1. searchFunction
   2. SiteDrawer
   3. DataHandler
      1. history
      2. localStorage

## Kódrészletek

```JS
searchBar.addEventListener("keydown", event => {
    if (event.key === "Enter")
        searchFunction(searchBar.value);
}

localStorage.setItem(key, JSON.stringify(state));
JSON.parse(localStorage.getItem(key))

history.pushState(state, "", "");
onpopstate = ({ state }) => {
    this.setState(state);
};

await new Promise(resolve => setTimeout(resolve, 50));

for (const song of songs) this.addCard(song);

// prettier-ignore
let errorCardHTML = (
  `<div class="card shadow">
        <h2>${e}.</h2>
    </div>`
);

// prettier-ignore
let songCardHTML = (
  `<div class="card shadow link" onclick="window.open('${url}')">
      <div class="image-container" style="background-image: url('${image}')"></div>
      <div class="description">
        <h2>${title}</h2>
        <h3>by ${artist}</h3>
        <h4>${listeners} listeners</h4>
      </div>
    </div>`
);
```
