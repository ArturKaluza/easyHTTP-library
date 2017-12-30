const http = new easyHTTP;
/*
// GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
  if (err) {
    console.log(err);
  } else {
    console.log(response)
  }
});
*/

// POST request
const data = {
  title: 'custom post',
  body: 'This is a custom post'
}
/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
})

// PUT request
// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
})
*/
// DELETE request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if (err) {
    console.log(err);
  } else {
    console.log(response)
  }
});