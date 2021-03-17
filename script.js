

// data.children

document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None";
    // alert( document.cookie );


const grid = document.getElementById('grid')
const testPic = document.querySelector('img')

const reddit = document.getElementById('redditSearch')
reddit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit form')
    let searchTerm = document.getElementById('search').value
    fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
        // testPic.src = data.data.children[0].data.url
        console.log(data)
        const results = data.data.children
        results.forEach(result => {
            let image = document.createElement('img')
            image.className = "redditPull"
            image.src = result.data.url
            grid.appendChild(image)


        });
    })
})


//data.data.children[0].data.url
// configure image size
// (document.createElement('img'))
