"use strict"


export function createGallery(arr) {
    return arr.map(item => 
        `
            <li class="gallery-item">
                <a href="${item.largeImageURL}">
                <img class="galerry-img" src="${item.webformatURL}" alt="${item.tags}" width="360"/>
                </a>
                <div class="galerry-txt">
                    <div class="item-txt">
                        <p>Likes</p>
                        <span class="item-span">${item.likes}</span>
                    </div>
                    <div class="item-txt">
                        <p>Views</p>
                        <span class="item-span">${item.views}</span>
                    </div>
                    <div class="item-txt">
                        <p>Comments</p>
                        <span class="item-span">${item.comments}</span>
                    </div>
                    <div class="item-txt">
                        <p>Downloads</p>
                        <span class="item-span">${item.downloads}</span>
                    </div>
                </div>
            </li>
        `
    ).join("")
}