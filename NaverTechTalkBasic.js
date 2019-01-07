const log = console.log;

//리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기
// function f(list, length) {
//   let i = 0;
//   let acc = 0;                 ->reduce
//   for (const a of list) {
//     if (a % 2) {               ->filter
//       acc = acc + a * a;       ->map
//       if (++i == length) break;->명령형을 선언형으로. take
//     }
//   }
//   log(acc);                    ->외부세상에 영향 X. 
// }

const add = (a, b) => a + b;

const f = (list, length) =>
  reduce(add, 0,
      take(length, 
        map(a => a * a, 
          filter(a => a % 2, list))));

const go = (a, ...fs) => reduce((a, f) => f(a), a, fs);

// Lisp. list processing.
// 함수 자체도 숫자가 들어있는 리스트처럼 사고하고 바라봄.
go(10, a => a + 1, a => a * 10, log);

// 함수형 언어 first class function
// 원하는 시점, 원하는 로직에 적절한 시점에 함수를 평가하는 식으로
// 로직들을 계속 추상화 하고 만들어감
// 코드를 값으로 다루는 메타 프로그래밍의 성질을 다룸. 코드 자체도 숫자, 리스트처럼 값.
// 함수도 값이기때문에 함수도 축약가능
        
// 특정한 값으로 축약을 해감.
function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

// 명령형을 선언형으로 바꿈.
function take(length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == length) return res;
  }
  return res;
}

// 값을 다른값으로 바꿈 map.
function* map(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
}

// if를 한번만 하는것을 filter.
function* filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

function main() {
  log(f([1, 2, 3, 4, 5], 1)); // 외부세상은 외부세상으로 뺌.
  log(f([1, 2, 3, 4, 5], 2));
  log(f([1, 2, 3, 4, 5], 3));
}

main();

// https://www.youtube.com/watch?v=fWRMM6AaMMc&t=907s
