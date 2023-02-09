const output=document.querySelector('.output');
const result = document.querySelector('.result');
const keys=document.querySelectorAll('button');

//event listener

keys.forEach(key=>{
    key.addEventListener('click',calculate);
})

function calculate(){
    let buttonText=this.innerText;
    // console.log(buttonText);
    if(buttonText==='AC'){
        result.style.animation='';
        output.style.animation='';
        output.innerText='';
        result.innerText='0';
        return;
    }
    if(buttonText==='DEL'){
        output.textContent=output.textContent.substring(0,output.textContent.length-1);
        // We can also use output.innerText=output.innerText.slice(0,-1);
        return;
    }
    if(buttonText==='='){
        result.innerText=eval(output.textContent);
        result.style.animation='big 0.5s ease-in-out';
        output.style.animation='small 0.5s ease-in-out';
        result.style.animationFillMode='forwards';
        output.style.animationFillMode='forwards';
    }

    else{
        output.textContent+=buttonText;
        return;
    }
}
