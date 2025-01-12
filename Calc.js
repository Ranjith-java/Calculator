const display=document.querySelector(".display")
display.addEventListener('keyup',(e)=>{
    let x=display.value
    if(!x.match(/[\d]/g)){
        alert("enter digit");
        display.value="";
    }else{
    let result=eval(display.value);
    display.value=result;  
    }
})
const clear=document.querySelector(".clear")
clear.addEventListener('click',(e)=>{
    display.value="";
}
)
const one=document.querySelector(".one")
one.addEventListener('click',(e)=>{
    display.value=display.value+"1";
}
)
const two=document.querySelector(".two")
two.addEventListener('click',(e)=>{
    display.value=display.value+"2";
}
)
const three=document.querySelector(".three")
three.addEventListener('click',(e)=>{
    display.value=display.value+"3";
}
)
const four=document.querySelector(".four")
four.addEventListener('click',(e)=>{
    display.value=display.value+"4";
}
)
const five=document.querySelector(".five")
five.addEventListener('click',(e)=>{
    display.value=display.value+"5";
}
)
const six=document.querySelector(".six")
six.addEventListener('click',(e)=>{
    display.value=display.value+"6";
}
)
const seven=document.querySelector(".seven")
seven.addEventListener('click',(e)=>{
    display.value=display.value+"7";
}
)
const eight=document.querySelector(".eight")
eight.addEventListener('click',(e)=>{
    display.value=display.value+"8";
}
)
const nine=document.querySelector(".nine")
nine.addEventListener('click',(e)=>{
    display.value=display.value+"9";
}
)
const ze=document.querySelector(".ze")
ze.addEventListener('click',(e)=>{
    display.value=display.value+"0";
}
)
const dze=document.querySelector(".dze")
dze.addEventListener('click',(e)=>{
    display.value=display.value+"00";
}
)

const plus=document.querySelector(".plus")
plus.addEventListener('click',(e)=>{
    display.value=display.value+"+";
}
)
const minus=document.querySelector(".minus")
minus.addEventListener('click',(e)=>{
    display.value=display.value+"-";
}
)
const div=document.querySelector(".div")
div.addEventListener('click',(e)=>{
    display.value=display.value+"/";
}
)
const mul=document.querySelector(".mul")
mul.addEventListener('click',(e)=>{
    display.value=display.value+"*";
}
)
const d=document.querySelector(".d")
d.addEventListener('click',(e)=>{
    display.value=display.value+".";
}
)
const back=document.querySelector(".back")
back.addEventListener('click',(e)=>{
    let res=[...display.value];
    res.pop()
    display.value= res.join("",res)
}
)

const equal=document.querySelector(".equal")
equal.addEventListener('click',(e)=>{
    display.value=eval(display.value);
}
)
  


