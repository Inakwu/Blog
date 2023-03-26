const Images = [
    {
        id: 1,
        category: 1,
        img: "./images/Art-studio.jpg",
    },
    {
        id: 2,
        category: 2,
        img: "./images/diner.jpg",
    },
    {
        id: 3,
        category: 3,
        img: "./images/Horse-logo.jpg",
    },
    {
        id: 4,
        category: 4,
        img: "./images/friends-logo.jpg",
    },
    {
        id: 5,
        category: 5,
        img: "./images/wildlife-logo.jpg",
    },
    {
        id: 6,
        category: 6,
        img: "./images/norway-logo.jpg",
    },
];

const blog = [
    {
        id: 1,
        title: "Inakwu's art studio",
        category: 1,
        img: "./images/Art-paintings.jpg",
        desc: `This art gallery is a commercial enterprise working with a portfolio of artists and acts as the dealer representing, supporting and distributing the artworks by the artists in question.`
    },
    {
        id: 2,
        title: "Inakwu's diner",
        category: 2,
        img: "./images/diner-dishes.jpg",
        desc: `This Italian diner offers one of the best italian dishes in the west coast. Noodles, cuisine, pizza, just name them, feel free to check them out.`
    },
    {
        id: 3,
        title: "Shelby Horse racing",
        category: 3,
        img: "./images/Horse-tracks.jpg",
        desc: `The Shelby horse racing tracks provides one of the best sport you can find around. The riders known as jockeys, race against one another on horses, the objective is to cross the finish line first and win the race..`
    },
    {
        id: 4,
        title: "Shared moments with loved ones",
        category: 4,
        img: "./images/dinner-with-friends.jpg",
        desc: `A photographer by name Othniel captures one of the best moments between loved ones, friends and people special. It's his way of giving the world a sight of nature and human interaction.`
    },
    {
        id: 5,
        title: "Wild life",
        category: 5,
        img: "./images/wildlife-animals.jpg",
        desc: `Bringing to your eyes the beauty of wildlife. All undomesticated animal species available, that grow or live wild in an area without being introduced by humans.`
    },
    {
        id: 6,
        title: "The beautiful city of norway",
        category: 6,
        img: "./images/Norway-city.jpg",
        desc: `The beautiful city of norway. It is in contention to be one of the most beautiful cities in the world, and we have a photographer by name Anari who takes the best of pictures for this lovely city.`
    },
];


// ********* Displaying the images and hovering on them ********

window.addEventListener("DOMContentLoaded", function() {
    displayImageItems(Images);
});

const toursDiv = document.querySelector(".tours-div");

function displayImageItems(imageItems) {
    let displayItems = imageItems.map(function(item) {
        
        return `<article class="img-item">
        <img src=${item.img} class="img" alt=${item.title}>
        </article>`;
    });
    displayItems = displayItems.join("");
    toursDiv.innerHTML = displayItems;
    
    const imgItem = document.querySelectorAll(".img");

    const spreadImages = [...imgItem];

    spreadImages.forEach(function(img) {
        img.addEventListener("mouseover", function(e) {
            // current image clicked on
            const category = e.currentTarget;
            // console.log(category);

            // get the index
            const theIndex = spreadImages.indexOf(category);
            // console.log(theIndex);

            // select the parent div
            const parentDiv = category.parentElement;
            // console.log(parentDiv);

            // create a temporary array to hold the particular item that is hovered on
            let tempArray = blog.slice(theIndex , theIndex + 1);

            // since it returns 1 element, map through and replace the article content using parent element.
            tempArray = tempArray.map(function(blogItem) {
            return `<img src=${blogItem.img} class="img2" alt=${blogItem.title}>
            <div class="item-info">
                <header>
                    <h4>${blogItem.title}</h4>
                </header>
                <p class="item-text">
                ${blogItem.desc}</p>
                </div>`
            }).join("");
            parentDiv.innerHTML = tempArray; 

            // select the second class of img2
            const Image2 = document.querySelectorAll(".img2");

            Image2.forEach(function(img2) {
                img2.addEventListener("mouseout", function() {

                    // call back the function that displays all the images
                    displayImageItems(Images);
                });
            });
        });
    });

};


// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(date);

// ********* top link **********
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500){
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});
