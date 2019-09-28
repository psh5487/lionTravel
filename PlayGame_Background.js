//sky concept

function PGBackGround()
{
    this.imgBackgroundLuggage = resourcePreLoader.GetImage("img/game_background_luggage.png");
    this.imgBackgroundCloud = resourcePreLoader.GetImage("img/game_background_cloud.png");
    this.imgBackgroundPlane = resourcePreLoader.GetImage("img/game_background_plane.png");
    
    this.posCloud = 0;
    this.speedCloud = 0.5;
    
    this.posPlane = 0;
    this.speedPlane = 1;
}

PGBackGround.prototype.Update = function()
{
    this.posCloud -= this.speedCloud;
    this.posPlane += this.speedPlane;
    
    if(this.posCloud < -1000)
    {
        this.posCloud = 1000;
    }
    
    if(this.posPlane > 1000)
    {
        this.posPlane = -1000;
    }
};

PGBackGround.prototype.RenderLayerFront = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
};

PGBackGround.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackgroundLuggage, 0, 0, 1000, 500);
    
    Context.drawImage(this.imgBackgroundCloud, this.posCloud-1000, 30);
    Context.drawImage(this.imgBackgroundCloud, this.posCloud+0, 30);
    Context.drawImage(this.imgBackgroundCloud, this.posCloud+1000, 30);
    
    Context.drawImage(this.imgBackgroundPlane, this.posPlane+1000, 300 - this.posPlane);
    Context.drawImage(this.imgBackgroundPlane, this.posPlane+0, 300 - this.posPlane);
    Context.drawImage(this.imgBackgroundPlane, this.posPlane-1000, 300 - this.posPlane/4);
};