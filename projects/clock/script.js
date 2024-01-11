let second=document.getElementById("longneedle");

setInterval(() => {
    let currdate=new Date();
    let seconds=currdate.getSeconds()*6;
    let minutes=currdate.getMinutes()*6;
    let hours=currdate.getHours()*30;
    second.style.transform=`rotate(${seconds}deg)`;
    second.nextElementSibling.style.transform=`rotate(${minutes}deg)`;
    second.nextElementSibling.nextElementSibling.style.transform=`rotate(${hours}deg)`;
}, 500);

