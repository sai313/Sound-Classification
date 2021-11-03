function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YVZOAqG-H/model.json",modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    } else {
        console.log(results);
        randomNumber_r = Math.floor(Math.random()*255)+1;
        randomNumber_g = Math.floor(Math.random()*255)+1;
        randomNumber_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_lbl").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuarcy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_lbl").style.color="rgb("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";
        document.getElementById("result_confidence").style.color="rbg("+randomNumber_r+","+randomNumber_g+","+randomNumber_b+")";

        img = document.getElementById("alien-1");
        img1 = document.getElementById("alien-2");
        img2 = document.getElementById("alien-3");
        img3 = document.getElementById("alien-4");
        if(results[0].label=="Clap"){
            img.src="aliens-01.gif";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png";
        } else if (results[0].label=="Bell") {
            img.src="aliens-01.png";
            img1.src="aliens-02.gif";
            img2.src="aliens-03.png";
            img3.src="aliens-04.png";
        } else if (results[0].label=="Snap") {
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.gif";
            img3.src="aliens-04.png";
        } else {
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.gif";
        }
    }
}