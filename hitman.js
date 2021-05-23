/***
 * 
 * This project is open collab. If you would like to help, comment below.
 * 
 * Credit to OOPS! Studio! for helping Game Logic
 * 
 * Want a idea in the game? Comment it in the t&t!
 * 
 * Thanks so much for the support <3
 * hi thanks for viewing
 * 
 * Start Date: May 13, 2021
 * Finished Date: May 17, 2021
 * 
 * User Ideas Todo:
 * sticky blocks
 * level creator
 * character customization
 * enemies
 * self damage
 * bodyguards
 * movement
 * different bullets
 * 
***/

//im making this hackable
var userdata = {
    weapons: [true, false],
    weapon_equipped: [true, false],
    bgs: [true, false],
    bg_equipped: [true, false]
};

//backgrounds
var bgart = [
    [2,2,1,1,1,1,1,1],
    [1,1,2,1,1,1,2,1],
    [1,1,1,2,1,1,2,2],
    [3,1,1,1,2,1,2,1],
    [3,3,3,1,1,2,2,1],
    [3,3,1,1,2,2,1,1],
    [3,3,1,2,2,1,2,1],
    [3,1,1,2,1,1,2,2],
    [3,1,2,2,1,1,1,2],
    [1,1,2,1,1,1,1,1],
    [1,2,1,1,3,3,1,1],
    [2,2,1,3,3,3,3,3]
];

var colors = [
color(0),
color(70, 255, 70),
color(89, 0, 0),
color(70, 100, 200)
];

var bg = function(bgnum, x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    noStroke();
    switch(bgnum){
        case 1:
        for(var y = 0; y < bgart.length; y++){
            for(var x = 0; x < bgart[y].length; x++){
                fill(colors[bgart[y][x]]);
                noStroke();
                rect(x + x*49, y + y*49,50,50);
            }
        }
        break;
    }
    popMatrix();
};

//So canvas size doesnt break
size(400,600,P2D);

if(frameCount < 10){
println('\nNot enough features? or not enough levels? You can help give ideas in the thread inside of tips & thanks!');
println('\nOur community took over the hotlist! Thanks for the support');
}

var scene = 'logo';

//dev stuff, press left arrow key to enable
var debugmode = false;

//cash
var cash = 0;
var addcash = false;

//key stuff
var input = [];
keyPressed = function(){input[keyCode]=true;};
keyReleased = function(){input[keyCode]=false;};

//transition
var running = false;
var t = {
    s: 800,
    ch: 200,
    active: false,
    o: 255,
    starto: false,
    tch: false,
    g: 0,
    next: '',
    run : function(){
        noStroke();
        running = true;
        if(this.starto){
            fill(255, this.o);
            rect(0, 0, width, height);
            this.o /= 1.1;
        }
        stroke(50);
        strokeWeight(500);
        noFill();
        ellipse(200, 300, 700+this.s, 700+this.s);
        this.s/=1.2;
        if(round(this.s) <= 1){
            this.tch = true;
        }
        
        if(this.tch){
            fill(50);
            noStroke();
            rect(90+this.ch, 295, 250, 10);
            rect(195, 190+this.ch, 10, 250);
            this.ch /= 1.2;
            if(round(this.ch) <= 1){
                this.starto = true;
                scene = this.next;
            }
        }
        
        this.ch += this.g;
        if(this.ch > 400 && this.starto){
            this.s += this.g;
            if(this.s > 800){
                t.s = 800;
                t.ch = 200;
                t.o = 255;
                t.starto = false;
                t.tch = false;
                t.g = 0;
                t.active = false;
            }
        }
        
        if(this.o <= 50){
            this.g += 2;
        }
        
        noStroke();
        
    }
};

