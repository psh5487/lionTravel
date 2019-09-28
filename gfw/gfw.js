function onGameInit()
{
    document.title = "Lion Travel";
    
    GAME_FPS = 30;
    debugSystem.debugMode = true;
    
    //리소스 프리로딩 추가
    //타이틀
    resourcePreLoader.AddImage("img/title_background.png");
    resourcePreLoader.AddImage("img/title_start_off.png");
    resourcePreLoader.AddImage("img/title_start_on.png");
    resourcePreLoader.AddImage("img/title_ranking_off.png");
    resourcePreLoader.AddImage("img/title_ranking_on.png");
    
    //background1-sky
    resourcePreLoader.AddImage("img/game_background_luggage.png");
    resourcePreLoader.AddImage("img/game_background_cloud.png");
    resourcePreLoader.AddImage("img/game_background_plane.png");
    //background2-china
    resourcePreLoader.AddImage("img/game_background_cloudsm.png"); //자주 쓰임
    resourcePreLoader.AddImage("img/game_background2_grad.png");
    resourcePreLoader.AddImage("img/game_background2_building.png");
    resourcePreLoader.AddImage("img/game_background2_deco.png");
    //background3-japan
    resourcePreLoader.AddImage("img/game_background3_charac.png");
    resourcePreLoader.AddImage("img/game_background3_flower.png");
    resourcePreLoader.AddImage("img/game_background3_grad.png");
    resourcePreLoader.AddImage("img/game_background3_heritage.png");
    //background4-egypt
    resourcePreLoader.AddImage("img/game_background4_grad.png");
    resourcePreLoader.AddImage("img/game_background4_heritage.png");
    resourcePreLoader.AddImage("img/game_background4_front.png");
    //background5-america
    resourcePreLoader.AddImage("img/game_background5_balloon.png");
    resourcePreLoader.AddImage("img/game_background5_building.png");
    resourcePreLoader.AddImage("img/game_background5_grad.png");
    //background6-london
    resourcePreLoader.AddImage("img/game_background6_building.png");
    resourcePreLoader.AddImage("img/game_background6_grad.png");
    //background7-france
    resourcePreLoader.AddImage("img/game_background7_balloon.png");
    resourcePreLoader.AddImage("img/game_background7_building.png");
    resourcePreLoader.AddImage("img/game_background7_flower.png");
    resourcePreLoader.AddImage("img/game_background7_grad.png");
    //background8-italy
    resourcePreLoader.AddImage("img/game_background8_building.png");
    resourcePreLoader.AddImage("img/game_background8_gondola.png");
    resourcePreLoader.AddImage("img/game_background8_grad.png");
    //background9-hawaii
    resourcePreLoader.AddImage("img/game_background9_grad.png");
    resourcePreLoader.AddImage("img/game_background9_bus.png");
    
    //아이템
    resourcePreLoader.AddImage("img/game_moneybar.png");
    resourcePreLoader.AddImage("img/game_item_coinOne.png");
    resourcePreLoader.AddImage("img/game_item_coin.png");
    //컨트롤러
    resourcePreLoader.AddImage("img/game_ctrl_left.png");
    resourcePreLoader.AddImage("img/game_ctrl_right.png");
    resourcePreLoader.AddImage("img/game_ctrl_dash.png");
    resourcePreLoader.AddImage("img/game_ctrl_left_on.png");
    resourcePreLoader.AddImage("img/game_ctrl_right_on.png");
    resourcePreLoader.AddImage("img/game_ctrl_dash_on.png");
    //통나무, 플레이어
    resourcePreLoader.AddImage("img/game_shortlog.png");
    resourcePreLoader.AddImage("img/game_player.png");
    //게임 오버, 게임 엔드
    resourcePreLoader.AddImage("img/game_gameover.png");
    resourcePreLoader.AddImage("img/game_gameEnd.png");
    //사운드
    soundSystem.AddSound("background.mp3", 1);
    soundSystem.AddSound("jump.mp3", 1);
    
    //게임 초기 시작 상태 결정
    after_loading_state = new TitleState();
    game_state = TitleState;
    
    setInterval(gameLoop, 1000 / GAME_FPS);
}

window.addEventListener("load", onGameInit, false);