let container= document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreconatiner=document.querySelector(".score");
let timeconatiner=document.querySelector(".time");

btn.onclick=function(){
    let score=0;
    let time=0;
    container.innerHTML="";
    let interval = setInterval(
        function  showTarget() {
            
            // creation de la cible 
            let target = document.createElement('img');
            target.id="target";
            target.scr="silly.png";
            container.appendChild(target);
            target.style.top = Math.random() * (500 - target.offsetHeight) +'px';
            target.style.left = Math.random() * (500 - target.offsetHeight) +'px';
            
            // faire disparaitre la cible
            setInterval(() => {
                target.remove();
            }, 2000);

            // quand on clique sur target
            target.onclick=function(){score += 1;
                target.style.display='none';
            }
            time -=1;

            // afficher les infos 
            scoreconatiner.innerHTML=`Score : ${score}`
            timeconatiner.innerHTML=`Score : ${time}`

            // la fin du jeu le tempsp est écoulé

            if( time==0){
                clearInterval(interval);
                container.innerHTML="le jeu est terminé";
            }
        }, 1000);
    
}
