let slideshowInterval = null

document.querySelector('#start-show').addEventListener('click', async () => {
    // console.log('clicked');
    const userInput = document.querySelector('#user-input').value
    // console.log(userInput)
    const fetchUrl = `http://www.reddit.com/search.json?q=${userInput}+nsfw:no`
    // console.log(fetchUrl)


    const response = await fetch(fetchUrl)
    const data = await response.json()
    // console.log(response)
    // console.log(data)
    const children = data.data.children

    // for (child of children) {
    //     console.log(child.data.thumbnail)
    // }

    // filter method
    const childrenWithImgs = children.filter((child) => {
        return child.data.thumbnail !== 'self'
    })

    // forEach method
    const childrenWithImgs = []

    children.forEach((child) => {
        if (child.data.thumbnail !== 'self') {
            childrenWithImgs.push(child)
        }
    })

    // console.log(childrenWithImgs)

    // javaScript map method built-in
    const justThumbnails = childrenWithImgs.map((child) => {
        return child.data.thumbnail
    })

    //DIY method
    const justThumbnails = []

    childrenWithImgs.forEach((child) => {
        justThumbnails.push(child.data.thumbnail)
    })

    // console.log(justThumbnails)

    let imgCounter = 0

    setInterval(() = {
        document.querySelector('#slideshow-img').src = justThumbnails[imgCounter]
        imgCounter++
    }, 2000)

    document.querySelector('#before-slideshow').classList.add('hidden')
    document.querySelector('#slideshow').classList.remove('hidden')
})

document.querySelector('#stop-slideshow').addEventListener('click', () => {
    document.querySelector('#before-slideshow').classList.add('hidden')
    clearInterval(slideshowInterval)
})