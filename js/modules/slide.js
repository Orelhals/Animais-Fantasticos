import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js"

let slider = tns({
    container: '#slide',
    items: 1,
    slideBy: 'page',
    autoplay: true, 
    autoplayTimeout: 5000,
});

export default slider;