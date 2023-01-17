function makeRequest(input){
        return new Promise(function(resolve , reject){
        console.log(`Making request to ${input}`)
        if(input == 'Google'){
            resolve('Welcome to Google')
        } 
        else{
            reject('Can only send req to Google')
        } 
    })
}

function proccessedRequest(){
    flag = false;
    return new Promise((resolve, reject) => {
        if(flag)resolve('Response Processed')
        else reject('Error 404')
    })
}

async function Passing(){
    try{
    const userinp = prompt('Enter the Browser Name')
    const respnse = await makeRequest(userinp)
    console.log(respnse)
    const process = await proccessedRequest()
    console.log(process)
}
    catch(err){
        alert(err)
    }
    
}

Passing()