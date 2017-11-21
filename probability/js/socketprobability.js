onmessage = function(e) {

	var copies = parseInt(e.data.copies);
	var slots = e.data.slots;
	var temp = slots.slice(0);

	
	var approximationLimit = 500000;
	var domain = 10;
	var max_sockets = 5;
	 //Array.apply(null, Array(slots)).map(function (x) { return 0; }); // intialize [0, ... , 0] length = #slots
	var successful = 0;
	var draw_result = 0;
	var maxed = true;
	
	var socketProgress = 0;
	var data = null;
	
	for (var i = 0; i < approximationLimit; i++) {
		for (var j = 0; j < copies; j++) {
			do {
				draw_result = draw(0, domain - 1);
				
				// if socket is a socket we don't need
				if (draw_result >= slots.length) {
					break;
				}
				
				// check if pulled socket is already maxed
				if (slots[draw_result] < max_sockets) {
					slots[draw_result]++;
					break;
				} 
				
				// we get here if socket pulled is already maxed and we pull again without subtracting the copy count (lazy solution)
			} while (true);
			
		}
		// check if all slots were maxed
		for (var k = 0; k < slots.length; k++) {
			if (slots[k] < max_sockets) {
				maxed = false;
				break;
			}
		}
		
		if (maxed == true) {
			successful++;
		}
		// reset all variables
		slots = temp.slice(0);
		maxed = true;
		drawResult = 0;
		
		if (i % 5000 == 0) {
			//console.log(i);
			
			socketProgress = Math.round(i / approximationLimit * 100);
			data = 
			{
				finished: false,
				progress: socketProgress
				
			};
			postMessage(data);
	
		}
	}
	//console.log("successful: " + successful);
	//console.log(approximationLimit);
	var prob = successful / approximationLimit;
	data = 
	{
		finished: true,
		result: prob,
		progress: 100
	};
	postMessage(data);
	
}

function draw(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}