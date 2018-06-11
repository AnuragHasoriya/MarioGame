var  myJson = '{ "marioDim" : "null", "monster1" : "null","monster2":"null","monster3":"null","mariox":"null","img":"null","marioy":"null","marioh":"null","mariow":"null","mariobase":"null","mariorend":"null","mon1x":"null","mon1y":"null","mon1h":"null","mon1w":"null","mon1base":"null","mon1rend":"null","mon2x":"null","mon2y":"null","mon2h":"null","mon2w":"null","mon2base":"null","mon2rend":"null","mon3x":"null","mon3y":"null","mon3h":"null","mon3w":"null","mon3base":"null","mon3rend":"null","count":"null","marioLife":"null","marioCount":"null","movMush":"null","mushx":"null","mushy":"null","mushh":"null","mushw":"null","mushbase":"null","mushrend":"null","stance":"null","bigsize":"null","bigx":"null","bigy":"null","bigh":"null","bigw":"null","bigrend":"null","bigbase":"null","base":"null","flag":"null","baseval":"null","basey":"null","baseh":"null","sizeup":"null","restartBanner":"null"}'
var myVar = JSON.parse(myJson);

function loadImage(idName){
    myVar.img = document.createElement("img");
    myVar.img.src = "Style Files/movemonster1.gif";
    return document.getElementById(idName).appendChild(myVar.img);
}

function getElement(divId){
    return document.getElementById(divId);
}

function init(){
    myVar.sizeup = true;
    myVar.count = 3;
    myVar.stance = getElement("img");
    myVar.objImage = getElement("marioimg");
    myVar.marioDim = getElement("marioimg");
    myVar.baseval = getElement("marioimg");
    myVar.coinImg = getElement("points");
    myVar.marioLife = getElement("life");
    myVar.marioLife.innerHTML = "life :" + myVar.count;

    myVar.monster1 = getElement("death");
    myVar.monster2 = getElement("death2");
    myVar.monster3 = getElement("death3"); 
    myVar.movMush = getElement("death4");
    myVar.bigsize = getElement("mushrom");
    myVar.restartBanner = getElement("gameStart");
    
    loadImage("death");
    loadImage("death2");
    loadImage("death3");
    loadImage("death4");

    setPosition(myVar.monster1, "56%", "84%");
    setPosition(myVar.monster2, "70%", "84%");
    setPosition(myVar.monster3, "73%", "84%"); 

    myVar.bigx = myVar.bigsize.offsetLeft;
    myVar.bigy = myVar.bigsize.offsetTop;
    myVar.bigh = myVar.bigsize.offsetHeight;
    myVar.bigw = myVar.bigsize.offsetWidth;
    myVar.bigbase = myVar.bigy + myVar.bigh;
    myVar.bigrend = myVar.bigx + myVar.bigw;

    myVar.mon1x = getLeftof(myVar.monster1,);
    myVar.mon1y = getTop(myVar.monster1);
    myVar.mon1h = getHeight(myVar.monster1);
    myVar.mon1w = getWidth(myVar.monster1);
    myVar.mon1base = getBase(myVar.mon1y, myVar.mon1h);
    myVar.mon1rend = getRend(myVar.mon1x, myVar.mon1w);

    myVar.mon2x = getLeftof(myVar.monster2);
    myVar.mon2y = getTop(myVar.monster2);
    myVar.mon2h = getHeight(myVar.monster2);
    myVar.mon2w = getWidth(myVar.monster2);
    myVar.mon2base = getBase(myVar.mon2y, myVar.mon2h);
    myVar.mon2rend = getRend(myVar.mon2x, myVar.mon2w);
    
    myVar.mon3x = getLeftof(myVar.monster3);
    myVar.mon3y = getTop(myVar.monster3);
    myVar.mon3h = getHeight(myVar.monster3);
    myVar.mon3w = getWidth(myVar.monster3);
    myVar.mon3base = getBase(myVar.mon3y, myVar.mon3h);
    myVar.mon3rend = getRend(myVar.mon3x, myVar.mon3w);

    myVar.objImage.style.position = "relative";
    myVar.objImage.style.left = "0px";
    myVar.objImage.style.top = "660px";

    setValue();

    setPosition(myVar.movMush, "20%", "55%");

    myVar.basey = myVar.baseval.offsetTop;
    myVar.baseh = myVar.baseval.offsetHeight;
    myVar.base = screen.height - (myVar.basey + myVar.baseh);
    
    movMonster(myVar.movMush);
}
function getMove(divId){
   return parseInt(divId.style.left.substring( 0, 2))
}

