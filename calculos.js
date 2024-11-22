export function calcularMedia(nota1, nota2) {
    let n1 = parseFloat(nota1);
    let n2 = parseFloat(nota2);
  
    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Entradas devem ser numéricas");
    }
  
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
      throw new Error("Erro de validação");
    }
    return parseFloat(((n1 + n2) / 2).toFixed(1));
  }
  
 export function determinarStatus(media) {
    if (media < 4.0) {
      return "Reprovado por média";
    } else if (media >= 4.0 && media < 6.0) {
      return "Aguardando final";
    } else {
      return "Aprovado por média";
    }
  }

  export function validarNotas(nota1, nota2) {
    let n1 = parseFloat(nota1);
    let n2 = parseFloat(nota2);

    if (isNaN(n1)) {
        return "Nota de 1UP inválida"; 
    }
    if (isNaN(n2)) {
        return "Nota de 2UP inválida"; 
    }

    if (n1 < 0 || n1 > 10) {
        return "Nota de 1UP inválida"; 
    }
    if (n2 < 0 || n2 > 10) {
        return "Nota de 2UP inválida";
    }
    return "Notas salvas com sucesso";
}
