var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var persion1 = {
    first_name: 'rajnish',
    age: 27
};
persion1.first_name = 'rajnish';
persion1.age = 27;
var persion2 = {
    first_name: 'rajnish',
    age: 27,
    hair_color: 'black',
    eyes_color: 'black',
    height: 70,
    zone: 'north'
};
//use the interface by declaring let key word
var persion3 = {
    first_name: 'rajnish',
    age: 27,
    hair_color: 'black',
    eyes_color: 'black',
    height: 70,
    zone: 'north',
    nasnality: 'Indian'
};
console.log(persion2);
//class can implements interfaces
var Persion = /** @class */ (function () {
    function Persion(fn, ln, age) {
        this.first_name = fn;
        this.last_name = ln;
        this.age = age;
    }
    Persion.prototype.display = function () {
        console.log(this);
    };
    Persion.prototype.displayasstring = function () {
        return JSON.stringify(this, null, 2);
    };
    return Persion;
}());
var pp1 = new Persion('rajnish', 'singh', 20);
console.log(pp1);
pp1.display();
console.log(pp1.displayasstring());
//to extends other class 
var Superpersion = /** @class */ (function (_super) {
    __extends(Superpersion, _super);
    function Superpersion(fn, ln, age, sp) {
        var _this = _super.call(this, fn, ln, age) || this;
        _this.super_power = sp;
        return _this;
    }
    //to create private method so this will not inherited outside of class
    Superpersion.prototype.dosomethingcomplecated = function () {
        var s = this.helperMethod();
    };
    Superpersion.prototype.helperMethod = function () {
        return 'asfffd';
    };
    return Superpersion;
}(Persion));
var sp1 = new Superpersion('rajnish', 'kumar', 20, 'laser beam');
sp1.display();
