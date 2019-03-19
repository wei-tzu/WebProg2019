let cvsWrapper = null;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets
let bg_x = 0,bg_y = 0;
let pipe_x1 = 0, pipe_y1 = 0,pipe_x2 = 0, pipe_y2 = 0;
let song;
let end = false, start = false;
let score = 0;
let num = []
let digitOne = 0
let digitSec = 0
function preload() {
    bg = ["day","night"]
    bg_color = bg[Math.floor(Math.random()*bg.length)]
    bgImg = loadImage(`assets/sprites/background-${bg_color}.png`);
    color = ["blue", "red", "yellow"]
    bird_color = color[Math.floor(Math.random()*color.length)]
    base = loadImage("assets/sprites/base.png")
    bird_u = loadImage(`assets/sprites/${bird_color}bird-upflap.png`);
    bird_m = loadImage(`assets/sprites/${bird_color}bird-midflap.png`);
    bird_d = loadImage(`assets/sprites/${bird_color}bird-downflap.png`);
    pipe_upper = loadImage(`assets/sprites/pipe-green-upper.png`)
    pipe_lower = loadImage(`assets/sprites/pipe-green-lower.png`)
    gg = loadImage("assets/sprites/gameover.png")
    message = loadImage("assets/sprites/message.png")
    for(i=0;i<10;i++){
        num.push(loadImage(`assets/sprites/${i}.png`))
    }
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );

    myCanvas.parent("canvasWrapper");
    soundFormats('ogg');
    song = loadSound('assets/audio/wing.ogg');
    die = loadSound('assets/audio/die.ogg');
    point = loadSound('assets/audio/point.ogg')
    // setup code below
    // bg setup
    bgScale = width/bgImg.width
    mesScale = width/message.width * 0.8
    pipe_x1 = width/2+300
    pipe_x2 = width/2+500
    // bird setup
    x1 = 200;
    y1 = 200;
    vx = 2;
    vy = 1.2;
    ay = 0.2;
    birdAng = 0;
    first = 0.7;
    second = 0.6;
    count = 0;
    pipe_velo = 5;
    
}

function draw() {
    // Render function (called per frame.)
    //bg 
    background(0);
    image(bgImg,bg_x,bg_y, bgImg.width*bgScale, bgImg.height *bgScale)
    image(bgImg,bg_x + bgImg.width*bgScale,bg_y, bgImg.width*bgScale, bgImg.height *bgScale)
    if(start == false){
        image(message,width/2-message.width*1.5/2,height/2-message.height*1.5/2,message.width*1.5,message.height*1.5)
        vx = 0
        vy = 0
        ay = 0
        if(count < 5){
            image(bird_u,200,400)
        }
        else if(count >= 5 && count < 10){
            image(bird_m,200,400)
        }
        else if(count >= 10 && count < 15){
            image(bird_d,200,400)
        }
        else if(count >= 15 && count < 20){
            count = 0
            image(bird_m,200,400)
        }
        count += 1
    }
    else{
        image(pipe_upper,pipe_x1,pipe_y1,pipe_upper.width,pipe_upper.height*first)
        image(pipe_lower,pipe_x1,pipe_y1+height-pipe_lower.height*(1.5 - first),pipe_lower.width,pipe_lower.height*(1.5 - first))
        image(pipe_upper,pipe_x2,pipe_y2,pipe_upper.width,pipe_upper.height*second)
        image(pipe_lower,pipe_x2,pipe_y2+height-pipe_lower.height*(1.5 - second),pipe_lower.width,pipe_lower.height*(1.5 - second))

        image(base,0,height-(base.height*0.5),base.width*2,base.height*0.5)
        if(end == false){

            
            bg_x -= 1
            if(bg_x < -bgImg.width*bgScale){
                bg_x = 0
            }
            // pipe
            pipe_x1 -= pipe_velo
            pipe_x2 -= pipe_velo
            if (pipe_x1 < -pipe_upper.width){
                first = Math.random()*0.5 + 0.5
                pipe_x1 = 400
            }
            if (pipe_x2 < -pipe_upper.width){
                second = Math.random()*0.5 + 0.4
                pipe_x2 = 400
            }
            // gaming rule
            
            if(digitOne == 10){
                digitOne = 0
                digitSec += 1
            }
            image(num[digitOne],230,100)
            image(num[digitSec],200,100)

            if(pipe_x1 <= 200 && pipe_x1 >= 200 - pipe_upper.width*1.02){
                if(y1 < pipe_upper.height*first || y1 >= height-pipe_lower.height*(1.5 - first)){
                    end = true
                    die.play();
                }
            }
            else if(pipe_x2 <= 200 && pipe_x2 >= 200 - pipe_upper.width*1.02){
                if(y1 < pipe_upper.height*second || y1 >= height-pipe_lower.height*(1.5 - second)){
                    end = true
                    die.play();
                  }

            }
            else if(y1 >= height || y1 < 0){
                end = true
                die.play();
            }
            else if((pipe_x1 + pipe_upper.width*1.02 < 200 && pipe_x1+pipe_upper.width*1.02 > 200-pipe_velo) || (pipe_x2+pipe_upper.width*1.02 < 200 && pipe_x2+pipe_upper.width*1.02 > 200-pipe_velo)){
                digitOne += 1
                point.play();
            }

            // bird 
            vy += ay
            y1 += vy
            birdAng += 0.04
            translate(x1,y1)
            rotate(birdAng)
            // bird flapping
            if(count < 5){
                image(bird_u,0,0)
            }
            else if(count >= 5 && count < 10){
                image(bird_m,0,0)
            }
            else if(count >= 10 && count < 15){
                image(bird_d,0,0)
            }
            else if(count >= 15 && count < 20){
                count = 0
                image(bird_m,0,0)
            }
            count += 1            
        }
        else{
            image(gg,width/2-gg.width/2,height/2-gg.height/2)
            image(bird_u,x1,y1)
            y1 += 5
            rotate(birdAng)

        }
    }
    
}

function keyPressed() {
    if(keyCode === 32 && start == false){
        start = true
        vy = 1.2;
        ay = 0.2;

    }
    if(keyCode === 32 && end == false && start == true){
        vy = -5
        birdAng = -PI/4
        song.play();
        
    }
}

