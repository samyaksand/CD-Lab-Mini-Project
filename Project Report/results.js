var a = 0,
	b = 0,
	bin = 0,
	_dout = 0,
	_bout = 0;
var s0 = 0,
	s1 = 0,
	s2 = 0,
	s3 = 0,
	s4 = 0;
function change0() { // no ';' here
	var btn = document.getElementById('mybtn');
	btn.value = 'my value'; // will just add a hidden value
	// btn.innerHTML = '1';
	if (btn.innerHTML == '0') {
		btn.innerHTML = '1';
		a = 1;
	} else {
		btn.innerHTML = '0';
		a = 0;
	}
	// change image src to the next image of id=dout

	calcuate();
}
function change1() { // no ';' here
	var btn = document.getElementById('mybtn1');
	btn.value = 'my value'; // will just add a hidden value
	// btn.innerHTML = '1';
	if (btn.innerHTML == '0') {
		btn.innerHTML = '1';
		b = 1;
	} else {
		btn.innerHTML = '0';
		b = 0;
	}
	calcuate();
}
function change2() { // no ';' here
	var btn = document.getElementById('mybtn2');
	btn.value = 'my value'; // will just add a hidden value
	// btn.innerHTML = '1';
	if (btn.innerHTML == '0') {
		btn.innerHTML = '1';
		bin = 1;
	} else {
		btn.innerHTML = '0';
		bin = 0;
	}
	calcuate();
}

//function to add u-black class to fa0, if u-black class is not present. else remove it and add u-red class to fa0
function fault0() {
	var fa0 = document.getElementById('fa0');
	if (fa0.classList.contains('u-black')) {
		fa0.classList.remove('u-black');
		fa0.classList.add('u-palette-2-base');
		s0 = 1;
	} else {
		fa0.classList.remove('u-palette-2-base');
		fa0.classList.add('u-black');
		s0 = 0;
	}
	calcuate();
}
function fault1() {
	var fa1 = document.getElementById('fa1');
	if (fa1.classList.contains('u-black')) {
		fa1.classList.remove('u-black');
		fa1.classList.add('u-palette-2-base');
		s1 = 1;
	} else {
		fa1.classList.remove('u-palette-2-base');
		fa1.classList.add('u-black');
		s1 = 0;
	}
	calcuate();
}
function fault2() {
	var fa2 = document.getElementById('fa2');
	if (fa2.classList.contains('u-black')) {
		fa2.classList.remove('u-black');
		fa2.classList.add('u-palette-2-base');
		s2 = 1;
	} else {
		fa2.classList.remove('u-palette-2-base');
		fa2.classList.add('u-black');
		s2 = 0;
	}
	calcuate();
}
function fault3() {
	var fa3 = document.getElementById('fa3');
	if (fa3.classList.contains('u-black')) {
		fa3.classList.remove('u-black');
		fa3.classList.add('u-palette-2-base');
		s3 = 1;
	} else {
		fa3.classList.remove('u-palette-2-base');
		fa3.classList.add('u-black');
		s3 = 0;
	}
	calcuate();
}
function fault4() {
	var fa4 = document.getElementById('fa4');
	if (fa4.classList.contains('u-black')) {
		fa4.classList.remove('u-black');
		fa4.classList.add('u-palette-2-base');
		s4 = 1;
	} else {
		fa4.classList.remove('u-palette-2-base');
		fa4.classList.add('u-black');
		s4 = 0;
	}
	calcuate();
}
//function that returns 1 is input is 0 and 0 if input is 1
function invert(input) {
	if (input == 0) {
		return 1;
	} else {
		return 0;
	}
}

function calcuate() {
	//calculate fullsubtracor
	var _a, _b, _bin;
	_a = a;
	_b = b;
	_bin = bin;
	if (s0 == 1) {
		_a = 0;
	}
	if (s1 == 1) {
		_b = 0;
	}
	if (s2 == 1) {
		_bin = 0;
	}

	_dout = _a ^ _b ^ _bin;
	_bout = invert(_a) * _bin + invert(_a) * _b + _b * _bin;
	if (_bout > 1) {
		_bout = 1;
	}

	if (s3 == 1) {
		_dout = 0;
	}
	if (s4 == 1) {
		_bout = 0;
	}

	if (_dout == '1') {
		var dout = document.getElementById('dout');
		dout.src = 'images/3522738.png';
	} else {
		var dout = document.getElementById('dout');
		dout.src = 'images/3522725.png';
	}

	if (_bout == '1') {
		var bout = document.getElementById('bout');
		bout.src = 'images/3522738.png';
	} else {
		var bout = document.getElementById('bout');
		bout.src = 'images/3522725.png';
	}
}

function yesno() {
	if ((_dout == a) ^ b ^ bin) {
		if (((invert(a) & b) | (invert(a) & bin) | (b & bin)) == _bout) {
			return 'NO';
		}
	}
	return 'YES';
}

function yesnook() {
	if ((_dout == a) ^ b ^ bin) {
		if (((invert(a) & b) | (invert(a) & bin) | (b & bin)) == _bout) {
			return 'lightgreen';
		}
	}
	return 'red';
}

function addResult() {
	let html = `
                     <tr>
                        <td class="tg-nrix">${a}</td>
                        <td class="tg-nrix">${b}</td>
                        <td class="tg-nrix">${bin}</td>
                        <td class="tg-nrix">${a ^ b ^ bin}</td>
                        <td class="tg-nrix">${(invert(a) & b) | (invert(a) & bin) | (b & bin)}</td>
                        <td class="tg-nrix">${_dout}</td>
                        <td class="tg-nrix">${_bout}</td>
                        <td class="tg-nrix" bgcolor="${yesnook()}">${yesno()}</td>
                    </tr>
                    `;
	document.getElementById('insert-here').innerHTML += html;
}

function reset() {
	$("#tgi tbody tr").remove();
}