
const bar=document.querySelectorAll(".skills .skillsBox .value");
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log("Sad");
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});
const newobserver=new IntersectionObserver((entries)=>[
    entries.forEach((entry,index)=>{
        if(entry.isIntersecting){ 
            entry.target.style.setProperty("--i",`50%`);
        }else{
            entry.target.style.setProperty("--i",`0`)
        }
    })
])
const hiddenelements=document.querySelectorAll(".hidden");
const hiddenelements2=document.querySelectorAll(".hiddenright");
bar.forEach((x)=>newobserver.observe(x));
hiddenelements.forEach((element)=>observer.observe(element));
hiddenelements2.forEach((element)=>observer.observe(element));
