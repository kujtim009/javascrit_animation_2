var tokenNr = 60;
var token_width_height = 70;
var token_distance_left = 50;
var speed = 100;

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

var mainDivWidth = $('#anim2').width();
var mainDivPosition = $('#anim2').position();
var tokenPosition_L = 0;
var tokenPosition_T = mainDivPosition.top + 15;

var row_index = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

for (x =1; x <= tokenNr; x++){
    image_index = getRandomInt(0, tokens_img.length);
    token_name = "small_token" + x;
    g = document.createElement('div');
    g.id = token_name;
    g.className = 'small_box';
    subdiv = document.createElement('div');
    subdiv.id = "small_sub_"+token_name;
    subdiv.className = 'small_namebox';
    g.appendChild(subdiv);
    var parentElement = document.getElementById("anim2");
    parentElement.appendChild(g);

    $("#small_sub_" + token_name).html(tokens_img[image_index][0]);
    $("#" + token_name).css("background-image", "url(img/" + tokens_img[image_index][1] + ")"); 
    $("#" + token_name).hover(function(){
        show_name(this);
      }); 

    $("#" + token_name).mouseout(function(){
        hide_name(this);
     });  

    var token = document.getElementById(token_name);
    token.style.left = tokenPosition_L + "px";
    token.style.top = tokenPosition_T + "px";
    token.style.width = token_width_height + "px";
    token.style.height = token_width_height + "px";

    tokenPosition_L = tokenPosition_L + token_width_height + token_distance_left;

}

var anim_token_end_position = -3000;

var set_opacity;

    for (x =1; x <= tokenNr; x++){
        token_name = "small_token" + x; 
        remove_opacity =TweenMax.to("#" + token_name, 10, { opacity: 0, repeat:0});
        set_opacity = TweenMax.to("#" + token_name, 2, { opacity: 1, repeat:0});
        
        mainAnim = TweenMax.to("#" + token_name, speed, {x: anim_token_end_position, repeat:0, z:0.1, force3D: true, rotationZ: 0.01, ease:Linear.easeNone, onComplete: function(){
            this.restart();
         },});

    }

function show_name(object){
    var object_name = object.id;
    TweenMax.to("#small_sub_" + object_name, 0.8, {y: +30, opacity: 1, repeat:0, ease: Back.easeOut.config(1.7)});
}

function hide_name(object){
    var object_name = object.id;
    TweenMax.to("#small_sub_" + object_name, 0.3, {y: -30, opacity: 0, repeat:0, ease: Power2.easeOut});
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
