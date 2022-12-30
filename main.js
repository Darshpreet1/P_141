sound1 = "";
sound2 = "";

function setup(){
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function preload(){
    sound1 =  loadSound("music.mp3");
    sound2 = loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500)
}