function myfunction(num1, num2, num3) {
    if (num3 != undefined) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
}
console.log(myfunction(10, 20, 30));
console.log(myfunction(10, 20));
function myfun() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var argun = args_1[_a];
        console.log(typeof (argun));
    }
}
myfun(10, 20, 30, 'a', 'b', true);
