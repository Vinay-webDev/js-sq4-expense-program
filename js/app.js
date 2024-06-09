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
let memberA = [];
let memberB = [];
let memberC = [];
let memberD = [];

function pushValueA() {
    
    let valueA = document.getElementById("valueA").value;
    //typecasting
    total.push(Number(valueA));
    memberA.push(Number(valueA));
    //console.log(memberA);
    //console.log(valueA);
    
}
function pushValueB() {
    
    let valueB = document.getElementById("valueB").value;
    total.push(Number(valueB));
    memberB.push(Number(valueB));
}
function pushValueC() {
    
    let valueC = document.getElementById("valueC").value;
    total.push(Number(valueC));
    memberC.push(Number(valueC));
}
function pushValueD() {
    
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
    totalResult.textContent = `= Rs ${sum}/-`;
    console.log(total);
    console.log(sum);
}
//2.////2.////2.////2.////2.////2.////2./////2./////2.////
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
let rightClick = document.getElementById("right");
rightClick.addEventListener("click", (event) => {
    view1.style.display = "none";
    view2.style.display = "block";
})

let leftClick = document.getElementById("left");
leftClick.addEventListener("click", (event) => {
    view2.style.display = "none";
    view1.style.display = "block";
})
///3///3///3////3////3/////3/////3/////
// individual total or sum;

function sumA() {
    let sumA = 0;
    for (let i = 0; i < memberA.length; i++) {
        sumA += memberA[i];
    }
    let sumAText = document.getElementById("A-total-text");
    sumAText.textContent = `= Rs ${sumA}/-`;
}
function sumB() {
    let sumB = 0;
    for (let i = 0; i < memberB.length; i++ ) {
        sumB += memberB[i];
    }
    let sumBText = document.getElementById("B-total-text");
    sumBText.textContent = `= Rs ${sumB}/-`;
}
function sumC() {
    let sumC = 0;
    for (let i = 0; i < memberC.length; i++) {
        sumC += memberC[i];
    }
    let sumCText = document.getElementById("C-total-text");
    sumCText.textContent = `= Rs ${sumC}/-`;
}
function sumD() {
    let sumD = 0;
    for (let i = 0; i < memberD.length; i++) {
        sumD += memberD[i];
    }
    let sumDText = document.getElementById("D-total-text");
    sumDText.textContent = `= Rs ${sumD}/-`;
}































