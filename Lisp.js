const log = console.log;
      
// 특정한 값으로 축약을 해감.
function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

const go = (a, ...fs) => reduce((a, f) => f(a), a, fs);

// Lisp. list processing.
// 함수 자체도 숫자가 들어있는 리스트처럼 사고하고 바라봄.

go(10, a => a + 1, a => a * 10, log);

// 함수형 언어 first class function
// 원하는 시점, 원하는 로직에 적절한 시점에 함수를 평가하는 식으로
// 로직들을 계속 추상화 하고 만들어감
// 코드를 값으로 다루는 메타 프로그래밍의 성질을 다룸. 코드 자체도 숫자, 리스트처럼 값.
// 함수도 값이기때문에 함수도 축약가능