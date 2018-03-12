



		
		
				var canvas,ctx;

		
		var canvas = document.getElementById("one");
		var ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.strokeStyle = "#FF1C0A";
			ctx.fillStyle = "#FF1C0A";
			ctx.moveTo(80, 0); // pick up "pen," reposition at 500 (horiz), 0 (vert)
			ctx.lineTo(50, 50); // draw straight down by 200px (200 + 200)
			ctx.lineTo(110, 50); // draw up toward left (100 less than 300, so left)
			ctx.closePath(); // connect end to start
			ctx.stroke(); // outl
			  ctx.fill();

		var c = document.getElementById("two");
		var ctx = c.getContext("2d");
			ctx.fillStyle = "#8A2BE2";
			ctx.beginPath();
			ctx.arc(30,30,30, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();

		var canvas = document.getElementById("three");
		var context = canvas.getContext('2d');
	  
			  context.beginPath();
			  context.rect(25, 25, 50, 50);
			  context.fillStyle = '#00FFFF';
			  ctx.strokeStyle = "#FF1C0A";
			  context.fill();
			  context.stroke();

		var canvas = document.getElementById("four");
		var context = canvas.getContext('2d');
		
			context.beginPath();
			context.fillStyle = '#006400';
			context.fillRect(20, 20, 50, 50);
			context.clearRect(30, 30, 30, 30);
			context.strokeRect(30, 30, 30, 30);

	
		var canvas = document.querySelector('#five').getContext('2d'),side = 0,
			size = 100,
			x = 110,
			y = 100;
			canvas.beginPath();
			canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
			for (side; side < 7; side++) {
			canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
	}
			canvas.fillStyle = "#f9091d";
			canvas.fill();

		var myCanvas = document.getElementById("six");
		var ctx = myCanvas.getContext("2d");


			
								ctx.beginPath()
								ctx.moveTo(37,0);
								ctx.lineTo(75,50);
                                ctx.lineTo(37, 100);
                                ctx.lineTo(0,50);
							    ctx.lineWidth = 0;
								ctx.fillStyle = "#00008B";
                                ctx.strokeStyle = "#00008B";
								 ctx.closePath();
								 ctx.fill();
								ctx.stroke();					 
													
		
		var c = document.getElementById("seven");
		var ctx = c.getContext("2d");
		
			ctx.fillStyle = "#8A2BE2";
			ctx.beginPath();
			ctx.arc(30,30,30, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
		
		
		
		
		var myCanvas = document.getElementById("eight");
        var ctx = myCanvas.getContext("2d");
                                 

                                 ctx.beginPath();
                                ctx.moveTo(37,0);
                                ctx.lineTo(75,50);
                                ctx.lineTo(37, 100);
                                ctx.lineTo(0,50);								 
							    ctx.lineWidth = 8;
                                ctx.strokeStyle = "#00FF7F";
                                ctx.fillStyle = "#FFFAFA";
                                ctx.closePath();
								 ctx.fill();
                                ctx.stroke();
                           


 var canvas = document.getElementById("nine");
      var context = canvas.getContext('2d');
	  
      context.beginPath();
      context.rect(25, 25, 50, 50);
      context.fillStyle = '#00FFFF';
	  ctx.strokeStyle = "#FF1C0A";
      context.fill();
      context.stroke();	




var canvas = document.getElementById("ten");
 var ctx = canvas.getContext('2d');

   
	ctx.beginPath();
    ctx.strokeStyle = "#4169E1";
	ctx.lineWidth = 8;
	ctx.fillStyle = "#FFFAFA";
    ctx.moveTo(80, 0); 
    ctx.lineTo(50, 50); 
    ctx.lineTo(110, 50); 
    ctx.closePath(); 
    ctx.stroke(); 
      ctx.fill();	

	  
	  //FIRST  

	  