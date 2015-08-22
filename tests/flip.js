'use strict'

var test = require('tape')
  , flip = require('../flip')

test('Test text flipping', function(t) {
  t.plan(6)

  t.throws(flip, Error, 'If text is not passed flip returns an error')

  t.equals(flip('The quick brown fox jumps over the lazy dog'), 'ƃop ʎzɐl ǝɥʇ ɹǝʌo sdɯnɾ xoɟ uʍoɹq ʞɔᴉnb ǝɥ⊥', 'Flips simple text')

  t.equals(flip('0123456789'), '68ㄥ9ϛㄣƐᄅƖ0', 'Flips numbers')

  t.equals(flip('.,\'"`<>∴&_?¿!¡[](){}'), '{}()[]!¡?¿‾⅋∵<>,,,,\'˙', 'Flips special characters')

  t.equals(flip('5-3=2'), 'ᄅ=Ɛ-ϛ', 'Flips text with some non-flippable characters')

  t.equals(flip('¿Qué he hecho yo para merecer esto?'), '¿oʇsǝ ɹǝɔǝɹǝɯ ɐɹɐd oʎ oɥɔǝɥ ǝɥ énb?', 'Flips combined text with accent')
})
