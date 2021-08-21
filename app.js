document.querySelector('#btn').addEventListener('click',function(e){
    document.querySelector('.imag').style.display="block";
    document.querySelector('.foot').style.display="none";
     setTimeout(calculate,2000)
   

    e.preventDefault();
})
function calculate(){

    document.querySelector('.foot').style.display="block";
    document.querySelector('.imag').style.display="none";

    
const fetchAmount=document.querySelector(".amount");
const fetchRate=document.querySelector(".interest");
const fetchYears=document.querySelector(".years");

const monthlyPayment=document.querySelector(".monthPay");
const totalInterest=document.querySelector(".totalInt");
const totalPayments=document.querySelector(".totalPay");


const principal=parseFloat(fetchAmount.value);
const calculatedInterest=parseFloat(fetchRate.value)/100/12;
const calculatedPayments=parseFloat(fetchYears.value)*12;


//Formula for Monthly Payements
const x=Math.pow(1+calculatedInterest,calculatedPayments);
const monthly=(principal*x*calculatedInterest)/(x-1);


if(isFinite(monthly)){
monthlyPayment.textContent=monthly.toFixed(2);
totalPayments.textContent=(monthly*calculatedPayments).toFixed(2);
totalInterest.textContent=((monthly*calculatedPayments)-principal).toFixed(2);


}
else{
    
    document.querySelector('.foot').style.display="none";
    document.querySelector('.imag').style.display="none";
    document.querySelector('.error').style.display="block";
    setTimeout(temporary,3000);
   
   
   

  
}









}
function temporary(){
    
    document.querySelector('.error').style.display="none";

}
