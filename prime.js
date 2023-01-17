// function prime(num){
    
//     for (count = 2; count  <= num ; count++){
//         isPrime = true; 
//         for (check = 2; check < count ; check++){
//             if(count % check == 0){
//                 isPrime = false;
//                 break;  
//             }

//         }

//     }
// }

function numbers (range , callback) {
    for (num = 2 ; num < range ; num++ ){
        callback (num)
    }
}

function check (returned){    
    for (numb = 2; numb < returned/2; numb++){
        if (numb % returned == 0){
        isPrime = false;
    }
        
    }
        
    }


numbers(10, check )





function one(callback){
    c = 1 + 2
     callback (c);
}

function two (display){
    console.log(display)
}

one(two)