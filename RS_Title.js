function TitleState() 
{
    this.imgBackground = resourcePreLoader.GetImage("img/title_background.png");
    
    this.imgButtonStartOff = resourcePreLoader.GetImage("img/title_start_off.png");
    this.imgButtonStartOn  = resourcePreLoader.GetImage("img/title_start_on.png");
    
    this.imgButtonRankingOff = resourcePreLoader.GetImage("img/title_ranking_off.png");
    this.imgButtonRankingOn  = resourcePreLoader.GetImage("img/title_ranking_on.png");
    
    soundSystem.PlayBackgroundMusic("background.mp3");
    
    return this; 
}

TitleState.prototype.Init = function()
{
    soundSystem.PlayBackgroundMusic("background.mp3");
};

TitleState.prototype.Render = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    //배경 화면 그리기
    Context.drawImage(this.imgBackground, 0, 0);
    
    //시작 버튼, 랭킹 버튼 그리기
    if(inputSystem.mouseX > 290 && inputSystem.mouseX < 290+220 && inputSystem.mouseY > 380 && inputSystem.mouseY < 380+100)
    {
        Context.drawImage(this.imgButtonStartOn, 290, 380);
        this.flagButtonStart = true;
    }
    else if(inputSystem.touchX > 290 && inputSystem.touchX < 290+220 && inputSystem.touchY > 380 && inputSystem.touchY < 380+100)
    {
        Context.drawImage(this.imgButtonStartOn, 290, 380);
        this.flagButtonStart = true;
    }
    else
    {
        Context.drawImage(this.imgButtonStartOff, 290, 380);
        this.flagButtonStart = false;
    }
    
    if(inputSystem.mouseX > 500 && inputSystem.mouseX < 500+220 && inputSystem.mouseY > 380 && inputSystem.mouseY < 380+100)
    {
        Context.drawImage(this.imgButtonRankingOn, 500, 380);
        this.flagButtonRanking = true;
    }
    else if(inputSystem.touchX > 500 && inputSystem.touchX < 500+220 && inputSystem.touchY > 380 && inputSystem.touchY < 380+100)
    {
        Context.drawImage(this.imgButtonRankingOn, 500, 380);
        this.flagButtonRanking = true;
    }
    else
    {
        Context.drawImage(this.imgButtonRankingOff, 500, 380);
        this.flagButtonRanking = false;
    }
};

TitleState.prototype.Update = function()
{
    
};

TitleState.prototype.onClicked = function()
{
    //점프 사운드
    soundSystem.PlaySound("jump.mp3");
    
    if(this.flagButtonStart)
    game_state = new PlayGameState();
    ChangeGameState(game_state);
    after_loading_state = game_state;
    
    if(this.flagButtonRanking)
        ChangeGameState(/*랭킹 상태*/);
};

// TitleState.prototype.onTouchStart = function()
// {
//     if(this.flagButtonStart)
//         game_state = new PlayGameState();  //게임 상태로
//         ChangeGameState(game_state);
//         after_loading_state = game_state;    
    
//     if(this.flagButtonRanking)
//         ChangeGameState(/*랭킹 상태*/);
// };