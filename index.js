  

  const sco1= document.getElementById("sco1");
  const sco2= document.getElementById("sco2");
  const rules=document.getElementById('rules')
  const rulebutton = document.getElementById("rules1")
  const exit=document.getElementById("exit")
  const exit2=document.getElementById("exit")
  const frame = document.getElementById('frame');
  const groupi=document.getElementById('initial');
  const rock=document.getElementById('rockout');
  const paper=document.getElementById('paperout');
  const sisor=document.getElementById('sisorout');
  const playarea=document.getElementById('playarea');
  const timedisplay=document.getElementsByClassName('smooth');
  const res=document.getElementById('result');
  const agait=document.getElementById('against');
rulebutton.addEventListener('click',()=>
    {
       rules.classList.add('rulescla');
      
        frame.classList.add('visible'); 
        exit.style.opacity=1;
    })
exit2.addEventListener('click',()=>
    {
          rules.classList.add('rulescla');
       frame.classList.remove('visible'); 
       exit.style.opacity=0;
       
    })


document.addEventListener('DOMContentLoaded', () => {
   
    
let countdownInterval;
var countdown=document.getElementById('time');
 if (!countdown) {
        console.error('Countdown element not found!');
        return;
    }
function count(event){
      const buttons = document.querySelectorAll('#rockout, #paperout, #sisorout');
       countdown.style.display='flex';
   let time=3;
   clearInterval(countdownInterval);
   const clickedButton = event.currentTarget;
      buttons.forEach((buttons) => {
            buttons.style.pointerEvents = 'none';  
             
        });
       clickedButton.style.opacity=0.5;
const update=(number)=>
    {
       countdown.textContent= number;
       countdown.classList.add('smooth');
       setTimeout(() =>  countdown.classList.remove('smooth')); 
    }


    update(time); 
    countdownInterval = setInterval(()=>
        {
            time--;
            if(time>0)
            {
                update(time);
            }
            else
            {
                update("go!");
              clearInterval(countdownInterval); 
              var userpick= x(clickedButton);
                var pcpick=pc();
                 result2(userpick,pcpick);
               
                
            }
        },1000);
       
       
}
function x(clickedButton) {
     clickedButton.style.opacity=1;
     groupi.style.display='none';
    playarea.style.display= 'flex';
    const userDiv = document.querySelector('#user1');
  const clickedBtn = clickedButton.cloneNode(true);
   userDiv.appendChild(clickedBtn);
   clickedBtn.style.opacity=1;
   return clickedButton
}
function pc(){
 rock.addEventListener('click',()=>
        {
           diabale()
        })
        paper.addEventListener('click',()=>
        {
           
           diabale()
        })
        sisor.addEventListener('click',()=>
        {
          
           diabale()
        })
         function diabale() {
            choices.forEach((choices)=>
                {
                    choices.disabled=true;
                    
                })
            
         }



    const choices = [rock, paper, sisor];
    const pcDiv = document.querySelector('#pc1'); 
    const random=Math.floor(Math.random()*choices.length);
    const randomchoic=choices[random].cloneNode(true);
    pcDiv.appendChild(randomchoic);
    randomchoic.style.opacity=1;
    
    return randomchoic;
}
    


    const sco1 = document.getElementById("sco1");
    const sco2 = document.getElementById("sco2");

   
    let userScore = parseInt(localStorage.getItem("score1"));
    let pcScore = parseInt(localStorage.getItem("score2"));

    
    if (!userScore) {
        userScore = 0;
        localStorage.setItem("score1", userScore);  
    }
    if (!pcScore) {
        pcScore = 0;
        localStorage.setItem("score2", pcScore);  
    }

   
    
        
        sco1.textContent = userScore;
        
   
        sco2.textContent = pcScore;

function result2( x, y)
{


     let userScore = parseInt(localStorage.getItem("score1"));
    let pcScore = parseInt(localStorage.getItem("score2"));
  const userid=x.id;
   const pcid=y.id;
   if(userid==pcid)
    {
        res.innerText="TIE UP ";
         against.innerText="AGAINST PC";
    }
     else if(userid!=pcid)
    {
        if(userid==='rockout'&&pcid==="sisorout")
        {
            
             userScore++
             
             if (sco1) sco1.textContent = userScore;
             localStorage.setItem("score1", userScore);
             res.innerText="YOU WON";
             against.innerText="AGAINST PC";
         
        }
        else if(userid==='sisorout'&&pcid==="paperout")
        {
               userScore++;
              if (sco1) sco1.textContent = userScore;
             localStorage.setItem("score1", userScore);
              res.innerText="YOU WON";
              against.innerText="AGAINST PC";
        }
         else if(userid==='paperout'&&pcid==="rockout")
        {
               userScore++;
              if (sco1) sco1.textContent = userScore;
             localStorage.setItem("score1", userScore);
            res.innerText="YOU WON";
            against.innerText="AGAINST PC";
           
        }
         else 
     {
          pcScore=parseInt(sco2.textContent);
             pcScore++
             if (sco2) sco2.textContent = pcScore;
             localStorage.setItem("score2", pcScore);
       res.innerText="YOU LOSE";
       agait.innerText="AGAINST PC";
       
     }
    }
   console.log(document.getElementById("sco1"));  
console.log(document.getElementById("sco2"));
console.log("User score:", userScore);
console.log("PC score:", pcScore);

}


document.querySelector('#rockout').addEventListener('click', count);
document.querySelector('#paperout').addEventListener('click',count);
document.querySelector('#sisorout').addEventListener('click', count);
})








/*document.getElementById("rule").addEventListener("click", function() {
   
});
  
  let currentScore = localStorage.getItem("score");
  if (currentScore === null) {
    currentScore = 0; 
    currentScore = parseInt(currentScore); 
}else {
    currentScore = parseInt(currentScore); 
}
x.textContent = currentScore;





  
btn1.addEventListener("click", function() {
  
    let current=parseInt(x.textContent);
    current++;
    if(current>=10000)
    {
        x.style.fontSize="40px"; 
    }
    x.textContent=current;
    localStorage.setItem("score", current);
});

btn2.addEventListener("click", function() {
    
    let current=parseInt(y.textContent);
    current++;
    if(current>=10000)
    {
        x.style.fontSize="40px"; 
    }
     y.textContent=current;
     localStorage.setItem("score2", current);
});*/


