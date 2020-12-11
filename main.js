function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9J-F40391/model.json",modelloaded);
}


function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,showresult);
}

function modelloaded(){
    console.log("model has been loaded;")
}

function showresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objectname=results[0].label;
        accuracy=results[0].confidence.toFixed(3)*100;
        document.getElementById("objet name").innerHTML=objectname;
        document.getElementById("acuracy").innerHTML=accuracy;
    }
}