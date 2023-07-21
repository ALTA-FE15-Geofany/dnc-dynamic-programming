interface MemoMap {
  [key: number]: number
}

function fibotopdown(n: number, memo: MemoMap = {}): number {
  if (n in memo) {
    return memo[n]
  }

  if (n <= 1) {
    memo[n] = n
  } else {
    memo[n] = fibotopdown(n - 1, memo) + fibotopdown(n - 2, memo)
  }

  return memo[n]
}

console.log(fibotopdown(0))
console.log(fibotopdown(1))
console.log(fibotopdown(2))
console.log(fibotopdown(3))
console.log(fibotopdown(5))
console.log(fibotopdown(6))
console.log(fibotopdown(7))
console.log(fibotopdown(9))
console.log(fibotopdown(10))
