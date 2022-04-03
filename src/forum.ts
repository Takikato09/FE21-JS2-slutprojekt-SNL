
import { getBeerInDb, getFoodInDb, getWineInDb} from "./modules/firebaseApp";
import { displayTopic } from "./modules/display";

const beerBtn:HTMLButtonElement = document.querySelector('#beer-btn');
const foodBtn:HTMLButtonElement = document.querySelector('#food-btn');
const wineBtn:HTMLButtonElement = document.querySelector('#wine-btn');
const username = window.location.search.split('=')[1]

beerBtn.addEventListener('click',e => {
    e.preventDefault();
   getBeerInDb(displayTopic)
});

foodBtn.addEventListener('click', e => {
    e.preventDefault();
    getFoodInDb(displayTopic);
});

wineBtn.addEventListener('click', e => {
    e.preventDefault();
    getWineInDb(displayTopic);
})


export { beerBtn, foodBtn, wineBtn }