function footerAdd(e) {
  const componentEl = document.createElement("footer");
  componentEl.className = "footer";

  componentEl.innerHTML = `<div class="logo"><img class="footer__logo" src="/Images/Gonza-logo.png" alt=""></div>
  <div class="links__container"> 
      <div class="ind__link"><img src="./Images/home.png" alt=""><a class="footer__links" href="/index.html">Home</a></div>
      <div class="ind__link"><img src="./Images/user.png" alt=""><a class="footer__links" href="/servicios.html">Servicios</a></div>
      <div class="ind__link"><img src="./Images/phone.png" alt=""><a class="footer__links" href="/contacto.html">Contacto</a></div>
  </div>
  <div class="social-media"><img class="social__icons" src="./Images/Linkedin.png" alt="">
  <img class="social__icons" src="./Images/github.png" alt="">
<img class="social__icons" src="./Images/Twitter.png" alt=""></div>
<div class="copyright"><p>©2023 - https://apx.school</p></div>`;

  e.appendChild(componentEl);
}
