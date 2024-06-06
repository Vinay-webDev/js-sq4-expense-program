// expense tracker or calculator 
/* 1. should take infinite inputs for each members 
   2. calculate total sum 
   3. also able to calculate each member's spending
   4. should able to differentiate the highest spender and lowest spender among the members
   5. calculate the equal share
   6. reimburse based on calculations data!!!! */

/* so this is a quite big functionality to apply so what im gonna do is im gonna break this task into small parts or problems then im gonna try to solve full problem ***/

/* ==>> 1. input value is always gonna be string data type so need to convert or typecast it to number before we push to arrays (total, member arrays) */
let total = [];

function pushValueA() {
    let memberA = [];
    let valueA = document.getElementById("valueA").value;
    //typecasting
    total.push(Number(valueA));
    memberA.push(Number(valueA));
    //console.log(memberA);
    //console.log(valueA);
}
function pushValueB() {
    let memberB = [];
    let valueB = document.getElementById("valueB").value;
    total.push(Number(valueB));
    memberB.push(Number(valueB));
}
function pushValueC() {
    let memberC = [];
    let valueC = document.getElementById("valueC").value;
    total.push(Number(valueC));
    memberC.push(Number(valueC));
}
function pushValueD() {
    let memberD = [];
    let valueD = document.getElementById("valueD").value;
    total.push(Number(valueD));
    memberD.push(Number(valueD));
}
function calculateSum() {
    let sum = 0;
    for (let i = 0; i < total.length; i++ ) {
        sum += total[i];
    }
    let totalResult = document.getElementById("total");
    totalResult.textContent = `= ${sum}`;
    console.log(total);
    console.log(sum);
}









