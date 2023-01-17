const repos = ['repo1', 'repo2', 'repo3'];
console.log('Loading the Database');

const get = (callback) => {
    console.log('Getting the Repos from the Database')
    setTimeout(() => {   
    callback(repos)
    }, 3000);  
}

const closeDatabase = (display) => {
    console.log(display) 
    console.log('Closing the Database')
}

get(closeDatabase);