//fancy graphics
var sniper = function(x, y, s) {
    pushMatrix();
    scale(s);
    translate(x, y);
    fill(50);
    noStroke();
    
    beginShape();
    vertex(100, 150);
    vertex(10, 150);
    vertex(10, 250);
    vertex(100, 200);
    endShape();
    
    fill(50);
    beginShape();
    vertex(274, 100);
    vertex(302, 100);
    vertex(302, 141);
    vertex(274, 115);
    vertex(274, 103);
    vertex(213, 100);
    vertex(213, 84);
    vertex(352, 84);
    vertex(364, 73);
    vertex(406, 73);
    vertex(406, 106);
    vertex(366, 106);
    vertex(357, 100);
    vertex(278, 103);
    endShape();
    
    fill(30);
    beginShape();
    vertex(100, 150);
    vertex(120, 170);
    vertex(160, 120);
    vertex(200, 120);
    vertex(130, 230);
    vertex(100, 230);
    endShape();
    
    fill(30);
    beginShape();
    vertex(199, 120);
    vertex(166, 171);
    vertex(393, 154);
    vertex(408, 128);
    vertex(589, 129);
    vertex(597, 110);
    vertex(203, 111);
    endShape();
    
    popMatrix();
};
var assaultrifle = function(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s);
    fill(50);
    beginShape();
    vertex(50, 100);
    vertex(50, 250);
    vertex(100, 250);
    vertex(150, 170);
    vertex(200, 170);
    vertex(220, 150);
    vertex(250, 150);
    vertex(250, 70);
    vertex(200, 70);
    vertex(150, 100);
    endShape();
    
    fill(30);
    beginShape();
    vertex(250, 100);
    vertex(250, 150);
    vertex(300, 150);
    vertex(350, 200);
    vertex(350, 240);
    vertex(300, 290);
    vertex(380, 310);
    vertex(380, 290);
    vertex(420, 200);
    vertex(430, 150);
    vertex(480, 150);
    vertex(480, 200);
    vertex(495, 200);
    vertex(500, 390);
    vertex(580, 390);
    vertex(560, 200);
    vertex(585, 200);
    vertex(570, 150);
    vertex(730, 150);
    vertex(730, 125);
    vertex(780, 125);
    vertex(780, 120);
    vertex(900, 120);
    vertex(900, 140);
    vertex(930, 130);
    vertex(930, 120);
    vertex(1100, 120);
    vertex(1150, 130);
    vertex(1150, 90);
    vertex(1100, 100);
    vertex(780, 100);
    vertex(780, 80);
    vertex(750, 50);
    vertex(750, 20);
    vertex(730, 20);
    vertex(730, 50);
    vertex(330, 50);
    vertex(250, 70);
    endShape();
    
    popMatrix();
};
var dl = function(x, y, sz, r, bgcol){
    pushMatrix();
        translate(x, y);
        scale(sz);
        rotate(r);
        noStroke();
        
        for(var i = -1; i <= 1; i += 2){
            pushMatrix();
            scale(i, 1);
            translate(-1, 1);
            fill(255, 255, 255);
            beginShape();
            vertex(0, -83);
            bezierVertex(65, -80, 54, -79, 43, -75);
            vertex(38, -94);
            bezierVertex(74, -85, 89, -82, 103, -65);
            bezierVertex(119, -37, 126, -5, 144, 67);
            bezierVertex(133, 90, 94, 111, 58, 111);
            vertex(49, 99);
            bezierVertex(68, 95, 104, 77, 100, 61);
            bezierVertex(74, 83, 64, 93, 0, 94);
            endShape();
            fill(bgcol);
            ellipse(43, 27, 44, 48);
            popMatrix();
        }
    popMatrix();
};

var clicked = false,
mouseClicked=function(){
    clicked = true;
};

var cover = function(ex, ey, r, ox, oy){
    if(dist(ox, oy, ex, ey) <= r/2){
        return true;
    }
};
var sover = function(sx, sy, sw, sh){
    if(mouseX>sx&&mouseX<sx+sw&&mouseY>sy&&mouseY<sy+sh){
        cursor('POINTER');
        return true;
    }
};
var bover = function(sx, sy, sw, sh, px, py){
    if(px>sx&&px<sx+sw&&py>sy&&py<sy+sh){
        return true;
    }
};

var btn = function(x, y, w, h, next){
    this.x = x; this.y = y; this.w = w; this.h = h; this.n = next; this.d = 50; this.dr = 3; this.wc = 50; this.wr = 3;
};
btn.prototype.draw = function() {
    fill(150+this.d);
    if(sover(this.x-10+this.wc/2, this.y, this.w+20-this.wc, this.h)){
        this.d /= 1.1;
        this.wc /= 1.1;
        this.dr = 3;
        this.wr = 3;
        if(clicked && !running){
            t.active = true;
            t.next = this.n;
        }
    }else{
        this.d += this.dr;
        this.dr /= 1.05;
        this.wc += this.wr;
        this.wr /= 1.05;
    }
    rect(this.x-10+this.wc/2, this.y, this.w+20-this.wc, this.h);
    this.wc = constrain(this.wc, 0, 50);
    this.d = constrain(this.d, 0, 50);
};

