// type alias(별칭) 만드는 법
let animalVa: string | number | undefined;
// type이 길어지거나 타입을 재사용하고 싶다면 변수처럼 만들어서 사용 가능

// 영어 대문자로 시작하는게 관례, 가독성을 위해 뒤에 Type을 붙여주기도 함
// (주의) type 선언도 변수와 같이 중복 선언 불가
type AnimalType = string | number | undefined;
let animalVar2: AnimalType = 'Dog';

// object 타입을 type alias로 만들어보기
type PersonType = {
  name: string,
  age: number
};
let person4: PersonType = { name: 'Kim', age: 18 };

// 옵셔널 속성
type PersonType2 = {
  name: string,
  age?: number // age 속성은 선택사항
};
let person5: PersonType2 = { name: 'Kim' };

// object의 자료 수정도 막을 수 있음
// 속성에 사용 가능한 readonly 키워드
type Friend = {
  readonly name: string
};
let friend: Friend = {
  name: 'Alice'
}
// friend.name = 'Peter'; // readonly로 읽기 전용 속성임
console.log(friend); // 실제로 JS에서는 값이 바뀌는데 TS에서는 에러를 발생시켜줌
// (타입스크립트 에러는 에디터 & 터미널에서만 발생하고 실제 실행과는 무관함)

// 유니언 자료형을 이용하여
// | 연산자료 두 개의 type alias를 묶기
type Name = string;
type Age = number;
type PersonTypes = Name | Age;

// 인터섹션 자료형을 이용하여 
// & 연산자로 object 타입 결합하기 
type PositionX = { x: number };
type PositionY = { y: number };
type Position2D = PositionX & PositionY; // { x: number, y: number } 

let Position: Position2D = { x: 10, y: 20 };
console.log(Position);


// Quiz
// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 한번 테스트 해보기
type TypeA = { x: number, y: string };
// type TypeB = { y: string };
type TypeB = { y: number };
type TypeAB = TypeA & TypeB;

// let ab: TypeAB = { x: 1, y: '2'}; // { x: number, y: number } 
let ab: TypeAB = { x: 1, y: '2' as never }; // never 타입은 절대 발생하지 않는 값을 의미


// Q2. 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야 합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야 합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야 합니다.
// 4. 이 타입은 position 이라는 변경 불가능한 속성이 있어야 하며 항상 숫자가 담긴 array 자료가 들어와야 합니다.
// type alias로 만들어보세요.
type ShapeType = {
  color?: string,
  size: number,
  readonly position: number[]
};

// Q3. 다음을 만족하는 type alias를 만들어보세요.
// 1. 아래처럼 생긴 object 자료를 다룰 일이 많습니다.
// { name: 'Kim', phone: 821012345678, email: 'geoblo@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
type UserInfoType = {
  name: string,
  phone: number,
  email: string,
}

let myInfo: UserInfoType = { 
  name: 'Kim', 
  phone: 821012345678, 
  email: 'geoblo@naver.com' 
};


// Q4. 다음을 만족하는 type alias를 만들어보세요.
// 1. Q3와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자 여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. Q3에서 만들어둔 type alias를 재활용해봅시다.
type TeenUserInfoType = UserInfoType & { 
  isTeen: boolean 
};
let userInfo3: TeenUserInfoType = { 
  name: 'Kim', 
  phone: 821012345678, 
  email: 'geoblo@naver.com', 
  isTeen: true 
};


// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능
// 자동 완성 기능이 동작함

// 특정 문자만 들어올 수 있도록 지정
let hisName: 'Kim' | 'suzzi'; 
hisName = 'suzzi'; // 자동 완성 기능 동작
// hisName = 'haha'; // 에러 발생

// 함수에서 Literal Type 사용하기
function testFunc(params: 'hello'): 1 | 0 {
  return 1;
};
testFunc("hello");

// Quiz
// Q5.
// 1. 가위/바위/보 중 1개를 입력할 수 있고 (예: func('가위');)
// 2. 가위/바위/보 만 담을수 있는 배열을 리턴하는 함수 (return ['가위', '보'];)
function game(params: '가위' | '바위' | '보'): ( '가위' | '바위' | '보' )[]  {
  return [ '가위', '바위', '보', '바위', '보' ];
}
game('가위');

// 함수/메소드에 Type Alias를 지정하는 법
type FuncType = (a: string) => number; // 함수 타입은 화살표 함수 모양으로 선언 가능

// 함수표현식에만 Type Alias 사용 가능
const myFunc4: FuncType = (params) => {
  return 0;
};

// 객체 안의 함수(메소드) 타입 지정은 어떻게?
type MemberType = {
  name: string,
  age: number,
  plusOne: (x: number) => number,
  changeName: () => void 
};

const memberInfo: MemberType = {
  name: 'suzzi',
  age: 28,
  plusOne(a) { // 메소드 선언
    return a + 1;
  },
  changeName: () => {}
}
memberInfo.plusOne(1);
memberInfo.changeName