function setup(){
    canvas = createCanvas(300, 270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WP4jzi6X2/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(video, 0, 0, 300, 270);
    classifier.classify(video, gotResults);
}

function gotResults(error, results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("result_member").innerHTML = results[0].label;
       document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
   }
}