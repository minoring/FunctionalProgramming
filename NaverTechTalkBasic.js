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
  reduce(
    add,
    0,
    take(length, map(a => a * a, filter(a => a % 2, list))));


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