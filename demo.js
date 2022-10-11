/* <h4>What is the for-in loop in JavaScript? Give its syntax</h4>/ */
var a= {
  firstName:'roh',
  age:'18'
};
for(var i in a){
  console.log(a[i])
};
/* <h4>What is difference between null and undefined and where to use what?</h4> */
var name=null;
console.log(name);
var p;
console.log(p)

/* <h4>what is Symbol?</h4> */
const val = symbol(1);
const val2=symbol(1);
console.log(val==val2);

/* <h4>Write code to explain map and filter in arrays</h4> */
const a=[10,20,30,40]
let c=a.filter(item=>item>10)
console.log(c);

let b=a.map(item=>item*2)
console.log(b);
/* <h4>Explain passed by value and passed by reference</h4> */
let t=10;
let v=t;
v=t+5
console.log(t);
console.log(v);

let obj={
  Name:'roh',
  id: 12
}
let obj2=obj1;
obj2.id=5;
console.log(obj1);