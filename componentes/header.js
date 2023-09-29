function headerAdd(e) {
  const componentEl = document.createElement("header");
  componentEl.className = "header";

  componentEl.innerHTML = `
  <a href="./index.html"><img class="header__logo"src="./Images/Gonza-logo.png" alt=""></a>
  <ul class="header__nav">
    <li><a class="header__link"href="./portfolio.html">Portfolio</a></li>
    <li><a class="header__link"href="./servicios.html">Servicios</a></li>
    <li><a class="header__link"href="./contacto.html">Contacto</a></li>
  </ul>
  <img class="hamburger__menu"src="./Images/burguer.png" alt="">
  <div class="burger__container">
      <a class="burger__link"href="./portfolio.html">Portfolio</a>
      <a class="burger__link"href="./servicios.html">Servicios</a>
      <a class="burger__link"href="./contacto.html">Contacto</a>
  </div>
`;
  e.appendChild(componentEl);
  addBurger();
}

function addBurger() {
  const burgerMenu = document.querySelector(".hamburger__menu");
  const burgerContainer = document.querySelector(".burger__container");
  burgerMenu.addEventListener("click", () => {
    burgerContainer.style.display = "inherit";
  });
  burgerContainer.addEventListener("click", () => {
    burgerContainer.style.display = "none";
  });
}
