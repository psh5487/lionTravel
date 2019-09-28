//egypt concept

function PGBackGround4()
{
    this.imgBackground4Grad = resourcePreLoader.GetImage("img/game_background4_grad.png");
    this.imgBackground4Heritage = resourcePreLoader.GetImage("img/game_background4_heritage.png");
    this.imgBackground4Front = resourcePreLoader.GetImage("img/game_background4_front.png");
    this.imgBackgroundCloudsm = resourcePreLoader.GetImage("img/game_background_cloudsm.png");
    
    this.posHeritage = 0;
    this.speedHeritage = 0.5;
    
    this.posFront = 0;
    this.speedFront = 1;
    
    this.posCloudsm = 0;
    this.speedCloudsm = 1.5;
}

PGBackGround4.prototype.Update = function()
{
    this.posHeritage -= this.speedHeritage;
    this.posFront -= this.speedFront;
    this.posCloudsm -= this.speedCloudsm;
    
    if(this.posHeritage < -1000)
    {
        this.posHeritage = 1000;
    }
    if(this.posFront < -1000)
    {
        this.posFront = 1000;
    }
    if(this.posCloudsm < -500)
    {
        this.posCloudsm = 1000;
    }
    
};

PGBackGround4.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground4Grad, 0, 0);
    
    Context.drawImage(this.imgBackground4Heritage, this.posHeritage-1000, 40);
    Context.drawImage(this.imgBackground4Heritage, this.posHeritage+0, 40);
    Context.drawImage(this.imgBackground4Heritage, this.posHeritage+1000, 40);
    
    Context.drawImage(this.imgBackground4Front, this.posFront-800, 150);
    Context.drawImage(this.imgBackground4Front, this.posFront+0, 150);
    Context.drawImage(this.imgBackground4Front, this.posFront+800, 150);
    
    Context.drawImage(this.imgBackgroundCloudsm, this.posCloudsm+0, 320);
};