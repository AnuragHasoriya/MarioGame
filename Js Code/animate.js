var objImage = null;
var marioDim = null;
var monster1 = null;
var monster2 = null;
var monster3 = null;
var mariox = null;
var marioy = null;
var marioh = null;
var mariow = null;
var mariobase = null;
var mariorend = null;
var mon1x = null;
var mon1y = null;
var mon1h = null;
var mon1w = null;
var mon1base = null;
var mon1rend = null;
var mon2x = null;
var mon2y = null;
var mon2h = null;
var mon2w = null;
var mon2base = null;
var mon2rend = null;
var mon3x = null;
var mon3y = null;
var mon3h = null;
var mon3w = null;
var mon3base = null;
var mon3rend = null;
var count = null;
var marioLife = null;
var marioCount = null;
var movMush = null;
var mushx = null;
var mushy = null;
var mushh = null;
var mushw = null;
var mushbase = null;
var mushrend = null;
var stance = null;
var bigsize = null;
var bigx = null;
var bigy = null;
var bigh = null;
var bigw = null;
var bigrend = null;
var bigbase = null;
var base = null;
var flag = null;
var baseval = null;
var basey = null;
var baseh = null;
var sizeup = null;
var restartBanner = null;
//var aud;

function init(){
    sizeup = true;
    count = 3;
    stance = document.getElementById("img");
    objImage = document.getElementById("marioimg");
    marioDim = document.getElementById("marioimg");
    baseval = document.getElementById("marioimg");
    coinImg = document.getElementById("points");
    marioLife = document.getElementById("life");
    marioLife.innerHTML = "life :" + count;

    monster1 = document.getElementById("death");
    monster2 = document.getElementById("death2");
    monster3 = document.getElementById("death3");
    movMush = document.getElementById("death4");
    bigsize = document.getElementById("mushrom");
    restartBanner = document.getElementById("gameStart");

    bigx = bigsize.offsetLeft;
    bigy = bigsize.offsetTop;
    bigh = bigsize.offsetHeight;
    bigw = bigsize.offsetWidth;
    bigbase = bigy + bigh;
    bigrend = bigx + bigw;

    mon1x = monster1.offsetLeft;
    mon1y = monster1.offsetTop;
    mon1h = monster1.offsetHeight;
    mon1w = monster1.offsetWidth;
    mon1base = mon1y + mon1h;
    mon1rend = mon1x + mon1w;

    mon2x = monster2.offsetLeft;
    mon2y = monster2.offsetTop;
    mon2h = monster2.offsetHeight;
    mon2w = monster2.offsetWidth;
    mon2base = mon2y + mon2h;
    mon2rend = mon2x + mon2w;
    
    mon3x = monster3.offsetLeft;
    mon3y = monster3.offsetTop;
    mon3h = monster3.offsetHeight;
    mon3w = monster3.offsetWidth;
    mon3base = mon3y + mon3h;
    mon3rend = mon3x + mon3w;

    objImage.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "660px";

    movMush.style.left = "400px";
    movMush.style.top = "450px";
    
    setValue();
    basey = baseval.offsetTop;
    baseh = baseval.offsetHeight;
    base = screen.height - (basey + baseh);
    
    //(function(){
        var mov = parseInt(movMush.style.left.substring( 0, 3));
        var movlimit = mov + 100;
        var idclose = setInterval(slide,100);
        function slide() {
            if(mov >=  movlimit){
               while(mov != 200){ 
                    movMush.style.left=parseInt(movMush.style.left) - 2 + "px";
                    mov = mov - 5;
                }
            }
            else{
                movMush.style.left=parseInt(movMush.style.left) + 2 + "px";
                mov = parseInt(movMush.style.left.substring( 0, 3));
                getMushMario();
            }
            setValue();
            forthMon();
        }     
    // })();
    //aud=document.getElementById("myAudio");
}