var b1 = new btn(100, 375, 200, 50, "play");
var b2 = new btn(100, 440, 200, 50, "credits");
var b3 = new btn(100, 440, 200, 50, "menu");
var b4 = new btn(100, 440, 200, 50, "shop");
var b5 = new btn(100, 475, 200, 50, "play");

//level config{

var walls = [];
var fwalls = [];

function getClosestPointOnLine(x1,y1,x2,y2,detectx,detecty){
    var ystep = (y1 - y2) / (x1 - x2);
    var xstep = (x1 - x2) / (y1 - y2);
    var goodx = x1 < x2;
    var goody = y1 < y2;
    if(abs(x1 - x2) > abs(y1 - y2)){
        return({x: constrain(detectx,goodx ? x1 : x2,goodx ? x2 : x1),y: constrain((ystep * (detectx - x1)) + y1,goody ? y1 : y2,goody ? y2 : y1)});
    }else{
        return({x: constrain((xstep * (detecty - y1)) + x1,goodx ? x1 : x2,goodx ? x2 : x1),y: constrain(detecty,goody ? y1 : y2,goody ? y2 : y1)});
    }
}
function loopAfter360(val){
    return(val % 360);
}

//game stuff
var win = false;

//bullet stuff
var shots = 3;
var shot = false;

function Bullet(x,y,r){
    this.x = x;
    this.y = y;
    this.r = loopAfter360(r);
    if(userdata.weapon_equipped[0]){this.speed = 6;}
    if(userdata.weapon_equipped[1]){this.speed = 8;}
}
Bullet.prototype.draw = function(){
    fill(0,0,0);
    noStroke();
    ellipse(this.x,this.y,5,5);
    
    this.x += cos(this.r) * this.speed;
    this.y += sin(this.r) * this.speed;
    
    for(var i = 0;i < walls.length;i++){
        var curWall = walls[i];
        var cpol = getClosestPointOnLine(curWall.x1,curWall.y1,curWall.x2,curWall.y2,this.x,this.y);
        if(dist(cpol.x,cpol.y,this.x,this.y) < this.speed / 1.5){
            this.r = curWall.r - (this.r - curWall.r);
        }
    }
    for(var i = 0;i < fwalls.length;i++){
        var curWall = fwalls[i];
        var cpol = getClosestPointOnLine(curWall.x1,curWall.y1,curWall.x2,curWall.y2,this.x,this.y);
        if(dist(cpol.x,cpol.y,this.x,this.y) < this.speed / 1.5){
            fwalls.splice(i, 1);
            this.r = curWall.r - (this.r - curWall.r);
        }
    }
};
var bullets = [];

//player stuff
var player = function(x, y){
    this.x = x;
    this.y = y;
    this.s = 50;
    this.turn = 0;
};
player.prototype.draw = function() {
    fill(255, 220, 133);
    noStroke();
    ellipse(this.x, this.y, 50, 50);
};
player.prototype.shoot = function(){
    pushMatrix();
    var rotation = new PVector(mouseX - this.x, mouseY - this.y);
    if(!shot && shots > 0 &&!running){
        this.turn = rotation.heading();
    }
    translate(this.x, this.y);
    rotate(this.turn+0);
    fill(50);
    if(userdata.weapon_equipped[0]){
        sniper(140, -140, 0.1);
    }
    if(userdata.weapon_equipped[1]){
        assaultrifle(23, -8, 0.05);
    }
    popMatrix();
    
    if(clicked&&!shot&&shots > 0&&!running){
        bullets.push(new Bullet(this.x,this.y,atan2(mouseY - this.y,mouseX - this.x)));
        shot = true;
    }

    for(var i = 0;i < bullets.length;i++){
        bullets[i].draw();
        if(bullets[i].x < -10 || bullets[i].x > 410 || bullets[i].y < -10 || bullets[i].y > 610){
            bullets.splice(i,1);
            shot = false;
            shots -= 1;
        }
        /*if(cover(this.x, this.y, this.s, bullets[i].x, bullets[i].y)){
            bullets.splice(i,1);
            shots = 0;
            shot = false;
        }*/
    }

};

var p = new player(200, 300);

//target stuff
var target = function(x, y, c){
    this.x = x;
    this.y = y;
    this.s = 50;
    this.color = c;
};
target.prototype.draw = function() {
    if(this.color === 1){
        fill(255, 220, 133);
    }
    else{
        fill(77, 0, 0);
    }
    ellipse(this.x, this.y, this.s, this.s);
    if(bullets.length > 0){
        if(cover(this.x, this.y, this.s, bullets[0].x, bullets[0].y)){
            bullets.splice(0, 1);
            win = true;
        }
    }
};

