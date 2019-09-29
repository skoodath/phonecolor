let listItems = document.getElementsByTagName('li');
const phoneColor = document.querySelector('#phone');
const phoneClass = phoneColor.classList;


for (let i = 0; i < listItems.length; i++) {
    let newColor = listItems[i].classList.value;
    const colorChange = () => phoneColor.classList.replace(phoneClass[1], newColor);
    listItems[i].addEventListener('click', colorChange);
}