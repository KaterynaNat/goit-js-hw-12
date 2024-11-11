"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';


import { createGallery } from './render-function'


const API_KEY = "46809908-9f97c0ef37b027eaa1f813844";
const loader = document.querySelector('.loader'); 
const gallery = document.querySelector(".gallery-list");
const loadBtn = document.querySelector('.load-btn')

let page = 1;
let lightbox;
let totalPage;




export function searchImage() {
    page = 1;

    loader.classList.remove('unvisible');
    loadBtn.classList.add('unvisible');

    gallery.innerHTML = "";
    
    createList()
}

async function createList() {
    

        let params = new URLSearchParams({
        key: API_KEY,
        q: `${localStorage.getItem("search")}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
    })
    await axios.get(`https://pixabay.com/api/?${params}`)
        .then(data => {
            totalPage = Math.round(data.data.totalHits / 15) ;
            if (data.data.hits.length == 0) {
                loader.classList.add('unvisible');
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'center',
                    color: '#ca0000',
                    messageColor: "white",
                    close: true,
                    timeout: 2000,
                    progressBar: true,
                    iconColor: "white",
                    icon: false,
                    maxWidth: "300"
                });
            }
            else {
                loader.classList.add('unvisible');
                gallery.insertAdjacentHTML("beforeend", createGallery(data.data.hits));
                loadBtn.classList.remove('unvisible');
            }
        })
        .catch(error => {
            loader.classList.add('unvisible');
            iziToast.error({
                message: `Oooops, error. Please try again!`,
                position: 'center',
                color: '#ca0000',
                messageColor: "white",
                close: true,
                timeout: 2000,
                progressBar: true,
                iconColor: "white",
                icon: false,
                maxWidth: "300"
            })
        })
    lightbox = new SimpleLightbox('.gallery-item a', {
        disableScroll: false,
        overlayOpacity: 0.9,
        disableRightClick: true,
    });
}


loadBtn.addEventListener("click", async () => {
    loader.classList.remove('unvisible');
    loadBtn.classList.add("unvisible")

    lightbox.destroy()
    page++;

    await createList()
    
    if (page > totalPage) { 
        loadBtn.classList.add("unvisible")
        iziToast.error({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                    color: 'blue',
                    messageColor: "black",
                    close: true,
                    timeout: 2000,
                    progressBar: true,
                    iconColor: "white",
                    icon: false,
                    maxWidth: "300"
        });
    }


    const item = document.querySelector(".gallery-item")
    const itemHeight = item.getBoundingClientRect().height;
    window.scrollBy({
        left: 0,
        top: itemHeight * 2,
        behavior: "smooth"
    })   
})