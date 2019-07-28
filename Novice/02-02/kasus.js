const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
  	console.log(response);
  		for (const post of response.data){
  			console.log(post.body);
  		}
  })
  .catch(error => {
    console.log(error);
  });
