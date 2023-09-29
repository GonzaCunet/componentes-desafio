function addCard(e) {
  const cardEl = document.createElement("div");
  cardEl.className = "div";

  cardEl.innerHTML = `
    <template id="content-container">
        <div class="content-container">
            <img class="content-image" src="https://picsum.photos/404/461" alt="">
            <h2 class="content-title">Un trabajo que hice</h2>
            <p class="content-text">te cuento sobre este trabajo y como la descocí en este proyecto, la verdad me lucí y creo que nací para esto</p>
        </div></template>`;
  e.appendChild(cardEl);
  contentful();
}

function obtenerData(resultado) {
  const content = document.querySelector(".card__servicios");
  const template = document.querySelector("#content-container");

  console.log(resultado);
  let img = {};

  for (let i = 0; i < resultado.items.length; i++) {
    img[resultado.includes.Asset[i].sys.id] =
      resultado.includes.Asset[i].fields.file.url;
  }
  //   for (let i = 0; i < resultado.items.length; i++) {
  //     img[resultado.items[i].fields.imagen.sys.id] = "";
  //   }

  //   for (let i = 0; i < resultado.items.length; i++) {
  //     let imgId = resultado.includes.Asset[i].sys.id;
  //     if (img.hasOwnProperty(imgId)) {
  //       img[imgId] = resultado.includes.Asset[i].fields.file.url;
  //     }
  //   }
  console.log(img);

  for (let i = 0; i < resultado.items.length; i++) {
    const clone = document.importNode(template.content, true);
    clone.querySelector(".content-title").textContent =
      resultado.items[i].fields.titulo;
    clone.querySelector(".content-text").textContent =
      resultado.items[i].fields.descripcion;
    clone
      .querySelector(".content-image")
      .setAttribute("src", img[resultado.items[i].fields.imagen.sys.id]);

    content.appendChild(clone);
  }
}

function contentful() {
  fetch(
    "https://cdn.contentful.com/spaces/ukcepy6412o4/environments/master/entries?access_token=wweAY9O2Wwd0jn3-NZ4UZ3JwNxatHfvWtG0FL-wLEts&content_type=servicios"
  )
    .then((response) => response.json())
    .then((data) => {
      obtenerData(data);
    });
}
