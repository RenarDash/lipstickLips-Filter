function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseModel=ml5.poseNet(video,ModelLoaded);

}
noxe="";
noye="";
function preload(){
    lipstickLips=loadImage("lipstick.png");
}

function take_snapshot() {

    save("mySnapPic.png")
    
}
function draw() {
    image(video,0,0,300,300)
    //fill("red");
    // stroke("black");
    // circle(noxe,noye,30);
    image(lipstickLips,noxe-25,noye+5,60,60);
}

function ModelLoaded() {
    console.log("ModelLoaded");
    poseModel.on("pose",getResults)

}

function getResults(r){
    console.log(r);
    if (r.length>0) {
        noxe=r[0].pose.nose.x;
        noye=r[0].pose.nose.y;
    }
}
