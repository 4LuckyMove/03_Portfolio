import * as myFuncs from "./modules/functions.js";
import mobileMenu from "./modules/mobileNavbar.js";
import tabs from "./modules/tabs.js";
import modal from "./modules/modal.js";

window.addEventListener("DOMContentLoaded", () => {
    myFuncs.isWebp();
});

// core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
// const swiper = new Swiper();