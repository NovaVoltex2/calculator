const numbtn=document.querySelectorAll(".nums");
const opsbtn=document.querySelectorAll(".ops");
const inputA=document.querySelector(".inputArea span");
const outputA=document.querySelector(".display span");
const fxnbtn=document.querySelectorAll(".fxn");
let temp=0;
let count=0;
numbtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
     if (btn.innerHTML!="=") {
        inputA.innerHTML+=btn.innerHTML
     }
     else{
        if (inputA.innerHTML=="") {
            outputA.innerHTML=temp 
            setHistory(inputA.innerHTML,temp,gettime())
        }else{
             temp=eval(inputA.textContent)
        outputA.innerHTML=temp 
        setHistory(inputA.innerHTML,temp,gettime())
        }
      
     }
    })
})
opsbtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        // console.log(btn.innerHTML);
       
        switch(btn.innerHTML){
             case "+":
                console.log(btn.innerHTML);
                 inputA.innerHTML+=btn.innerHTML; 
             break;
             case "-":
                    console.log(btn.innerHTML);
                    inputA.innerHTML+=btn.innerHTML;
             break;
             case "*":
                    console.log(btn.innerHTML);
                     inputA.innerHTML+=btn.innerHTML;
             break;
             case "/":
                    console.log(btn.innerHTML);
                      inputA.innerHTML+=btn.innerHTML;
             break;
             case "Del":
                    console.log(btn.innerHTML);
                      inputA.innerHTML=inputA.innerHTML.slice(0,-1);
             break;
             case "CE":
                    console.log(btn.innerHTML);
                      inputA.innerHTML="";
                      outputA.innerHTML=0;
             break;
        }
    })
})
fxnbtn.forEach(fxn=>{
    fxn.onclick=()=>{
        switch (fxn.innerHTML) {
            case "(":
                inputA.innerHTML+=fxn.innerHTML
                break;
            case ")":
                inputA.innerHTML+=fxn.innerHTML
                break;
            case "( - )":
                inputA.innerHTML+="-"
                console.log(fxn.innerHTML)
                break;
            case "sin":
                outputA.innerHTML=Math.sin(parseFloat(inputA.textContent))
                // temp=Math.sin(parseFloat(inputA.textContent))
                
                break;
            case "cos":
                outputA.innerHTML=Math.cos(parseFloat(inputA.textContent))
                // temp=Math.cos(parseFloat(inputA.textContent))
                break;
            case "tan":
                outputA.innerHTML=Math.tan(parseFloat(inputA.textContent))
                // temp=Math.tan(parseFloat(inputA.textContent))
                break;
            case "ans":
                inputA.innerHTML!=""? inputA.innerHTML=temp: inputA.innerHTML+=temp
                outputA.innerHTML=0;
                break;
        
            default:
                break;
        }
    }
})

function gettime(){
    let time=new Date
    let hour=time.getHours()
    let mins=time.getMinutes()
    let currentTime=hour+":"+mins
    return currentTime;
}
let historBoard=document.querySelector("#historyMenu ul")
let historBoardlist=document.querySelectorAll("#historyMenu ul li")

function setHistory(cal,ans,time){
    let newEl=
    `<li>
    <div class="hcal">
        <h3>${inputA.innerHTML}</h5>
        <h1>${temp}</h3>
    </div>
    <em>${gettime()}</em>
</li>
    `
historBoard.innerHTML+=newEl
}

