# JavaScript

A JavaScript (JS) programozási nyelv nagy szerepet játszik a weboldalak interaktívvá tételében. Jelen dokumentum az ECMAScript 2015-öt, illetve a nyelv újabb változatait mutatja be.

## Változók

### `const`, `let`

Új változó deklarálásához a `const`, illetve a `let` kulcsszó használatos. Mindkét kulcsszó blokk hatáskörű.

- A `const` kulcsszóval deklarált változók konstansok, azaz nem módosíthatóak
- Csak különösen indokolt esetben szokás a változók módosítását lehetővé tévő `let` kulcsszót használni

Minden változó referenciaként kezelendő. A változók által referált nem primitív típusú értékek (pl. `Object`, `Array`) `const` használata esetén is megváltoztathatók.

### Típusosság

A JS egy lazán típusos nyelv, ennek következtében bármely változó tetszőleges típusú értéket vehet fel.

```js
let something = 'Hello, World!';
console.log(something); // Hello, World!

// Egy változó bármilyen típusú értéket felvehet
something = 123;
console.log(something); // 123
```

_Ez elsőre szokatlan lehet, azonban így akár az [OOP][]-ben megszokott öröklés használata nélkül is kezelhetünk azonos tulajdonságokkal rendelkező, különböző típusú objektumokat._

[OOP]: https://en.wikipedia.org/wiki/Object-oriented_programming

### Adattípusok

#### Primitív típusok

- `Undefined`, `Null`
  - Az `undefined` érték egy változó definiálatlanságát, a `null` pedig egy érték szándékos hiányát jelképezi
- `Boolean`
- `Number`
- `String`
- `Symbol` _(újdonság az ECMAScript 2015-ben)_

A primitív típusú értékek nem változtathatók.

##### `String`

Egy karakterláncot az alábbi módokon lehet leírni:

- `'hello'`, `"world"`
- ``A mai csúcshőmérséklet ${maxDegree}°C körül várható`` _(template literal, újdonság az ECMAScript 2015-ben)_

#### Object

Például:

- `Array`
- `Set`
- `Map`

Az `Object` típusú értékek megváltoztathatóak.

```js
// Nem konstans változóhoz bármilyen értéket rendelhetünk
let fruits = ['apple', 'banana'];
fruits = ['watermelon'];

// Konstans változóhoz nem lehet új értéket rendelni
// Azonban a változó értéke módosítható, mivel Object típusú
const fibonacciSequence = [1, 1, 2, 3, 5, 8];
fibonacciSequence.push(13);
console.log(fibonacciSequence); // [1, 1, 2, 3, 5, 8, 13]
```

A valós vagy képzeletbeli világ objektumait könnyedén modellezhetjük, gördülékenyen vehetünk fel új attribútumokat az egyes objektumainkhoz.

```js
const person = {
  name: 'Kristóf Poduszló',
  birthDate: Date.parse('1997-11-21'),
  studies: [
    { institution: 'Áldás Utcai Általános Iskola' },
    { institution: 'Móricz Zsigmond Gimnázium' },
    { institution: 'Budapesti Műszaki és Gazdaságtudományi Egyetem' },
  ],
};
```

## Függvények

JS-ben két fő függvénytípus létezik:

- Function
  - Minden függvény saját `this` értékkel rendelkezik
  - Manapság csak különösen indokolt esetben használatos
  - Példa:
    ```js
      function square(number) {
        return number * number;
      }
    ```
- Arrow function _(újdonság az ECMAScript 2015-ben)_
  - Rövidebb szintaxis
  - Nem különbözik a `this` függvénytörzsbeli értéke a függvényt tartalmazó blokk `this` változójának értékétől
  - Példák:
    ```js
      const add = (a, b) => a + b;

      const fibonacci = (n) => {
        if (n <= 1) return 1;

        return fibonacci(n - 1) + fibonacci(n - 2);
      }
    ```

Ezen függvénytípusoknak léteznek [aszinkron (`async`) változatai][async function] is, azonban jelen segédlet keretein belül ezeket nem tárgyaljuk.

