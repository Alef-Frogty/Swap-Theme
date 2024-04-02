const MOON = 'backgf.gif';
const SUN = 'gokugf.gif';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = LIGHT_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
  let storedMode = sessionStorage.getItem('mode');
  if (!storedMode) {
    storedMode = DEFAULT_MODE;
    sessionStorage.setItem('mode', DEFAULT_MODE);
  }
  setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.textContent = SUN;
        document.body.classList.add(DARK_MODE);
        document.getElementById("light-theme").src = "./imagensswap/gokugf.gif";
        
    
    } else if (mode === LIGHT_MODE) {
        btn.textContent = MOON;
        document.body.classList.remove(DARK_MODE);
        document.getElementById("light-theme").src = "./imagensswap/blackgf.gif";
    }
    }

btn.addEventListener('click', function() {
  let mode = sessionStorage.getItem('mode');
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    setMode(newMode);
    sessionStorage.setItem('mode', newMode);
  }
})

function setLogo(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE) {
    btn.textContent = SUN;
    document.body.classList.add(DARK_LOGO);

  } else if (mode === LIGHT_MODE) {
    btn.textContent = MOON;
    document.body.classList.remove(DARK_LOGO);

  }
};

function logoSwap() {
  if (mode === LIGHT_MODE) {
    document.body.classList.add("./imagensswap/gokugf.gif");
  } else if (mode === DARK_MODE) {
    document.body.classList.remove("./imagensswap/blackgf.gif");
  }

};