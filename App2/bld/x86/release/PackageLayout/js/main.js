// Your code here!
// Your code here!

window.onload = function () {
    document.getElementById('mybutton').onclick = function encrypt() {
        document.getElementById('out').innerHTML = document.getElementById('message').value;
        var message1 = document.getElementById('message').value;
        var message = message1.toLowerCase();
        var offset = document.getElementById('offset').value;
        spinWheel(offset, message);
        document.getElementById("panel0").style.display = "block";
        document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
    };

}

function spinWheel(offset, message) {
    var output = [];
    for (var ii = 0; ii < message.length; ii++) {
        if (message.charAt(ii) == 'a') {
            output.push(1 + parseInt(offset));
        } else if (message.charAt(ii) == 'b') {
            output.push(2 + parseInt(offset));
        } else if (message.charAt(ii) == 'c') {
            output.push(3 + parseInt(offset));
        } else if (message.charAt(ii) == 'd') {
            output.push(4 + parseInt(offset));
        } else if (message.charAt(ii) == 'e') {
            output.push(5 + parseInt(offset));
        } else if (message.charAt(ii) == 'f') {
            output.push(6 + parseInt(offset));
        } else if (message.charAt(ii) == 'g') {
            output.push(7 + parseInt(offset));
        } else if (message.charAt(ii) == 'h') {
            output.push(8 + parseInt(offset));
        } else if (message.charAt(ii) == 'i') {
            output.push(9 + parseInt(offset));
        } else if (message.charAt(ii) == 'j') {
            output.push(10 + parseInt(offset));
        } else if (message.charAt(ii) == 'k') {
            output.push(11 + parseInt(offset));
        } else if (message.charAt(ii) == 'l') {
            output.push(12 + parseInt(offset));
        } else if (message.charAt(ii) == 'm') {
            output.push(13 + parseInt(offset));
        } else if (message.charAt(ii) == 'n') {
            output.push(14 + parseInt(offset));
        } else if (message.charAt(ii) == 'o') {
            output.push(15 + parseInt(offset));
        } else if (message.charAt(ii) == 'p') {
            output.push(16 + parseInt(offset));
        } else if (message.charAt(ii) == 'q') {
            output.push(17 + parseInt(offset));
        } else if (message.charAt(ii) == 'r') {
            output.push(18 + parseInt(offset));
        } else if (message.charAt(ii) == 's') {
            output.push(19 + parseInt(offset));
        } else if (message.charAt(ii) == 't') {
            output.push(20 + parseInt(offset));
        } else if (message.charAt(ii) == 'u') {
            output.push(21 + parseInt(offset));
        } else if (message.charAt(ii) == 'v') {
            output.push(22 + parseInt(offset));
        } else if (message.charAt(ii) == 'w') {
            output.push(23 + parseInt(offset));
        } else if (message.charAt(ii) == 'x') {
            output.push(24 + parseInt(offset));
        } else if (message.charAt(ii) == 'y') {
            output.push(25 + parseInt(offset));
        } else if (message.charAt(ii) == 'z') {
            output.push(26 + parseInt(offset));
        } else {
            output.push(message.charAt(ii));
        }

        var encrypted = [];
        for (var iii = 0; iii < output.length; iii++) {
            if (output[iii] == " ") {
                encrypted.push(' ');
            } else if (isNaN(output[iii])) {
                encrypted.push(output[iii]);
            } else if (output[iii] == 1 || output[iii] == 27) {
                encrypted.push('a');
            } else if (output[iii] == 2 || output[iii] == 28) {
                encrypted.push('b');
            } else if (output[iii] == 3 || output[iii] == 29) {
                encrypted.push('c');
            } else if (output[iii] == 4 || output[iii] == 30) {
                encrypted.push('d');
            } else if (output[iii] == 5 || output[iii] == 31) {
                encrypted.push('e');
            } else if (output[iii] == 6 || output[iii] == 32) {
                encrypted.push('f');
            } else if (output[iii] == 7 || output[iii] == 33) {
                encrypted.push('g');
            } else if (output[iii] == 8 || output[iii] == 34) {
                encrypted.push('h');
            } else if (output[iii] == 9 || output[iii] == 35) {
                encrypted.push('i');
            } else if (output[iii] == 10 || output[iii] == 36) {
                encrypted.push('j');
            } else if (output[iii] == 11 || output[iii] == 37) {
                encrypted.push('k');
            } else if (output[iii] == 12 || output[iii] == 38) {
                encrypted.push('l');
            } else if (output[iii] == 13 || output[iii] == 39) {
                encrypted.push('m');
            } else if (output[iii] == 14 || output[iii] == 40) {
                encrypted.push('n');
            } else if (output[iii] == 15 || output[iii] == 41) {
                encrypted.push('o');
            } else if (output[iii] == 16 || output[iii] == 42) {
                encrypted.push('p');
            } else if (output[iii] == 17 || output[iii] == 43) {
                encrypted.push('q');
            } else if (output[iii] == 18 || output[iii] == 44) {
                encrypted.push('r');
            } else if (output[iii] == 19 || output[iii] == 45) {
                encrypted.push('s');
            } else if (output[iii] == 20 || output[iii] == 46) {
                encrypted.push('t');
            } else if (output[iii] == 21 || output[iii] == 47) {
                encrypted.push('u');
            } else if (output[iii] == 22 || output[iii] == 48) {
                encrypted.push('v');
            } else if (output[iii] == 23 || output[iii] == 49) {
                encrypted.push('w');
            } else if (output[iii] == 24 || output[iii] == 50) {
                encrypted.push('x');
            } else if (output[iii] == 25 || output[iii] == 51) {
                encrypted.push('y');
            } else if (output[iii] == 26 || output[iii] == 52) {
                encrypted.push('z');
            }
        }
        var a = 1 + offset;
        var b = 2 + offset;
        var c = 3 + offset;
        var d = 4 + offset;
        var e = 5 + offset;
        var f = 6 + offset;
        var g = 7 + offset;
        var h = 8 + offset;
        var i = 9 + offset;
        var j = 10 + offset;
        var k = 11 + offset;
        var l = 12 + offset;
        var m = 13 + offset;
        var n = 14 + offset;
        var o = 15 + offset;
        var p = 16 + offset;
        var q = 17 + offset;
        var r = 18 + offset;
        var s = 19 + offset;
        var t = 20 + offset;
        var u = 21 + offset;
        var v = 22 + offset;
        var w = 23 + offset;
        var x = 24 + offset;
        var y = 25 + offset;
        var z = 26 + offset;
    };

    document.getElementById('out2').innerHTML = output;

    document.getElementById('out3').innerHTML = encrypted.join("");

    document.getElementById('out4').innerHTML = 26 - parseInt(offset);

}