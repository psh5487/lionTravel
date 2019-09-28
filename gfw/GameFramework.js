//키보드 이벤트
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

//마우스 이벤트
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("click", onClicked, false);

//터치 이벤트
// window.addEventListener("touchstart", onTouchStart, false);
// window.addEventListener("touchmove", onTouchMove, false);
// window.addEventListener("touchend", onTouchEnd, false);

var GAME_FPS;
var game_state;

function onKeyDown(e)
{
    if(game_state.onKeyDown != undefined)
        game_state.onKeyDown(e);
}

function onKeyUp(e)
{
    if(game_state.onKeyUp != undefined)
        game_state.onKeyUp(e);
}

function onMouseDown(e) 
{
    if(game_state.onMouseDown != undefined)
        game_state.onMouseDown(e);
    
    e.stopPropagation();
    e.preventDefault();
    // alert("x:" + inputSystem.mouseX + " y:" + inputSystem.mouseY);
}

function onMouseUp(e)
{
    if(game_state.onMouseUp != undefined)
        game_state.onMouseUp(e);
        
    e.preventDefault();
}

function onClicked(e)
{
    if(game_state.onClicked != undefined)
        game_state.onClicked(e);
        
    e.preventDefault();
}

// function onTouchStart(e)
// {
//     if(game_state.onTouchStart != undefined)
//         game_state.onTouchStart(e);
        
//     e.preventDefault();
// }

// function onTouchMove(e)
// {
//     if(game_state.onTouchMove != undefined)
//         game_state.onTouchMove(e);
        
//     e.preventDefault();
// }

// function onTouchEnd(e)
// {
//     if(game_state.onTouchEnd != undefined)
//         game_state.onTouchEnd(e);
        
//     e.preventDefault();
// }

function ChangeGameState(nextGameState)
{
    //필수 함수가 있는지 확인한다.
    if(nextGameState.Init == undefined)
        return;
    
    if(nextGameState.Update == undefined)
        return;
     
    if(nextGameState.Render == undefined)
        return;
    
    //필수 함수가 있으면 상태 전환
    game_state = nextGameState;
    
    //초기화
    game_state.Init();
}

function GameUpdate() 
{
    //타이머 업데이트
    timerSystem.Update();
    
    //게임 상태 업데이트
    game_state.Update();
    
    //배포 시에는 아래 코드를 주석 처리하거나 삭제하면 개발 버전 전환 기능 해제
    debugSystem.UseDebugMode();
}

function GameRender()
{
    //그리기
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    //게임 상태
    game_state.Render();
    
    if(debugSystem.debugMode)
    {
        //fps 표시
        // Context.fillStyle = "#ffffff";
        // Context.font = '15px Arial';
        // Context.textBaseline = "top";
        // Context.fillText("fps: "+ frameCounter.Lastfps, 10, 10);
    }
}

function gameLoop()
{
    game_state = after_loading_state;
    
    GameUpdate();
    GameRender();
    
    frameCounter.countFrame();
}