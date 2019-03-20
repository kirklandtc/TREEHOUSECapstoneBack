document.addEventListener('DOMContentLoaded', function(){

  let ul = document.querySelector('ul')

//axios version
  getAllUsers()
  .then( results => {
    for (var i = 0; i < results.data.length; i++) {
      let li = document.createElement('li')
      li.innerText = `${results.data[i].model}, ${results.data[i].description}`
      ul.appendChild(li)
    }
  })

  let form = document.querySelector('form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    let user = {}
    user.model= event.target.name.value
    user.description = event.target.nice.checked

    createNewUser(user)
    .then(results => {
      console.log(results.data);
    })
  })
