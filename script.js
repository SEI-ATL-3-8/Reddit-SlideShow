console.log('hello')

let submitButton = document.querySelector('#submitButton')
let catContainer = document.querySelector('#catContainer')
// console.log(submitButton)

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    // console.log('hello from button')
    let input = document.querySelector('#search')
    // console.log(input.value)
    getData(input.value)
})



let getData = async (keyword) => {
    try {
        let req = await fetch(`http://www.reddit.com/search.json?q=${keyword}+nsfw:no`)
    let res = await req.json()
    console.log(re)
    let arrayOfBooks = res.works
    // console.log(arrayOfBooks)
    let randomNumber = [Math.floor(Math.random() * arrayOfBooks.length)]
    // console.log(randomNumber)
    let singleBook = arrayOfBooks[randomNumber]
    // console.log(singleBook)
    bookTitle = singleBook.title
    bookAuthors = singleBook.authors
    bookImage = singleBook.cover_id
    // console.log(bookImage)
    clearContainer()
    addNewBook(bookTitle, bookAuthors, bookImage)
    } catch (error) {
        clearContainer()
        let errorP = document.createElement('p')
        errorP.innerText = 'No Results!'
        bookContainer.append(errorP)
    }

}


// let catButton = document.querySelector('#btn')

// catButton.addEventListener('click', evt => {

//     let catDiv = document.querySelector('.catImage')

 
// fetch('http://api.thecatapi.com/v1/images/search?')
// .then(res => res.json())
// // console.log(res);
// .then(cats => {
//     cats.forEach(cat => {
//          catDiv.innerHTML = <img src="${cat.url" alt="kitty" />
//     });
// });
// });








// fetch(request).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data);
//     });
// });