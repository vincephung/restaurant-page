import {loadHome} from './home';
import {loadContact} from './contact';
import {loadMenu} from './menu';

const content = document.querySelector('#content');

const loadNav = () =>{
    const home = document.querySelector('.nav-home');
    const contact = document.querySelector('.nav-contact');
    const menu = document.querySelector('.nav-menu');
 
    home.addEventListener('click' ,() =>{
        content.innerHTML = '';
        document.body.style.backgroundImage = "url(images/coverimage.png)"
        loadHome();
        loadNav();
    });

    contact.addEventListener('click' ,() =>{
        content.innerHTML = '';
        document.body.style.backgroundImage = "url(images/coverimage.png)"

        loadContact();
        loadNav();
    });

    menu.addEventListener('click' ,() =>{
        content.innerHTML = '';
        document.body.style.backgroundImage = "none";
        loadMenu();
        loadNav();
    });


};

export {loadNav};