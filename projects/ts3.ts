function myfunction(num1:number,num2:number,num3?:number):number{
    if(num3 != undefined){
        return num1+num2+num3;
    }
    else{
        return num1+num2;
    }
}

console.log(myfunction(10,20,30));
console.log(myfunction(10,20));

function myfun(...args:any[]){
    for(let argun of args){
        console.log(typeof(argun));
    }
    
}

myfun(10,20,30,'a','b',true);