//italy concept

function PGBackGround8()
{
    this.imgBackground8Grad = resourcePreLoader.GetImage("img/game_background8_grad.png");
    this.imgBackground8Building = resourcePreLoader.GetImage("img/game_background8_building.png");
    this.imgBackground8Gondola = resourcePreLoader.GetImage("img/game_background8_gondola.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posBuilding = 0;
    this.speedBuilding = 0.5;
    
    this.posGondola = 0;
    this.speedGondola = 1;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround8.prototype.Update = function()
{
    this.posBuilding -= this.speedBuilding;
    this.posGondola -= this.speedGondola;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posBuilding < -1000)
    {
        this.posBuilding = 1000;
    }
    if(this.posGondola < -1000)
    {
        this.posGondola = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround8.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground8Grad, 0, 0);
    
    Context.drawImage(this.imgBackground8Building, this.posBuilding-1000, 40);
    Context.drawImage(this.imgBackground8Building, this.posBuilding+0, 40);
    Context.drawImage(this.imgBackground8Building, this.posBuilding+1000, 40);
    
    Context.drawImage(this.imgBackground8Gondola, this.posGondola-1000, 220);
    Context.drawImage(this.imgBackground8Gondola, this.posGondola+0, 220);
    Context.drawImage(this.imgBackground8Gondola, this.posGondola+1000, 220);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 10);
};