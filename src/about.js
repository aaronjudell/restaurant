function createAbout() {
    let mainDiv = document.getElementById('content');
    mainDiv.innerHTML = '';
    let aboutHeadline = document.createElement('h1');
    aboutHeadline.textContent = 'About Us';
    let aboutText = document.createElement('p');
    aboutText.textContent = "The Ace Restaurant has been serving home-cooked Italian food since 1987. Whether you prefer chicken, fish, or pasta, we have it all! Or perhaps you'd enjoy a nice cannoli and cappuccino. We're open 7 days a week, from 9am to 9pm."
}


export { createAbout };