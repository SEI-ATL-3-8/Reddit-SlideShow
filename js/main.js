//grab search button
const search = document.querySelector('#search');
//grab show div
const show = document.querySelector('#show');
//grab text field
const text = document.querySelector('#text');
//grab input div
const input = document.querySelector('.input');
//grab images div
const images = document.querySelector('.images');

//event listener for search
search.addEventListener('click', () =>
{
    Search();
})

//search button func
const Search = async () =>
{
    try {
        let res = await fetch('http://www.reddit.com/search.json?q=' + text.value + '+nsfw:no&limit=100');
        let data = await res.json();
        let posts = data.data.children;
        let imagePosts = posts.filter(ImageFilter);
        console.log(imagePosts);
        DisplayImages(imagePosts);
    } catch (error) {
        console.log(error.message);
    }
}

//display images in 5x5 grid unless there are less posts
function DisplayImages(posts)
{
    //clear posts
    clearImages();
    
    //hide input fields
    input.classList.add('hidden');
    //display show button
    show.classList.remove('hidden');
    //display images dic
    images.classList.remove('hidden');
    
    //limit to 25 images
    let limitedPosts = [];
    
    for (let i = 0; i < posts.length && i < 25; i++)
    {
        limitedPosts.push(posts.pop());
    }
    
    limitedPosts.forEach(post =>
    {
        //create image element and give source
        const image = document.createElement('img');
        image.classList.add('img');
        image.src = post.data.url;
        
        //append image to DOM
        images.append(image);
    });
}

//clear all posts
function clearImages()
{
    images.innerHTML = '';
}

//filter image-posts from posts
function ImageFilter(post)
{
    return post.data.post_hint === 'image';
}

//show button event listener
show.addEventListener('click', () =>
{
    Show();
})

//show input fields on show button click
function Show()
{
    show.classList.add('hidden');
    input.classList.remove('hidden');
}