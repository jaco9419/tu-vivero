const menu = document.querySelector(".menu-js");
const navToggle = document.querySelector(".nav-custom");
const arrow = document.querySelector(".arrow");

menu.addEventListener("click", () => {
    arrow.classList.add("move-down");
  navToggle.classList.toggle("open-js");
  arrow.classList.toggle("move-up");
});

//This variable exists to check whether links should direct to index.html or not
const home = document.querySelector('#home');

//Variables with the HTML content for header, nav and footer
const headerInner = `
        <div class="logo-title">
            <a href="${home ? '' : 'index.html'}#header">
                <img src="../img/logo.png" alt="logo">
            </a>
            <h1>Tu Vivero</h1>
        </div>
`;

const navInner = `
        <ul>
            <li>
                <a href="${home ? '' : '../index.html'}#header" class="hover" >Home</a>
            </li>
            <li>
                <a href="${home ? '' : '../index.html'}#about" class="hover" >Sobre Tu Vivero</a>
            </li>
            <li>
                <a href="${home ? '/html/' : ''}productos.html" class="hover" >Productos</a>
            </li>
            <li>
                <a href="${home ? '/html/' : ''}contacto.html" class="hover" >Contacto</a>
            </li>
            <li>
                <a href="${home ? '/html/' : ''}sucursales.html" class="hover" >Sucursales</a>
            </li>
        </ul>
`;

const footerInner = `
        <a href="https://jaco9419.github.io/Portfolio/" class="hover" target="_blank">Jorge Caceres &copy</a>
        <a href="https://github.com/jaco9419" class="hover" target="_blank"><i class="fab fa-github"></i></a>
`;

const header = document.querySelector('#header');
header.innerHTML = headerInner;

const nav = document.querySelector(".nav-custom");
nav.innerHTML = navInner;

const footer = document.querySelector('.footer');
footer.innerHTML = footerInner;