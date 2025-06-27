/**
 * Method chaining allows you to execute multiple asynchronous operations 
 * sequentially in a clean, readable way. Each .then() returns a new Promise, 
 * enabling further chaining.
*/

// Using real API endpoints from JSONPlaceholder
function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if (!res.ok) throw new Error('User not found');
            return res.json();
        });
}

function getPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => {
            if (!res.ok) throw new Error('Posts not found');
            return res.json();
        });
}

// Usage
getUser(1)
    .then((user) => {
        console.log('User:', user.name);
        return getPosts(user.id);
    })
    .then((posts) => {
        console.log('First post title:', posts[0]?.title);
    })
    .catch((err) => console.error('Error:', err.message));