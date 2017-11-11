const members = [
  {
    id: 1,
    name: 'Jennifer Esteche',
    alias: 'Jenni',
    imgName: 'j1.png',
    position: 'Chief Technology Officer of women rights',
    description:
      'Metro cincuenta y cara de nena, dueña de pómulos apretujables y amante de los dulces. ' +
      'A pesar de invertir en largas horas de sueño, es la primera profesional Ingeñery del grupo. ' +
      'Defensora del poder femenino, pone en su lugar los chistes machistas y concientiza a la parte masculina del Veranillo. ' +
      'Aunque sus orígenes la marcan como una ex miembro de los populares del 26, ha sabido alinearse con los ' +
      'estándares de las groserías dando grandes aportes al grupo de "Todo Chanchadas". '
    ,
    qualities: [
      'Tímida, introvertida, le es difícil interactuar y sociabilizar con sus pares',
      'Ama levantarse temprano y aprovechar el día desde el primer minuto en que amanece',
      'Chica de buenas costumbres, jamás una grosería podría salir de su boca',
      'Detallista con la higiene y el orden del hogar. Nunca permitiría una cosa fuera de su lugar.',
      'Le cuesta relacionarse con su sobrina a quien envidia por ser una potencial competidora de su identidad',
    ]
  },
  {
    id: 2,
    name: 'Gonzalo Julean',
    alias: 'Zalo',
    imgName: 'z1.png',
    position: 'Business Analyst of Don Ciccio',
    description:
      'Su tormenta de facha y el estar todo el día ayudando viejitas a prender el internet lo hacen el yerno ideal. ' +
      'Todavía no entendemos como no esta rodeado de minitas. Luego de haber intentado al menos 6 carreras, parece que ' +
      'encontró su lugar en el mundo de la programación. Símbolo de la ironía y los chistes ácidos, es una pieza fundamental ' +
      'del equilibrio en el Whats App. Su membresía ha sido cuestionada por su relación con otro grupo de amigos, ' +
      'pero sus gustos por los juegos de caja excesivamente nerds hacen pensar que es mejor que comparta esos gustos en otro lado. '
    ,
    qualities: [
      'El primero que pone la plata cuando hay que pagar. "Después arreglamos" siempre dice jugándosela',
      'Si hay alguien que se las sabe arreglar es él. Sería incapaz de pedir que lo pasen a buscar o lo lleven a su casa',
      'Se caracteriza por poner largos mensajes con risas en Whats App',
      'Mucho mas ganador que su hermano Marcelo',
      'Un trotamundos, con al menos 136 ciudades visitadas, incluyendo Arequita',
    ]
  },
  {
    id: 3,
    name: 'Martín Troisi',
    alias: 'Martín',
    imgName: 'm1.png',
    position: 'Financial Manager of party plans',
    description:
      'Otro más de metro cincuenta, tipo carismático, cómico e impulsor de la gran mayoría de las salidas del Veranillo. ' +
      'Padre orgulloso de un Peugeot 207, con mas chiches que kilómetros. Su más reciente adquisición: un bolsito ' +
      'para las llaves. Dueño de una curiosa propiedad fotogénica que le permite salir como Stallone a pesar de ' +
      'sus 38kg. Con el emprendimiento entre ceja y ceja, su futuro promete una empresa propia de al menos 500 empleados. '
    ,
    qualities: [
      'Detesta dejar que sobre comida',
      'No soporta que la gente se conozca por aplicaciones o usando el Internet',
      'Nunca pensaría en gastar plata en su Auto',
      'Tipo gentil, atento, siempre preocupado por que las personas lleguen sanas y salvas a sus casas',
      'Amante de la rutina y con perfil de duro trabajador',
    ]
  },
  {
    id: 4,
    name: 'Danilo García',
    alias: 'Danilo',
    imgName: 'd1.png',
    position: 'Development Architect of robots life',
    description:
      'Símbolo de buena persona, pensando constantemente en el prójimo, siempre y cuando no sea Marcelo Guillén. ' +
      'Como uno de los pertenecientes al equipo de los casados aparenta dar ejemplo de seriedad y madurez, aunque ' +
      'esto se ve opacado al pedir Frutillada en las estaciones de servicio. Gran músico multiinstrumental, intérprete ' +
      'de grandes temas como "Hang Long". Por si fuera poco, es hijo del "Beto", consultor estratega del Veranillo. '
    ,
    qualities: [
      'Conoce las calles de Montevideo como la palma de su mano',
      'Constante cuestionador y crítico de las religiones y la Biblia',
      'Orgulloso de su tez clara',
      'A veces demasiado vanidoso con su cuerpo, preocupado por no tener ni un kilo de más',
      'Le encanta decir groserías y alterar el ambiente de conversación con obsenidades',
    ]
  },
  {
    id: 5,
    name: 'Daniela Guillén',
    alias: 'Daniela',
    imgName: 'da1.png',
    position: 'Operations manager of kids',
    description:
      'Una de las de metro cincuenta, aprovecha su orientación de maestra para imponer respeto sobre los más bajitos ' +
      'que ella. Es la otra casada del grupo. Al igual que su par, lejos de dar ejemplo de seriedad y madurez, ha puesto ' +
      'uno de los apodos más ocurrentes de los últimos tiempos: "Carbón". Ni más ni menos que a su legítimo tórtolo. ' +
      'Cuenta la leyenda que una vez se levantó a las 7 de la mañana, probablemente fue porque venía de 46 horas ' +
      'corridas de sueño. '
    ,
    qualities: [
      'Ecologista, pensando en la importancia del agua, jamás demoraría más de 2 minutos en la ducha',
      'Cree que dormir es una pérdida de tiempo',
      'Odia comer comida chatarra como la de McDonalds',
      'Nunca huiría de un lugar, ni aunque este plagado de arañas',
      'Lamentablemente a veces trabaja demasiado',
    ]
  },
  {
    id: 6,
    name: 'Luis Romero',
    alias: 'Lucho',
    imgName: 'l1.png',
    position: 'System Administrator of dance moves',
    description:
      'Oriundo del departamento de Durazno, lleva consigo la joda del interior haciéndolo amo y señor ' +
      'de las pistas de baile. Repleto de anécdotas para contar, ha sido parte de varias experiencias ' +
      'insólitas incluyendo su actual trabajo, donde nadie entiende cómo le pueden estar pagando por programar. ' +
      'Dueño de un personaje gauchesco inigualable, ha provocado 3 mil millones de risas ... por segundo ... en cada uno.'
    ,
    qualities: [
      'Tipo puntual, marcando los tiempos y organizando los horarios del grupo',
      'Jamás pondría una excusa para salir con el Veranillo',
      'Repudia el contacto físico con los amigos, trata de evitar cualquier tipo de broma',
      'Junto a su hermano mellizo son dos gotas de agua. Casi que no podemos distinguirlos.',
      'Es de asistir a pocos cumpleaños y comidas con amigos, sentimos que no lo inviten muy seguido.',
    ]
  },
  {
    id: 7,
    name: 'Williams Olivera',
    alias: 'Willi',
    imgName: 'w1.png',
    position: 'Technical Architect of football goals',
    description:
    'Alto, esbelto, ejemplo de solidaridad y bondad, un gran amigo, un increíble jugador de futbol y el que '+
    'tiene acceso a este texto. Uno de los que más veces "quedó adentro" con los gastos, acumula deudas de 3ro de liceo. ' +
    'Su inhabilidad para poder nadar ha sido fundamental a lo largo de los años, permitiendo sacar varias fotos de ' +
    'momentos felices desde afuera del agua.',
    qualities: [
      'Fanático de la musica tropical, nunca se perdería una bailanta.',
      'Patriota como pocos, constante crítico de yankeelandia. Afirma que nunca pondría un pie en U.S.A',
      'Con una novia diferente cada semana, un tipo incontrolable en las relaciones amorosas.',
      'Constantemente cambiando de trabajo, aún no ha encontrado su lugar',
      'Obsesionado con las redes sociales, no para de subir fotos y compartir estados.',
    ]
  },
];

export default members;
