/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */
/* 
let arr = [1,2,3,4];
function sum(...args){
  console.log(args);
}
 */

// sum(1,2,3,4,)
// rest parameter
const calculateTotal = (...args) => {
  let total = 0;

  args.forEach((item) => {
    total += item;
  });

  // args.reduce((acc,item)=> acc + item )
  // console.log();

  return total;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

//* 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => {
  return a + b + c + d;
};

/* ========================================================================================================== */
//* forEach 문

const calc = (...restArg) => {
  let total = 0;

  restArg.forEach((t, i) => {
    total += t;
    console.log("target : " + t, "index :" + i);
  });
};

console.log(calc(10, 20, 30, 40));

/*  =============================================================================================   */
//* reduce(acc,current,index,arr)

const calcSum = (...restArgument) => {
  return restArgument.reduce((acc, current, index, arr) => {
    console.log(arr);

    return acc + current;
  }, 100);
};

console.log(calcSum(100, 200, 300, 400));

//* 화살표 함수와 this

const user = {
  name: "hyebeen",
  age: "25",
  address: "고양시 덕양구 화정동",
  grades: [80, 90, 100],
  totalGrades: function () {
    let total = 0;
    this.grades.forEach((item) => (total += item));
    return total;
  },
};

console.log(user.totalGrades()); //270

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

//* pow(numeric: number, powerCount: number): number;
function pow(numeric, powerCount) {
  let total = 1;
  for (let i = 0; i < powerCount; i++) {
    total *= numeric;
  }
  return total;
}

// console.log(pow(5, 2));

let powerExpression = (numeric, powerCount) => {
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
};

//------------------------------------------------------------------------------------
//* repeat(text: string, repeatCount: number): string;

let repeat = (text, repeatCount) => {
  let result = "";

  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }

  return result;
};
let word = "   hello😊   ";

// console.log(repeat(word.trim(), 3));

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

// console.log(repeatExpression(word.trim(), 3));
