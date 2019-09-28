//hawaii concept

function PGBackGround9()
{
    this.imgBackground9Grad = resourcePreLoader.GetImage("img/game_background9_grad.png");
    this.imgBackground9Bus = resourcePreLoader.GetImage("img/game_background9_bus.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posBus = 0;
    this.speedBus = 0.5;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround9.prototype.Update = function()
{
    this.posBus -= this.speedBus;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posBus < -1000)
    {
        this.posBus = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround9.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground9Grad, 0, 0);
    
    Context.drawImage(this.imgBackground9Bus, this.posBus-1000, 90);
    Context.drawImage(this.imgBackground9Bus, this.posBus+0, 90);
    Context.drawImage(this.imgBackground9Bus, this.posBus+1000, 90);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 10);
};