var form,gs=0,back;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,state;
function preload(){
    back1 = loadImage("india.jpg");
    sound = loadSound("National-Anthem-Of-India.mp3");
    img1 = loadImage("s1Img.jpg");
    img = loadImage("S1iMG1.jpg");
    img2 = loadImage("s2Img.jpg");
}

function setup(){
    createCanvas(680,680);
    form = new Form();
    back = createButton('BACK');
    back.position(1000,650);
    back.hide();
    if(gs===0){
        sound.play();
    }
}

function draw(){
    background(back1); 
    var o = createSprite(400,100,500,500);
    o.addImage("img",img2); 
    form.display();  
    if(gs===1){
        background(img1);
    }
    if(gs===2){
        background(img2);
    }
    if(gs===0){
        background(back1);
    }
   
}