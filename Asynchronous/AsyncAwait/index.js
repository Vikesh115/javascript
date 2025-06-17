/**
 * async/await
*/

let getAPIUsersData = async () =>{
    try {
        let promise = await  fetch("https://jsonplaceholder.typicode.com/users")
        let data = await promise.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAPIUsersData()

// async function getData(){
//     try {
//         let promise = new Promise((res,rej)=>{
//             res("Promise resolved")
//         })
//         let result = await promise;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()