function getMushMario(){
    mushx = movMush.offsetLeft;
    mushy = movMush.offsetTop;
    mushh = movMush.offsetHeight;
    mushw = movMush.offsetWidth;
    mushbase = mushy + mushh;
    mushrend = mushx + mushw;
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
        case 40 :
        //if(mariobase < base ){
            getDown();
       // }
            break;
        default:
            alert("please enter correct key");
    }
}

    function getRight(){
        /*var pos=0;
        var id1= setInterval(movie,1000);

        function movie(){
            if(pos == 53){
                clearInterval(id1);
            } 
            else{
                pos++;  
                objImage.style.left =parseInt(objImage.style.left)+pos+"px";
            }
        }*/
        //Style Files\mario.gif_c200
        stance.src ="Style Files/movmario.gif_c200";
        objImage.style.left = parseInt(objImage.style.left) + 5 +"px";
        bigMario();
        setValue();
        firstMon();
        secondMon();
        thirdMon(); 
        forthMon();      
    }


    function getLeft(){
        objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
        bigMario();
        setValue();
        firstMon();
        secondMon();
        thirdMon();
        forthMon();
    }
    function getUp() {
        stance.src ="Style Files/movmario.gif_c200";
        var pos = parseInt(objImage.style.top.substring( 0, 3));
        var poslimit = pos - 30;
        var id1 = setInterval(bounce,50);
        function bounce() {
            if(pos <=  poslimit) {
                clearInterval(id1);
               /* while(pos!=660){
                objImage.style.top= parseInt(objImage.style.top) + 5 + "px";
                objImage.style.left=parseInt(objImage.style.left) + 2 + "px";
                pos= pos + 5;
                }*/
            }
            else {
                objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
                objImage.style.left = parseInt(objImage.style.left) + 2 + "px";
                //var colli= parseInt(fireImg.style.top)+50;
                /*if(colli<pos){
                   alert("you are dead");
                 }*/
                pos = pos - 5;
                bigMario();
                setValue();
                firstMon();
                secondMon();
                thirdMon();
                forthMon();
            }
        }   
        
    }

    function getDown() {
        stance.src ="Style Files/mario.png";
        var id1 = setInterval(fall,50);
        function fall(){
            if((screen.height - mariobase) <=  base){
                clearInterval(id1);
            }
            else{
            objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
            bigMario();
            setValue();
            firstMon();
            secondMon();
            thirdMon();
            forthMon();
            }
        }
    }

    function setValue(){
        mariox = marioDim.offsetLeft;
        marioy = marioDim.offsetTop;
        marioh = marioDim.offsetHeight;
        mariow = marioDim.offsetWidth;
        mariobase = marioy + marioh;
        mariorend = mariox + mariow;
    }

    function bigMario(){
        if(mariorend >= bigx && marioy < bigbase && mariorend <= bigrend && mariobase > bigy && sizeup == true){
            objImage.style.height = 50 + 20 + "px";
            objImage.style.width = 40 + 20 + "px";
            bigsize.style.visibility = "hidden";
            flag = 1;
            sizeup = false;
            setValue();
        }
    }

    function firstMon(){
        if((mariorend >= mon1x && mariox <= mon1rend) && mariobase > mon1y){
            life();
        }  
        else if((mariobase > mon1y && mariorend > mon1x) && mariox < mon1rend){
            life();
        }  
    }


   function secondMon(){
        if ((mariorend >= mon2x && mariox <= mon2rend) && mariobase > mon2y){
            life();  
        }
        else if((mariobase > mon2y && mariorend > mon2x) && mariox < mon2rend){
            life();
        } 
    }

    function thirdMon(){
        if ((mariorend >= mon3x && mariox <= mon3rend) && mariobase > mon3y){
        life();      
        }
        else if((mariobase > mon3y && mariorend > mon3x) && mariox < mon3rend){
            life();
        } 
    }

    function forthMon(){
        if ((marioy  <= mushbase && mushrend >= mariox) && mariox > mushx && mariobase >= mushy ) {
        lifeUp();
        }
        else if ((marioy < mushbase && mariorend >= mushx ) && mariorend < mushrend && mariobase >= mushy ){ 
            lifeUp();
        }
        else if (marioy < mushbase && mariox > mushx && mariorend < mushrend && mariobase >= mushy){
            lifeUp();
        }
    }

    function life() {
        if(flag == 1){
            objImage.style.height = 70 - 20 + "px";
            objImage.style.width = 60 - 20 + "px";
            setValue();
            //base = 710 - marioh;
            objImage.style.top = "660px";
            flag = 0;
        }
        else{
            count --;
            marioLife.innerHTML = "life :" + count;
            if(count == 0){
                //prompt("do you want to restart");
                reload();
           }
        }
        objImage.style.left= parseInt(objImage.style.left) - 100 + "px";
        setValue();
    }

    function lifeUp(){ 
        if(flag == 1){
            objImage.style.height = 70 - 20 + "px";
            objImage.style.width = 60 - 20 + "px";
            setValue();
            //base = 710 - marioh;
            // objImage.style.top = "660px";
            flag = 0;
        }
        else{
            count --;
            marioLife.innerHTML = "life :" + count;
            if(count == 0){
            objImage.style.top= parseInt(objImage.style.top) + 100 + "px";
            // prompt("do you want to restart");
            reloadUp();
            }
        }
        objImage.style.top= parseInt(objImage.style.top) + 60 + "px";
        setValue();
    }

    function reload(){
        restartBanner.visibility = "visible";
        objImage.style.position = "absolute";
        objImage.style.left = "100px";
        objImage.style.top = "660px";
        restartBanner.style.visibility = "visible";
        setTimeout(reSet,3000);
    }

    function reloadUp(){
        objImage.style.position = "absolute";
        objImage.style.left = "60px";
        objImage.style.top = "600px";
        restartBanner.style.visibility = "visible";
        setTimeout(reSet,3000);
    }

    function reSet(){
        count=3;
        marioLife.innerHTML = "life :" + count;
        stance.src ="Style Files/mario.png";
        bigsize.style.visibility = "visible";
        sizeup = true;
        restartBanner.style.visibility = "hidden";
    }

    window.onload = init;