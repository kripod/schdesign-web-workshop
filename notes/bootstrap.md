# Bootstrap

## Témák, színsémák személyre szabása

https://getbootstrap.com/docs/4.1/getting-started/theming/

- CSS változók használata

## Hozzáférhetőség

https://getbootstrap.com/docs/4.1/getting-started/accessibility/

- `sr-only` CSS osztály használata

## Layout

https://getbootstrap.com/docs/4.1/layout/overview/

- Konténerek
  - Fixed (`container`)
  - Fluid (`container-fluid`)
- Reszponzivitás, mobile-first web design (a legkisebb képernyőmérettől a legnagyobbig)
  - Töréspontok használata (media query-k segítségével)
    - `{breakpoint}` alapértelmezett értékei (a viewport szélességére értendők):
      - Semmi (extra small): <576px
      - `sm` (small): ≥576px
      - `md` (medium): ≥768px
      - `lg` (large): ≥992px
      - `xl` (extra large): ≥1200px

https://getbootstrap.com/docs/4.1/layout/grid/

- Grid system használata
  - Soronként 12 oszlop van
  - `container` > `row` > `col-{breakpoint}-{1-12}`
    - Pl.:
      - `col`: Automatikusan kitölti a rendelkezésre álló helyet _([`flex-grow: 1`][flex-grow] CSS szabály segítségével)_
        - `col-sm`: Az `sm` törésponttól felfelé (adott szélességnél nagyobb viewport esetén) oszlopként viselkedik, egyéb esetben egy önálló sort foglal el
        - `col-md-4`: Az `md` törésponttól felfelé a (12 részre osztott) sorból 4 oszlopot, egyéb esetben pedig egy önálló sort foglal el
        - `col-md-4 col-xl-3`: Az előbbi szabály által definiált viselkedést örökli, valamint az `xl` törésponttól felfelé a sorból 3 oszlopot foglal el
      - `col-{breakpoint}-auto`: A tartalom méretéhez igazítja szélességét, pontosan annyi helyet elfoglalva, amennyire szükség van

[flex-grow]: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow

## Tipográfia

https://getbootstrap.com/docs/4.1/content/typography/

- Reszponzív tipográfia használata

## Képek

https://getbootstrap.com/docs/4.1/content/images/

- Reszponzív kép méretezés az `img-fluid` CSS osztály használatával
- [`border-radius`][border-radius] specifikálása
  - Pl. kör alakú avatarokhoz használható a `rounded-circle` CSS osztály

[border-radius]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius

## Komponensek

https://getbootstrap.com/docs/4.1/components/
