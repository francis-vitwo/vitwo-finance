setTimeout(() => {
    document.getElementById('splash').classList.toggle('fade');
}, 7000);

function closeSplash() {
    const splash = document.getElementById('splash');
    splash.style.display = 'none';
}