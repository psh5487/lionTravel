//london concept

function PGBackGround6()
{
    this.imgBackground6Grad = resourcePreLoader.GetImage("img/game_background6_grad.png");
    this.imgBackground6Building = resourcePreLoader.GetImage("img/game_background6_building.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posBuilding = 0;
    this.speedBuilding = 0.5;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround6.prototype.Update = function()
{
    this.posBuilding -= this.speedBuilding;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posBuilding < -1000)
    {
        this.posBuilding = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround6.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground6Grad, 0, 0);
    
    Context.drawImage(this.imgBackground6Building, this.posBuilding-1000, 40);
    Context.drawImage(this.imgBackground6Building, this.posBuilding+0, 40);
    Context.drawImage(this.imgBackground6Building, this.posBuilding+1000, 40);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 10);
};