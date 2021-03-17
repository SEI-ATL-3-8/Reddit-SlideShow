let slideshowInterval = null

document.querySelector('#start-show').addEventListener('click', async () => {  
  const userInput = document.querySelector('#user-input').value
    
  const fetchUrl = `http://www.reddit.com/search.json?q=${userInput}+nsfw:no`

  const response = await fetch(fetchUrl)
  const data = await response.json()
  const children = data.data.children
    
  // const childrenWithImgs = children.filter((child) => {
  //   return child.data.thumbnail !== 'self'
  // })

  const childrenWithImgs = []

  children.forEach((child) => {
    if (child.data.thumbnail !== 'self') {
      childrenWithImgs.push(child)
    }
  })

  // const justThumbnails = childrenWithImgs.map((child) => {
  //   return child.data.thumbnail
  // })
  
  const justThumbnails = []

  childrenWithImgs.forEach((child) => {
    justThumbnails.push(child.data.thumbnail)
  })

  let imgCounter = 0

  slideshowInterval = setInterval(() => {
    document.querySelector('#slideshow-img').src = justThumbnails[imgCounter]

    imgCounter++
  }, 2000)

  document.querySelector('#before-slideshow').classList.add('hidden')
  document.querySelector('#slideshow').classList.remove('hidden')
})

document.querySelector('#stop-slideshow').addEventListener('click', () => {
  document.querySelector('#before-slideshow').classList.remove('hidden')
  document.querySelector('#slideshow').classList.add('hidden')
  clearInterval(slideshowInterval)
})



// just an illustration of how to do it with setTimeout

// let timeDelay = 2000
// let imgCounter = 0
// let allTimeouts = []

// for (thumbnail of justThumbnails) {
//   const timeoutId = setTimeout(() => {
//     img.src = justThumbnails[imgCounter]
//   }, timeDelay);

//   allTimeouts.push(timeoutId)
//   imgCounter ++
//   timeDelay += 2000
// }


// and then when you want to stop the slideshow
// allTimeouts.forEach((t) => clearTimeout(t))




