// console.log('hello from js file')
let submitButton = document.querySelector('#submitButton')
let galleryContainer = document.querySelector('.galleryContainer')
// console.log(submitButton)

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('hello from submit button')
    fetch(`http://www.reddit.com/search.json?q=+nsfw:no` ).then((response) => {
        response.json().then((json) => {
            console.log(json)
        })
    })

    // newImages = json.filter(function(images){
    //     if(images.json.math('img', 'jpeg', 'png')) {
    //         return images;
    //     }
    // })


    
    })
// })
// })

