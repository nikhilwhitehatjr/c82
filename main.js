var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastX, lastY;
var colour = "black";
var lineWidth = 5;
canvas.addEventListener("mousedown", mousedown);
function mousedown(e)
{
    mouseEvent = "mousedown";
    colour = document.getElementById("color").value;
    lineWidth = document.getElementById("lineWidth").value;
}
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", mouseup);
function mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", mousemove);
function mousemove(e)
{
    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        console.log(lastX);
        console.log(lastY);
        console.log(currentX);
        console.log(currentY);
    }
    lastX = currentX;
    lastY = currentY;
}
function clearing()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}