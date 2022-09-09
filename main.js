function darkMode() {  
    if (document.querySelector('#btn-dark').innerHTML === 'Dark') {
        document.querySelector('#btn-dark').innerHTML = 'Light';
        document.querySelector('#btn-dark').style = "color: white !important";
        document.querySelector(".bg-light").style = "background-color: black !important";
        document.querySelector(".navbar-nav .nav-link").style = "color: white !important";
    }
    else {
        document.querySelector('#btn-dark').innerHTML = 'Dark';
        document.querySelector('#btn-dark').style = "color: black !important";
        document.querySelector("#dark-mode").style = "background-color: white !important";
        document.querySelector(".bg-light").style = "background-color: white !important";
        document.querySelector(".nav-link").style = "color: black !important";
    }
  }