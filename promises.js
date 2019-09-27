const person = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello world");
        reject("ohayo sekai good morning world");
    })
})

person.then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})