'use strict'

function flip(text) {

  if (!text)
    throw('Pass some text to flip! (╯°□°)╯︵ ┻━┻')

  let letters = 'A|B|C|E|F|G|H|I|J|L|M|N|P|R|T|U|V|Y|a|b|c|d|e|f|g|h|i|j|k|m|n|p|q|r|t|u|v|w|y|1|2|3|4|5|6|7|8|9|0|.|,|\'|"|`|<|>|∴|&|_|?|!|[|]|(|)|{|}'.split('|')
  let flipped = '∀|𐐒|Ɔ|Ǝ|Ⅎ|פ|H|I|ſ|˥|W|N|Ԁ|ᴚ|⊥|∩|Λ|⅄|ɐ|q|ɔ|p|ǝ|ɟ|ƃ|ɥ|ᴉ|ɾ|ʞ|ɯ|u|d|b|ɹ|ʇ|n|ʌ|ʍ|ʎ|Ɩ|ᄅ|Ɛ|ㄣ|ϛ|9|ㄥ|8|6|0|˙|\'|,|,,|,|>|<|∵|⅋|‾|¿|¡|]|[|)|(|}|{'.split('|')

  let map = {}

  letters.forEach((element, index) => map[element] = flipped[index])

  return text.split('').reverse().map(element => map[element] || map[element.toLowerCase()] || element).join('')

}

export default flip
