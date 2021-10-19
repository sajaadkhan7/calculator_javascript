function $(id) {
    return document.getElementById(id);
}

function $cls(cl) {
    return document.getElementsByClassName(cl);
}

var val = "";

window.onload = function () {

    //to print year in the footer span element
    var d = new Date();
    $("year").innerHTML = d.getFullYear();


    $("n1").addEventListener("click", function () {
        digit(1);
    });
    $("n2").addEventListener("click", function () {

        digit(2);

    });
    $("n3").addEventListener("click", function () {
        digit(3);
    });
    $("n4").addEventListener("click", function () {
        digit(4);
    });
    $("n5").addEventListener("click", function () {
        digit(5);
    });
    $("n6").addEventListener("click", function () {
        digit(6);
    });
    $("n7").addEventListener("click", function () {
        digit(7);
    });
    $("n8").addEventListener("click", function () {
        digit(8);
    });
    $("n9").addEventListener("click", function () {
        digit(9);
    });

    $("n0").addEventListener("click", function () {
        val = $("cal_box").value;

        digit("0");
        //        if (val !== "") {
        //            digit(0);
        //        }
    });

    $("decimal").addEventListener("click", function () {

        digit(".");
        //        zero();
    });

    $("ac").addEventListener("click", function () {
        unpress();
        clear();
    });

    $("add").addEventListener("click", function () {

        unpress();
        zeroR();
        digit("+");
        $("add").classList.add("is-depressed");
    });

    $("subtract").addEventListener("click", function () {
        unpress();
        zeroR();
        digit("-");
        $("subtract").classList.add("is-depressed");
    });

    $("multiply").addEventListener("click", function () {
        unpress();
        zeroR();
        digit("*");
        $("multiply").classList.add("is-depressed");
    });

    $("divide").addEventListener("click", function () {
        unpress();
        zeroR();
        digit("/");
        $("divide").classList.add("is-depressed");
    });
    $("percentage").addEventListener("click", function () {
        percentage();
    });


    $("equals").addEventListener("click", function () {
        zeroR();
        unpress();
        cal();
    });

    $("sqrt").addEventListener("click", function () {
        sqrt();
    });


    $("exponent").addEventListener("click", function () {

        exponent();

    });
    $("sin").addEventListener("click", function () {

        sin();

    });
    $("cos").addEventListener("click", function () {

        cos();

    });
    $("tan").addEventListener("click", function () {

        tan();

    });
    $("pie").addEventListener("click", function () {

        pie();

    });
    $("log").addEventListener("click", function () {

        log();

    });
    $("backspace").addEventListener("click", function () {

        backspace();

    });
    $("left").addEventListener("click", function () {

        digit("(");

    });
    $("right").addEventListener("click", function () {

        digit(")");

    });

};





//event handlers to work with keyboard


window.addEventListener('keydown', function (event) {
    if (event.which == 13) {

        $("equals").click();
        clearFocus();
        val = $("equals");
        Bpressed(val);
        return false;
    }
});


window.addEventListener('keydown', function (event) {
    if (event.which == 96 || event.which == 48 && !event.shiftKey) {

        $("n0").click();
        clearFocus();
        val = $("n0");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 97 || event.which == 49) {

        $("n1").click();
        clearFocus();
        val = $("n1");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 98 || event.which == 50) {

        $("n2").click();
        clearFocus();
        val = $("n2");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 99 || event.which == 51) {

        $("n3").click();
        val = $("n3");
        Bpressed(val);
        clearFocus();
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 100 || event.which == 52) {

        $("n4").click();
        clearFocus();
        val = $("n4");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 101 || event.which == 53 && !event.shiftKey) {

        $("n5").click();
        clearFocus();
        val = $("n5");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 102 || event.which == 54) {

        $("n6").click();
        clearFocus();
        val = $("n6");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 103 || event.which == 55) {

        $("n7").click();
        clearFocus();
        val = $("n7");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 104 || event.which == 56 && !event.shiftKey) {

        $("n8").click();
        clearFocus();
        val = $("n8");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 105 || event.which == 57 && !event.shiftKey) {

        $("n9").click();
        clearFocus();
        val = $("n9");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 107) {

        $("add").click();
        clearFocus();
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 110) {

        $("decimal").click();
        clearFocus();
        val = $("decimal");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 109) {

        $("subtract").click();
        clearFocus();
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 106 || event.which == 56 && event.shiftKey) {

        $("multiply").click();
        clearFocus();
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 111) {

        $("divide").click();
        clearFocus();
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 8) {

        $("backspace").click();
        clearFocus();
        val = $("backspace");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 53 && event.shiftKey) {

        $("percentage").click();
        clearFocus();
        val = $("percentage");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 27 || event.which == 46) {

        $("ac").click();
        clearFocus();
        val = $("ac");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 57 && event.shiftKey) {

        $("left").click();
        clearFocus();
        val = $("left");
        Bpressed(val);
        return false;
    }
});
window.addEventListener('keydown', function (event) {
    if (event.which == 48 && event.shiftKey) {

        $("right").click();
        clearFocus();
        val = $("right");
        Bpressed(val);
        return false;
    }
});


