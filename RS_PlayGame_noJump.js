//hint
//https://raw.githack.com/heldersepu/lionTravel/master/index.html

function PlayGameState()
{
    //배경
    this.background = new PGBackGround();
    this.background2 = new PGBackGround2();
    this.background3 = new PGBackGround3();
    this.background4 = new PGBackGround4();
    this.background5 = new PGBackGround5();
    this.background6 = new PGBackGround6();
    this.background7 = new PGBackGround7();
    this.background8 = new PGBackGround8();
    this.background9 = new PGBackGround9();
    
    //컨트롤러
    this.imgCtrlLeft = resourcePreLoader.GetImage("img/game_ctrl_left.png");
    this.imgCtrlRight = resourcePreLoader.GetImage("img/game_ctrl_right.png");
    this.imgCtrlDash = resourcePreLoader.GetImage("img/game_ctrl_dash.png");
    
    this.imgCtrlLeftOn = resourcePreLoader.GetImage("img/game_ctrl_left_on.png");
    this.imgCtrlRightOn = resourcePreLoader.GetImage("img/game_ctrl_right_on.png");
    this.imgCtrlDashOn = resourcePreLoader.GetImage("img/game_ctrl_dash_on.png");
    
    this.jumpbutton1 = false;
    this.jumpbutton2 = false;
    this.jumpbutton3 = false;
    
    //타이머
    this.timer = new Timer();
    
    //플레이어
    this.sprPlayer = new SpriteAnimation(resourcePreLoader.GetImage("img/game_player.png"), 125, 167, 4, 4);
    this.x = 220;
    this.y = 20;
    this.playerCollisionBox = {left: this.x, right: this.x + 125, top: this.y, bottom: this.y + 170};
    this.Invalid();
    
    //점프
    this.jumpPower;
    
    //게임 진행 바
    this.gamebar = resourcePreLoader.GetImage("img/game_moneybar.png");
    this.gamebarNow = resourcePreLoader.GetImage("img/game_item_coinOne.png");
    
    //레벨 정보
	this.intLevel = 1;
// 	this.ShowLevelUpMessage = false;

    //로그
    this.imgShortlog1 = resourcePreLoader.GetImage("img/game_shortlog.png");
    this.imgShortlog2 = resourcePreLoader.GetImage("img/game_shortlog.png");
    this.imgShortlog3 = resourcePreLoader.GetImage("img/game_shortlog.png");
    this.imgShortlog4 = resourcePreLoader.GetImage("img/game_shortlog.png");
    this.imgShortlog5 = resourcePreLoader.GetImage("img/game_shortlog.png");
    this.imgShortlog6 = resourcePreLoader.GetImage("img/game_shortlog.png");
    
    //로그 이동
    this.posShortlog1 = 0;
    this.speedShortlog1 = 9.5;
    
    this.posShortlog2 = 200;
    this.speedShortlog2 = 9.5;
    
    this.posShortlog3 = 400;
    this.speedShortlog3 = 9.5;
    
    this.posShortlog4 = 600;
    this.speedShortlog4 = 9.5;
    
    this.posShortlog5 = 800;
    this.speedShortlog5 = 9.5;
    
    this.posShortlog6 = 1000;
    this.speedShortlog6 = 9.5;
    
    //초기 로그 y위치 생성
    this.y_log_position_Arr = new Array(6);
    this.y_log_position_Arr[0] = 200;
    this.y_log_position_Arr[1] = 170;
    this.y_log_position_Arr[2] = 200;
    this.y_log_position_Arr[3] = 230;
    this.y_log_position_Arr[4] = 200;
    this.y_log_position_Arr[5] = 200;
    
    //점프 후 착지 위치
    this.afterjump_Arr = new Array();
    this.afterjump_Arr.push(200);
    this.afterjump_Arr.push(170);
    this.afterjump_Arr.push(200);
    this.afterjump_Arr.push(230);
    this.afterjump_Arr.push(200);
    this.afterjump_Arr.push(200);
    
    //아이템
    this.Coin = new SpriteAnimation(resourcePreLoader.GetImage("img/game_item_coin.png"), 50, 50, 4, 4);
    this.moneyheight = 200;
    this.coinCollisionBox = {left: this.posShortlog3+65, right: this.posShortlog3+65+50, 
                            top: this.moneyheight-55, bottom: this.moneyheight-55+50};
    this.isGet = false;
    
    //스코어
    this.successLog = 0;
    this.getCoin = 0;
    
    //게임 오버
    this.gameover = false;
    this.gameoverButton = false;
    
    //게임 엔드
    this.gameEnd = false;
    this.gameEndButton = false;
    
    return this;
}

