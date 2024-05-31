# this 理解
## this是什么

- 任何函数本质上都是通过某个对象来调用的，如果没有指定就是window
- 所有函数内部都有一个变量this
- 它的值就是调用函数的当前对象

## 如何判断this 值

- test(): window
- p.test(): p
- new test() :新建的对象
- p.call(obj)： obj

## 总结

- this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象
- 这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象
- 如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例
- 在严格版中的默认的this不再是window，而是undefined。
- new操作符会改变函数this的指向，首先new关键字会创建一个空的对象，然后会自动调用一个函数apply方法，将this指向这个空对象，这样的话函数内部的this就会被这个空的对象替代

## 例子

```jsx
function a(){
    var user = "Ewen";
    console.log(this.user); //undefined
    console.log(this); //Window
}
a();

function a(){
    var user = "Ewen";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
window.a();

var o = {
    user:"Ewen",
    fn:function(){
        console.log(this.user);  //Ewen
    }
}
o.fn();

var o = {
    user:"Ewen",
    fn:function(){
        console.log(this.user); //Ewen
    }
}
window.o.fn();

var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();

var o = {
    a:10,
    b:{
        // a:12,
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();

var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();

function Fn(){
    this.user = "Ewen";
}
var a = new Fn();
console.log(a.user); //Ewen

function fn()  
{  
    this.user = 'Ewen';  
    return {};  
}
var a = new fn;  
console.log(a.user); //undefined

function fn()  
{  
    this.user = 'Ewen';  
    return function(){};
}
var a = new fn;  
console.log(a.user); //undefined

function fn()  
{  
    this.user = 'Ewen';  
    return 1;
}
var a = new fn;  
console.log(a.user); //Ewen

function fn()  
{  
    this.user = 'Ewen';  
    return undefined;
}
var a = new fn;  
console.log(a.user); //Ewen

```