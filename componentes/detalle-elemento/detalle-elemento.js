function cargar() {
  const img = document.createElement("img");
  img.id = "detalle-img";
  img.classList.add("imagen");

  const titulo = document.createElement("h2");
  titulo.innerText =
    "Este es un titulo muy generico creado para hacer test del componente";
  titulo.id = "detalle-titulo";
  titulo.classList.add("titulo");

  const desc = document.createElement("section");
  desc.id = "detalle-descripcion";
  desc.classList.add("descripcion");
  desc.innerHTML = `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lacus suscipit, feugiat nibh vel, dictum sapien. Curabitur facilisis arcu dui, et viverra dolor semper non. Vivamus nulla tortor, volutpat id gravida vitae, semper eget nisi. Vestibulum aliquet, metus ut aliquet faucibus, massa elit tristique purus, non mattis leo odio at lectus. Aenean vulputate risus ac porta posuere. Maecenas porttitor arcu tellus, in dignissim tortor tempor a. Aliquam sit amet ligula at eros tincidunt mattis. Morbi non massa lorem. Vestibulum a diam lacus. Fusce rhoncus convallis porta. Sed accumsan, justo sodales placerat aliquet, ipsum orci posuere ex, in iaculis ligula sem quis ex. Pellentesque consectetur purus in nibh elementum aliquam. Nulla facilisi. Morbi molestie lacinia enim sed blandit.
</p>

<p>
Ut et rutrum velit. Sed vulputate quis justo sed pretium. Curabitur eu placerat metus. Etiam a mattis est, id congue nisi. Etiam porttitor eleifend massa. Aenean ac ipsum hendrerit, luctus nunc scelerisque, iaculis neque. Donec molestie neque ut arcu auctor, eget commodo nisi tempus. Sed gravida, erat vel bibendum tempus, diam enim dignissim magna, ut auctor enim libero a massa. In mollis, leo ut viverra tincidunt, neque leo aliquet urna, sit amet vestibulum dui purus in quam. Fusce et neque eu arcu viverra sagittis. Maecenas posuere aliquet orci, sed varius dui mattis aliquet.
</p>

<p>
Mauris eu enim eu felis sollicitudin pharetra quis sit amet est. Nullam erat ligula, porttitor interdum venenatis non, dictum eu ante. Sed tristique dolor vitae hendrerit venenatis. Integer eu sapien lectus. Integer interdum volutpat orci eu dapibus. Nullam volutpat felis lobortis, auctor tellus ut, tincidunt ante. Sed suscipit maximus massa, et fringilla leo commodo ac. Fusce porta purus in tortor egestas, a rutrum libero rutrum. Fusce semper metus nibh, a venenatis dolor pharetra sit amet. Nunc non massa ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque elementum ligula et justo dapibus, vitae pretium dui fringilla. Suspendisse dignissim finibus urna blandit pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque consectetur orci ac est venenatis, id vestibulum lectus scelerisque. 
</p>`;

  const content = document.createElement("main");
  content.appendChild(img);
  content.appendChild(titulo);
  content.appendChild(desc);

  const modal = document.createElement("dialog");
  modal.id = "detalle-elemento";
  modal.appendChild(content);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "../componentes/detalle-elemento/detalle-elemento.css";

  document.head.appendChild(link);
  document.body.appendChild(modal);
}

function mostrar(juego, seccion, i, url_imagen, nombre) {
  const modal = document.getElementById("detalle-elemento");

  if (!modal) return;

  fetch("../../datos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      datos = datos[juego][seccion][i];

      if (!datos) {
        console.error("Error: No se encuentra el registro especificado");
        return;
      }

      const img = document.getElementById("detalle-img");
      const titulo = document.getElementById("detalle-titulo");
      const desc = document.getElementById("detalle-descripcion");

      img.src = url_imagen;
      img.alt = "Imagen de " + nombre;
      titulo.innerText = nombre;

      desc.innerHTML = "";
      datos.split("\n").forEach((bloque) => {
        const parrafo = document.createElement("p");
        parrafo.innerText = bloque;
        desc.appendChild(parrafo);
      });

      // modal.style.display = "grid";
      modal.showModal();
    })
    .catch((error) => {
      alert("Ocurrió un error al consultar la base de datos :(");
      console.error("error: ", error);
    });
}

export default { cargar, mostrar };
