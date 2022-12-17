const addImageV2 = url => {
  const addImage = new Promise((resolve, reject) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;
});

// examples

addImageV2('https://server.com/image.png')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
