import PenneIMG from './img/penne.jpeg';

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


    mainDiv.append(menuHeadline, PenneDiv);
    
}

export { createMenu };