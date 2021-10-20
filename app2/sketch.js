var login;
var search;
var results;
var map;
var map2;
var chat;
var mode;
var xloc;
var yloc;

function preload () {
  login = loadImage('assets/login.png');
  search = loadImage('assets/search.png');
  results = loadImage('assets/results.png');
  map = loadImage('assets/map.png');
  map2 = loadImage('assets/map2.png');
  chat = loadImage('assets/chat.png');
}

function setup() {
  createCanvas(390, 844);
  mode = 0;
}

function draw() {
  background(128);

if (mode==0) {
  image(login,0,0);
  } else if (mode==1) {
    image(search, 0,0);
  } else if (mode==2) {
    image(results,0,0);
  } else if (mode==3) {
    image(map,0,0);
  } else if (mode==4) {
    image(map2,0,0);
  } else if (mode==5) {
    image(chat,0,0);
  }
}

function mousePressed() {

  if (mode==0) {
    mode=1;
  }

  else if (mode==1) {
      mode=2;
    }

  else if (mode==2) {
        mode=3;
    }

  else if (mode==3) {
          mode=4;
    }

  else if (mode==4) {
          mode=5;
    }

  else if (mode==5) {
            mode=1;
    }

}
