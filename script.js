const submitBtn = document.querySelector('#btn')
const imgHolder = document.querySelector('#img-container')
console.log(submitBtn)
//console.log(inputBox)

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let inputBox = document.querySelector('#search')

  const data = fetch(`https://www.reddit.com/search.json?q=cats+nsfw:no`).then((response) => {
    response.json().then((json) => {
      console.log(json)

      imgHolder.innerText = json.cats
    })
  })
})