//moves digits to the calculator display

function digit(n) {
    val = $("cal_box").value;
    if (val == "Error" || val == "-Infinity" || val == "NaN") {
        clear();
        unpress();
    }
    limitInp();
    if (val.length < 17) {
        $("cal_box").value += n;
    }
}

//calculate(=) function with try catch error handling methods 

function cal() {
    val = $("cal_box").value;
    if (val !== "" && val !== "Error") {
        try {
            $("cal_box").value = eval(val);
            limitInp();
        } catch (err) {
            $("cal_box").value = "Error";
        }
    } else {
        clear();
    }
}

//All clear function 
function clear() {
    $("cal_box").value = null;
    limitInp();
}

function percentage() {
    val = $("cal_box").value;

    $("cal_box").value = eval(val / 100);
    limitInp();
}

function exponent() {
    val = $("cal_box").value;
    $("cal_box").value = Math.pow(val, 2);
    limitInp();

}



function sqrt() {
    val = $("cal_box").value;

    $("cal_box").value = Math.sqrt(val);
    limitInp();
}

function sin() {
    val = $("cal_box").value;
    $("cal_box").value = Math.sin(val * Math.PI / 180);
    limitInp();
}

function cos() {
    val = $("cal_box").value;
    if (val !== "" || val !== "0") {
        $("cal_box").value = Math.cos(val * Math.PI / 180);
        limitInp();
    }
}

function tan() {
    val = $("cal_box").value;
    $("cal_box").value = Math.tan(val * Math.PI / 180);
    limitInp();
}

//function to display the pi value if no value entered or multiply the value with pi

function pie() {
    val = $("cal_box").value;
    if (val !== "") {
        $("cal_box").value = ((Math.PI).toFixed(8)) * val;

    } else {
        $("cal_box").value = ((Math.PI).toFixed(8));
    }
}

//all arithmatic operator in the right column are set to stay pressed this function removes the "is-depressed" css class

function unpress() {
    var clss = $cls("key-col");
    for (var i = 0; i < clss.length; i++) {
        if (clss[i].classList.contains("is-depressed")) {
            clss[i].classList.remove("is-depressed");
        }
    }
}

function log() {
    val = $("cal_box").value;
    $("cal_box").value = Math.log10(val);
    limitInp();
}


function backspace() {
    val = $("cal_box").value;

    var arr = val.split("");
    if (arr.length == 1) {
        unpress();
    }
    if (val == "Error" || val == "-Infinity" || val == "NaN") {
        clear();
        unpress();
        arr = [];
    }

    arr.pop();

    $("cal_box").value = arr.join("");
    limitInp();
}


//when i switch between mouse click to keyboard this function clears the fucus of elements
function clearFocus() {
    var ar = document.querySelectorAll("*");
    for (var i = 0; i < ar.length; i++) {
        ar[i].blur();
    }
}


//to assign button press css animation when typing using keyboard

function Bpressed(bt) {
    bt.classList.add("is-depressed");
    setTimeout(function () {
        bt.classList.remove("is-depressed");
    }, 100);
}

//remove leading  zeros
function zeroR() {
    val = $("cal_box").value;
    //    var arr3=val.split("");
    $("cal_box").value = val.replace(/\b(?:0*((^0|\d+)\.\d*)|0+)/g, '$1');
}

function limitInp() {
    val = $("cal_box").value;
    if (val.length > 10) {
        $("cal_box").style.fontSize = "1em";
        $("cal_box").style.paddingBottom = "1.3em";
        $("cal_box").style.paddingTop = "1.3em";
        $("cal_box").style.paddingLeft = "1.4em";
        $("cal_box").style.paddingRight = "1.4em";
    } else {
        $("cal_box").style.fontSize = "1.7em";
        $("cal_box").style.paddingBottom = "0.5em";
        $("cal_box").style.paddingTop = "0.5em";
        $("cal_box").style.paddingLeft = "0.75em";
        $("cal_box").style.paddingRight = "0.75em";

    }
}
