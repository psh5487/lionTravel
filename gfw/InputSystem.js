//키보드 조작
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

//마우스 up, down, move
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mouseup", onMouseUp, false);

//마우스 클릭
window.addEventListener("click", onClicked, false);

//터치 이벤트
window.addEventListener("touchstart", onTouchStart, false);
window.addEventListener("touchmove", onTouchMove, false);
window.addEventListener("touchend", onTouchEnd, false);

function InputSystem()
{
    //마우스 입력 정보
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseClicked = false;
    
    //터치 입력 정보
    this.touchX = 0;
    this.touchY = 0;
    
    //키 입력 정보 배열
    this.isKeyPressed = [];
    
    return this;
}

//키 입력 여부
InputSystem.prototype.isKeyDown = function(keyCode)
{
    if(this.isKeyPressed[keyCode] == true)
    {
        return true;
    }
    else
    {
        return false;
    }
};

InputSystem.prototype.getMousePositionX = function()
{
    return this.mouseX;
};

InputSystem.prototype.getMousePositionY = function()
{
    return this.mouseY;
};

//키 입력 함수
function onKeyDown(e)
{
    inputSystem.isKeyPressed[e.keyCode] = true;
}

function onKeyUp(e)
{
    inputSystem.isKeyPressed[e.keyCode] = false;
}

//마우스 입력 함수
function onClicked(e)
{
	var theCanvas = document.getElementById("GameCanvas");
	inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
	inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
	
	inputSystem.mouseClicked = true;
// 	alert("x:" + mouseX + " y:" + mouseY);  
}

function onMouseDown(e)
{
	var theCanvas = document.getElementById("GameCanvas");
	inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
	inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
	
	inputSystem.mouseClicked = true;
}
	
function onMouseMove(e) 
{
    if(inputSystem.mouseClicked)
    {
        var theCanvas = document.getElementById("GameCanvas");
        inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
        inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
    }
}	
	
function onMouseUp(e) 
{
	var theCanvas = document.getElementById("GameCanvas");
	inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
	inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
	
	inputSystem.mouseClicked = false;
}

//터치 입력 함수
function onTouchStart(e)
{
    var theCanvas = document.getElementById("GameCanvas");
	inputSystem.touchX = e.touches[0].clientX;
	inputSystem.touchY = e.touches[0].clientY;
}

function onTouchMove(e)
{
    var theCanvas = document.getElementById("GameCanvas");
	inputSystem.touchX = e.touches[0].clientX;
	inputSystem.touchY = e.touches[0].clientY;
}

function onTouchEnd(e)
{
    var theCanvas = document.getElementById("GameCanvas");
	inputSystem.touchX = e.touches[0].clientX;
	inputSystem.touchY = e.touches[0].clientY;
}

var inputSystem = new InputSystem();

