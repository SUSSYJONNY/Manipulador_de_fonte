difference = 0;

rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(100, 400)
    canvas = createCanvas(400, 400);
    canvas.position(500, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('O poseNet foi iniciado')
}


function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(rightWristX - leftWristX);
        console.log("A coordenada do pulso esquerdo e igual a: " + leftWristX);
        console.log("A coordenada do pulso direito e igual a: " + rightWristX);
    }
}

function draw() {
    background("darkblue");
    document.getElementById("font_size").innerHTML = "O tamanho da fonte sera: " + difference + "px";
    textSize(difference);
    fill("white");
    text("Oi como esta", 50, 400);
}