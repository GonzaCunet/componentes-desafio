function main() {
  const HeaderEl = document.querySelector(".header");
  const FooterEl = document.querySelector(".footer");
  const contactEl = document.querySelector(".contact");
  const serviciosEl = document.querySelector(".servicios");

  headerAdd(HeaderEl);
  footerAdd(FooterEl);
  contactAdd(contactEl);
  addCard(serviciosEl);
}
main();
