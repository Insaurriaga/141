//https://postimg.cc/9DB2j49W
noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('https://postimg.cc/9DB2j49W');
  //Adiciona a imagem do filtro que você quer usar
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();

  video = createCapture(VIDEO);
  //createCapture código para acessar a webcam
  video.size(300, 300);
  video.hide();
  //E então ocultamos o componente extra criado pelo p5.js para visualização da webcam, vamos usar.

  poseNet = ml5.poseNet(video, modelLoaded);
  //Normalmente, para chamar/inicializar qualquer função ml5.js, temos que usar ml5.js.functionName()
  poseNet.on('pose', gotPoses);
  //poseNet é uma função predefinida de ml5.js usada para inicializar o modelo poseNet.
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
  //Na função modelLoaded() vamos apenas consolar e ver que o poseNet é inicializado.
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownNose, noseX, noseY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
