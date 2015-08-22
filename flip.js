'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function flip(text) {

  if (!text) throw new Error('Pass some text to flip! (╯°□°)╯︵ ┻━┻');

  var letters = 'A|B|C|E|F|G|H|I|J|L|M|N|P|R|T|U|V|Y|a|b|c|d|e|f|g|h|i|j|k|m|n|p|q|r|t|u|v|w|y|1|2|3|4|5|6|7|8|9|0|.|,|\'|"|`|<|>|∴|&|_|?|¿|!|¡|[|]|(|)|{|}'.split('|');
  var flipped = '∀|𐐒|Ɔ|Ǝ|Ⅎ|פ|H|I|ſ|˥|W|N|Ԁ|ᴚ|⊥|∩|Λ|⅄|ɐ|q|ɔ|p|ǝ|ɟ|ƃ|ɥ|ᴉ|ɾ|ʞ|ɯ|u|d|b|ɹ|ʇ|n|ʌ|ʍ|ʎ|Ɩ|ᄅ|Ɛ|ㄣ|ϛ|9|ㄥ|8|6|0|˙|\'|,|,,|,|>|<|∵|⅋|‾|¿|?|¡|!|]|[|)|(|}|{'.split('|');

  var map = {};

  letters.forEach(function (element, index) {
    return map[element] = flipped[index];
  });

  return text.split('').reverse().map(function (element) {
    return map[element] || map[element.toLowerCase()] || element;
  }).join('');
}

exports['default'] = flip;
module.exports = exports['default'];

