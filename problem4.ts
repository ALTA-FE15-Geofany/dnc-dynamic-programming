interface RomanNumerals {
  [key: number]: string
}

function romanNumerals(n: number): string {
  const romanNumerals: RomanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }

  let result = ''
  const keys = Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a)

  for (const key of keys) {
    while (n >= key) {
      result += romanNumerals[key]
      n -= key
    }
  }

  return result
}

console.log(romanNumerals(6))
console.log(romanNumerals(9))
console.log(romanNumerals(23))
console.log(romanNumerals(2021))
console.log(romanNumerals(1646))
