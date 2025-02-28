const ringBtn = document.querySelectorAll('.ring-button')
for(let btn of ringBtn){
    btn.addEventListener("click",function(event){
        let getBtn = event.target;
        for(let checkColor of ringBtn){
            checkColor.classList.remove("border-purple-800")
            checkColor.classList.add("border-gray-300")
            
        }
        getBtn.classList.add("border-purple-800")
        getBtn.classList.remove("border-gray-300")
       
        

    })
}