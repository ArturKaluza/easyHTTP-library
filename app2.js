const http = new EasyHTTP;
/*
//Get users
http.get('https://jsonplaceholder.typicode.com/users')
.then(res => console.log(res))
.catch(err => console.log(err));
*/

const data = {
  name: 'John Doe',
  username: 'JohnDoe',
  email: 'johnDoe20@test.com'  
}
/*
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
*/
/*
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
*/

// Delete request  
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));