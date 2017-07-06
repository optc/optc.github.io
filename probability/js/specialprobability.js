onmessage = function(e) {

	var copies = parseInt(e.data.copies);
	var skillups = parseInt(e.data.skillups);

	var probability = 0.125;
    if (e.data.jpn_server == true) {
		probability = .2;
	}
	// if special event selected probability is doubled
	if (e.data.special_event == true) {
		probability *= 2;
	}
    // if special event selected probability is trippled
	else if (e.data.special_3event == true) {
		probability *= 3;
	}


	var prob = 0;
	var result = 0;

	var socketProgress = 0;
	var data = null;

	for (var i = skillups; i <= copies; i++) {
		result = binomial(copies, i, probability);
		prob += result;

		socketProgress = Math.round(i / copies * 100);

		data =
		{
			finished: false,
			progress: socketProgress

		};
		postMessage(data);

	}

    if (isNaN(prob) || !isFinite(prob))
        prob = 0.999;
	data =
	{
		finished: true,
		result: prob,
		progress: 100
	};
	postMessage(data);
}

function binomial(copies, skillups, probability) {
	return coefficient(copies, skillups) * Math.pow(probability, skillups)
			* Math.pow((1 - probability), copies - skillups);
}

function coefficient(n, k) {
	if (k == 0) {
		return 1;
	} else if (k > n || k < 0 || n < 0) {
		return 0;
	} else {
		var denominator = facculty(n, n - k + 1);
		var counter = facculty(k, 1);

		return denominator / counter;
	}
}

function facculty(start, end) {
	if (start > end) {
		return start * facculty(start - 1, end);
	} else {
		return end;
	}
}
