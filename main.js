function preload(){

}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Classifier= ml5.imageClassifier("MobileNet",modelloaded);
}
function draw(){
  image(video,0,0,300,300);
  Classifier.classify(video,Gotresult);
}
function modelloaded(){
  console.log("model is loaded")
}
function Gotresult(error,result){
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
    document.getElementById("object_name").innerHTML=result[0].label;
    document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
  }
}

