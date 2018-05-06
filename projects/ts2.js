function test(shouldinit) {
    var x;
    if (shouldinit) {
        x = 10;
    }
    return x;
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val);
}
var id = 0;
console.log(arr.length);
while (id < arr.length) {
    console.log(arr[id]);
    id++;
}
console.log(test(true));
console.log(test(false));
