var b1 = document.getElementById('txt1');
var b2 = document.getElementById('txt2');
var b3 = document.getElementById('convert1');
var b4 = document.getElementById('convert2');
var option1, option2;

// Adding listener
b1.addEventListener("keyup", MyConvert());
b3.addEventListener("change", MyConvert());
b4.addEventListener("change", MyConvert());

// initial value
option1 = b3.value;
option2 = b4.value;

//Using MyConvert() for length conversion
function MyConvert() {
    option1 = b3.value;
    option2 = b4.value;

    //Starting from kilometer
    if (option1 === "kilometer" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 1;
    } else if (option1 === "kilometer" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "kilometer" && option2 === "decameter") {
        b2.value = Number(b1.value) * 100;
    } else if (option1 === "kilometer" && option2 === "meter") {
        b2.value = Number(b1.value) * 1000;
    } else if (option1 === "kilometer" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 10000;
    } else if (option1 === "kilometer" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 100000;
    } else if (option1 === "kilometer" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 1000000;
    }
    //Starting from hectometer
    else if (option1 === "hectometer" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "hectometer" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 1;
    } else if (option1 === "hectometer" && option2 === "decameter") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "hectometer" && option2 === "meter") {
        b2.value = Number(b1.value) * 100;
    } else if (option1 === "hectometer" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 1000;
    } else if (option1 === "hectometer" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 10000;
    } else if (option1 === "hectometer" && option2 === "millimeter") {
        b2.value = Number(b1.value) * 100000;
    }
    //Starting from decameter
    else if (option1 === "decameter" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.01;
    } else if (option1 === "decameter" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "decameter" && option2 === "decameter") {
        b2.value = Number(b1.value) * 1;
    } else if (option1 === "decameter" && option2 === "meter") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "decameter" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 100;
    } else if (option1 === "decameter" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 1000;
    } else if (option1 === "decameter" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 10000;
    }
    //Starting fom meter
    else if (option1 === "meter" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.001;
    } else if (option1 === "meter" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 0.01;
    } else if (option1 === "meter" && option2 === "decameter") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "meter" && option2 === "meter") {
        b2.value = Number(b1.value) * 1;
    } else if (option1 === "meter" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "meter" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 100;
    } else if (option1 === "meter" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 1000;
    }
    //Starting from decimeter
    else if (option1 === "decimeter" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.0001;
    } else if (option1 === "decimeter" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 0.001;
    } else if (option1 === "decimeter" && option2 === "decameter") {
        b2.value = Number(b1.value) * 0.01;
    } else if (option1 === "decimeter" && option2 === "meter") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "decimeter" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 1;
    } else if (option1 === "decimeter" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "decimeter" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 100;
    }
    //Starting from centimeter
    else if (option1 === "centimeter" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.00001;
    } else if (option1 === "centimeter" && option2 === "hectometer") {
        b2.value = Number(b1.value) * 0.0001;
    } else if (option1 === "centimeter" && option2 === "decameter") {
        b2.value = Number(b1.value) * 0.001;
    } else if (option1 === "centimeter" && option2 === "meter") {
        b2.value = Number(b1.value) * 0.01;
    } else if (option1 === "centimeter" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "centimeter" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 10;
    } else if (option1 === "centimeter" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 100;
    }
    //Starting from milimeter
    else if (option1 === "milimeter" && option2 === "kilometer") {
        b2.value = Number(b1.value) * 0.000001;
    } else if (option1 === "milimeter" && option2 === "hectoameter") {
        b2.value = Number(b1.value) * 0.00001;
    } else if (option1 === "milimeter" && option2 === "decameter") {
        b2.value = Number(b1.value) * 0.0001;
    } else if (option1 === "milimeter" && option2 === "meter") {
        b2.value = Number(b1.value) * 0.001;
    } else if (option1 === "milimeter" && option2 === "decimeter") {
        b2.value = Number(b1.value) * 0.01;
    } else if (option1 === "milimeter" && option2 === "centimeter") {
        b2.value = Number(b1.value) * 0.1;
    } else if (option1 === "milimeter" && option2 === "milimeter") {
        b2.value = Number(b1.value) * 1;
    }
}

//using MyClear() for clearing data from input text
function MyClear() {
    b1.value = '';
    b2.value = '';
    b3.value = "Select...";
    b4.value = "Select...";
}