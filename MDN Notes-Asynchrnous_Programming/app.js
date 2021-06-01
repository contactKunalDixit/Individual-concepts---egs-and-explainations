

function loadAsset(url,callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
  

    xhr.onload = function () {
      if(xhr.status===200){
        callback(xhr.responseText)
      }  else{
          console.log(`BEWARE! Error is ${xhr.status}`)
      }
        
    }
    xhr.send();
}






loadAsset("https://jsonplaceholder.typicode.com/posts", function(responsePosts){
    console.log(responsePosts)
})

