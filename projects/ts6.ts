interface Ipersion{
first_name:string,
age:number,
}
let persion1: Ipersion = {
    first_name : 'rajnish',
    age: 27,
}

persion1.first_name='rajnish';
persion1.age=27;

interface Idescriptive extends Ipersion{
hair_color:string,
eyes_color:string,
height:number,
zone:string,
}

let persion2:Idescriptive={
    first_name:'rajnish',
    age:27,
    hair_color:'black',
    eyes_color:'black',
    height:70,
    zone:'north',
}

interface Inesnality{
    nasnality:string,
}
//Extends multiple interface 
interface Idescriptivenationality extends Idescriptive,Inesnality{

}
//use the interface by declaring let key word
let persion3:Idescriptivenationality={
    first_name:'rajnish',
    age:27,
    hair_color:'black',
    eyes_color:'black',
    height:70,
    zone:'north',
    nasnality:'Indian'
}
console.log(persion2)

interface Idisplayable{
    display():void;
    displayasstring():string;
}
//class can implements interfaces
class Persion implements Idisplayable{
    first_name:string;
    last_name:string;
    age:number;
    private _ssn:string;
    display():void{
     console.log(this);
    }
    displayasstring():string{
        return JSON.stringify(this,null,2);
    }
    constructor(fn:string,ln:string,age:number){
        this.first_name=fn;
        this.last_name=ln;
        this.age=age;
    }
}

let pp1=new Persion('rajnish','singh',20);
console.log(pp1);
pp1.display();
console.log(pp1.displayasstring());

//to extends other class 
class Superpersion extends Persion{
    super_power:string;
    constructor(fn:string,ln:string,age:number,sp:string){
        super(fn,ln,age);
        this.super_power=sp;
    }
    //to create private method so this will not inherited outside of class
    dosomethingcomplecated(){
        let s=this.helperMethod();
    }
    private helperMethod():string{
        return 'asfffd';
    }
}

let sp1=new Superpersion('rajnish','kumar',20,'laser beam');

sp1.display();