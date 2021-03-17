let grid = document.querySelector('.fields')
let submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  let redditSearch = document.querySelector('#')
  getReddit(redditFetch.value)
})

let getReddit = async (keyword) => {
  try {
    let response = await fetch(`https://www.reddit.com/search.json?q=${keyword}`)



  } catch (error) {
    
  }
}