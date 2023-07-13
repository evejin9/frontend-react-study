// 타입 확정하기 방식(여러가지 존재)
// 언제 타입을 확정해야 할까?

// 예를 들어
// 함수의 파라미터에 union type을 사용하면 엄격한 타입스크립트가 에러를 발생시킬 수 있음
// Q. 숫자 또는 문자를 인자값으로 전달하면 +1 해주는 함수를 만들어보기

function addOne(num: number | string) {
  // return num + 1; // 에러 발생
}
// 그냥 자바스크립트에서는 문자나 숫자 모두 +1이 가능하지만,
// 타입스크립트에서는 변수의 타입이 number | string 과 같은 union type인 경우 
// 아직 이 파라미터의 타입이 확실하지 않기 때문에 자료 조작을 막음

// 다른 예로
// 매개 변수로 전달받은 숫자에 *2 해주는 매개 변수가 옵셔널한 함수
function multifly2(x?: number) {
  // return x * 2; // 에러 발생
}
// x라는 파라미터는 옵션이고, 옵션인 파라미터는 number | undefined 식으로 타입이 정의됨
// 그래서 아직 x라는 파라미터가 뭔지 확실하지 않기 때문에 에러가 발생
// 이럴 때 타입 확정하기를 사용함

// 대표적인 2가지
// 1.Narrowing(타입 좁히기)
function myFunc(x: number | string) {
  // return num + 1; // 에러 발생
  // number | string 이라는 애매한 타입이어서 에러 발생
  // 타입이 아직 하나로 확정되지 않았을 경우 Narrowing 사용
  // 대표적인 Narrowing 방법은 typeof 연산자
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1
  }
}

function myFunc2(x: number | string) {
  let array: number[] = [];
  // array[0] = x; // 에러 발생
  if (typeof x === 'number') {
    array[0] = x;
  }
  console.log(array);
}
myFunc2(1);
myFunc2('a1');

// 2. Assertion(타입 단언) => 변수의 타입을 특정 타입으로 생각하라
// 즉, 타입스크립트가 인식을 할 수 있게 해주는 거지 실제로 바뀌는 것은 아님
function myFunc3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // x의 타입을 number로 인식해라
  console.log(array);
}

// 단점: 위 예제에서 string을 넘겨도 타입 에러가 발생하지 않기 때문에 as 문법을 쓰면 TS 쓰는 이유가 없어짐
myFunc3('a1234');
// 즉, 잘 안 씀. 남이 짠 코드를 수정할 때 / 왜 타입 에러 나는지 모르겠을 때 비상용으로만 사용

// Assertion 문법의 용도
// 1. Union Type을 하나의 타입으로 확정할 때 사용
// (특정 타입을 다른 타입으로 바꿔쓰는 건 안됨!)
// 2. 왜 타입 에러가 나는지 정말 모르겠는 상황에 임시로 에러 해결용으로 사용하거나
// 무슨 타입이 들어올지 정확하게 알고있는데 타입 에러가 나서 코드 실행을 방해할 때 사용