function modal(url_imagen, titulo, descripcion) {
  const imagen = document.createElement("img");
  imagen.url = url_imagen;
  imagen.classList.add("imagen");

  const encabezado = document.createElement("h2");
  encabezado.innerText(titulo);
  encabezado.classList.add("titulo");

  const desc = document.createElement("section");
  desc.classList.add("descripcion");

  descripcion.split("\n").map((bloque) => {
    const paarafo = document.createElement("p");
    parrafo.innerText = bloque;
    desc.appendChild(paarafo);
  });

  const modal = document.createElement();
  modal.appendChild(imagen);
  modal.appendChild(encabezado);
  modal.appendChild(desc);

  document.body.appendChild(modal);
}
