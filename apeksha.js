const budget = document.getElementsByClassName("car")[0];
const budgetbtn=document.getElementsByClassName("calculate")[0];
const sa = document.getElementsByClassName('sa')[0];
const expense = document.getElementsByClassName('date')[0]
const expensebtn=document.getElementsByClassName('calculat')[0];
const s = document.getElementsByClassName('s')[0]
const a=document.getElementsByClassName('a')[0]

budgetbtn.addEventListener("click",function(event){
 event.preventDefault();
 income= parseInt(budget.value)||0
 if(income.value<0){
    alert("plese Enter a valid number")
 }
 sum()
}) 

expensebtn.addEventListener("click",function(event){
    event.preventDefault();
     totalexpense= parseInt(expense.value)||0
 
     if(income.value< totalexpense){
        alert("plese Enter a valid number")
     }
     sum()
     monkey()
})

let income=0;
let totalexpense=0;
let vr=income-totalexpense

function sum(){
sa.textContent=`$ ${income}`;
s.textContent=`$${totalexpense}`
 vr=income-totalexpense
if(vr<=0){
    a.textContent=`$0`
}
a.textContent=`$${vr}`
}

let myLeads=[]
 myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
function monkey() {
   const tittle = document.getElementsByClassName("tittle")[0];
  let Tittle =tittle.value
  let counterbalance =income-totalexpense
   myLeads.push({Tittle, counterbalance,income,totalexpense});
   console.log(myLeads)
   
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
   console.log( localStorage.getItem("myLeads") )
  populateTable()
}
function populateTable() {
   const tableBody = document.getElementsByClassName("kan")[0];
   tableBody.innerHTML = ''; // Clear existing rows

   myLeads.forEach(lead => {
       const row = document.createElement("tr");

       const titleCell = document.createElement("td");
       titleCell.textContent = lead.Tittle;
       row.appendChild(titleCell);

       const counterbalanceCell = document.createElement("td");
       counterbalanceCell.textContent = lead.counterbalance;
       row.appendChild(counterbalanceCell);

       const incomeCell = document.createElement("td");
       incomeCell.textContent = lead.income;
       row.appendChild(incomeCell);

       const totalExpenseCell = document.createElement("td");
       totalExpenseCell.textContent = lead.totalexpense;
       row.appendChild(totalExpenseCell);

       tableBody.appendChild(row);
       showTable()
   });
}
function showTable() {
    const myTable= document.getElementById("myTable")
    myTable.style.display = 'block';
}
  


document.addEventListener("DOMContentLoaded", () => {
    populateTable();
    
});

const exit=document.getElementsByClassName("delete")[0]
exit.addEventListener("click", function() {
    localStorage.clear();
    myLeads = [];
    populateTable();
   ry()
});
function ry(){
    const myTable= document.getElementById("myTable")
    myTable.style.display = 'none';
}