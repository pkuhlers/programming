function draw() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	var center = {x: c.width/2, y: c.height/2};
	var start = 0;
	var stop = Math.PI * 2;

	var player = {x: 1000, y: 1000, r: 5};

	function heart(time) {
		var angle = (stop - start) * time;
		var r = - 60 * ((Math.sin(angle) * Math.sqrt(Math.abs(Math.cos(angle)))) / (Math.sin(angle) + 7/5) - 2 * Math.sin(angle) + 2) 
		var point = {
			x: center.x + r * Math.cos(angle),
			y: center.y + r * Math.sin(angle)
		}
		return point;
	}

	const TOTALTIME = 5;
	var timer = 0;

	var last = 0;
	function main(ms) {
		requestAnimationFrame(main);

		const t = ms/1000
		dt = t - last;
		last = t;
		timer += dt;

		//ctx.clearRect(0, 0, c.width, c.height);

		if(timer <= TOTALTIME) {
			var position = heart(timer/TOTALTIME);
			player.x = position.x;
			player.y = position.y;
		} else {
			timer = 0;
		}

		ctx.beginPath();
		ctx.arc(player.x, player.y, player.r, 0, 2 * Math.PI);
		ctx.fillStyle = "red";
		ctx.fill();
	}
	requestAnimationFrame(main);
}