PlayGameState.prototype.Init = function()
{

};

PlayGameState.prototype.Render = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    //배경 그리기
    // this.timer.Update();  //사용 예: this.timer.nowFrame >= 3000
    if(this.successLog >= 0 && this.successLog < 15)
    {
        this.background.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("출발~", 20, 50);
    }
    if(this.successLog >= 15 && this.successLog < 30)
    {
        this.background2.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("China", 20, 50);
    }
    if(this.successLog >= 30 && this.successLog < 45)
    {
        this.background3.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("Japan", 20, 50);
    }
    if(this.successLog >= 45 && this.successLog < 60)
    {
        this.background4.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("Egypt", 20, 50);
    }
    if(this.successLog >= 60 && this.successLog < 75)
    {
        this.background5.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("America", 20, 50);
    }
    if(this.successLog >= 75 && this.successLog < 90)
    {
        this.background6.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("London", 20, 50);
    }
    if(this.successLog >= 90 && this.successLog < 105)
    {
        this.background7.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("France", 20, 50);
    }
    if(this.successLog >= 105 && this.successLog < 120)
    {
        this.background8.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("Italy", 20, 50);
    }
    if(this.successLog >= 120)
    {
        this.background9.RenderLayerBack();
        Context.fillStyle = "#ffffff";
        Context.font = 'bold 20px Arial';
        Context.fillText("Hawaii", 20, 50);
    }
    
    //컨트롤러 그리기
    Context.drawImage(this.imgCtrlLeft, 0, 310, 200, 200);
    Context.drawImage(this.imgCtrlRight, 800, 310, 200, 200);
    Context.drawImage(this.imgCtrlDash, 400, 310, 200, 200);
    // if(inputSystem.mouseX > 30 && inputSystem.mouseX < 30+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    // { 
    //     Context.drawImage(this.imgCtrlLeftOn, 0, 310, 200, 200);
    // }
    // else
    // {
    //     Context.drawImage(this.imgCtrlLeft, 0, 310, 200, 200);
    // }
    
    // if(inputSystem.mouseX > 830 && inputSystem.mouseX < 830+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    // { 
    //     Context.drawImage(this.imgCtrlRightOn, 800, 310, 200, 200);
    // }
    // else
    // {
    //     Context.drawImage(this.imgCtrlRight, 800, 310, 200, 200);
    // }
    
    // if(inputSystem.mouseX > 430 && inputSystem.mouseX < 430+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    // { 
    //     Context.drawImage(this.imgCtrlDashOn, 400, 310, 200, 200);
    // }
    // else
    // {
    //     Context.drawImage(this.imgCtrlDash, 400, 310, 200, 200);
    // }

    //로그 그리기
    Context.drawImage(this.imgShortlog1, this.posShortlog1, this.y_log_position_Arr[0], 170, 32);
    Context.drawImage(this.imgShortlog2, this.posShortlog2, this.y_log_position_Arr[1], 170, 32);
    Context.drawImage(this.imgShortlog3, this.posShortlog3, this.y_log_position_Arr[2], 170, 32);
    Context.drawImage(this.imgShortlog4, this.posShortlog4, this.y_log_position_Arr[3], 170, 32);
    Context.drawImage(this.imgShortlog5, this.posShortlog5, this.y_log_position_Arr[4], 170, 32);
    Context.drawImage(this.imgShortlog6, this.posShortlog6, this.y_log_position_Arr[5], 170, 32);
    
    //아이템 그리기
    this.DrawCoin();

    //플레이어 그리기
    this.sprPlayer.Render(Context);
    
    //게임 진행 바 그리기
    this.DrawBar();
    
    //레벨
    Context.fillStyle = "ffffff";
	Context.font = 'bold 20px Arial';
	Context.fillText("LV. "+this.intLevel, 20, 30);
	
// 	if(this.ShowLevelUpMessage)
// 	{
// 		Context.font = '20px Arial';
// 		Context.textBaseline = "top";
// 		Context.fillText("Level Up!", 20, 50);
// 	}
    
    //스코어
    Context.fillStyle = "#ffffff";
    Context.font = 'bold 20px Arial';
    Context.fillText("Score: " + this.successLog, 850, 30);
    Context.fillText("Coin: " + this.getCoin * 10, 850, 50);
    
    //게임 오버
    // Context.fillStyle = "black";
    // Context.fillText(this.gameover, 100, 150);
    if(this.gameover)
    {
        Context.drawImage(resourcePreLoader.GetImage("img/game_gameover.png"), 0, 0);
        Context.fillStyle = "black";
        Context.font = 'bold 70px Arial';
        Context.fillText("Score. " + this.successLog, 300, 320);
        Context.fillText("LV. "+this.intLevel, 300, 400);
    }
    
    //게임 엔드
    if(this.gameEnd)
    {
        Context.drawImage(resourcePreLoader.GetImage("img/game_gameEnd.png"), 0, 0);
        Context.fillStyle = "black";
        Context.font = 'bold 70px Arial';
        Context.fillText("Score. " + this.successLog, 300, 320);
        Context.fillText("LV. "+this.intLevel, 300, 400);
    }
};