_Érdeklődők számára a `this` kulcsszó használata megismerhető [ezen cikk][this in javascript] elolvasásával._

[async function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
[this in javascript]: https://zellwk.com/blog/this/

## Funkcionális JavaScript

Manapság egyre népszerűbbek a funkcionális programozásban alkalmazott technikák, főképp az egyszerűségük miatt.

### Pure function

Pure functionnek nevezünk minden olyan függvényt, amely:

1. Egy adott bemenetre mindig ugyanazt adja eredményül. Az eredmény értéke nem függhet külső állapottól, illetve külső forrásból (pl. hálózat) érkezett értéktől.
2. Mellékhatás-mentes, azaz nem módosítja a program belső állapotát, illetve nem módosít külső forrásbeli értékeket.

### `filter`, `map`, `reduce`

> **Feladat:** Adjuk meg egy tetszőleges egész számokból álló tömb páros elemeinek négyzetösszegét!

Imperatív programozási ismereteinkre alapozva a megoldás kézenfekvő:

```js
const sumOfSquaresOfEven = (numbers) => {
  // Szűrjük ki a nem páros számokat
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    } else {
      i += 1;
    }
  }

  // Számítsuk ki a megmaradt számok négyzetét
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 2;
  }

  // Összegezzük az eredményt
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

const example = [1, 1, 2, 3, 5, 8];
console.log(sumOfSquaresOfEven(example)); // 68
```

A feladatot sikerrel megoldottuk, azonban több problémával is szembeütköztünk:

- A megoldási függvény nagyon hosszú, nincs részekre bontva
- A bemenet értékei módosulhatnak
- Nehezen olvasható a kód, mivel nem azt írjuk le, hogy mit csináljon a függvény, hanem azt, hogy hogyan
  - A jó kommentek a "miért?", illetve "mit?" kérdésekre válaszolnak, nem pedig a "hogyan?"-ra

Az első és a második problémát könnyedén orvosolhatjuk:

```js
const isEven = (number) => number % 2 === 0;

const filterEven = (numbers) => {
  const copyOfNumbers = [...numbers];

  let i = 0;
  while (i < copyOfNumbers.length) {
    if (!(isEven(copyOfNumbers[i]))) {
      copyOfNumbers.splice(i, 1);
    } else {
      i += 1;
    }
  }

  return copyOfNumbers;
}

const mapSquare = (numbers) => {
  const copyOfNumbers = [...numbers];

  for (let i = 0; i < copyOfNumbers.length; i += 1) {
    copyOfNumbers[i] = copyOfNumbers[i] ** 2;
  }

  return copyOfNumbers;
}

const sum = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

const sumOfSquaresOfEven = (numbers) => sum(mapSquare(filterEven(numbers)));

const example = [1, 1, 2, 3, 5, 8];
console.log(sumOfSquaresOfEven(example)); // 68
```

Azonban kódunk mérete ezzel csak nőtt. A fent látható 3 részprobléma megoldására a következő `Array.prototype`-beli függvények állnak rendelkezésünkre:

- `filter` _(`n elem` => `<= n elem`)_: Egy új tömböt ad vissza, amely csak a paraméterként megadott predikátumnak eleget tevő elemeket tartalmazza.
- `map` _(`n elem` => `n elem`)_: Leképezi egy tömb elemeit egy új tömbbé a paraméterként megadott szabály szerint.
- `reduce` _(`n elem` => `1 elem`)_: Egy értékre redukálja a tömb elemeit balról jobbra haladva, a paraméterként megadott összegző függvény segítségével.

Előző megoldásunkat ezen függvények használatával jóval átláthatóbbá alakíthatjuk át.

```js
const isEven = (number) => number % 2 === 0;

const sum = (numbers) =>
  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const sumOfSquaresOfEven = (numbers) =>
  sum(
    numbers
      .filter(isEven)
      .map(number => number ** 2),
  );

const example = [1, 1, 2, 3, 5, 8];
console.log(sumOfSquaresOfEven(example)); // 68
```
