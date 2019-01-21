var tokenNr = 60;
var token_width_height = 100;
var token_distance_left = 120;
var token_distance_top = 95;
var overflow_distance = 6150;
var speed = 200;

var tokens_img = [
    ["Apple","apple.png"],
    ["Firefox","Firefox.png"],
    ["Organization","icon-lg-organizations-blue2.png"],
    ["Company","unnamed.png"],
    ["Starbux","token3.png"], 
    ["Airline","airline_aircraft.png"], 
    ["TokenName","baaa.png"], 
    ["Dallas","dallas.png"], 
    ["Facebook","face.png"], 
    ["Gmail","gmail.png"], 
    ["Html5","html5.png"], 
    ["Messenger","msg.png"], 
    ["Rss","rss-flat.png"], 
    ["TripAdvisor","tripadvisor-dreamstale69.png"]
]

var mainDivWidth = $('#demo').width();
var mainDivPosition = $('#demo').position();
var tokenPosition_L = 0;
var tokenPosition_T = mainDivPosition.top + 15;
var randomPosition_L = 0;
var randomPosition_T = 0;
var randomPosition_WH = 0;
var row_index = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

for (x =1; x <= tokenNr; x++){
    randomPosition_L = getRandomInt(-20, 20);
    randomPosition_T = getRandomInt(-10, 10);
    randomPosition_WH = getRandomInt(-40, 40);
    image_index = getRandomInt(0, tokens_img.length);
    token_name = "token" + x;
    g = document.createElement('div');
    g.id = token_name;
    g.className = 'box';
    subdiv = document.createElement('div');
    subdiv.id = "sub_"+token_name;
    subdiv.className = 'namebox';
    g.appendChild(subdiv);
    var parentElement = document.getElementById("demo");
    parentElement.appendChild(g);

    $("#sub_" + token_name).html(tokens_img[image_index][0]);
    $("#" + token_name).css("background-image", "url(img/" + tokens_img[image_index][1] + ")"); 
    $("#" + token_name).hover(function(){
        show_name(this);
      }); 

    $("#" + token_name).mouseout(function(){
        hide_name(this);
     });  

    var token = document.getElementById(token_name);
    token.style.left = tokenPosition_L + randomPosition_L + "px";
    token.style.top = tokenPosition_T + randomPosition_T + "px";
    token.style.width = token_width_height + randomPosition_WH + "px";
    token.style.height = token_width_height + randomPosition_WH + "px";

    tokenPosition_L = tokenPosition_L + token_width_height + token_distance_left;
    if (tokenPosition_L >= mainDivWidth + overflow_distance){
        tokenPosition_T = tokenPosition_T + token_width_height + token_distance_top;
        if (row_index >=2) {tokenPosition_L = 0} else {tokenPosition_L = token_width_height;}
        row_index += 1;
    }
}

var anim_token_position = 0;
var anim_token_positon_L = 0;
var anim_token_positon_T = 0;
var anim_token_end_position = -3000;
var up_down_anim = 0;
var up_down_direction = 0;
var up_down_speed = 0;
var up_down_direction_2 = 0;
var left_right_anim = 0;
var kaotic_move;
var set_opacity;

    for (x =1; x <= tokenNr; x++){
        token_name = "token" + x; 
        anim_token_position = $('#' + token_name).position();
        anim_token_positon_L = anim_token_position.left;
        anim_token_positon_T = anim_token_position.top;

        up_down_anim = getRandomInt(10,30);
        if (anim_token_positon_T >=50 ) {up_down_anim = getRandomInt(-20,20);}
        left_right_anim = getRandomInt(-150,150);

        up_down_speed = getRandomInt(2,10);
        up_down_direction = getRandomInt(-1,1);
        if (up_down_direction == 1) { up_down_direction_2 = -1; } else if(up_down_direction == 0) {up_down_direction = 1; up_down_direction_2 = -1; } else { up_down_direction_2 = 1; }

        remove_opacity =TweenMax.to("#" + token_name, 10, { opacity: 0, repeat:0});
        set_opacity = TweenMax.to("#" + token_name, 2, { opacity: 1, repeat:0});
        
        mainAnim = TweenMax.to("#" + token_name, speed, {x: anim_token_end_position, repeat:0, z:0.1, force3D: true, rotationZ: 0.01, ease:Linear.easeNone, onComplete: function(){
            this.restart();
         },});

    }

function show_name(object){
    var object_name = object.id;
    TweenMax.to("#sub_" + object_name, 0.8, {y: +30, opacity: 1, repeat:0, ease: Back.easeOut.config(1.7)});
}

function hide_name(object){
    var object_name = object.id;
    TweenMax.to("#sub_" + object_name, 0.3, {y: -30, opacity: 0, repeat:0, ease: Power2.easeOut});
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

var myVar = setInterval(zigzag, 9000);
var scale = 0;
var scaleSpeed = 0;
var randomDelay;
function zigzag() {

    for (x =1; x <= tokenNr; x++){
        
        token_name = "token" + x; 
        anim_token_position = $('#' + token_name).position();
        anim_token_positon_L = anim_token_position.left;
        anim_token_positon_T = anim_token_position.top;

        scale = getRandomArbitrary(0.7,1.2);
        randomDelay = getRandomArbitrary(0.5,9);

        up_down_speed = getRandomInt(2,10);
        scaleSpeed = getRandomInt(5,15);
        up_down_anim = getRandomInt(10,30);
        if (anim_token_positon_T >=50 ) {up_down_anim = getRandomInt(-20,20);}
        left_right_anim = getRandomInt(-30,30);

        TweenMax.to("#" + token_name, up_down_speed, {y: up_down_anim+"px", delay:randomDelay});
        TweenMax.to("#" + token_name, scaleSpeed, {scale:scale, ease: Power2.easeOut, delay:randomDelay});
    }

}
zigzag();
