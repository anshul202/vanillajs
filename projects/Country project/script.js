let main=document.querySelector(".main");
let imgarr=['austria.png',"germany.png","india.avif","netherlands.jpg","pakistan.png","uk.jpg","russia.avif"];

let output=document.getElementById("output");
let btn=document.getElementById("submit");

btn.addEventListener("click",()=>{
    let input=document.getElementById("countryselect");
    let image="";
    let heading=`The capital of ${input.options[input.selectedIndex].textContent} is `;
    switch(input.value){
        case "india":
            heading+="Delhi";
            image="india.avif"
            break;
        case "pakistan":
            heading+="Islamabad";
            image="pakistan.png"
            break;
        case "netherlands":
            heading+="Amsterdam";
            image="netherlands.jpg";
            break;
        case "germany":
            heading+="Berlin";
            image="germany.png";
            break;
        case "austria":
            heading+="Vienna";
            image="austria.png";
            break;
        case "uk":
            heading+="London";
            image="uk.jpg";
            break;
        case "russia":
            heading+="Moscow";
            image="russia.avif";
            break;
        default:
            break;
    }
    output.firstElementChild.textContent=heading;
    output.lastElementChild.innerHTML="";
    let temp=document.createElement("img");
    temp.setAttribute("src",image);
    output.lastElementChild.insertAdjacentElement("afterbegin",temp);

})
//"pakistan netherlands germany austria uk russia"