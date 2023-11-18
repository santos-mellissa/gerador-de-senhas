import { nanoid } from 'nanoid';
import './style.css';

const passwordButton = document.querySelector('button');
const displayPassword = document.querySelector('.password');

passwordButton.addEventListener('click', () => {
    displayPassword.innerHTML = nanoid();
});
