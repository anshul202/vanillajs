let expressionstri="";
var ans=0;
let displaystring=()=>{
    screen.textContent=expressionstri;
}
let screen=document.getElementsByClassName("screen")[0].firstElementChild.firstChild;

let addvalue=(str)=>{
    expressionstri.concat(str);
    displaystring();
}
function concat1(number){
    expressionstri=expressionstri.concat(number);
    displaystring();
}
let btnumer=document.querySelectorAll(".btn");
let k=0;

btnumer[0].addEventListener("click",()=>{
    concat1(0);
})
btnumer[1].addEventListener("click",()=>{
    concat1(1);
})
btnumer[2].addEventListener("click",()=>{
    concat1(1);
})
btnumer[3].addEventListener("click",()=>{
    concat1(2);
})
btnumer[4].addEventListener("click",()=>{
    concat1(3);
})
btnumer[5].addEventListener("click",()=>{
    concat1(4);
})
btnumer[6].addEventListener("click",()=>{
    concat1(5);
})
btnumer[7].addEventListener("click",()=>{
    concat1(6);
})
btnumer[8].addEventListener("click",()=>{
    concat1(7);
})
btnumer[9].addEventListener("click",()=>{
    concat1(8);
})
btnumer[10].addEventListener("click",()=>{
    concat1(9);
})
btnumer[11].addEventListener("click",()=>{
    concat1("+");
})
btnumer[12].addEventListener("click",()=>{
    concat1("-");
})
btnumer[13].addEventListener("click",()=>{
    concat1("*");
})
btnumer[14].addEventListener("click",()=>{
    concat1("/");
})
let btndiff=document.querySelectorAll(".btndif");
btndiff[0].addEventListener("click",()=>{
    expressionstri=ans;
    displaystring();
})
btndiff[1].addEventListener("click",()=>{
    ans=eval(expressionstri);
    expressionstri=`${ans}`;
    displaystring();
})
btndiff[2].addEventListener("click",()=>{
    ans=0;
    expressionstri=`${ans}`;
    displaystring();
})
