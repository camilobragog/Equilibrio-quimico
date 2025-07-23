function calcularEquilibrio() {
  const A = parseFloat(document.getElementById("concA").value);
  const B = parseFloat(document.getElementById("concB").value);
  const C = parseFloat(document.getElementById("concC").value);
  const D = parseFloat(document.getElementById("concD").value);
  const tipoK = document.querySelector('input[name="tipoK"]:checked').value;

  if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D)) {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa todas las concentraciones correctamente.";
    return;
  }

  const Kc = (C * D) / (A * B); // Fórmula básica: [productos]/[reactivos]

  document.getElementById("resultado").innerHTML = `
    <strong>Tipo de constante:</strong> ${tipoK}<br />
    <strong>Expresión:</strong> K = ([C]·[D])/([A]·[B])<br />
    <strong>Resultado:</strong> K = ${Kc.toFixed(3)}<br /><br />
    <strong>Análisis:</strong> ${analizarEquilibrio(Kc)}
  `;
}

function analizarEquilibrio(Kc) {
  if (Kc > 1) {
    return "El equilibrio favorece a los productos. (→)";
  } else if (Kc < 1) {
    return "El equilibrio favorece a los reactivos. (←)";
  } else {
    return "El sistema está en equilibrio perfecto.";
  }
}