PlayGameState.prototype.Update = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    //게임 오버 및 재시작
    if(this.gameover)
    {
        if(this.gameoverButton)
        {
            game_state = new TitleState();
            ChangeGameState(game_state);
            after_loading_state = game_state;
        }
        
        return;
    }
    
    //게임 엔드 및 재시작
    if(this.gameEnd)
    {
        if(this.gameEndButton)
        {
            game_state = new TitleState();
            ChangeGameState(game_state);
            after_loading_state = game_state;
        }
        
        return;
    }
    
    //게임 엔드 조건
    if(this.gamebarNowPos <= 190)
    {
        this.gameEnd = true;
    }
    
    //배경 업데이트
    if(this.successLog >= 0 && this.successLog < 15)
    {
        this.background.Update();
    }
    if(this.successLog >= 15 && this.successLog < 30)
    {
        this.background2.Update();
    }
    if(this.successLog >= 30 && this.successLog < 45)
    {
        this.background3.Update();
    }
    if(this.successLog >= 45 && this.successLog < 60)
    {
        this.background4.Update();
    }
    if(this.successLog >= 60 && this.successLog < 75)
    {
        this.background5.Update();
    }
    if(this.successLog >= 75 && this.successLog < 90)
    {
        this.background6.Update();
    }
    if(this.successLog >= 90 && this.successLog < 105)
    {
        this.background7.Update();
    }
    if(this.successLog >= 105 && this.successLog < 120)
    {
        this.background8.Update();
    }
    if(this.successLog >= 120)
    {
        this.background9.Update();
    }
    
    //플레이어 
    this.sprPlayer.Update();
    
    //레벨 업 메세지
    // if(this.successLog == 10 | this.successLog == 20 | this.successLog == 30 | this.successLog == 40 | this.successLog == 50
    //  | this.successLog == 60 | this.successLog == 70 | this.successLog == 80)
    // {
    //     setTimeout(this.closeLevelUpMessage(), 2000);
    // }
    
    //로그 이동
    // this.posShortlog1 -= this.speedShortlog1;
    // this.posShortlog2 -= this.speedShortlog2;
    // this.posShortlog3 -= this.speedShortlog3;
    if(this.posShortlog1 <= -200)
    {
        this.posShortlog1 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[0] = y_log_position_ud;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[0]);
        this.afterjump_Arr.shift();
    }
    
    else if(this.posShortlog2 <= -200)
    {
        this.posShortlog2 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[1] = y_log_position_ud;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[1]);
        this.afterjump_Arr.shift();
    }
    
    else if(this.posShortlog3 <= -200)
    {
        this.posShortlog3 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[2] = y_log_position_ud;
        
        //아이템
        this.moneyheight = y_log_position_ud;
        this.isGet = false;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[2]);
        this.afterjump_Arr.shift();
    }
    
    else if(this.posShortlog4 <= -200)
    {
        this.posShortlog4 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[3] = y_log_position_ud;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[3]);
        this.afterjump_Arr.shift();
    }
    
    else if(this.posShortlog5 <= -200)
    {
        this.posShortlog5 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[4] = y_log_position_ud;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[4]);
        this.afterjump_Arr.shift();
    }
    
    else if(this.posShortlog6 <= -200)
    {
        this.posShortlog6 = 1000;
        
        var y_position_values_ud = [260, 230, 200];
	    var position_index_ud = getRandomInt(3);
        var y_log_position_ud = y_position_values_ud[position_index_ud];
        
        this.y_log_position_Arr[5] = y_log_position_ud;
        
        this.afterjump_Arr.push(this.y_log_position_Arr[5]);
        this.afterjump_Arr.shift();
    }
    //눌러서 점프 및 이동 기본
    // if(this.jumpbutton1 == true)
    // {
    //     this.y += this.jumpPower;
    //     this.jumpPower += 1.5;
        
    //     this.posShortlog1 -= this.speedShortlog1;
    //     this.posShortlog2 -= this.speedShortlog2;
    //     this.posShortlog3 -= this.speedShortlog3;
    //     this.posShortlog4 -= this.speedShortlog4;
    //     this.posShortlog5 -= this.speedShortlog5;
    //     this.posShortlog6 -= this.speedShortlog6;
        
    //     if(this.y >= this.afterjump_Arr[1]-150)
    //     {
    //         this.y = this.afterjump_Arr[2]-150;
            
    //         this.posShortlog1;
    //         this.posShortlog2;
    //         this.posShortlog3;
    //         this.posShortlog4;
    //         this.posShortlog5;
    //         this.posShortlog6;
    
    //         this.jumpbutton1 = false;
    //     }
            
    //     this.Invalid();
    // }
    // else
    // {
    //     this.jumpPower = -15;
    // }
    
    //눌러서 이동 구현
    if(this.jumpbutton1 == true)
    {
        this.posShortlog1 -= 200;
        this.posShortlog2 -= 200;
        this.posShortlog3 -= 200;
        this.posShortlog4 -= 200;
        this.posShortlog5 -= 200;
        this.posShortlog6 -= 200;
        
        if(this.afterjump_Arr[1] <= this.afterjump_Arr[2])
        {
            this.gameover = true;
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton1 = false;
        }
        else
        {
            this.gameover = false;
            
            //성공한 로그
            this.successLog++;
            //레벨 업
            if(this.successLog == 15 | this.successLog == 30 | this.successLog == 45 | this.successLog == 60 | this.successLog == 75
             | this.successLog == 90 | this.successLog == 105 | this.successLog == 120)
            {
                this.onLevelUp();
            }
            
            //아이템 획득 
            this.CheckCollision();
            
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton1 = false;
        }
        this.Invalid();
    }
    
    else if(this.jumpbutton2 == true)
    {
        this.posShortlog1 -= 200;
        this.posShortlog2 -= 200;
        this.posShortlog3 -= 200;
        this.posShortlog4 -= 200;
        this.posShortlog5 -= 200;
        this.posShortlog6 -= 200;
        
        if(this.afterjump_Arr[1] >= this.afterjump_Arr[2])
        {
            this.gameover = true;
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton2 = false;
        }
        else
        {
            this.gameover = false;
            
            //성공한 로그
            this.successLog++;
            //레벨 업
            if(this.successLog == 15 | this.successLog == 30 | this.successLog == 45 | this.successLog == 60 | this.successLog == 75
             | this.successLog == 90 | this.successLog == 105 | this.successLog == 120)
            {
                this.onLevelUp();
            }
            
            //아이템 획득 
            this.CheckCollision();
            
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton2 = false;
        }
        this.Invalid();
    }
    
    else if(this.jumpbutton3 == true)
    {
        this.posShortlog1 -= 200;
        this.posShortlog2 -= 200;
        this.posShortlog3 -= 200;
        this.posShortlog4 -= 200;
        this.posShortlog5 -= 200;
        this.posShortlog6 -= 200;
        
        if(this.afterjump_Arr[1] == this.afterjump_Arr[2])
        {
            this.gameover = false;
            
            //성공한 로그
            this.successLog++;
            //레벨 업
            if(this.successLog == 15 | this.successLog == 30 | this.successLog == 45 | this.successLog == 60 | this.successLog == 75
             | this.successLog == 90 | this.successLog == 105 | this.successLog == 120)
            {
                this.onLevelUp();
            }
            
            //아이템 획득
            this.CheckCollision();
           
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton3 = false;
        }
        else
        {
            this.gameover = true;
            this.y = this.afterjump_Arr[2]-150;
            
            this.jumpbutton3 = false;
        }
        this.Invalid();
    }
};

