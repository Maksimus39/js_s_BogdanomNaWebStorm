// цепочка области видимости

// области видимости , так не рекомендуется делать
function myFn() {
    a = true
    console.log(a) // true
}

myFn()   // не рекомендуется
console.log(a) //true