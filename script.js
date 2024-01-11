
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log("Sad");
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
})
const hiddenelements=document.querySelectorAll(".hidden");
const hiddenelements2=document.querySelectorAll(".hiddenright");
hiddenelements.forEach((element)=>observer.observe(element));
hiddenelements2.forEach((element)=>observer.observe(element));
