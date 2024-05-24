import PenneIMG from './img/penne.jpeg';

function createHome() {
    let mainDiv = document.getElementById('content');
    mainDiv.innerHTML = '';
    let homeHeadline = document.createElement('h1');
    homeHeadline.textContent = 'The Ace Restaurant';
    let homeImage = document.createElement('img');
    homeImage.src = PenneIMG;
    let homeText = document.createElement('p');
    homeText.textContent = 'The Ace Restaurant is your go-to restaurant for Italian food. We have pizza, pasta, chicken, and fish. Come on by!';
    mainDiv.append(homeHeadline, homeImage, homeText);
}

export { createHome };