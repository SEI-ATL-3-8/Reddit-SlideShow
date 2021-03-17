
const button = document.querySelector('#search');
const text = document.querySelector('#text');



search.addEventListener('click', () =>
{
    Search();
})


const showData = async searchTerms => {
    try {
        const response = await fetch(`https://www.reddit.com/search.json?q=${searchField}+nsfw:no`);
        const dataFetch = await response.json();
        const dataImage = dataFetch.data.children.filter({data});
    }
        catch (error) {
            console.log(error.message);
        }
}
