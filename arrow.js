const sum1 = (num1,num2) => num1 + num2;
const value1 = sum1(10,15);
console.log(value1);


const sum2 = (num1,num2,num3) => num1 + num2 + num3;
const value2 = sum2(10,15,20);
console.log(value2);


const sum3 = (num1,num2) => num1 - num2;
const value3 = sum3(10,15);
console.log(value3)


const sum4 = (num1,num2) => num1 * num2;
const value4 = sum4(10,15);
console.log(value4)


const sum5 = (num1,num2) => num1 / num2;
const value5 = sum5(10,9);
console.log(value5)


const doMath = (x,y) => {
    const sum = x + y;
    const num = x - y;
    const result = sum * num ;
    const total = result * 5;
    return total;
}

const total  = doMath(12,20);
console.log(total)