PlayGameState.prototype.onMouseDown = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    //점프 버튼
    if(inputSystem.mouseX > 30 && inputSystem.mouseX < 30+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    { 
        Context.drawImage(this.imgCtrlLeftOn, 0, 310, 200, 200);
        this.jumpbutton1 = true;
    }
    if(inputSystem.mouseX > 830 && inputSystem.mouseX < 830+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    { 
        Context.drawImage(this.imgCtrlRightOn, 800, 310, 200, 200);
        this.jumpbutton2 = true;
    }
    if(inputSystem.mouseX > 430 && inputSystem.mouseX < 430+140 && inputSystem.mouseY > 340 && inputSystem.mouseY < 480)
    { 
        Context.drawImage(this.imgCtrlDashOn, 400, 310, 200, 200);
        this.jumpbutton3 = true;
    }
    
    //게임 오버
    if(inputSystem.mouseX > 495 && inputSystem.mouseX < 495+220 && inputSystem.mouseY > 150 && inputSystem.mouseY < 150+90)
    {
        //점프 사운드
        soundSystem.PlaySound("jump.mp3");
        this.gameoverButton = true; 
    }
    
    //게임 엔드
    if(inputSystem.mouseX > 495 && inputSystem.mouseX < 495+220 && inputSystem.mouseY > 150 && inputSystem.mouseY < 150+90)
    {
        //점프 사운드
        soundSystem.PlaySound("jump.mp3");
        this.gameEndButton = true; 
    }
};

// PlayGameState.prototype.onTouchStart = function()
// {
//     var theCanvas = document.getElementById("GameCanvas");
//     var Context = theCanvas.getContext("2d");
    
//     if(inputSystem.touchX > 30 && inputSystem.touchX < 30+140 && inputSystem.touchY > 340 && inputSystem.touchY < 480)
//     { 
//         Context.drawImage(this.imgCtrlLeftOn, 0, 310, 200, 200);
//         this.jumpbutton1 = true;
//     }
//     if(inputSystem.touchX > 830 && inputSystem.touchX < 830+140 && inputSystem.touchY > 340 && inputSystem.touchY < 480)
//     { 
//         Context.drawImage(this.imgCtrlRightOn, 800, 310, 200, 200);
//         this.jumpbutton2 = true;
//     }
//     if(inputSystem.touchX > 430 && inputSystem.touchX < 430+140 && inputSystem.touchY > 340 && inputSystem.touchY < 480)
//     { 
//         Context.drawImage(this.imgCtrlDashOn, 400, 310, 200, 200);
//         this.jumpbutton3 = true;
//     }
    
//     //게임 오버
//     if(inputSystem.touchX > 495 && inputSystem.touchX < 495+220 && inputSystem.touchY > 150 && inputSystem.touchY < 150+90)
//     {
//         //점프 사운드
//         soundSystem.PlaySound("jump.mp3");
//         this.gameoverButton = true; 
//     }
//     //게임 엔드
//     if(inputSystem.touchX > 495 && inputSystem.touchX < 495+220 && inputSystem.touchY > 150 && inputSystem.touchY < 150+90)
//     {
//         //점프 사운드
//         soundSystem.PlaySound("jump.mp3");
//         this.gameEndButton = true; 
//     }
// };

//아이템 충돌 체크
PlayGameState.prototype.CheckCollision = function()
{
    if(this.coinCollisionBox.left < this.playerCollisionBox.right && this.coinCollisionBox.right > this.playerCollisionBox.left)
    {
        this.isGet = true;
        this.GetCoin();
    }
};

PlayGameState.prototype.DrawCoin = function()
{
    if(this.isGet)
    {
        return;
    }
    
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    this.Coin.Render(Context);
    this.Coin.Update();
    this.Coin.SetPosition(this.posShortlog3+65, this.moneyheight-55);
    // Context.drawImage(this.Coin, this.posShortlog3+65, this.moneyheight-55, 50, 50);
    this.coinCollisionBox = {left: this.posShortlog3+65, right: this.posShortlog3+65+50, 
                            top: this.moneyheight-55, bottom: this.moneyheight-55+50};
};

//코인 점수
PlayGameState.prototype.GetCoin = function()
{
    if(this.isGet && (this.posShortlog3 >= 0))
    {
        this.getCoin++;
    }
};

PlayGameState.prototype.DrawBar = function()
{
    if(this.gameover || this.gameEnd)
    {
        return;
    }
    
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    this.timer.Update();  //사용 예: this.timer.nowFrame >= 3000
    Context.drawImage(this.gamebar, 200, 10, 570, 20);
    
    this.gamebarNowPos = 760-(this.timer.nowFrame / 120000) * 570; //런타임 기본 3분
    Context.drawImage(this.gamebarNow, this.gamebarNowPos + this.getCoin * 10, 8, 25, 25);
};

//레벨 업 메세지
PlayGameState.prototype.onLevelUp = function()
{
    this.intLevel++;
		
    //레벨 업 메시지 보이기
    // this.ShowLevelUpMessage = true;
};

// PlayGameState.prototype.closeLevelUpMessage = function()
// {
//     this.ShowLevelUpMessage = false;
// };

//플레이어 위치
PlayGameState.prototype.Invalid = function()
{
    this.sprPlayer.SetPosition(this.x, this.y);
    this.playerCollisionBox = {left: this.x, right: this.x + 125, top: this.y, bottom: this.y + 170};
};

//랜덤 숫자 생성 함수
function getRandomInt(num)
{
	return Math.floor(Math.random() * num);
}