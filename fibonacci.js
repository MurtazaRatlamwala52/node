    var a = 0
    var b = 1
    console.log(a)
    console.log(b)
    for(var i=0 ; i<8; i++){
        var c = a + b;
        a = b
        b = c
        console.log(c)
    }