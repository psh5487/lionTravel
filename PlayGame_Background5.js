//america concept

function PGBackGround5()
{
    this.imgBackground5Grad = resourcePreLoader.GetImage("img/game_background5_grad.png");
    this.imgBackground5Building = resourcePreLoader.GetImage("img/game_background5_building.png");
    this.imgBackground5Balloon = resourcePreLoader.GetImage("img/game_background5_balloon.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posBuilding = 0;
    this.speedBuilding = 0.5;
    
    this.posBalloon = 0;
    this.speedBalloon = 1;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround5.prototype.Update = function()
{
    this.posBuilding -= this.speedBuilding;
    this.posBalloon -= this.speedBalloon;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posBuilding < -1130)
    {
        this.posBuilding = 1130;
    }
    if(this.posBalloon < -1000)
    {
        this.posBalloon = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround5.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground5Grad, 0, 0);
    
    Context.drawImage(this.imgBackground5Building, this.posBuilding-1130, 40);
    Context.drawImage(this.imgBackground5Building, this.posBuilding+0, 40);
    Context.drawImage(this.imgBackground5Building, this.posBuilding+1130, 40);
    
    Context.drawImage(this.imgBackground5Balloon, this.posBalloon-1000, 10);
    Context.drawImage(this.imgBackground5Balloon, this.posBalloon+0, 10);
    Context.drawImage(this.imgBackground5Balloon, this.posBalloon+1000, 10);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 320);
};