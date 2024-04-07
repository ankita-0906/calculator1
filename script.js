alert("want to calculate !");
let btns=document.querySelectorAll("button");
let box=document.querySelector("input");
let string="";
let arr=Array.from(btns);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            box.value = string;
        }

        else if(e.target.innerHTML == 'ac'){
            string = ""
            box.value = string;
          }
        else{
            string += e.target.innerHTML;
            box.value = string;
        }
        
    })
})