//}

var ab = [];

//obsicles {

function Wall(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.r = loopAfter360(atan2(this.y2 - this.y1,this.x2 - this.x1));
}
Wall.prototype.draw = function(){
    stroke(0);
    strokeWeight(4);
    line(this.x1,this.y1,this.x2,this.y2);
    noStroke();
};

function FakeWall(x1,y1,x2,y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.r = loopAfter360(atan2(this.y2 - this.y1,this.x2 - this.x1));
}
FakeWall.prototype.draw = function(){
    stroke(50);
    strokeWeight(4);
    line(this.x1,this.y1,this.x2,this.y2);
    noStroke();
};

function Lava(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
Lava.prototype.draw = function() {
    noStroke();
    fill(200, 70, 70);
    rect(this.x, this.y, this.w, this.h, 10+cos(frameCount * 2) * 10);
    for(var i = 0; i < bullets.length; i++){
        if(bover(this.x, this.y, this.w, this.h, bullets[i].x, bullets[i].y)){
            bullets.splice(i, 1);
            shots -= 1;
            shot = false;
        }
    }
};

function AmmoBox(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
AmmoBox.prototype.draw = function() {
    noStroke();
    fill(87, 0, 0);
    rect(this.x, this.y, this.w, this.h, 10+cos(frameCount * 2) * 10);
    for(var i = 0; i < bullets.length; i++){
        if(bover(this.x, this.y, this.w, this.h, bullets[i].x, bullets[i].y)){
            bullets.splice(i, 1);
            shots += 1;
            shot = false;
            ab.splice(0, 1);
        }
    }
};

//}

var menu = function(){

    background(100);
    textAlign(CENTER, CENTER);
    textFont(createFont('Aerial Bold'), 80);
    fill(255, 150+sin(frameCount * 2) * 150/2, 0);
    text('Hit-Man', 200, 100);
    b1.draw();
    b2.draw();
    fill(0);
    textFont(createFont('Aerial Bold Italic'), 40);
    text('Play', 200, 400);
    text('Credits', 200, 465);
    pushMatrix();
    translate(100, 140);
    rotate(0+sin(frameCount * 2) * 5);
    sniper(0, 0, 0.4);
    popMatrix();
    
    pushMatrix();
    translate(200, 300);
    rotate(0+sin(frameCount * 3) * 25);
    fill(255);
    textSize(round(20+sin(frameCount * 2) * 5));
    text('Levels Levels levels!', 0, 0);
    popMatrix();

};

var credits = function(){
    background(100);
    textAlign(CENTER, CENTER);
    textFont(createFont('Aerial Bold'), 80);
    fill(255, 150+sin(frameCount * 2) * 150/2, 0);
    text('Hit-Man', 200, 100);
    b1.draw();
    b3.draw();
    fill(0);
    textFont(createFont('Aerial Bold Italic'), 40);
    text('Play', 200, 400);
    text('Menu', 200, 465);
    textSize(20);
    text('Programmer/Graphic Artist: Azzuli\nGame Logic Helper: OOPS! Studio!', 200, 250);
};

//idk if ill use this, but its here
var cam = {
x: 0,
y:0,
};

var sy = 75;
var ls = function(){
    background(255, 70, 70);
    //scroll
    fill(50);
    
    if(sover(370-sy, 550, 20, 20)){
        mouseDragged = function(){
            sy -= mouseX-pmouseX;
            if(sy < 75){
                sy = 75;
            }
            if(sy > 285){
                sy = 285;
            }
        };
    }
    
    var lsb = [
        [150-sy,150,"1"],[250-sy,150,"2"],[350-sy,150,"3"],[450-sy,150,"10"],
        [150-sy,250,"4"], [250-sy,250,"5"], [350-sy,250,"6"],
        [150-sy,350,"7"], [250-sy,350,"8"], [350-sy,350,"9"]
    ];
    
    textFont(createFont("trebuchet MS Bold"), 30);
    //level buttons
    pushMatrix();
    for(var i = 0; i < lsb.length; i++){
        fill(50);
        if(sover(lsb[i][0], lsb[i][1], 50, 50, mouseX, mouseY)){
            fill(100);
            if(clicked&&!running){
                t.active = true;
                t.next = 'level'+lsb[i][2];
            }
        }
        rect(lsb[i][0], lsb[i][1], 50, 50, 20);
        fill(255);
        text(lsb[i][2], lsb[i][0]+25, lsb[i][1]+25);
    }
    popMatrix();
    //text on top
    fill(255, 70, 70);
    rect(0, 0, width, 100);
    fill(0);
    if(frameCount%50 < 25){
        textFont(createFont("trebuchet MS Bold Italic"), 50);
    }else{
        textFont(createFont("trebuchet MS Bold"), 50);
    }
    textAlign(CENTER, CENTER);
    text('Level Select', 200, 50);
    fill(255);
    textFont(createFont("trebuchet MS Bold"), 30);
    text("$"+cash, 200, 90);
    
    b4.draw();
    fill(0);
    text('Shop', 200, 465);
    
    textSize(20);
    text('Drag\nV', -sy+380, 530);
    rect(370-sy, 550, 20, 20);
    
};

var close = {
    active : false,
    o: 0,
    or: 15,
    run : function(){
        fill(0, this.o);
        this.o += this.or;
        this.or /= 1.1;
        rect(0, 0, width, height);
        fill(255);
        textFont(createFont('Aerial Italic'), 20);
        textAlign(CENTER, CENTER);
        text('Game Over.', 200, 300);
        if(round(this.or) === 0){
            t.active = true;
            t.next = "play";
        }
    }
};
var wins = {
    active : false,
    o: 0,
    or: 15,
    run : function(){
        fill(0, this.o);
        this.o += this.or;
        this.or /= 1.1;
        rect(0, 0, width, height);
        fill(255);
        textFont(createFont('Aerial Italic'), 20);
        textAlign(CENTER, CENTER);
        text('Nice Shot! You Win!', 200, 300);
        if(round(this.or) === 0){
            t.active = true;
            t.next = "play";
        }
    }
};

var p = new player(200, 300);
var pl5 = new player(200, 100);

var tx = 200, ty = 500;

var locations = [[25,25],[375,575],[172,192],[352,524],[154,142],[25,572]];
var goto = round(random(0, locations.length-1));

var levels = function(level){
    if(userdata.bg_equipped[0]){
        background(200);
    }else if(userdata.bg_equipped[1]){
        bg(1, 0, 0, 1);
    }
    switch(level){
        //level 1{
        case 1:
            fwalls = [];
            strokeWeight(1);
    
            p.shoot();
            p.draw();
            
            walls = [];
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Welcome to Hit-Man\nYou\'re the one in the black and white circle\nFor this level, your target is in a green circle.\nYour goal is to kill the target in 3 or less shots.', 200, 150);
            noFill();
            stroke(0, 255, 0);
            if(cover(100, 500, 50, mouseX, mouseY)){
                fill(0);
                text('Click to kill the target.', 200, 580);
            }
            new target(100, 500, 1).draw();
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 0;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 2{
        case 2:
            fwalls = [];
            strokeWeight(1);
            
            p.shoot();
            p.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 2, try the reflect box!', 200, 150);
            noFill();
            stroke(0, 255, 0);
            new target(100, 550, 1).draw();
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 15;
                addcash = false;
            }
            
            walls = [new Wall(20, 400, 20, 500),
            new Wall(200, 450, 200, 550),
            new Wall(100, 400, 200, 450),
            new Wall(50, 400, 100, 400)];
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            noStroke();
            
        break;
        //}
        //level 3{
        case 3:
            fwalls = [];
            strokeWeight(1);
            
            p.shoot();
            p.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 3, Do you got the hang of this?', 200, 150);
            noFill();
            stroke(0, 255, 0);
            new target(250, 525, 1).draw();
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            walls = [new Wall(0, 350, 250, 350),
            new Wall(350, 350, 250, 450),
            new Wall(350, 350, 250, 250),
            new Wall(100, 350, 50, 550),
            ];
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(addcash){
                cash += 30;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 4{
        case 4:
            fwalls = [];
            strokeWeight(1);
            
            p.shoot();
            p.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 4, Watch out for lava!', 200, 150);
            noFill();
            stroke(0, 255, 0);
            new target(200, 550, 1).draw();
            
            walls = [new Wall(50, 350, 50, 600),new Wall(350, 350, 350, 600),];
            
            new Lava(100, 400, 200, 50).draw();
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 45;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 5{
        case 5:
            fwalls = [];
            strokeWeight(1);
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 5, Do a trickshot!', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(200, 550, 1).draw();
            
            walls = [new Wall(50, 300, 40, 350),new Wall(40, 450, 90, 500),new Wall(200, 450, 300, 550),new Wall(200, 600, 300, 550),new Wall(200, 450, 100, 450),new Wall(40, 550, 100, 600),];
            
            new Lava(100, 300, 100, 100).draw();
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 60;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 6{
        case 6:
            strokeWeight(1);
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 6, you got one shot! The gray walls are walls that last\none shot', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(250+cos(frameCount * 2) * 50, 550, 1).draw();
            
            walls = [new Wall(100, 300, 300, 300), new Wall(100, 300, 100, 400)];
            if(bullets.length < 1){
                fwalls = [new FakeWall(60, 550, 200, 600), new FakeWall(50, 250, 40, 300), new FakeWall(250, 400, 350, 500),];
            }
            
            new Lava(200, 350, 50, 50).draw();
            new Lava(350, 500, 50, 50).draw();
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 100;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 7{
        case 7:
            strokeWeight(1);
            
            if(round(t.o) === 1){
                ab = [new AmmoBox(50, 250, 50, 50)];
            }
            
            for(var x = 0; x < ab.length; x++){
                ab[x].draw();
            }
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 7, Brown boxes = ammo boxes!\nYou get one extra shot.', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(250+cos(frameCount * 2) * 50, 450, 1).draw();
            
            walls = [new Wall(150, 300, 500, 300), new Wall(150, 300, 300, 400), new Wall(0, 450, 100, 560)];
            if(bullets.length < 1){
                fwalls = [new FakeWall(100, 560, 300, 600),new FakeWall(400, 300, 300, 600)];
            }
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 150;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 8{
        case 8:
            strokeWeight(1);
            
            if(round(t.o) === 1){
                ab = [];
            }
            
            for(var x = 0; x < ab.length; x++){
                ab[x].draw();
            }
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 8', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(200+cos(frameCount * 2) * 50, 450+sin(frameCount * 2) * 50, 1).draw();
            
            walls = [];
            if(bullets.length < 1){
                fwalls = [new FakeWall(150-sin(frameCount * 5) * 100, 300, 250+sin(frameCount * 5) * 100, 300),new FakeWall(0, 50, 400, 50),new FakeWall(50, 500, 100, 550),new FakeWall(350, 500, 300, 550)];
            }
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 250;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 9{
        case 9:
            strokeWeight(1);
            
            if(round(t.o) === 1){
                ab = [];
            }
            
            for(var x = 0; x < ab.length; x++){
                ab[x].draw();
            }
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 9', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(200+tan(frameCount * 1) * 5, 450, 1).draw();
            
            walls = [];
            if(bullets.length < 1){
                fwalls = [new FakeWall(100, 300, 250, 400),new FakeWall(300, 300, 400, 400),new FakeWall(200, 520, 440, 420)];
            }
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 250;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
        //level 10{
        case 10:
            strokeWeight(1);
            
            if(round(t.o) === 1){
                ab = [new AmmoBox(175, 450, 50, 50)];
            }
            
            for(var x = 0; x < ab.length; x++){
                ab[x].draw();
            }
            
            pl5.shoot();
            pl5.draw();
            
            fill(0);
            textFont(createFont('Aerial Italic'), 15);
            textSize(15);
            text('Level 10', 200, 200);
            noFill();
            stroke(0, 255, 0);
            new target(tx, ty, 0).draw();
            
            if(tx > locations[goto][0]){
                tx -= 5;
            }
            if(tx < locations[goto][0]){
                tx += 5;
            }
            if(ty > locations[goto][1]){
                ty -= 5;
            }
            if(ty < locations[goto][1]){
                ty += 5;
            }
            
            if(frameCount%20 === 0){
                goto = round(random(0, locations.length-1));
            }   
            
            walls = [];
            if(bullets.length < 1){
                fwalls = [];
            }
            
            if(walls.length > 0){
                for(var i = 0;i < walls.length;i++){
                    walls[i].draw();
                }
            }
            
            if(fwalls.length > 0){
                for(var i = 0;i < fwalls.length;i++){
                    fwalls[i].draw();
                }
            }
            
            if(win){
                wins.active = true;
                addcash = true;
                win = false;
            }
            if(wins.active){
                wins.run();
            }
            if(shots === 0 && bullets.length === 0 && !win){
                close.active = true;
            }
            if(close.active){
                close.run();
            }
            
            if(addcash){
                cash += 250;
                addcash = false;
            }
            
            noStroke();
            
        break;
        //}
    }
    fill(0);
    text("Shots left: "+shots, 50, 20);
    
};

var category = 'weapons';
var weaponnum = 1;
var bgnum = 1;

var shop = function(){
    background(70, 70, 255);
    
    b5.draw();
    fill(0);
    textFont(createFont("trebuchet MS Bold"), 30);
    textAlign(CENTER, CENTER);
    text('Play', 200, 500);
    
    textFont(createFont("trebuchet MS Bold"), 50);
    text('Shop', 200, 50);
    
    fill(150);
    if(sover(25, 100, 150, 50)){
        fill(200);
        if(clicked){
            category = 'weapons';
        }
    }
    rect(25, 100, 150, 50);
    
    fill(150);
    if(sover(225, 100, 150, 50)){
        fill(200);
        if(clicked){
            category = 'backgrounds';
        }
    }
    rect(225, 100, 150, 50);
    
    fill(0);
    textSize(25);
    text('Weapons          Backgrounds', 210, 125);
    
    if(category === 'weapons'){
        fill(200);
        rect(100, 200, 200, 200, 20);
        
        fill(200);
        if(sover(25, 275, 50, 50)){
            fill(150);
            if(clicked){
                if(weaponnum -1 === 0){
                    weaponnum = 2;
                }else{
                    weaponnum -= 1;
                }
            }
        }
        rect(25, 275, 50, 50, 20);
        
        fill(200);
        if(sover(325, 275, 50, 50)){
            fill(150);
            if(clicked){
                if(weaponnum +1 === 3){
                    weaponnum = 1;
                }else{
                    weaponnum += 1;
                }
            }
        }
        rect(325, 275, 50, 50, 20);
        
        if(weaponnum === 1){
            fill(0);
            text("$0", 200, 380);
            sniper(375, 850, 0.3);
            if(userdata.weapons[0]){
                fill(200);
                if(sover(140, 410, 120, 40)){
                    fill(150);
                    if(clicked){
                        userdata.weapon_equipped[0] = true;
                        userdata.weapon_equipped[1] = false;
                    }
                }
                rect(140, 410, 120, 40, 20);
                fill(0);
                if(!userdata.weapon_equipped[0]){text("Equip", 200, 430);}
                else{{text("Equipped", 200, 430);}}
                
            }
        }
        if(weaponnum === 2){
            fill(0);
            text("$1,000", 200, 380);
            assaultrifle(100, 270, 0.17);
            if(userdata.weapons[1]){
                fill(200);
                if(sover(140, 410, 120, 40)){
                    fill(150);
                    if(clicked){
                        userdata.weapon_equipped[1] = true;
                        userdata.weapon_equipped[0] = false;
                    }
                }
                rect(140, 410, 120, 40, 20);
                fill(0);
                if(!userdata.weapon_equipped[1]){text("Equip", 200, 430);}
                else{{text("Equipped", 200, 430);}}
                
            }else{
                fill(200);
                if(sover(150, 410, 100, 40)){
                    fill(150);
                    if(clicked){
                        if(cash >= 1000){
                            userdata.weapons[1] = true;
                            cash -= 1000;
                        }else{
                            translate(random(-5, 5), random(-5, 5));
                            fill(255, 0, 0);
                        }
                    }
                }
                rect(150, 410, 100, 40, 20);
                fill(0);
                text("Buy", 200, 430);
            }
        }
        
    }else{
        fill(200);
        rect(100, 200, 200, 200, 20);
        
        fill(200);
        if(sover(25, 275, 50, 50)){
            fill(150);
            if(clicked){
                if(bgnum -1 === 0){
                    bgnum = 2;
                }else{
                    bgnum -= 1;
                }
            }
        }
        rect(25, 275, 50, 50, 20);
        
        fill(200);
        if(sover(325, 275, 50, 50)){
            fill(150);
            if(clicked){
                if(bgnum +1 === 3){
                    bgnum = 1;
                }else{
                    bgnum += 1;
                }
            }
        }
        rect(325, 275, 50, 50, 20);
        
        if(bgnum === 1){
            fill(0);
            text("$0", 200, 380);
            text('Solid BG', 200, 300);
            if(userdata.bgs[0]){
                fill(200);
                if(sover(140, 410, 120, 40)){
                    fill(150);
                    if(clicked){
                        userdata.bg_equipped[0] = true;
                        userdata.bg_equipped[1] = false;
                    }
                }
                rect(140, 410, 120, 40, 20);
                fill(0);
                if(!userdata.bg_equipped[0]){text("Equip", 200, 430);}
                else{{text("Equipped", 200, 430);}}
                
            }
        }
        if(bgnum === 2){
            fill(0);
            text("$1,000", 200, 380);
            bg(1, 160, 240, 0.2);
            if(userdata.bgs[1]){
                fill(200);
                if(sover(140, 410, 120, 40)){
                    fill(150);
                    if(clicked){
                        userdata.bg_equipped[1] = true;
                        userdata.bg_equipped[0] = false;
                    }
                }
                rect(140, 410, 120, 40, 20);
                fill(0);
                if(!userdata.bg_equipped[1]){text("Equip", 200, 430);}
                else{{text("Equipped", 200, 430);}}
                
            }else{
                fill(200);
                if(sover(150, 410, 100, 40)){
                    fill(150);
                    if(clicked){
                        if(cash >= 1000){
                            userdata.bgs[1] = true;
                            cash -= 1000;
                        }else{
                            translate(random(-5, 5), random(-5, 5));
                            fill(255, 0, 0);
                        }
                    }
                }
                rect(150, 410, 100, 40, 20);
                fill(0);
                text("Buy", 200, 430);
            }
        }
    }
    
    fill(0);
    text('cash: $'+cash, 200, 220);
    
};

draw = function() {
    background(100);
    textFont(createFont("trebuchet MS Bold"), 50);
    textAlign(CENTER, CENTER);
    noStroke();
    text('Scene: '+scene, 200, 300);
    cursor();
    switch(scene){
        case "logo":
            
            textAlign(CENTER, CENTER);
            background(0);
            textFont(createFont('Aerial Bold'), 80);
            fill(255, 150+sin(frameCount * 2) * 150/2, 0);
            text('Hit-Man', 200, 300);
            
            if(frameCount > 50){
                t.active = true;
                t.next = 'menu';
            }
            
        break;
        case "menu":
            menu();
            if(sover(330, 524, 60, 50)){
                if(clicked){
                    println('\nKA Development Discord: https://discord.gg/MjR9JyAdrZ');
                }
            }
            dl(360, 550, 0.2, 0, 100);
            
        break;
        case "credits":
            credits();
            if(sover(330, 524, 60, 50)){
                if(clicked){
                    println('\nKA Development Discord: https://discord.gg/MjR9JyAdrZ');
                }
            }
            dl(360, 550, 0.2, 0, 100);
        break;
        case "play":
            ls();
            
            //reset
            shots = 3;
            shot = false;
            bullets = [];
            win = false;
            wins.active = false;
            close.active = false;
            tx = 200;
            ty = 300;
            
            if(sover(330, 524, 60, 50)){
                if(clicked){
                    println('\nKA Development Discord: https://discord.gg/MjR9JyAdrZ');
                }
            }
            dl(360, 550, 0.2, 0, color(255, 70, 70));
            
        break;
        case "level1":
            levels(1);
        break;
        case "level2":
            levels(2);
        break;
        case "level3":
            levels(3);
        break;
        case "level4":
            levels(4);
        break;
        case "level5":
            levels(5);
        break;
        case "level6":
            levels(6);
        break;
        case "level7":
            levels(7);
        break;
        case "level8":
            levels(8);
        break;
        case "level9":
            levels(9);
        break;
        case "level10":
            levels(10);
        break;
        case "shop":
            shop();
            if(sover(330, 524, 60, 50)){
                if(clicked){
                    println('\nKA Development Discord: https://discord.gg/MjR9JyAdrZ');
                }
            }
            dl(360, 550, 0.2, 0, color(70, 70, 255));
        break;
    }
    if(t.active){
        t.run();
    }else{
        running = false;
    }
    if(input[LEFT]){
        if(!debugmode){
        debugmode = true;
        }else{
        debugmode=false;
        }
        input[LEFT] = false;
    }
    if(input[RIGHT]){
        cash += 5000;
        input[RIGHT] = false;
    }
    clicked = false;
    
    if(debugmode){
        textFont(createFont("trebuchet MS"), 20);
        fill(255, 0, 0);
        noStroke();
        text(mouseX, 200, 20);
        text(mouseY, 200, 40);
        rect(0, mouseY, width, 1);
        rect(mouseX, 0, 1, height);
        text(round(this.__frameRate), 380, 580);
    }
    
};
