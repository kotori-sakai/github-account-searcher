const GITHUB_URI = 'https://api.github.com'
function searchUser() {
  const textElement = document.getElementById('github-textbox');
  const textValue = textElement.value;
  const uri = `${GITHUB_URI}/users/${textValue}`;
  console.log(uri);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', uri)
  
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const { name, avatar_url } = xhr.response;
      console.log(xhr.response);

      const resultElement = document.getElementById('result');
      resultElement.innerHTML = "<p>Name: " + name + "</p>"; 
      resultElement.innerHTML += `<img src="${avatar_url}" />`;
    }
  };
  
  xhr.responseType = 'json';
  xhr.send(null)
}
