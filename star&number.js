// i = 1
// count = 1
// while(i<=2){ 
//     toggle = true
//     if ( i % 2 == 0 ){
//     toggle = false
//     }
//     if(toggle){
//         for(j=0; j<5; j++){
//             console.log(count)
//             count++
//         }
//     }else{
//         for(k=0; k<5; k++){
//             console.log("*")
//         }    
//     }
//     i++;
// }

// j = 1
// flag = true
// while(j < 100){
     
//     if(flag){
//         document.write(j + " ")
//     }
//     if(!flag){
//         for (i=0 ; i<5; i++){
//             document.write("* ")
//         }    
//         j += 5
//     }
//     if(j % 5 == 0){
//         flag = false;
//     }else{
//         flag = true
//     }
//     j++
// }

j = 1
flag = true
while(j < 100){
     
    if(flag){
        document.write(j + " ")
    }
    else {
        document.write("* ")
    }
    if(i%5==0){
        flag = false
    }
    j++;
}