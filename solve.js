"use strict"
let obj={
    a:1,
    print: function ()
    {
        console.log(this.a)
    }
}
let second=obj.print;
second();