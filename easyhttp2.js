class EasyHTTP {
  // make a hTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    })
  }

  // make a HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

// make a HTTP PUT requet
put(url, data) {
  return new Promise((resolve, reject)=>{
    fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  })
}

// make a HTTP DELETE request
delete(url) {
  return new Promise((resolve, reject)=>{
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then( res => res.json())
    .then(() => resolve('Resource delete...'))
    .catch(err => reject(err));
  })
}

}