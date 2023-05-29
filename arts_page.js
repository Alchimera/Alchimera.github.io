
var num_cards = 55
var paths = [
"./assets/Images_to_display/1.png", 
"./assets/Images_to_display/2.png", 
"./assets/Images_to_display/3.png", 
"./assets/Images_to_display/4.png", 
"./assets/Images_to_display/5.png",
"./assets/Images_to_display/6.png",
"./assets/Images_to_display/7.png",
"./assets/Images_to_display/8.png",
"./assets/Images_to_display/9.png",
"./assets/Images_to_display/10.png",
"./assets/Images_to_display/11.png",
"./assets/Images_to_display/12.png",
"./assets/Images_to_display/13.png",
"./assets/Images_to_display/14.png",
"./assets/Images_to_display/15.png",
"./assets/Images_to_display/16.png",
"./assets/Images_to_display/17.png",
"./assets/Images_to_display/18.png",
"./assets/Images_to_display/19.png",
"./assets/Images_to_display/20.png",
"./assets/Images_to_display/21.png",
"./assets/Images_to_display/22.png",
"./assets/Images_to_display/23.png",
"./assets/Images_to_display/24.png",
"./assets/Images_to_display/25.png",
"./assets/Images_to_display/26.png",
"./assets/Images_to_display/27.png",
"./assets/Images_to_display/28.png",
"./assets/Images_to_display/29.png",
"./assets/Images_to_display/30.png",
"./assets/Images_to_display/31.png",
"./assets/Images_to_display/32.png",
"./assets/Images_to_display/33.png",
"./assets/Images_to_display/34.png",
"./assets/Images_to_display/35.png",
"./assets/Images_to_display/36.png",
"./assets/Images_to_display/37.png",
"./assets/Images_to_display/38.png",
"./assets/Images_to_display/39.png",
"./assets/Images_to_display/40.png",
"./assets/Images_to_display/41.png",
"./assets/Images_to_display/42.png",
"./assets/Images_to_display/43.png",
"./assets/Images_to_display/44.png",
"./assets/Images_to_display/45.png",
"./assets/Images_to_display/46.png",
"./assets/Images_to_display/47.png",
"./assets/Images_to_display/48.png",
"./assets/Images_to_display/49.png",
"./assets/Images_to_display/50.png",
"./assets/Images_to_display/51.png",
"./assets/Images_to_display/52.png",
"./assets/Images_to_display/53.png",
"./assets/Images_to_display/54.png",
"./assets/Images_to_display/55.png",
"./assets/Images_to_display/56.png",
"./assets/Images_to_display/57.png",
"./assets/Images_to_display/58.png",
"./assets/Images_to_display/59.png",
"./assets/Images_to_display/60.png"];

var gridContainer = document.querySelector('.grid');

for (var i = 0; i < num_cards; i++) {
    var cardContainer = document.createElement('div');
    cardContainer.style.gridRow = 1 + Math.floor(i / 5);
    cardContainer.id = 'card_container';

    var card = document.createElement('div');
    card.classList.add('card');

    var front = document.createElement('img');
    front.classList.add('front');
    front.src = paths[i]

    card.appendChild(front);
    cardContainer.appendChild(card);
    gridContainer.appendChild(cardContainer);
}


document.querySelectorAll('.card img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}