function drawMouseArrow() {
  ctx.save();
  ctx.beginPath();
  ctx.translate(800, 450);
  ctx.lineCap = "round";
  const dir = Math.atan2(mouseY - document.body.scrollHeight/2, mouseX - document.body.scrollWidth/2);
  ctx.rotate(dir);
  ctx.moveTo(50, 0);
  ctx.lineTo(78, 0);
  ctx.lineTo(70, -10);
  ctx.moveTo(80, 0);
  ctx.lineTo(70, 10);
  ctx.lineWidth = 7;
  ctx.strokeStyle = "rgba(230, 230, 230, 0.4)";
  ctx.stroke();
  ctx.restore();
  ctx.lineCap = "butt";
}