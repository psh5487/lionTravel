//china concept

function PGBackGround2()
{
    this.imgBackground2Grad = resourcePreLoader.GetImage("img/game_background2_grad.png");
    this.imgBackground2Building = resourcePreLoader.GetImage("img/game_background2_building.png");
    this.imgBackground2Deco = resourcePreLoader.GetImage("img/game_background2_deco.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posBuilding = 0;
    this.speedBuilding = 0.5;
    
    this.posDeco = 0;
    this.speedDeco = 1;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround2.prototype.Update = function()
{
    this.posBuilding -= this.speedBuilding;
    this.posDeco -= this.speedDeco;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posBuilding < -1000)
    {
        this.posBuilding = 1000;
    }
    if(this.posDeco < -1000)
    {
        this.posDeco = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround2.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground2Grad, 0, 0);
    
    Context.drawImage(this.imgBackground2Building, this.posBuilding-1000, 40);
    Context.drawImage(this.imgBackground2Building, this.posBuilding+0, 40);
    Context.drawImage(this.imgBackground2Building, this.posBuilding+1000, 40);
    
    Context.drawImage(this.imgBackground2Deco, this.posDeco-1000, 0);
    Context.drawImage(this.imgBackground2Deco, this.posDeco+0, 0);
    Context.drawImage(this.imgBackground2Deco, this.posDeco+1000, 0);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 320);
};