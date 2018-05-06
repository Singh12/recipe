function test(shouldinit: Boolean){
let x;
 if(shouldinit){
     x=10;
  }
 return x;
 }

let arr: number[]=[10,20,30,40];
 for(let val of arr){
console.log(val);
 }
 let id=0;
 console.log(arr.length);
while(id<arr.length)
{
    console.log(arr[id]);
    id++;
}

console.log(test(true));
console.log(test(false));