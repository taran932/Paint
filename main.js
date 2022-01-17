canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var lastPositionOfX,LastPositionOfY;

color="black";

widthofline="1";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;


        console.log("last position of x and y coordinates:");
        console.log("X= "+lastPositionofX+", Y= "+lastPositionofY);
        ctx.moveTo(lastPositionofX,lastPositionofY);

        console.log("Current position of x and y coordinates:");
        console.log("X= "+current_position_of_mouse_x+", Y= "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();        
    }
    lastPositionofX=current_position_of_mouse_x;
    lastPositionofY=current_position_of_mouse_y;
}
