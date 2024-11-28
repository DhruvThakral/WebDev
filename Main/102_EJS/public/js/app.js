const btns = document.querySelectorAll("button");

for(btn of btns){
    document.addEventListener("click",()=>{
        console.log("button was clicked");
    })
};