function movMonster(divId){
    var divRef = divId;
    var initPos = getMove(divId);
    var mov = getMove(divId);
        var movlimit = mov + 10;
        var idclose = setInterval(slide,500);
        function slide() {
            if(mov >=  movlimit){
               while(mov != initPos){ 
                    divRef.style.left=parseInt(divRef.style.left) - 1 + "%";
                    mov = mov - 1;
                }
            }
            else{
                divRef.style.left=parseInt(divRef.style.left) + 1 + "%";
            mov = parseInt(divRef.style.left.substring( 0, 2));
            getMushMario();
            }
        setValue();
        forthMon();
    }
}

function setPosition(monster, leftpx, toppx){
    monster.style.left = leftpx;
    monster.style.top = toppx;
}

function getLeftof(divId){
    return divId.offsetLeft;
}

function getTop(divId){
    return divId.offsetTop;
}

function getHeight(divId){
    return divId.offsetHeight;
}

function getWidth(divId){
    return divId.offsetWidth;
}

function getBase(top,height){
    return top + height;
}

function getRend(left,width){
    return left + width;
}

function getMushMario(){
    myVar.mushx = myVar.movMush.offsetLeft;
    myVar.mushy = myVar.movMush.offsetTop;
    myVar.mushh = myVar.movMush.offsetHeight;
    myVar.mushw = myVar.movMush.offsetWidth;
    myVar.mushbase = myVar.mushy + myVar.mushh;
    myVar.mushrend = myVar.mushx + myVar.mushw;
}

