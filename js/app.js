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
    totalResult.textContent = `= $${sum}/-`;
    console.log(total);
    console.log(sum);
}


/* <div id="container-main">
        <div id="h2">
            <h2>😀AN APP FOR STUPIDS😀</h2>
        </div> 

<div id="inputs">
            <br>
            <div id="member-A">
                <label for="valueA">member A:</label>
                <input type="number" id="valueA">
                <button onclick="pushValueA()" >submit</button>
            </div> <br>
            <div id="member-B">
                <label for="valueB">member B:</label>
                <input type="number" id="valueB">
                <button onclick="pushValueB()" >submit</button>
            </div> <br>
            <div id="member-C">
                <label for="valueC">member C:</label>
                <input type="number" id="valueC">
                <button onclick="pushValueC()" >submit</button>
            </div> <br>
            <div id="member-D">
                <label for="valueD">member D:</label>
                <input type="number" id="valueD">
                <button onclick="pushValueD()" >submit</button>
            </div> <br>
        </div>
        <div id="sum">
            <button onclick="calculateSum()">calculate total</button>
            <label id="total" for="sum"> = $0/-</label>
        </div>        */

/* body {
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: hsl(188, 100%, 69%);
}
#container-main {
    background-color: hsl(156, 100%, 50%);
    border: none;
    border-radius: 10px;
}
#h2 {
    background-color: hsla(156, 100%, 30%, 0.8);
}
#inputs {
    background-color: hsla(180, 100%, 50%, 0.5);
}
input {
    font-size: 0.75em;
    width: 150px;
    height: 25px;
}
button {
    font-size: 0.65em;
    padding: 7.5px;
    background-color: hsla(105, 100%, 50%, 0.928);
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color: black;
}
#sum {
    background-color: hsla(59, 100%, 69%, 0.95);
    padding: 15px;
}
label {
    font-family:'Franklin Gothic Medium';
    font-weight: bold;
}
*/




































