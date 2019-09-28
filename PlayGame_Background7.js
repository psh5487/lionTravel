//france concept

function PGBackGround7()
{
    this.imgBackground7Grad = resourcePreLoader.GetImage("img/game_background7_grad.png");
    this.imgBackground7Building = resourcePreLoader.GetImage("img/game_background7_building.png");
    this.imgBackground7Balloon = resourcePreLoader.GetImage("img/game_background7_balloon.png");
    this.imgBackground7Flower = resourcePreLoader.GetImage("img/game_background7_flower.png");
    
    this.posBuilding = 0;
    this.speedBuilding = 0.5;
    
    this.posBalloon = 0;
    this.speedBalloon = 1;
    
    this.posFlower = 0;
    this.speedFlower = 1.5;
}

PGBackGround7.prototype.Update = function()
{
    this.posBuilding -= this.speedBuilding;
    this.posBalloon -= this.speedBalloon;
    this.posFlower -= this.speedFlower;
    
    if(this.posBuilding < -1000)
    {
        this.posBuilding = 1000;
    }
    if(this.posBalloon < -1000)
    {
        this.posBalloon = 1000;
    }
    if(this.posFlower < -1000)
    {
        this.posFlower = 1000;
    }
    
};

PGBackGround7.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground7Grad, 0, 0);
    
    Context.drawImage(this.imgBackground7Building, this.posBuilding-1000, 20);
    Context.drawImage(this.imgBackground7Building, this.posBuilding+0, 20);
    Context.drawImage(this.imgBackground7Building, this.posBuilding+1000, 20);
    
    Context.drawImage(this.imgBackground7Balloon, this.posBalloon-1000, 0);
    Context.drawImage(this.imgBackground7Balloon, this.posBalloon+0, 0);
    Context.drawImage(this.imgBackground7Balloon, this.posBalloon+1000, 0);
    
    Context.drawImage(this.imgBackground7Flower, this.posFlower+0, 350);
};