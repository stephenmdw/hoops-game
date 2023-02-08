!function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("canvas"),s=document.getElementById("start-screen"),i=document.getElementById("game-over");new class{constructor(t,s,i){this.ctx=t.getContext("2d"),this.dimensions={width:t.width,height:t.height},this.hoop=new class{constructor(t){this.ctx=t,this.x=950,this.y=250,this.animate=this.animate.bind(this)}animate(t){this.drawHoop(t)}drawHoop(t){t.beginPath(),t.rect(this.x,this.y,10,125),t.strokeStyle="black",t.stroke(),t.closePath(),t.beginPath(),t.rect(this.x-85,this.y+75,85,10),t.strokeStyle="red",t.stroke(),t.closePath()}}(this.ctx),this.score=new class{constructor(t){this.ctx=t,this.playerScore=0,this.playerLives=3,new FontFace("Dimis","url(../assets/DIMIS___.TTF)").load().then((function(t){console.log("font ready"),document.fonts.add(t)}))}animate(t){this.draw(),this.drawLives()}draw(){this.ctx.font="50px Dimis",this.ctx.fillStyle="black",this.ctx.fillText("Score: "+this.playerScore,20,60)}drawLives(){this.ctx.font="50px Dimis",this.ctx.fillStyle="black",this.ctx.fillText("Lives: "+this.playerLives,250,60)}}(this.ctx),this.ball=new class{constructor(t,s,i){this.ctx=t,this.pos=[100,575],this.radius=25,this.vel=[0,0],this.animate=this.animate.bind(this),this.dragging=!1,this.dragStart=[0,0],this.dragEnd=[0,0],this.detectCollision=this.detectCollision.bind(this),this.made=!1}drawBall(t){t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.strokeStyle="Orange",t.fillStyle="Orange",t.stroke(),t.fill(),t.closePath()}animate(){this.dragging||this.move(),this.drawBall(this.ctx)}move(){0!==this.vel[0]&&(this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1],this.applyGravity())}detectCollision(t){this.pos[0]+this.radius>=t.x&&this.pos[0]+this.radius>=t.x+10&&this.pos[1]>=t.y&&this.pos[1]<=t.y+125?(console.log("backboard collision"),this.vel[0]=-1*this.vel[0]):this.pos[0]+this.radius>=t.x-95&&this.pos[0]+this.radius<=t.x-75&&(this.pos[1]+this.radius>=t.y+55&&this.pos[1]+this.radius<=t.y+105||this.pos[1]-this.radius>=t.y+55&&this.pos[1]-this.radius<=t.y+105)?(console.log("front rim collision",this.pos),this.vel[0]=-1*this.vel[0]):this.pos[0]+this.radius>=t.x-3&&this.pos[0]+this.radius<=t.x&&this.pos[1]+this.radius>=t.y+75&&this.pos[1]+this.radius<=t.y+85&&(console.log("back rim collision"),this.vel[1]=-1*this.vel[1]),this.pos[0]+this.radius<=t.x&&this.pos[0]+this.radius>=t.x-85&&this.pos[1]+this.radius>=t.y+75&&this.pos[1]+this.radius<=t.y+95&&(this.made=!0,console.log("made shot"),this.vel[0]=.1,this.vel[1]=10)}applyGravity(){this.vel[1]+=.4}}(this.ctx),this.dragging=!1,this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.reset=this.reset.bind(this),t.addEventListener("mousedown",this.startDrag.bind(this)),t.addEventListener("mouseup",this.stopDrag.bind(this));const e=document.getElementById("start-button");console.log(e),e.addEventListener("click",this.start.bind(this)),this.startScreen=s,this.over=i,this.play()}animate(){this.ctx.clearRect(0,0,1e3,680),this.drawBackground(),this.ball.detectCollision(this.hoop),this.reset(),this.score.animate(),this.ball.animate(this.ctx),this.hoop.animate(this.ctx),window.requestAnimationFrame(this.animate.bind(this))}drawBackground(){this.ctx.beginPath(),this.ctx.fillStyle="white",this.ctx.strokeStyle="white",this.ctx.fillRect(0,0,this.dimensions.width,this.dimensions.height),this.ctx.stroke(),this.ctx.closePath()}play(){this.animate()}startDrag(){this.ball.dragging=!0,this.startX=event.clientX,this.startY=event.clientY,console.log("Mouse is at X: "+this.startX+", Y: "+this.startY)}stopDrag(){this.endX=event.clientX,this.endY=event.clientY,this.ball.vel[0]=(this.startX-this.endX)/5,this.ball.vel[1]=(this.startY-this.endY)/4,console.log(this.ball.vel),this.ball.dragging=!1}reset(){(this.ball.pos[0]>1e3||this.ball.pos[1]>800)&&(!0===this.ball.made?(this.score.playerScore++,this.ball.made=!1):this.score.playerLives--,this.ball.pos[0]=100,this.ball.pos[1]=575,this.ball.vel=[0,0]),0===this.score.playerLives&&this.gameOver()}start(){document.getElementById("start-screen").style.display="none"}gameOver(){document.getElementById("game-over").style.display="flex",document.getElementById("restart-button").addEventListener("click",this.restartGame.bind(this))}restartGame(){this.resetValues(),document.getElementById("game-over").style.display="none"}resetValues(){this.score.playerScore=0,this.score.playerLives=3}}(t,s,i)}))}();