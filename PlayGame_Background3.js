//japan concept

function PGBackGround3()
{
    this.imgBackground3Grad = resourcePreLoader.GetImage("img/game_background3_grad.png");
    this.imgBackground3Heritage = resourcePreLoader.GetImage("img/game_background3_heritage.png");
    this.imgBackground3Charac = resourcePreLoader.GetImage("img/game_background3_charac.png");
    this.imgBackground3Flower = resourcePreLoader.GetImage("img/game_background3_flower.png");
    
    this.posHeritage = 0;
    this.speedHeritage = 0.5;
    
    this.posCharac = 0;
    this.speedCharac = 1;
    
    this.posFlower = 0;
    this.speedFlower = 1.5;
}

PGBackGround3.prototype.Update = function()
{
    this.posHeritage -= this.speedHeritage;
    this.posCharac -= this.speedCharac;
    this.posFlower -= this.speedFlower;
    
    if(this.posHeritage < -1000)
    {
        this.posHeritage = 1000;
    }
    if(this.posCharac < -1000)
    {
        this.posCharac = 1000;
    }
    if(this.posFlower < -1000)
    {
        this.posFlower = 1000;
    }
    
};

PGBackGround3.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackground3Grad, 0, 0);
    
    Context.drawImage(this.imgBackground3Heritage, this.posHeritage-1000, 40);
    Context.drawImage(this.imgBackground3Heritage, this.posHeritage+0,40);
    Context.drawImage(this.imgBackground3Heritage, this.posHeritage+1000, 40);
    
    Context.drawImage(this.imgBackground3Charac, this.posCharac-1000, 220);
    Context.drawImage(this.imgBackground3Charac, this.posCharac+0, 220);
    Context.drawImage(this.imgBackground3Charac, this.posCharac+1000, 220);
    
    Context.drawImage(this.imgBackground3Flower, this.posFlower-1000, 320);
    Context.drawImage(this.imgBackground3Flower, this.posFlower+0, 320);
    Context.drawImage(this.imgBackground3Flower, this.posFlower+1000, 320);
};