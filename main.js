noseX= 0;
noseY= 0;
leftX= 0;
leftY= 0;
function preload(){
 clown_nose= loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
 clown_specs= loadImage('https://i.postimg.cc/fbvQtWWt/without-background-specs.png');
}

function setup(){
    canvas= createCanvas(300 ,300);
    canvas.center();
   video= createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   posenet = ml5.poseNet(video, modelLoaded);
   posenet.on('pose',gotposes)
}

function draw(){
 image(video, 0,0,300,300)
 image(clown_nose,noseX,noseY, 30,30);
 image(clown_specs,leftX,leftY,120, 150);
}

function take_snapshot(){
    save("filter_image.png")
}

function modelLoaded(){
    console.log("Posenet model has been intialised");
}

function gotposes(results){
 if(results.length>0){
    console.log(results);
    noseX= results[0].pose.nose.x-15;
    noseY= results[0].pose.nose.y-15;
    leftX= results[0].pose.nose.x-60;
    leftY= results[0].pose.nose.y-150;
    console.log("noseX= "+noseX);
    console.log("noseY= "+noseY);


    
 }
}