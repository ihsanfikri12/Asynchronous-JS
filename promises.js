const person = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world");
        reject("ohayo sekai good morning world");
    },1200)
})

person.then((result)=>{
    return result;
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e);
})