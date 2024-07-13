let input=document.getElementById("input");
let h=document.querySelectorAll("h3");
h.forEach((data)=>{
data.addEventListener("click",()=>{
    let value=data.innerHTML;
    console.log(value)
    let string=input.value;
    if(value == '='){
        let ans=eval(string);
        input.value=ans;
    }else if(value == 'AC'){
        string='';
        input.value=string;
    }else if(value == 'B'){
        string=string.slice(0,string.length -1);
        input.value=string;
    }else{
        string=string.concat(value);
        input.value=string;
    }
})
})