import { calcularMedia, determinarStatus } from "./calculos.js";

function calcularMediaExibirStatus() {
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const mediaCelula = document.getElementById("media");
  const statusCelula = document.getElementById("status");
  const aviso = document.getElementById("aviso");

  if (nota1 === "" || nota2 === "") {
    aviso.innerText = "O preenchimento das notas é obrigatório";
    aviso.className = "error";
    aviso.classList.remove("hidden");
    return;
  } else if (nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
    aviso.innerText = "As notas devem estar entre 0,0 e 10,0!";
    aviso.className = "warning";
    aviso.classList.remove("hidden");
  } else {
    try {
      const media = calcularMedia(nota1, nota2);
      const status = determinarStatus(media);

      mediaCelula.innerText = media.toFixed(1);
      statusCelula.innerText = status;

      statusCelula.classList.remove("error", "warning", "success");
      if (status === "Reprovado por média") {
        statusCelula.classList.add("error");
      } else if (status === "Aguardando a final") {
        statusCelula.classList.add("warning");
      } else if (status === "Aprovado por média") {
        statusCelula.classList.add("success");
      }

      aviso.innerText = "A operação foi realizada com sucesso";
      aviso.className = "success";
      aviso.classList.remove("hidden");
    } catch (error) {
      console.error(error.message);
    }
  }
}

window.calcularMediaExibirStatus = calcularMediaExibirStatus;
