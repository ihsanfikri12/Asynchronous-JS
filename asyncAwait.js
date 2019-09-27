const age = (a) =>{
    return new Promise ((resolve,reject)=>{
    setTimeout((age2)=>{
        resolve(`my age is ${age2}`)
        reject("there are something error")
    },1000,a)
})
}

const age2 = async () => {
    const age3 = await age(10)
    const age4 = await `age3 = ${age3}`
    return age4
}

age2().then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e)
})