function getKeyAndMove(event){    

    var keyVal=event.keyCode||event.which;
    switch(keyVal){
        case 37:
            getLeft();
            break;
        case 39:
            getRight();   
            break;
        case 38:
            getUp();
            break;
        case 40:
            getDown();
            break;
        default:
            alert("please enter correct key");
    }
}

    function getRight(){
        myVar.stance.src ="Style Files/movmario.gif_c200";
        myVar.objImage.style.left = parseInt(myVar.objImage.style.left) + 5 +"px";
        checkPix();      
    }

    function getLeft(){
        myVar.objImage.style.left = parseInt(myVar.objImage.style.left) - 5 + "px";
        checkPix();
    }

    function getUp() {
        myVar.stance.src ="Style Files/movmario.gif_c200";
        var pos = parseInt(myVar.objImage.style.top.substring( 0, 3));
        var poslimit = pos - 30;
        var id1 = setInterval(bounce,50);
        function bounce() {
            if(pos <=  poslimit) {
                clearInterval(id1);
            }
            else {
                myVar.objImage.style.top = parseInt(myVar.objImage.style.top) - 5 + "px";
                myVar.objImage.style.left = parseInt(myVar.objImage.style.left) + 2 + "px";
                pos = pos - 5;
                checkPix();
            }
        }       
    }

    function getDown() {
        myVar.stance.src ="Style Files/mario.png";
        var id1 = setInterval(fall,50);
        function fall(){
            if((screen.height - myVar.mariobase) <=  myVar.base){
                clearInterval(id1);
            }
            else{
            myVar.objImage.style.top = parseInt(myVar.objImage.style.top) + 5 + "px";
            checkPix();
            }
        }
    }

    function checkPix(){
        bigMario();
        setValue();
        firstMon();
        secondMon();
        thirdMon();
        forthMon();
    }

    function setValue(){
        myVar.mariox = myVar.marioDim.offsetLeft;
        myVar.marioy = myVar.marioDim.offsetTop;
        myVar.marioh = myVar.marioDim.offsetHeight;
        myVar.mariow = myVar.marioDim.offsetWidth;
        myVar.mariobase = myVar.marioy + myVar.marioh;
        myVar.mariorend = myVar.mariox + myVar.mariow;
    }

    function bigMario(){
        if(myVar.mariorend >= myVar.bigx && myVar.marioy < myVar.bigbase && myVar.mariorend <= myVar.bigrend && myVar.mariobase > myVar.bigy && myVar.sizeup == true){
            myVar.objImage.style.height = 50 + 20 + "px";
            myVar.objImage.style.width = 40 + 20 + "px";
            myVar.bigsize.style.visibility = "hidden";
            myVar.flag = 1;
            myVar.sizeup = false;
            setValue();
        }
    }

    function firstMon(){
        if((myVar.mariorend >= myVar.mon1x && myVar.mariox <= myVar.mon1rend) && myVar.mariobase > myVar.mon1y){
            life();
        }  
        else if((myVar.mariobase > myVar.mon1y && myVar.mariorend > myVar.mon1x) && myVar.mariox < myVar.mon1rend){
            life();
        }  
    }

    function secondMon(){
        if ((myVar.mariorend >= myVar.mon2x && myVar.mariox <= myVar.mon2rend) && myVar.mariobase > myVar.mon2y){
            life();  
        }
        else if((myVar.mariobase > myVar.mon2y && myVar.mariorend > myVar.mon2x) && myVar.mariox < myVar.mon2rend){
            life();
        } 
    }

    function thirdMon(){
        if ((myVar.mariorend >= myVar.mon3x && myVar.mariox <= myVar.mon3rend) && myVar.mariobase > myVar.mon3y){
        life();      
        }
        else if((myVar.mariobase > myVar.mon3y && myVar.mariorend > myVar.mon3x) && myVar.mariox < myVar.mon3rend){
            life();
        } 
    }

    function forthMon(){
        if ((myVar.marioy  <= myVar.mushbase && myVar.mushrend >= myVar.mariox) && myVar.mariox > myVar.mushx && myVar.mariobase >= myVar.mushy ) {
        lifeUp();
        }
        else if ((myVar.marioy < myVar.mushbase && myVar.mariorend >= myVar.mushx ) && myVar.mariorend < myVar.mushrend && myVar.mariobase >= myVar.mushy ){ 
            lifeUp();
        }
        else if (myVar.marioy < myVar.mushbase && myVar.mariox > myVar.mushx && myVar.mariorend < myVar.mushrend && myVar.mariobase >= myVar.mushy){
            lifeUp();
        }
    }

    function life() {
        if(myVar.flag == 1){
            myVar.objImage.style.height = 70 - 20 + "px";
            myVar.objImage.style.width = 60 - 20 + "px";
            setValue();
            myVar.objImage.style.top = "660px";
            myVar.flag = 0;
        }
        else{
            myVar.count --;
            myVar.marioLife.innerHTML = "life :" + myVar.count;
            if(myVar.count == 0){
                //prompt("do you want to restart");
                reload();
           }
        }
        myVar.objImage.style.left= parseInt(myVar.objImage.style.left) - 100 + "px";
        setValue();
    }

    function lifeUp(){ 
        if(myVar.flag == 1){
            myVar.objImage.style.height = 70 - 20 + "px";
            myVar.objImage.style.width = 60 - 20 + "px";
            setValue();
            myVar.flag = 0;
        }
        else{
            myVar.count --;
            myVar.marioLife.innerHTML = "life :" + myVar.count;
            if(myVar.count == 0){
            myVar.objImage.style.top= parseInt(myVar.objImage.style.top) + 100 + "px";
            reloadUp();
            }
        }
        myVar.objImage.style.top= parseInt(myVar.objImage.style.top) + 60 + "px";
        setValue();
    }

    function reload(){
        myVar.restartBanner.visibility = "visible";
        myVar.objImage.style.position = "absolute";
        myVar.objImage.style.left = "100px";
        myVar.objImage.style.top = "660px";
        myVar.restartBanner.style.visibility = "visible";
        setTimeout(reSet,3000);
    }

    function reloadUp(){
        myVar.objImage.style.position = "absolute";
        myVar.objImage.style.left = "60px";
        myVar.objImage.style.top = "600px";
        myVar.restartBanner.style.visibility = "visible";
        setTimeout(reSet,3000);
    }

    function reSet(){
        myVar.count=3;
        myVar.marioLife.innerHTML = "life :" + myVar.count;
        myVar.stance.src ="Style Files/mario.png";
        myVar.bigsize.style.visibility = "visible";
        myVar.sizeup = true;
        myVar.restartBanner.style.visibility = "hidden";
    }

    window.onload = init;