const quotes = [
  {
    id: 1,
    type: 'Frase random',
    text: 'Son dos cuadras Zalo',
    author: 'M.Troisi'
  }, {
    id: 2,
    type: 'Frase random',
    text: 'Como tu quieras Carbón',
    author: 'D. Guillén, dándole la razón a su marido'
  }, {
    id: 3,
    type: 'Situación',
    text: 'A que Martín no lo termina',
    author: 'W. Olivera y D. García haciendo apuestas con la comida de M. Troisi'
  }, {
    id: 4,
    type: 'Frase retro',
    text: 'Toooopo. No me ves',
    author: 'F. Jorcín y Veranillo'
  }, {
    id: 5,
    type: 'Audio random',
    text: 'Luuuuuuiiiiiiiiiissssss',
    author: 'D. García'
  }, {
    id: 6,
    type: 'Audio random',
    text: 'Wiiiiillliibbeeerrrrttt',
    author: 'L. Romero'
  }, {
    id: 7,
    type: 'Audio random',
    text: 'NNNNi me toco',
    author: 'L. Romero'
  }, {
    id: 8,
    type: 'Frase random',
    text: 'AAAAA no zi no',
    author: 'L. Romero'
  }, {
    id: 9,
    type: 'Recuerdo flash',
    text: 'Willi te cago una paloma!!',
    author: 'Patio del Liceo 26'
  }, {
    id: 10,
    type: 'Recuerdo flash',
    text: 'Creo que es por acá',
    author: 'Danilo tratando de encontrar el "Castillo" para remar'
  }, {
    id: 11,
    type: 'Frase retro',
    text: 'Toooopo no me ves',
    author: 'F. Jorcín y Veranillo'
  }, {
    id: 12,
    type: 'Frase retro',
    text: 'Topo, no te das cuenta que no te queremos',
    author: 'A. Rivera'
  }, {
    id: 13,
    type: 'Recuerdo flash',
    text: 'Ladrillazooooooo',
    author: 'Señal de alerta del Veranillo'
  }, {
    id: 14,
    type: 'Frase retro',
    text: 'Brazo gordo Willi',
    author: 'L. Romero a W. Olivera en sus épocas de Colón'
  }, {
    id: 15,
    type: 'Frase retro',
    text: 'Que pasha García',
    author: 'Di Cono',
  }, {
    id: 16,
    type: 'Frase retro',
    text: 'Pero no llore así',
    author: 'Di Cono, momento tenso'
  }, {
    id: 17,
    type: 'Frase internacional',
    text: 'Laranja',
    author: 'G. Julean'
  }, {
    id: 18,
    type: 'Frase internacional',
    text: 'Morango com flocos',
    author: 'G. Julean'
  }, {
    id: 19,
    type: 'Frase retro',
    text: 'Si serás Dañino',
    author: 'Mirtha'
  }, {
    id: 20,
    type: 'Frase infantil',
    text: 'Profe, puedo escribir del otro lado de la hoja ?',
    author: 'Cacaroto'
  }, {
    id: 21,
    type: 'Recuerdo flash',
    text: 'Y Troisi dónde está ?',
    author: 'Panzachi buscando a Martín'
  }, {
    id: 22,
    type: 'Recuerdo flash',
    text: 'Martín andá más lento',
    author: 'J. Esteche en plena ruta con M. Troisi al volante'
  }, {
    id: 23,
    type: 'Recuerdo flash',
    text: 'Me volví porque no pude estacionar',
    author: 'M. Troisi buscando lugar en Pocitos'
  }, {
    id: 24,
    type: 'Frase típica',
    text: 'No puedo gurises, tengo Iglesia',
    author: 'D. García'
  }, {
    id: 25,
    type: 'Frase típica',
    text: 'Yo soy buen padre',
    author: 'M. Troisi',
  }, {
    id: 26,
    type: 'Frase épica',
    text: 'Soy el psicólogo de las viejas',
    author: 'G. Julean'
  }, {
    id: 27,
    type: 'Frase típica',
    text: 'Dame un par de hojas que te hago el juego',
    author: 'D. García y los juegos de mesa'
  }, {
    id: 28,
    type: 'Frase típica',
    text: 'Hoy seguro no me duermo',
    author: 'M. Troisi despues de la 01:00'
  }, {
    id: 29,
    type: 'Frase épica',
    text: 'El Lucho se estaba chamuyando a la prima de Danilo eh!',
    author: 'J. Romero'
  }, {
    id: 30,
    type: 'Frase típica',
    text: 'Y Daniela? Se fue...',
    author: 'Veranillo preguntando por D. Guillén'
  }, {
    id: 31,
    type: 'Frase típica',
    text: 'Cambiate ese short hdp',
    author: 'M. Troisi y el short de G. Julean en la playa'
  }, {
    id: 32,
    type: 'Frase retro',
    text: 'Tremendo poligrillo',
    author: 'Agu Rivera'
  }, {
    id: 33,
    type: 'Frase retro',
    text: 'Está preso',
    author: 'Respuesta cuando alguien preguntaba por el Román'
  }, {
    id: 34,
    type: 'Frase retro',
    text: '¡Para que quede BIEN esto voy a hacer las referencias UNA por UNA!... y si queda mal me importa un carajo',
    author: 'Jenni puteando a Willi'
  }, {
    id: 35,
    type: 'Frase típica',
    text: 'En esta tengo que doblar?',
    author: 'Martin queriendo llevar por millonésima vez a la casa de Danilo'
  }, {
    id: 36,
    type: 'Frase épica',
    text: 'Aaaa esta sale a los cuernos de Batlle',
    author: 'Danilo comentando sobre calles en plena Ciudad Vieja'
  }, {
    id: 37,
    type: 'Frase retro',
    text: 'Turu tu turu me depilo',
    author: 'M. Troisi'
  }, {
    id: 38,
    type: 'Frase típica',
    text: 'No sonó mi celular',
    author: 'G. Julean, cada vez que no lo invitamos',
  }, {
    id: 39,
    type: 'Frase épica',
    text: 'A pero son de madera, están en la rambla y se vienen a jugar jueguitos de mesa',
    author: 'Beto García'
  }, {
    id: 40,
    type: 'Frase retro',
    text: 'Pero andá a pescar Danilo',
    author: 'Beto García a D. García un Domingo a la mañana'
  }, {
    id: 41,
    type: 'Frase típica',
    text: 'Tengo una idea para una empresa',
    author: 'M. Troisi al menos una vez a la semana'
  }, {
    id: 42,
    type: 'Frase típica',
    text: 'No puedo gurises, mañana trabajo',
    author: 'Gonzalo Julean, sábado a las 10 de la noche'
  }, {
    id: 43,
    type: 'Frase típica',
    text: 'Ayer falté',
    author: 'L. Romero y el trabajo'
  }, {
    id: 44,
    type: 'Frase típica',
    text: 'Pah tengo un capítulo de Bob Esponja que está demás',
    author: 'D. García'
  }, {
    id: 45,
    type: 'Frase típica',
    text: 'Vamos a ver el Bueno el Malo y el Feo',
    author: 'L. Romero'
  }, {
    id: 46,
    type: 'Frase típica',
    text: 'Esto no te da gracia ni a palo',
    author: 'Danilo García, cuando vemos una película elegida por Lucho'
  }, {
    id: 47,
    type: 'Recuerdo flash',
    text: 'Martín dibujando el Cíclope de X-Men en el Pictionary',
    author: 'M. Troisi',
  }, {
    id: 48,
    type: 'Recuerdo flash',
    text: 'Si soy yo y me dijeron que no es amigo de ustedes me voy a sentir re mal',
    author: 'Danilo García con el papel con su nombre en la frente'
  }, {
    id: 49,
    type: 'Frase típica',
    text: 'No podés es muy chica',
    author: 'Jennifer Esteche, calmando las fieras'
  }, {
    id: 50,
    type: 'Momento típico',
    text: 'Willi agachado tomando aire en los partidos de fútbol',
    author: 'W. Olivera'
  }, {
    id: 51,
    type: 'Frase típica',
    text: 'Esto está mal programado, el que lo hizo no sabe nada de fútbol',
    author: 'M. Troisi cada vez que pierde al play'
  }, {
    id: 52,
    type: 'Frase típica',
    text: 'Pah vi una casa que está demas',
    author: 'Daniela Guillén buscando lugares sospechosos para veranear'
  }, {
    id: 53,
    type: 'Recuerdo flash',
    text: 'Mañana estoy levantando una pared a las 6 a.m',
    author: 'Gonzalo Julean en sus tiempos de albañil en la casa'
  }, {
    id: 54,
    type: 'Frase típica',
    text: 'Hoy echaron a 50 más, me vengo salvando',
    author: 'Martín Troisi y las expulsiones masivas en Zenda'
  }, {
    id: 55,
    type: 'Momento típico',
    text: 'Jenni y los photoshops mezclando caras',
    author: 'J. Esteche'
  }, {
    id: 56,
    type: 'Frase típica',
    text: 'La pregunta es .. quien saca el auto hoy?',
    author: 'W. Olivera'
  }, {
    id: 57,
    type: 'Recuerdo flash',
    text: 'Con este buzo no tengo frío',
    author: 'W. Olivera y su buzo azul antifrío del 26'
  }, {
    id: 58,
    type: 'Recuerdo flash',
    text: 'Stella Maris poniendo 12s por llevar boletos',
    author: 'S. Maris'
  }, {
    id: 59,
    type: 'Recuerdo flash',
    text: 'El hermano del Sabio entrando en bicicleta a la clase haciendo Willy',
    author: 'Hermano del Sabio'
  }, {
    id: 60,
    type: 'Recuerdo flash',
    text: 'Pero Esteche está escuchando música y usted no le dice nada',
    author: 'D. García a Di Cono'
  }, {
    id: 61,
    type: 'Recuerdo flash',
    text: 'Viniste de Portugal y te cambiaron hdp',
    author: 'W. Olivera resentido con M. Troisi en el turno de la tarde',
  }, {
    id: 62,
    type: 'Frase típica',
    text: 'Vamos a la casa del Willi, en el auto del Willi, en el barrio del Willi',
    author: 'M. Troisi'
  }
];

export default quotes;
