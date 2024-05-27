import PenneIMG from './img/penne.jpeg';
import ChickenIMG from './img/chicken.jpeg';
import FishIMG from './img/fish.jpeg';

function createMenu() {
    let mainDiv = document.getElementById('content');
    mainDiv.innerHTML = '';
    let menuHeadline = document.createElement('h1');
    menuHeadline.textContent = 'Our Menu';

    
    let PenneDiv = document.createElement('div');
    let PenneImage = document.createElement('img');
    PenneImage.src = PenneIMG;
    let PenneTitle = document.createElement('h3');
    PenneTitle.textContent = 'Penne Alla Vokda';
    let PennePrice = document.createElement('span');
    PennePrice.textContent = '14.99'
    let PenneDescript = document.createElement('p');
    PenneDescript.textContent = 'Our homemade penne with a delicious creamy vodka sauce.';
    PenneDiv.append(PenneImage, PenneTitle, PennePrice, PenneDescript);

    let ChickenDiv = document.createElement('div');
    let ChickenImage = document.createElement('img');
    ChickenImage.src = ChickenIMG;
    let ChickenTitle = document.createElement('h3');
    ChickenTitle.textContent = 'Chicken Parmesan';
    let ChickenPrice = document.createElement('span');
    ChickenPrice.textContent = '23.99';
    let ChickenDescript = document.createElement('p');
    ChickenDescript.textContent = 'Breaded chicken cutlet covered in mozzarella cheese with marinara sauce. Served with spaghetti.';
    ChickenDiv.append(ChickenImage, ChickenTitle, ChickenPrice, ChickenDescript);
    
    let FishDiv = document.createElement('div');
    let FishImage = document.createElement('img');
    FishImage.src = FishIMG;
    let FishTitle = document.createElement('h3');
    FishTitle.textContent = 'Fish and Chips';
    let FishPrice = document.createElement('span');
    FishPrice.textContent = '20.99';
    let FishDescript = document.createElement('p');
    FishDescript.textContent = 'Breaded fresh cod and french fries. Side of tartar sauce.';
    FishDiv.append(FishImage, FishTitle, FishPrice, FishDescript);

    mainDiv.append(menuHeadline, PenneDiv, ChickenDiv, FishDiv);
    
}

export { createMenu };