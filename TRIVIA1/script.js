function botonEmpezar() {
  document.getElementById('cabecera').classList.add('ocultar');
  pregunta();
}

function pregunta() {

  document.getElementById('categorias').classList.remove('ocultar');

  let nombrePersona = document.getElementById('nombrePersona').value;

  let empecemos = document.getElementById('categorias');

  empecemos.innerHTML = '<h2>¡Bien ' + nombrePersona + ', entonces empecemos!</h2>' + empecemos.innerHTML;

}

function coronavirus() {
  document.getElementById('coronavirus').classList.remove('ocultar');

  document.getElementById('dengue').classList.add('ocultar');

  document.getElementById('categorias').classList.add('ocultar');

  document.getElementById('resultados').classList.remove('ocultar');
}

function dengue() {
  document.getElementById('dengue').classList.remove('ocultar');

  document.getElementById('coronavirus').classList.add('ocultar');

  document.getElementById('resultados').classList.remove('ocultar');

  document.getElementById('categorias').classList.add('ocultar');
}


function respuesta() {
  document.getElementById('categorias').classList.add('ocultar');

  document.getElementById('resultados').classList.add('ocultar');

  document.getElementById('coronavirus').classList.add('ocultar');

  document.getElementById('dengue').classList.add('ocultar');

  document.getElementById('resultadosFin').classList.remove('ocultar');

  let resultados = document.getElementById('resultadosFin');

  let pregunta1 = document.coronavirusPreguntas.pregunta1.value;
  let pregunta2 = document.coronavirusPreguntas.pregunta2.value;
  let pregunta3 = document.coronavirusPreguntas.pregunta3.value;


  if (pregunta1 == 1 && pregunta2 == 1 && pregunta3 == 1) {
    resultados.innerHTML += `<p >Tienes un alto probabilidad de haber contraido covid, te recomendamos que te realices la prueba de inmediato. Entra a este link para mayor informanción. <a href="https://www.mayoclinic.org/es-es/diseases-conditions/coronavirus/symptoms-causes/syc-20479963"> Aquí</a></p>`;

  } else if (pregunta1 == 2 && pregunta2 == 1 && pregunta3 == 1) {
    resultados.innerHTML += '<p>Tienes mediana probabilidad de haber contraído el virus, de todas formas te recomendamos que te realices la prueba para fines preventivos</p>'

  } else if (pregunta1 == 1 && pregunta2 == 2 && pregunta3 == 1) {
    resultados.innerHTML += '<p>Tienes poco riesgo de haber contraído el virus, de todas formas te recomendamos que te realices la prueba para fines preventivos</p>'

  } else if (pregunta1 == 1 && pregunta2 == 1 && pregunta3 == 2) {
    resultados.innerHTML += '<p>Tienes mediana probabilidad de haber contraído el virus, de todas formas te recomendamos que te realices la prueba para fines preventivos.</p>'

  } else if (pregunta1 == 1 && pregunta2 == 2 && pregunta3 == 2) {
    resultados.innerHTML += '<p>Puede que solo sea malestar, talvez solo es fiebre común. Quédate en casa</p>'

  } else if (pregunta1 == 2 && pregunta2 == 2 && pregunta3 == 1) {
    resultados.innerHTML += '<p>Quizá sólo sea gripe. Quédate en casa</p>'

  } else if (pregunta1 == 2 && pregunta2 == 1 && pregunta3 == 2) {
    resultados.innerHTML += '<p>Puede que solo sea malestar. Quédate en casa</p>'

  } else if (pregunta1 == 2 && pregunta2 == 2 && pregunta3 == 2) {
    resultados.innerHTML += '<p>Estás bien de salud, no te angusties. Quédate en casa. </p>'

  }


  let pregunta4 = document.denguePreguntas.pregunta4.value;
  let pregunta5 = document.denguePreguntas.pregunta5.value;
  let pregunta6 = document.denguePreguntas.pregunta6.value;

  if (pregunta4 == 1 && pregunta5 == 1 && pregunta6 == 1) {
    resultados.innerHTML += `<p >Tienes alto probabilidad de haber contraído dengue. Entra a este enlace para mayor información.
   <a href="http://www.digesa.minsa.gob.pe/material_educativo/dengue.asp"> Aquí.</a>
  
   </p>`;

  } else if (pregunta4 == 2 && pregunta5 == 1 && pregunta6 == 1) {
    resultados.innerHTML += '<p>Tienes mediana probalidad de haber contraído dengue, te recomendamos visitar al médico.</p>'

  } else if (pregunta4 == 1 && pregunta5 == 2 && pregunta6 == 1) {
    resultados.innerHTML += '<p>Tienes mediana probalidad de haber contraído dengue, te recomendamos visitar al médico</p>'

  } else if (pregunta4 == 1 && pregunta5 == 1 && pregunta6 == 2) {
    resultados.innerHTML += '<p>Tienes mediana probalidad de haber contraído dengue, te recomendamos visitar al médico </p>'

  } else if (pregunta4 == 1 && pregunta5 == 2 && pregunta6 == 2) {
    resultados.innerHTML += '<p>Puede que solo sea malestar. Quédate en casa. </p>'

  } else if (pregunta4 == 2 && pregunta5 == 2 && pregunta6 == 1) {
    resultados.innerHTML += '<p>Puede que solo sea malestar. Quédate en casa. </p>'

  } else if (pregunta4 == 2 && pregunta5 == 1 && pregunta6 == 2) {
    resultados.innerHTML += '<p>Puede que solo sea malestar. Quédate en casa. </p>'

  } else if (pregunta4 == 2 && pregunta5 == 2 && pregunta6 == 2) {
    resultados.innerHTML += '<p>Estás bien de salud, no te angusties. Quédate en casa. </p>'

  }

  document.getElementById('botonvolver').classList.remove('ocultar');
}

