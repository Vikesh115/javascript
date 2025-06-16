
const isReqSuccessful = true;

// let promise = new Promise((resolve, reject)=>{
//     if(isReqSuccessful){
//         resolve("Succeccful resolved")
//     }else{
//         let error = new Error("Something went wrong")
//         reject(error)
//     }
// })

// console.log(promise);

let db = [
    {id:1, name:"Raut"},{id:2, name:"Vikesh"}
]

const promise = new Promise((resolve, reject)=>{
    if(isReqSuccessful){
        setTimeout(() => {
            resolve(db)
        }, 3000);
    }else{
        let error = new Error("Something wrong")
        reject(error)
    }
})

console.log(promise);

promise
.then(response => console.log(response))
.catch(err => console.log(err))