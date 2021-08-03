nose_x=0;
nose_y=0;
function preload()
{
    clown_nose_image = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function model_loaded()
{
    console.log("model is loaded");
}

function got_poses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y-20;
    }
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(300,300)
    webcam.hide();
    posenet=ml5.poseNet(webcam,model_loaded)
    posenet.on('pose',got_poses)
}

function draw()
{
    image(webcam,0,0,300,300);
    image(clown_nose_image,nose_x,nose_y,30,30);
}

function take_snapshot()
{
    save("clown_image");
}