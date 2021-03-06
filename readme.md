# Reddit photo slideshow

We are going to use what we've learned so far to create a basic slideshow using images taken from reddit.

#### Content Warning

Reddit sometimes contains some offensive images be careful with your search terms. If you want to ensure that you do not get NSFW (Not Safe For Work) items. You can filter it by adding "nsfw:no" to the end of the search query.

**Example:** http://www.reddit.com/search.json?q=cats+nsfw:no

## Getting Started

* Rough out how you want your basic site to look

## Requirements/User Experience

#### Page should load with

* Some sort of title
* A short description telling the user what to do
* A blank text field
* A Button ("start" or "go" or "search")
* Show button when clicked to unhide the search bar.

#### When the user enters a search term and presses enter

* The form / title / description should hide
* Show a loading message (optional)
* Fetch related posts from reddit (with `fetch`)
* Display animation / slideshow of images (with DOM manipulation)



## Suggested proccess

It is important to break down any development project in to smaller pieces and tackle them one at a time. Here is a list of how you might want to attack this project.

* Create your form (HTML/CSS)
* Prevent default form submission and verify that you can type something into the form
* Use fetch to make a request. Show data in console
* Create an array of image URLs (tip: use [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).
* Display those images in a grid. Reddit will probably send you a ton of images so only create a grid of max 5x5 
* Make the form / title / description hide

* Add some interesting style 

## Example Deliverables

![Slide 1](./examples/ajaxexample1.jpg)

---

![Slide 2](./examples/ajaxexample2.png)


## Bonus

* Make a smooth transition to next slide (e.g., a fade out)
* * Cycle through images
* Make grid with all the same size images.
* Add responsive so that they can grid can adjust.
    * tip: use [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
    * Either add images, or change the `src` of a single image tag

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
