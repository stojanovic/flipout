# flipout
Flip text upside-down

## How Install

`npm install flipout`

or 

`npm i flipout`

## Usage

```
  var flip = require('flipout')

  console.log(flip('The quick brown fox jumps over the lazy dog'))
  // 'ƃop ʎzɐl ǝɥʇ ɹǝʌo sdɯnɾ xoɟ uʍoɹq ʞɔᴉnb ǝɥ⊥'

  console.log(flip('0123456789'))
  // '68ㄥ9ϛㄣƐᄅƖ0'

  console.log(flip('5-3=2'))
  // 'ᄅ=Ɛ-ϛ

  // Accents are not flipped atm
  console.log(flip('¿Qué he hecho yo para merecer esto?'))
  // '¿oʇsǝ ɹǝɔǝɹǝɯ ɐɹɐd oʎ oɥɔǝɥ ǝɥ énb?'
```
