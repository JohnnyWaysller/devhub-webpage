import './scss/styles.scss'
import 'bootstrap'

const root = document.documentElement;
let themeUse = "dark"

document.getElementById('exampleModal').addEventListener('shown.bs.modal', () => {
    const textArea = document.getElementById("message-text")
    textArea.focus()
})

document.getElementById('switch-btn').addEventListener('click', () => {
    themeSwitch()

})


function themeSwitch() {
    const rootStyles = window.getComputedStyle(root); 

    if (themeUse === 'dark') {
        root.style.setProperty('--bg-color', rootStyles.getPropertyValue('--light-container-value').trim());
        root.style.setProperty('--container-color', rootStyles.getPropertyValue('--light-bg-value').trim());
        
        root.style.setProperty('--border-theme', rootStyles.getPropertyValue('--light-border').trim());

        root.style.setProperty('--text-theme', rootStyles.getPropertyValue('--dark-bg-value').trim());

        root.style.setProperty('--placeholder-color', rootStyles.getPropertyValue('--light-placeholder-value').trim());
        themeUse = 'light';
    } else {
        root.style.setProperty('--bg-color', rootStyles.getPropertyValue('--dark-bg-value').trim());
        root.style.setProperty('--container-color', rootStyles.getPropertyValue('--dark-container-value').trim());
        root.style.setProperty('--border-theme', rootStyles.getPropertyValue('--dark-border').trim());

        root.style.setProperty('--text-theme', rootStyles.getPropertyValue('--light-bg-value').trim());

        root.style.setProperty('--placeholder-color', rootStyles.getPropertyValue('--dark-placeholder-value').trim());
        themeUse = 'dark';

    }
}
