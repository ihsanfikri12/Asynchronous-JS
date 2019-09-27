function name (nama,callback) {
    setTimeout((name2)=>{
        callback(name2);
    },1500,nama)
}

name("fikri",nama=>console.log(nama));