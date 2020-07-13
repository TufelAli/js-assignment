let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}-${dd}-${yyyy}`;
document.write("<br>"+today); 
today = `${mm}/${dd}/${yyyy}`;
document.write("<br>"+today); 
today = `${dd}-${mm}-${yyyy}`;
document.write("<br>"+today); 
today = `${dd}/${mm}/${yyyy}`;
document.write("<br>"+today); 