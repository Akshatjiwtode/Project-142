music1 = "";
music2 = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



function preload(){
    music1 = loadSound("Faded.mp3");
    music2 = loadSound("Coppines.mp3");
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();

    video = createCapture(VIDEO)
    video.size(640,480);
    video.center();
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,640,480);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotPoses(results){
    if(results > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}