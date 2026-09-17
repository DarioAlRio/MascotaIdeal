"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos) en el cuerpo de la guía: son guías de criterio, no fichas de
// producto. Los productos concretos van en el array `products` de cada guía.

const GUIDES = [
  {
    slug: "arneses-para-perros",
    title: "Cómo elegir un arnés para perro",
    dek: "Talla, tipo de enganche y material: los criterios que evitan rozaduras y escapadas a media calle.",
    updated: "2026-09-16",
    intro: [
      "Un arnés mal elegido no se nota en la tienda, se nota en el primer paseo largo: roza en las axilas, el perro se escurre hacia atrás o el enganche se afloja justo cuando tira de la correa. La talla correcta y el tipo de enganche importan más que el color o el estampado.",
      "Esta guía no recomienda un modelo concreto: te da los criterios para comparar cualquier arnés con cabeza, incluidos los que encuentres en Amazon.",
    ],
    sections: [
      {
        heading: "Arnés en H, en Y o de pechera completa",
        body: [
          "El arnés en H o en Y reparte la presión entre el pecho y los hombros sin restringir el movimiento de las patas delanteras, y es el más recomendado para perros que caminan con normalidad y no tiran en exceso. La pechera completa (tipo chaleco) cubre más superficie y amortigua mejor los tirones bruscos, pero puede rozar más si el perro suda o tiene pelo corto en verano.",
          "Para cachorros en crecimiento, un arnés en Y con varios puntos de ajuste permite adaptarlo según el perro va cambiando de talla, algo que una pechera rígida no siempre facilita.",
        ],
      },
      {
        heading: "Punto de enganche: pecho, espalda o ambos",
        body: [
          "El enganche en la espalda es el más cómodo para el perro y el más habitual, pero en perros que tiran fuerte apenas ayuda a corregir el tirón, porque la fuerza se dirige hacia delante sin control. El enganche en el pecho gira al perro hacia el dueño cuando tira, lo que facilita el trabajo de educación en perros que tiran mucho.",
          "Los arneses con doble enganche (pecho y espalda) son los más versátiles: permiten pasear con normalidad la mayor parte del tiempo y cambiar al enganche frontal solo cuando hace falta corregir un tirón.",
        ],
      },
      {
        heading: "Cómo tomar la talla correcta",
        body: [
          "La talla de un arnés no se elige por el peso del perro en abstracto, sino por el contorno de pecho (justo detrás de las patas delanteras) y el contorno de cuello, medidos con una cinta métrica flexible. Un arnés ajustado permite pasar dos dedos entre la correa y el cuerpo del perro: más holgura facilita que el perro se escape hacia atrás, menos holgura roza y limita el movimiento.",
          "Los arneses con varios puntos de ajuste (pecho, cuello y a veces tripa) se adaptan mejor a razas con proporciones atípicas (galgos, perros de pecho profundo) que los modelos con una sola hebilla fija.",
        ],
      },
      {
        heading: "Material, acolchado y reflectantes",
        body: [
          "El neopreno o la malla acolchada reducen el roce en paseos largos frente al nailon fino sin relleno, sobre todo en perros de pelo corto o piel sensible en las axilas. Las tiras reflectantes no son un capricho: marcan una diferencia real de visibilidad en paseos al anochecer o de madrugada.",
          "Revisa también el material de las hebillas: el plástico de baja calidad es el punto que más falla bajo tirones fuertes y repetidos, especialmente en perros grandes o muy activos.",
        ],
      },
    ],
    checklist: [
      "Contorno de pecho y cuello medidos, no solo el peso del perro",
      "Tipo de enganche según el objetivo: espalda para paseo normal, pecho para corregir tirones",
      "Varios puntos de ajuste si el perro está en crecimiento o tiene proporciones atípicas",
      "Acolchado en las zonas de roce (axilas, pecho) para paseos largos",
      "Hebillas de calidad si el perro es grande o tira con fuerza",
    ],
    faq: [
      {
        q: "¿Arnés o collar para pasear a diario?",
        a: "El arnés reparte la presión por el pecho en lugar de concentrarla en el cuello, lo que reduce el riesgo de lesión en la tráquea, especialmente en perros que tiran o en razas pequeñas con tráquea sensible. El collar sigue siendo necesario para llevar la placa identificativa, pero para pasear con correa el arnés es la opción más segura en la mayoría de los casos.",
      },
      {
        q: "¿Cómo sé si el arnés le queda bien?",
        a: "Con el arnés puesto, debes poder pasar dos dedos entre cualquier tira y el cuerpo del perro sin que quede holgura de sobra. Comprueba también que no pueda sacar una pata hacia atrás y escurrirse: si lo consigue con facilidad, la talla o el ajuste no son correctos.",
      },
    ],
    products: [
      { asin: "B075FRGCT1", title: "Eagloo Arnés Antitirones Perro Grande y Mediano, Acolchado", note: "Entrada de gama en malla transpirable con tiras reflectantes, buena opción para paseos diarios.", img: "https://m.media-amazon.com/images/I/712yOtMPqZL._AC_UL320_.jpg", price: "20", rating: "4,5★" },
      { asin: "B01M8JT6FT", title: "rabbitgoo Arnés Antitirones para Perro, Chaleco Acolchado", note: "Chaleco de pechera completa, cómodo para adiestramiento y viajes en coche.", img: "https://m.media-amazon.com/images/I/61x25BTRT6L._AC_UL320_.jpg", price: "18", rating: "4,5★" },
      { asin: "B0FH6J96LC", title: "OFFCUP Arnés para Perros Pequeños, Cachorros y Gatos", note: "Talla reducida y malla suave, pensado específicamente para razas pequeñas y cachorros.", img: "https://m.media-amazon.com/images/I/61QYzuTWAzL._AC_UL320_.jpg", price: "12", rating: "4,2★" },
      { asin: "B0FFT5N72F", title: "Arnés Antitirones Chaleco Acolchado para Adiestramiento", note: "Buen equilibrio precio-acolchado para perros medianos y grandes.", img: "https://m.media-amazon.com/images/I/71ESFNQjVZL._AC_UL320_.jpg", price: "20", rating: "4,4★" },
      { asin: "B0CQX4HFL8", title: "rabbitgoo Arnés con 3 Hebillas y Liberación del Cuello", note: "Varios puntos de ajuste, útil si el perro tiene proporciones atípicas o está en crecimiento.", img: "https://m.media-amazon.com/images/I/711fAkQPaGL._AC_UL320_.jpg", price: "22", rating: "4,5★" },
      { asin: "B09B6BKPS8", title: "haapaw Arnés sin Tirar, Reflectante Oxford, con Correa Incluida", note: "Diseño para perros que tiran, con enganche frontal y correa a juego.", img: "https://m.media-amazon.com/images/I/81VCpAccdTL._AC_UL320_.jpg", price: "27", rating: "4,6★" },
      { asin: "B09ZPJVCZ5", title: "OneTigris Arnés Táctico Molle de Malla Transpirable", note: "Gama alta: estructura táctica con asas y anillas Molle para perros muy activos.", img: "https://m.media-amazon.com/images/I/71nGxdWcMmL._AC_UL320_.jpg", price: "51", rating: "4,5★" },
    ],
  },
  {
    slug: "correas-para-perros",
    title: "Correas para perro: fijas, extensibles o de adiestramiento",
    dek: "Longitud, material y sistema de freno: qué correa compensa según el tamaño de tu perro y el tipo de paseo.",
    updated: "2026-09-15",
    intro: [
      "\"Comprar una correa\" suena sencillo hasta que hay que elegir entre fija, extensible, con doble enganche o de adiestramiento, cada una pensada para un tipo de paseo distinto. Acertar con el tipo evita tanto tirones incómodos como un cable enrollado en las piernas a media calle.",
    ],
    sections: [
      {
        heading: "Correa fija, extensible o multifunción",
        body: [
          "Las correas fijas (1-2 metros) dan el control más directo y son las más seguras en ciudad, cerca de tráfico o de otros perros. Las extensibles permiten más libertad de movimiento en espacios abiertos, pero reducen el control inmediato y no son recomendables en zonas con tráfico o mucha gente, porque el tiempo de reacción del freno es mayor que el de una correa fija.",
          "Las correas multifunción, con varias anillas y longitudes regulables, sirven tanto para paseo corto como para atar el perro brevemente o pasear a dos perros con un solo enganche doble.",
        ],
      },
      {
        heading: "Longitud y grosor según el tamaño del perro",
        body: [
          "Una correa demasiado larga en ciudad estorba más de lo que aporta libertad; 1,2-1,5 metros es un buen punto de partida para paseo urbano con perros medianos y grandes. El grosor de la cinta debe ir acorde a la fuerza del perro: una cinta fina en un perro grande que tira se nota enseguida en la mano y se desgasta antes.",
          "En correas extensibles, la longitud máxima (3, 5 o incluso 8 metros) solo tiene sentido en espacios abiertos y sin tráfico: usarla al máximo en la acera no aporta nada y sí más riesgo.",
        ],
      },
      {
        heading: "Sistema de freno y bloqueo en las extensibles",
        body: [
          "El freno de una sola mano es el criterio que más se nota en el uso diario de una correa extensible: un mecanismo lento o que requiere las dos manos es un problema real cuando aparece otro perro o una bicicleta de repente. El bloqueo de posición fija permite convertir la extensible en una correa corta cuando hace falta más control puntual.",
        ],
      },
      {
        heading: "Material del mango y resistencia a mordiscos",
        body: [
          "El mango acolchado reduce el roce en paseos largos o con perros que tiran con frecuencia, algo que un mango de cinta fina sin relleno no ofrece. En correas extensibles, el cable de acero recubierto resiste mejor un mordisco accidental que el cable de nailon fino, un detalle relevante si el perro tiene tendencia a morder la correa por aburrimiento.",
        ],
      },
    ],
    checklist: [
      "Fija para ciudad y tráfico, extensible solo para espacios abiertos",
      "Longitud de 1,2-1,5 m como punto de partida para paseo urbano",
      "Grosor de cinta acorde a la fuerza real del perro",
      "Freno de una sola mano si eliges una correa extensible",
      "Mango acolchado si el perro tira con frecuencia",
    ],
    faq: [
      {
        q: "¿Es segura la correa extensible para todos los perros?",
        a: "No en todos los contextos: son cómodas en parques o caminos abiertos, pero en la ciudad, cerca de carreteras o de otros perros, el mayor tiempo de reacción del freno y la menor sujeción directa las hacen menos seguras que una correa fija corta.",
      },
      {
        q: "¿Qué longitud de correa fija es la más práctica?",
        a: "Para el día a día en ciudad, entre 1,2 y 1,5 metros suele ser el punto más práctico: da margen para que el perro huela y camine con cierta libertad sin perder control inmediato en un cruce o al pasar junto a otro perro.",
      },
    ],
    products: [
      { asin: "B00O3B2RG2", title: "flexi Classic S, Correa Retráctil de Cinta 5m", note: "Marca de referencia en extensibles, freno de una sola mano fiable para perros hasta 15 kg.", img: "https://m.media-amazon.com/images/I/71LjBOHiamS._AC_UL320_.jpg", price: "11", rating: "4,6★" },
      { asin: "B095C7V817", title: "Taglory Correa Antitirones 1,5 m, Mango Acolchado", note: "Correa fija corta con mango acolchado, buena opción para paseo urbano diario.", img: "https://m.media-amazon.com/images/I/71oitvj9Y6L._AC_UL320_.jpg", price: "10", rating: "4,6★" },
      { asin: "B0GGWTS5HQ", title: "X XBEN Correa Reflectante con Mango Acolchado", note: "Varias longitudes disponibles y tiras reflectantes para paseos con poca luz.", img: "https://m.media-amazon.com/images/I/81Azwb+SgAL._AC_UL320_.jpg", price: "10", rating: "4,6★" },
      { asin: "B099W3897W", title: "lionto Correa Regulable y Multifunción 200 cm", note: "Varias anillas de ajuste: sirve como correa corta, larga o para dos perros.", img: "https://m.media-amazon.com/images/I/61JY7NQ+GwL._AC_UL320_.jpg", price: "16", rating: "4,4★" },
      { asin: "B07Q29WJLR", title: "Correa Larga de Adiestramiento, 3 a 30 m", note: "Pensada para adiestramiento y llamada a distancia en espacios abiertos, no para ciudad.", img: "https://m.media-amazon.com/images/I/61aXaKmHe6L._AC_UL320_.jpg", price: "15", rating: "4,5★" },
      { asin: "B0G69YX5S1", title: "3M Correa Extensible, 360° Sin Enredos, hasta 30 kg", note: "Freno de una mano y sistema antienredos, buen equilibrio para perros medianos.", img: "https://m.media-amazon.com/images/I/519KWXugEEL._AC_UL320_.jpg", price: "20", rating: "4,6★" },
      { asin: "B0GY4DLYG6", title: "Correa Extensible 8 m con Cuerda de Acero, hasta 50 kg", note: "Gama alta: cable de acero recubierto resistente a mordiscos, para perros grandes.", img: "https://m.media-amazon.com/images/I/71KYke3Xe-L._AC_UL320_.jpg", price: "22", rating: "4,1★" },
      { asin: "B0FQCCDLMY", title: "Correa Extensible 5 m a Prueba de Mordiscos, hasta 30 kg", note: "Control con un solo botón y refuerzo antimordisco en el cable.", img: "https://m.media-amazon.com/images/I/71vGe3Zd97L._AC_UL320_.jpg", price: "23", rating: "4,1★" },
    ],
  },
  {
    slug: "comederos-automaticos-para-mascotas",
    title: "Comederos automáticos: cómo elegir uno para perro o gato",
    dek: "Capacidad, programación de raciones y limpieza: los criterios antes de automatizar la comida de tu mascota.",
    updated: "2026-09-14",
    intro: [
      "Un comedero automático no es solo \"un cuenco con temporizador\": la capacidad del depósito, la precisión de las raciones y lo fácil que sea de limpiar marcan la diferencia entre un accesorio que se usa a diario y uno que acaba desconectado en un cajón.",
    ],
    sections: [
      {
        heading: "Capacidad del depósito según el número de mascotas",
        body: [
          "Un depósito de 3-4 litros cubre sin problema a una mascota durante varios días de pienso seco, mientras que hogares con dos o más animales, o quienes viajan con frecuencia, se benefician de depósitos de 5-7 litros o más. Calcula siempre sobre el consumo diario real de tu mascota, no sobre una media genérica: razas grandes o muy activas vacían el depósito bastante más rápido.",
        ],
      },
      {
        heading: "Precisión de las raciones y número de comidas",
        body: [
          "Los comederos con control por app suelen permitir programar entre 1 y 10 tomas diarias con gramaje ajustable, útil para mascotas con dietas controladas por el veterinario. Un mecanismo de tolva simple, sin calibración fina, puede variar la cantidad real servida entre una toma y otra, algo a vigilar si el peso de la mascota necesita control estricto.",
        ],
      },
      {
        heading: "Alimentación con pienso húmedo o compatible con ambos",
        body: [
          "La mayoría de comederos automáticos económicos están pensados solo para pienso seco: el mecanismo de tolva no funciona con comida húmeda, que se apelmaza y atasca el dispensador. Si necesitas dar de comer húmedo de forma programada, hace falta un modelo específico con compartimento refrigerado o hielera, normalmente más caro.",
        ],
      },
      {
        heading: "Materiales, limpieza y alimentación de varias mascotas",
        body: [
          "El cuenco de acero inoxidable es más higiénico y resistente a arañazos que el plástico, y no retiene olores con el tiempo. Si hay varias mascotas en casa que comen a ritmos distintos, existen comederos con lector de microchip o control por reconocimiento facial que solo abren la tapa a la mascota autorizada, evitando que una le robe la comida a otra.",
        ],
      },
    ],
    checklist: [
      "Capacidad de depósito acorde al número de mascotas y a si vas a viajar",
      "Programación de raciones con gramaje ajustable si necesitas control de peso",
      "Compatibilidad con pienso húmedo solo si lo necesitas de verdad",
      "Cuenco de acero inoxidable, más higiénico que el plástico",
      "Lector de microchip o reconocimiento si hay varias mascotas con dietas distintas",
    ],
    faq: [
      {
        q: "¿Sirve un comedero automático para varias mascotas?",
        a: "Depende del modelo: los comederos simples reparten la comida en un único cuenco al que puede acceder cualquier mascota de la casa. Si necesitas que cada una coma su ración exacta sin robarse comida, hace falta un modelo con lector de microchip o reconocimiento facial, más caro pero pensado específicamente para ese caso.",
      },
      {
        q: "¿Puedo poner comida húmeda en cualquier comedero automático?",
        a: "No: la mayoría de comederos automáticos están diseñados solo para pienso seco, porque su mecanismo de tolva se atasca con comida húmeda. Si necesitas programar tomas de húmedo, busca un modelo específico con compartimento refrigerado, normalmente de gama más alta.",
      },
    ],
    products: [
      { asin: "B0BZYRWT14", title: "Faroro 4L Comedero Automático con Temporizador", note: "Entrada de gama: programable de 1 a 6 comidas, tazón de acero inoxidable.", img: "https://m.media-amazon.com/images/I/61IgsRJ059L._AC_UL320_.jpg", price: "28", rating: "4,1★" },
      { asin: "B0GR54MB8Y", title: "Comedero Automático WiFi con App, Doble Alimentación 3L", note: "Control remoto por app y hasta 10 comidas al día con grabación de voz.", img: "https://m.media-amazon.com/images/I/71wZzclaDeL._AC_UL320_.jpg", price: "33", rating: "4,2★" },
      { asin: "B09CPPPPTS", title: "Faroro 7L Comedero con Pantalla LCD y Grabación de Voz", note: "Depósito grande, buena opción para varios días sin reponer o para perros grandes.", img: "https://m.media-amazon.com/images/I/61JHrHa1xPL._AC_UL320_.jpg", price: "40", rating: "4,4★" },
      { asin: "B09LHDD8JJ", title: "Balimo Comedero con Cámara 1080p y Visión Nocturna, 4L", note: "Incluye cámara con audio bidireccional para ver y hablar con la mascota al comer.", img: "https://m.media-amazon.com/images/I/61IP1sGZX3L._AC_UL320_.jpg", price: "60", rating: "4,2★" },
      { asin: "B0CD7NRW37", title: "PETKIT Comedero WiFi 3L, Control por App", note: "Marca especializada en accesorios conectados, compatible con liofilizados.", img: "https://m.media-amazon.com/images/I/61YV-DxpRML._AC_UL320_.jpg", price: "66", rating: "4,4★" },
      { asin: "B0DMNN4CSZ", title: "PETKIT Comedero con Cámara, Doble Tolva 5L, IA", note: "Gama alta: doble depósito, cámara con IA y cuenco de acero inoxidable extraíble.", img: "https://m.media-amazon.com/images/I/61N0VHojCpL._AC_UL320_.jpg", price: "131", rating: "4,3★" },
      { asin: "B00O0UIPTY", title: "SureFeed Comedero con Lector de Microchip", note: "Solo abre la tapa a la mascota identificada por chip: pensado para hogares multi-mascota.", img: "https://m.media-amazon.com/images/I/61j3BDpQH4L._AC_UL320_.jpg", price: "164", rating: "4,3★" },
    ],
  },
  {
    slug: "fuentes-de-agua-para-mascotas",
    title: "Fuentes de agua para perros y gatos: qué mirar antes de comprar",
    dek: "Caudal, material y nivel de ruido: por qué una fuente de agua anima a beber más a un gato que un cuenco.",
    updated: "2026-09-13",
    intro: [
      "Muchos gatos beben menos agua de la que necesitan si el cuenco está quieto: el instinto de buscar agua en movimiento (más segura frente al estancamiento en la naturaleza) hace que una fuente con caudal continuo anime a beber más que un cuenco tradicional. Elegir bien la fuente influye directamente en la hidratación real de la mascota.",
    ],
    sections: [
      {
        heading: "Material: acero inoxidable, cerámica o plástico",
        body: [
          "El acero inoxidable es el material más higiénico: no retiene bacterias en arañazos como sí puede pasar con el plástico, y no altera el sabor del agua ni provoca acné en la barbilla del gato (frecuente en cuencos de plástico). La cerámica es también higiénica y más pesada, lo que evita que la vuelquen los gatos más juguetones, pero es frágil ante caídas.",
        ],
      },
      {
        heading: "Caudal, silencio y tipo de flujo",
        body: [
          "El caudal de agua debe ser suave: un chorro demasiado fuerte salpica alrededor y puede desanimar a beber a gatos más sensibles al ruido o al movimiento brusco. La mayoría de fuentes permiten elegir entre flujo en cascada, en burbuja o en forma de grifo; probar cuál prefiere tu gato suele ser la única forma de acertar, aunque el flujo en cascada suave es el que menos rechazo genera de partida.",
          "El nivel de ruido de la bomba importa especialmente si la fuente va a estar en una zona de paso o cerca de donde duerme la mascota: las bombas de mala calidad son notablemente más ruidosas con el uso, aunque al principio parezcan silenciosas.",
        ],
      },
      {
        heading: "Capacidad y autonomía sin recargar",
        body: [
          "Una capacidad de 1,5-2 litros basta para un gato durante 2-3 días sin reponer agua; en hogares con varias mascotas o perros grandes conviene una capacidad de 3 litros o más para no depender de rellenar cada día. Las fuentes con indicador de nivel visible facilitan saber cuándo hace falta reponer sin tener que abrirlas.",
        ],
      },
      {
        heading: "Filtro y facilidad de limpieza",
        body: [
          "El filtro de carbón activo retiene pelo e impurezas y reduce el sabor a cloro del agua del grifo, pero hay que cambiarlo cada 2-4 semanas para que siga siendo eficaz: un filtro saturado deja de filtrar y puede incluso ensuciar el agua. Las fuentes desmontables en pocas piezas, sin rincones inaccesibles, se limpian mucho más a fondo que las que tienen compartimentos fijos.",
        ],
      },
    ],
    checklist: [
      "Acero inoxidable o cerámica antes que plástico, por higiene y sabor",
      "Flujo suave y bomba silenciosa si va a estar cerca de zonas de descanso",
      "Capacidad de al menos 1,5-2 litros para no rellenar a diario",
      "Filtro de carbón activo reemplazable cada 2-4 semanas",
      "Diseño desmontable en pocas piezas para limpieza a fondo",
    ],
    faq: [
      {
        q: "¿De verdad hace beber más agua a un gato una fuente?",
        a: "En muchos gatos sí, porque el agua en movimiento imita el agua corriente que instintivamente perciben como más segura frente al estancamiento. No es una garantía universal (cada gato tiene sus preferencias), pero es una de las formas más efectivas de fomentar la hidratación en gatos que beben poco de un cuenco fijo.",
      },
      {
        q: "¿Cada cuánto hay que limpiar la fuente de agua?",
        a: "La fuente completa conviene limpiarla a fondo cada 1-2 semanas, y el filtro de carbón activo sustituirlo cada 2-4 semanas según el uso. Un mantenimiento insuficiente favorece la aparición de biofilm (una capa viscosa de bacterias) en las paredes internas, invisible a simple vista pero perjudicial si se acumula.",
      },
    ],
    products: [
      { asin: "B0CSCVBB38", title: "Fuente Automática 2,2L con Bomba Ultrasilenciosa", note: "Entrada de gama con filtro de carbón activo, buena opción para pisos pequeños.", img: "https://m.media-amazon.com/images/I/61ekJbPqjFL._AC_UL320_.jpg", price: "15", rating: "4,2★" },
      { asin: "B0D9BPB2V5", title: "Fuente 2,2L con LED y Dos Patrones de Flujo", note: "Permite elegir el tipo de flujo, útil si tu mascota es exigente con el movimiento del agua.", img: "https://m.media-amazon.com/images/I/61RpJK77nhL._AC_UL320_.jpg", price: "18", rating: "4,3★" },
      { asin: "B0FF48X5N8", title: "FEELNEEDY Fuente 2,8L Acero Inoxidable, 3 Filtros", note: "Capacidad generosa en acero inoxidable con triple filtración incluida.", img: "https://m.media-amazon.com/images/I/714bGG3GHbL._AC_UL320_.jpg", price: "23", rating: "4,2★" },
      { asin: "B0FN3K2DTK", title: "Fuente Estilo Grifo 2,6L, Cuádruple Filtración", note: "Flujo tipo grifo, muy silenciosa, con indicador LED de nivel de agua.", img: "https://m.media-amazon.com/images/I/71UJis7aDvL._AC_UL320_.jpg", price: "26", rating: "4,6★" },
      { asin: "B0F5BF98CW", title: "Fuente de Acero Inoxidable 2,6L", note: "Diseño sencillo en acero inoxidable, buena relación calidad-precio.", img: "https://m.media-amazon.com/images/I/7190ACZVWVL._AC_UL320_.jpg", price: "27", rating: "4,4★" },
      { asin: "B0B4W8FDBV", title: "PETKIT EVERSWEET Fuente 2L, Ultrasilenciosa, Control App", note: "Marca especializada, con ventana de nivel de agua y triple filtro.", img: "https://m.media-amazon.com/images/I/61wmy5X3zsL._AC_UL320_.jpg", price: "56", rating: "4,5★" },
      { asin: "B0H7QXL95J", title: "Fuente Inalámbrica 3,2L, Acero Inoxidable", note: "Mayor capacidad y funcionamiento sin cable visible, la mejor valoración del grupo.", img: "https://m.media-amazon.com/images/I/81dlftRVwNL._AC_UL320_.jpg", price: "44", rating: "4,8★" },
      { asin: "B0FJFDPZ6X", title: "PETKIT EVERSWEET MAX 2, Sin Cable, Batería Recargable", note: "Gama alta: funcionamiento inalámbrico con sensor de movimiento y control por app.", img: "https://m.media-amazon.com/images/I/71NrtQOKHXL._AC_UL320_.jpg", price: "95", rating: "4,2★" },
    ],
  },
  {
    slug: "camas-para-perros",
    title: "Cómo elegir la cama de tu perro según su tamaño y edad",
    dek: "Espuma viscoelástica, funda lavable y talla real: lo que marca la diferencia en el descanso de un perro.",
    updated: "2026-09-12",
    intro: [
      "El descanso influye directamente en la salud articular de un perro, sobre todo en razas grandes o mayores: una cama demasiado fina o de talla insuficiente no deja que se estire por completo ni amortigua bien las articulaciones al tumbarse.",
    ],
    sections: [
      {
        heading: "Talla real según el perro estirado, no acurrucado",
        body: [
          "La medida correcta se toma con el perro tumbado de lado, estirado por completo, de la punta del hocico a la punta de la cola, añadiendo un margen de 15-20 cm. Guiarse solo por el peso o la raza lleva a menudo a comprar una talla insuficiente, porque dentro de una misma raza hay bastante variación individual.",
        ],
      },
      {
        heading: "Espuma viscoelástica frente a relleno tradicional",
        body: [
          "La espuma viscoelástica (memory foam) reparte el peso de forma uniforme y no pierde forma con el uso diario, algo especialmente relevante para perros mayores o con artrosis: una cama ortopédica de este tipo reduce la presión en codos y caderas. El relleno tradicional (fibra o algodón) es más barato pero se apelmaza con los meses y pierde buena parte de su capacidad amortiguadora.",
        ],
      },
      {
        heading: "Funda desenfundable, lavable e impermeable",
        body: [
          "Una funda que se puede quitar y lavar a máquina es casi obligatoria: el pelo, la baba y la tierra se acumulan rápido, y lavar solo la funda es mucho más práctico que lavar la cama entera. Una base impermeable o resistente al agua protege el relleno interior de accidentes o de patas mojadas tras el paseo, alargando la vida útil de la cama.",
        ],
      },
      {
        heading: "Base antideslizante y forma según el hábito de dormir",
        body: [
          "Una base de goma antideslizante evita que la cama se desplace sobre suelo duro (parqué, baldosa) cada vez que el perro se tumba o se levanta. La forma también importa: perros que duermen acurrucados aprovechan mejor camas con bordes elevados tipo nido, mientras que perros que se estiran por completo están más cómodos en camas planas y rectangulares.",
        ],
      },
    ],
    checklist: [
      "Talla tomada con el perro estirado, más margen de 15-20 cm",
      "Espuma viscoelástica si el perro es mayor o tiene problemas articulares",
      "Funda desenfundable y lavable a máquina",
      "Base impermeable o resistente al agua",
      "Base antideslizante si el suelo de casa es duro",
    ],
    faq: [
      {
        q: "¿Merece la pena una cama ortopédica para un perro joven y sano?",
        a: "No es imprescindible, pero tampoco perjudica: la espuma viscoelástica mantiene mejor la forma con el tiempo que el relleno tradicional, así que aunque el perro no tenga problemas articulares hoy, la cama dura más en buen estado. Para perros mayores, con sobrepeso o de razas grandes propensas a displasia, sí es recomendable priorizarla.",
      },
      {
        q: "¿Qué talla de cama compro si el perro todavía es cachorro?",
        a: "Mejor calcular la talla adulta esperada de la raza (o consultar la tabla de crecimiento si es mestizo) que comprar por el tamaño actual del cachorro: la mayoría de camas para cachorro se quedan pequeñas en pocos meses. Si el presupuesto lo permite, comprar directamente la talla adulta evita ese gasto duplicado.",
      },
    ],
    products: [
      { asin: "B0BVY2K2JV", title: "KSIIA Colchón Antiestrés Lavable a Máquina", note: "Entrada de gama, cojín lavable con fondo antideslizante para perros medianos.", img: "https://m.media-amazon.com/images/I/61azGm7BWUL._AC_UL320_.jpg", price: "23", rating: "4,5★" },
      { asin: "B0GNL361J3", title: "YAGU Cama para Perros y Gatos, hasta 3 kg", note: "Talla pequeña específica para cachorros o razas mini, funda lavable.", img: "https://m.media-amazon.com/images/I/814MnhWyptL._AC_UL320_.jpg", price: "31", rating: "4,7★" },
      { asin: "B0CHDLZ1P7", title: "FURTIME Cama para Perros Grandes, Lavable", note: "Buen tamaño para perros grandes con funda desenfundable.", img: "https://m.media-amazon.com/images/I/81KshJZ9nBL._AC_UL320_.jpg", price: "32", rating: "4,4★" },
      { asin: "B09GLWZW1H", title: "EHEYCIGA Cama Ortopédica para Perros Grandes", note: "Base fina ortopédica, opción compacta para espacios reducidos.", img: "https://m.media-amazon.com/images/I/61GtI7SW3eL._AC_UL320_.jpg", price: "24", rating: "4,5★" },
      { asin: "B0DCJKCTT7", title: "WAVVE Cama Extra Grande Ortopédica, Impermeable", note: "Espuma tipo caja de huevos y funda impermeable, talla XL para razas grandes.", img: "https://m.media-amazon.com/images/I/61Jb9KeuX7L._AC_UL320_.jpg", price: "38", rating: "4,7★" },
      { asin: "B0F23W976Y", title: "FURTIME Cama Ortopédica para Perros Grandes", note: "Espuma viscoelástica con buena valoración en durabilidad.", img: "https://m.media-amazon.com/images/I/816DBggwsrL._AC_UL320_.jpg", price: "40", rating: "4,6★" },
      { asin: "B0D2KR5Y8F", title: "COZY KISS Cama Ortopédica Extra Grande XL", note: "Pensada para razas extra grandes, base antideslizante incluida.", img: "https://m.media-amazon.com/images/I/71divvY6-0L._AC_UL320_.jpg", price: "43", rating: "4,6★" },
      { asin: "B06XQ492N8", title: "JOYELF Cama de Espuma Viscoelástica tipo Sofá", note: "Gama alta: bordes elevados tipo nido y funda extraíble lavable.", img: "https://m.media-amazon.com/images/I/61cCGmQ2-pL._AC_UL320_.jpg", price: "90", rating: "4,6★" },
    ],
  },
  {
    slug: "transportines-para-mascotas",
    title: "Transportín para perro o gato: guía antes de comprar uno",
    dek: "Homologación para avión, ventilación y tamaño: lo que hay que revisar antes de un viaje con tu mascota.",
    updated: "2026-09-11",
    intro: [
      "Un transportín se compra pensando en un viaje puntual y acaba siendo el sitio donde la mascota pasa horas seguidas: coche, tren, avión o simplemente la sala de espera del veterinario. El tamaño y la ventilación no son un detalle menor, son lo que determina si el viaje es soportable para el animal o no.",
    ],
    sections: [
      {
        heading: "Rígido, semirrígido o blando (tipo bolsa)",
        body: [
          "Los transportines rígidos (tipo jaula) son los más seguros en coche y los que exigen la mayoría de aerolíneas para bodega, porque protegen mejor ante golpes o movimientos bruscos. Los semirrígidos y las bolsas blandas son más ligeros y cómodos para llevar en cabina o en transporte público, pero ofrecen menos protección estructural y no siempre están permitidos en bodega.",
        ],
      },
      {
        heading: "Tamaño: que pueda girar, tumbarse y estirarse",
        body: [
          "La normativa habitual (y el sentido común) exige que la mascota pueda ponerse de pie sin agachar la cabeza, girar sobre sí misma y tumbarse totalmente estirada dentro del transportín. Un transportín ajustado de más genera estrés y calor; uno excesivamente grande hace que la mascota se desplace y pierda estabilidad en cada frenazo o turbulencia.",
        ],
      },
      {
        heading: "Homologación para avión: cabina o bodega",
        body: [
          "Cada aerolínea tiene sus propias medidas máximas para cabina (normalmente debe caber bajo el asiento delantero) y sus propios requisitos de ventilación y cierre para bodega: conviene comprobar la política concreta de la aerolínea antes de comprar, no dar por hecho que un transportín \"apto para avión\" sirve para cualquier compañía.",
          "Para bodega, casi todas las aerolíneas exigen transportines rígidos tipo jaula con ventilación en al menos tres lados y un sistema de cierre que no pueda abrirse accidentalmente durante el vuelo.",
        ],
      },
      {
        heading: "Ventilación, base y accesorios de seguridad",
        body: [
          "Una buena ventilación cruzada (rejillas en varios lados, no solo delante) evita la acumulación de calor, especialmente relevante en viajes largos en coche. Una base impermeable o con bandeja extraíble facilita la limpieza ante accidentes, y el cinturón de seguridad para coche o el anclaje Isofix son un extra de seguridad real en frenazos bruscos.",
        ],
      },
    ],
    checklist: [
      "Tamaño que permita ponerse de pie, girar y estirarse por completo",
      "Rígido para coche y bodega de avión, blando o semirrígido para cabina",
      "Comprobar la política exacta de la aerolínea antes de comprar, si vas a volar",
      "Ventilación cruzada en varios lados, no solo en la parte frontal",
      "Anclaje o cinturón de seguridad para el coche si viaja con frecuencia",
    ],
    faq: [
      {
        q: "¿Qué transportín necesito para viajar en avión con mi mascota?",
        a: "Depende de si va en cabina o en bodega: en cabina suele bastar una bolsa blanda o semirrígida que quepa bajo el asiento delantero, con las medidas máximas de la aerolínea concreta. En bodega, casi todas exigen un transportín rígido tipo jaula con ventilación en varios lados. Consulta siempre la política de la aerolínea antes de comprar, porque las medidas varían de una a otra.",
      },
      {
        q: "¿Cómo sé si el transportín es del tamaño correcto?",
        a: "Con la mascota dentro, debe poder ponerse de pie sin agachar la cabeza, girar sobre sí misma sin quedarse encajada y tumbarse completamente estirada. Si no cumple alguna de esas tres condiciones, es demasiado pequeño; si sobra mucho espacio y se desplaza al frenar, es demasiado grande para un viaje seguro en coche.",
      },
    ],
    products: [
      { asin: "B0FC1GS517", title: "Transportín Plegable con Correa al Hombro, hasta 13 kg", note: "Entrada de gama, bolsa blanda plegable con cojín lavable incluido.", img: "https://m.media-amazon.com/images/I/813Vk9ya4OL._AC_UL320_.jpg", price: "21", rating: "4,5★" },
      { asin: "B0DWXF3BFD", title: "Bolsa de Transporte Plegable para Gatos y Perros Pequeños", note: "Formato compacto y ligero para mascotas de hasta 5 kg.", img: "https://m.media-amazon.com/images/I/71ccpr9uE9L._AC_UL320_.jpg", price: "28", rating: "4,5★" },
      { asin: "B0F43DWK72", title: "Zavothy Transportín Plegable con Correa Ajustable", note: "Fácil de plegar para guardar, buena opción para trayectos cortos en coche o transporte público.", img: "https://m.media-amazon.com/images/I/81i78yCxNsL._AC_UL320_.jpg", price: "26", rating: "4,2★" },
      { asin: "B07MGH27ZS", title: "morpilot Transportín Transpirable con Colchón y Tazón", note: "Incluye colchón y cuenco plegable, pensado para trayectos algo más largos.", img: "https://m.media-amazon.com/images/I/81-gGkHnEML._AC_UL320_.jpg", price: "35", rating: "4,6★" },
      { asin: "B09MVVSPDS", title: "Lekesky Mochila Transportín Expandible", note: "Formato mochila para llevar a la espalda, panel expandible para más espacio interior.", img: "https://m.media-amazon.com/images/I/71uHk8M0WxL._AC_UL320_.jpg", price: "36", rating: "4,6★" },
      { asin: "B096KTYMTN", title: "Pecute Mochila con Ventana de Malla, Tela Oxford Impermeable", note: "Buena ventilación con ventanas de malla en varios lados y base impermeable.", img: "https://m.media-amazon.com/images/I/91XoZ32zkcL._AC_UL320_.jpg", price: "37", rating: "4,6★" },
      { asin: "B096FFCY3P", title: "FUKUMARU Transportín Aprobado por Aerolínea, hasta 22 kg", note: "Homologado para cabina en varias aerolíneas, la mejor valoración del grupo.", img: "https://m.media-amazon.com/images/I/81Q3-em6jDL._AC_UL320_.jpg", price: "37", rating: "4,7★" },
      { asin: "B0G66T3F62", title: "Larkson Transportín Rígido para Avión, hasta 12 kg", note: "Gama alta: estructura más rígida pensada para cumplir con estándares de aerolíneas.", img: "https://m.media-amazon.com/images/I/71-rFkIKpuL._AC_UL320_.jpg", price: "80", rating: "4,4★" },
    ],
  },
  {
    slug: "areneros-autolimpiables-para-gatos",
    title: "Areneros autolimpiables para gatos: guía de compra",
    dek: "Capacidad, sistema de limpieza y control de olores: si un arenero automático compensa el gasto en tu caso.",
    updated: "2026-09-10",
    intro: [
      "Un arenero autolimpiable es una de las inversiones más caras dentro de los accesorios para gatos, así que antes de comprar merece la pena entender bien qué resuelve realmente (menos tareas diarias, mejor control de olores) y qué no resuelve (no sustituye la limpieza a fondo periódica).",
    ],
    sections: [
      {
        heading: "Cómo funciona la autolimpieza: rastrillo, rotación o tamiz",
        body: [
          "El sistema de rastrillo o peine detecta cuándo el gato ha usado la caja y, tras unos minutos, pasa un rastrillo que separa los grumos de arena limpia hacia un compartimento sellado. El sistema de rotación (tipo tambor) gira la caja completa para tamizar la arena, un mecanismo distinto pero con el mismo objetivo. Ambos reducen mucho la tarea diaria, pero ninguno elimina la necesidad de vaciar el depósito de residuos y reponer arena cada cierto tiempo.",
        ],
      },
      {
        heading: "Capacidad de la caja según el tamaño y el número de gatos",
        body: [
          "Una caja demasiado pequeña para el tamaño del gato reduce la eficacia del sistema de detección y puede hacer que el gato prefiera no usarla. En hogares con dos o más gatos, conviene un depósito de residuos de gran capacidad (60-90 litros) para no tener que vaciarlo cada uno o dos días.",
        ],
      },
      {
        heading: "Sensores de seguridad y compatibilidad con arena",
        body: [
          "Los sensores de peso o de movimiento son importantes para evitar que el mecanismo se active mientras el gato sigue dentro: un buen arenero automático detiene el ciclo de limpieza de inmediato si nota presencia. No todos los areneros son compatibles con cualquier tipo de arena (aglomerante, de sílice, natural); comprobar la compatibilidad evita que el sistema de tamizado no funcione bien o se atasque.",
        ],
      },
      {
        heading: "Control por app y eliminación de olores",
        body: [
          "El control por aplicación móvil permite programar ciclos de limpieza, recibir avisos cuando el depósito está lleno y, en algunos modelos, llevar un registro de las visitas del gato (útil para detectar cambios de hábito relevantes para la salud). Los filtros de carbón activo o los compartimentos sellados reducen el olor, aunque ningún sistema sustituye por completo una limpieza manual periódica de la caja.",
        ],
      },
    ],
    checklist: [
      "Caja lo bastante grande para el tamaño de tu gato, no solo lo que ocupa en la caja actual",
      "Depósito de residuos de gran capacidad si hay varios gatos en casa",
      "Sensores de seguridad que detengan el ciclo si el gato está dentro",
      "Comprobar compatibilidad con el tipo de arena que usas",
      "Control por app si quieres avisos de llenado y registro de uso",
    ],
    faq: [
      {
        q: "¿Un arenero autolimpiable elimina el olor por completo?",
        a: "Lo reduce de forma notable frente a una caja manual sin vaciar a diario, pero no lo elimina del todo: sigue haciendo falta reponer arena, vaciar el depósito sellado de residuos y limpiar la caja a fondo cada cierto tiempo. El filtro de carbón activo ayuda, pero es un complemento, no un sustituto de ese mantenimiento.",
      },
      {
        q: "¿Es seguro para el gato el mecanismo automático?",
        a: "Los modelos con sensores de peso o movimiento de calidad detienen el ciclo de limpieza en cuanto detectan al gato dentro o cerca, lo que hace el riesgo muy bajo. Aun así, conviene revisar las opiniones de compradores sobre la sensibilidad real del sensor de un modelo concreto antes de comprar, porque no todos los sistemas económicos son igual de fiables en ese punto.",
      },
    ],
    products: [
      { asin: "B0D9PRLPQV", title: "Arenero Inteligente 74L con Control de App", note: "Entrada de gama dentro de los automáticos, con eliminación de olores y bolsas incluidas.", img: "https://m.media-amazon.com/images/I/71RDm9z0WuL._AC_UL320_.jpg", price: "183", rating: "4,0★" },
      { asin: "B0H6LGL3T9", title: "Redkey X1 Arenero Eléctrico 95L, Control App", note: "Gran capacidad de depósito, compatible con todo tipo de arena.", img: "https://m.media-amazon.com/images/I/61XXcaJ2TtL._AC_UL320_.jpg", price: "235", rating: "4,0★" },
      { asin: "B0G3XV7ZKY", title: "Ellenpent Arenero Autolimpiable Abierto", note: "Diseño abierto, más económico dentro de los automáticos, fácil de supervisar por el gato.", img: "https://m.media-amazon.com/images/I/71WlNgp6pML._AC_UL320_.jpg", price: "198", rating: "4,2★" },
      { asin: "B0HDP9NRV2", title: "Arenero Autolimpiable 65L, Sin Olor", note: "Buen equilibrio precio-capacidad, incluye bolsa de basura para el depósito.", img: "https://m.media-amazon.com/images/I/715nOZbq21L._AC_UL320_.jpg", price: "195", rating: "4,4★" },
      { asin: "B0FLPKZ4RS", title: "Devoko Arenero Automático 90L, Sistema de 6 Seguridades", note: "Gran capacidad y varios sensores de seguridad, compatible con control por app.", img: "https://m.media-amazon.com/images/I/71uYgOSxg5L._AC_UL320_.jpg", price: "300", rating: "4,3★" },
      { asin: "B0D9QGW2M6", title: "PETKIT Pura MAX 2 Arenero Autolimpiable 76L", note: "Marca especializada en accesorios conectados, con eliminación de olores y app dedicada.", img: "https://m.media-amazon.com/images/I/61LSN9Hwj4L._AC_UL320_.jpg", price: "410", rating: "4,4★" },
      { asin: "B0FJFB6YXB", title: "PETKIT PUROBOT MAX Pro 2, Cámara con IA", note: "Gama alta: entrada más amplia, cámara con IA y seguimiento sanitario del gato.", img: "https://m.media-amazon.com/images/I/61yeCBDa2mL._AC_UL320_.jpg", price: "590", rating: "4,2★" },
    ],
  },
  {
    slug: "rascadores-para-gatos",
    title: "Rascadores y árboles para gatos: cómo elegir el adecuado",
    dek: "Altura, material y estabilidad: los criterios para que tu gato use el rascador y no el sofá.",
    updated: "2026-09-09",
    intro: [
      "Rascar es una necesidad física del gato (mantenimiento de uñas y marcaje territorial), no un capricho: si el rascador no cumple ciertos criterios básicos, el gato sigue buscando otra superficie, normalmente el sofá o una esquina de pared.",
    ],
    sections: [
      {
        heading: "Altura y estabilidad, lo primero que falla",
        body: [
          "Un rascador vertical debe permitir al gato estirarse por completo hacia arriba, lo que en la mayoría de gatos adultos significa al menos 70-90 cm de altura útil de rascado. Si la base no es ancha y pesada en proporción a la altura, el rascador se tambalea o incluso se cae con el primer uso enérgico, y un gato que lo asocia con inestabilidad deja de usarlo.",
        ],
      },
      {
        heading: "Material: sisal, cartón o alfombra",
        body: [
          "El sisal (cuerda trenzada) es el material que más gatos prefieren porque ofrece resistencia real al arañazo y dura más que otras superficies con el uso intensivo. El cartón corrugado es más barato y también gusta a muchos gatos, pero se desgasta y hay que sustituirlo o darle la vuelta con más frecuencia. La alfombra o moqueta es la opción menos recomendable: el gato puede terminar asociando esa textura con superficies donde sí puede rascar, incluida la moqueta de la propia casa.",
        ],
      },
      {
        heading: "Rascador horizontal, vertical o árbol multinivel",
        body: [
          "Los rascadores horizontales (de cartón, tipo tabla) son más baratos y ocupan poco, buena opción como complemento o en pisos pequeños. Los verticales permiten el estiramiento completo del cuerpo, el gesto natural del gato al rascar. Los árboles multinivel combinan rascado con zonas elevadas de descanso y observación, algo que en gatos que viven solo en interior aporta enriquecimiento ambiental además de la función de rascado.",
        ],
      },
      {
        heading: "Ubicación: por qué importa tanto como el propio mueble",
        body: [
          "Colocar el rascador cerca de donde el gato ya rasca de forma espontánea (junto al sofá, cerca de la entrada) acelera mucho que lo adopte, frente a esconderlo en una esquina poco frecuentada. Si hay varios gatos en casa, tener más de un rascador en puntos distintos reduce conflictos de territorio entre ellos.",
        ],
      },
    ],
    checklist: [
      "Altura suficiente para el estiramiento completo del gato adulto",
      "Base ancha y con peso proporcional a la altura, para que no se tambalee",
      "Sisal como material preferente frente a alfombra o moqueta",
      "Vertical o multinivel si el gato necesita estirarse por completo",
      "Ubicado donde el gato ya tiende a rascar, no escondido",
    ],
    faq: [
      {
        q: "¿Por qué mi gato rasca el sofá en vez del rascador?",
        a: "Casi siempre es un problema de ubicación, altura o material, no de \"mala educación\" del gato: si el rascador está escondido, es demasiado bajo para estirarse del todo o el material no le resulta atractivo, el gato sigue buscando la superficie que sí le sirve. Cambiarlo de sitio (cerca del mueble que araña) y probar con sisal suele resolver buena parte de los casos.",
      },
      {
        q: "¿Cuántos rascadores necesito si tengo más de un gato?",
        a: "Una referencia habitual es un rascador por gato más uno adicional, repartidos en puntos distintos de la casa, igual que se recomienda con los areneros. Esto reduce la competencia por el recurso y ayuda a que cada gato tenga su propia zona de marcaje sin fricciones con los demás.",
      },
    ],
    products: [
      { asin: "B0DFXYPCJY", title: "Conlun Rascador Cama 2 en 1, Cartón Ecológico", note: "Entrada de gama horizontal, combina rascador y cama sin montaje.", img: "https://m.media-amazon.com/images/I/81LDRaB-4XL._AC_UL320_.jpg", price: "23", rating: "4,8★" },
      { asin: "B0FBG7L222", title: "Rascador de Cartón Reforzado con Madera, Vertical", note: "Poste vertical con base antideslizante y bola de juguete incluida.", img: "https://m.media-amazon.com/images/I/81KTv2-syrL._AC_UL320_.jpg", price: "16", rating: "4,3★" },
      { asin: "B0BSFFPZBK", title: "Feandrea Árbol para Gatos Multinivel, 112 cm", note: "Tamaño compacto multinivel, buena opción para pisos con espacio limitado.", img: "https://m.media-amazon.com/images/I/714G93TgsLL._AC_UL320_.jpg", price: "34", rating: "4,6★" },
      { asin: "B08XTMNMMZ", title: "Feandrea Árbol para Gatos Multinivel, 137,7 cm", note: "Altura media-alta con varias plataformas y poste de sisal.", img: "https://m.media-amazon.com/images/I/71OxqahqESL._AC_UL320_.jpg", price: "39", rating: "4,6★" },
      { asin: "B0BN9YL1KH", title: "HOMIDEC Árbol Rascador, Torre de Escalada 145 cm", note: "Base ancha estable con varios niveles de descanso.", img: "https://m.media-amazon.com/images/I/71AvbGKoyoL._AC_UL320_.jpg", price: "43", rating: "4,6★" },
      { asin: "B08MPV5Y7G", title: "Feandrea Rascador para Gatos Grandes, 203,5 cm", note: "Altura elevada multinivel, la mejor valoración del grupo.", img: "https://m.media-amazon.com/images/I/811x6T68HCL._AC_UL320_.jpg", price: "72", rating: "4,8★" },
      { asin: "B0FVF3X7YD", title: "Heybly Torre Rascador para Gatos Grandes, 193 cm", note: "Estructura alta y robusta pensada para gatos grandes o varios gatos.", img: "https://m.media-amazon.com/images/I/81H3PpEgEHL._AC_UL320_.jpg", price: "100", rating: "4,6★" },
      { asin: "B0H265NB6W", title: "Gitelsnour Árbol para Gatos XXL, 225 cm", note: "Gama alta: máxima altura del grupo, con nidos, hamaca y varias plataformas.", img: "https://m.media-amazon.com/images/I/811EnEqFHmL._AC_UL320_.jpg", price: "97", rating: "4,6★" },
    ],
  },
  {
    slug: "juguetes-interactivos-para-perros",
    title: "Juguetes interactivos para perros: guía para elegir bien",
    dek: "Dispensadores, mantas olfativas y rellenables: qué tipo de juguete encaja con la energía de tu perro.",
    updated: "2026-09-08",
    intro: [
      "Un perro aburrido en casa es, la mayoría de las veces, un perro con poco estímulo mental, no solo con poco ejercicio físico. Los juguetes interactivos cubren esa parte del enriquecimiento ambiental, pero no todos los tipos sirven para el mismo objetivo ni para el mismo perro.",
    ],
    sections: [
      {
        heading: "Rellenables, dispensadores y mantas olfativas",
        body: [
          "Los juguetes rellenables (tipo kong) se llenan con pienso, pasta o premios y obligan al perro a trabajar con la lengua y la mandíbula para vaciarlos, ideales para dejarlos solos un rato o calmar ansiedad por separación. Los dispensadores de premios con mecanismo (ruedas, cajones, puertas que hay que mover) trabajan más la parte cognitiva: el perro tiene que entender la secuencia de acciones para conseguir la recompensa.",
          "Las mantas o alfombras olfativas usan el olfato, el sentido más desarrollado del perro, escondiendo premios entre tiras de tela: son especialmente útiles para perros ansiosos o que comen muy rápido, porque ralentizan la ingesta de forma natural.",
        ],
      },
      {
        heading: "Nivel de dificultad y progresión",
        body: [
          "Empezar con un nivel de dificultad demasiado alto frustra al perro y puede hacer que abandone el juguete sin haber aprendido a usarlo; lo contrario, un juguete demasiado fácil, deja de suponer estímulo en pocos días. Muchos fabricantes indican un nivel de dificultad orientativo; conviene empezar por el más bajo si es la primera vez que el perro usa este tipo de juguete.",
        ],
      },
      {
        heading: "Resistencia según el estilo de mordida del perro",
        body: [
          "Perros con mordida fuerte (razas grandes, mordedores compulsivos) necesitan materiales de goma densa o nailon reforzado; un juguete pensado para perros pequeños se destruye en minutos con ese perfil de perro, con el riesgo añadido de que trague fragmentos. Revisar las opiniones de compradores sobre durabilidad con el tamaño de perro real suele ser más fiable que fiarse solo de la descripción del fabricante.",
        ],
      },
      {
        heading: "Supervisión y limpieza",
        body: [
          "Los juguetes interactivos con piezas pequeñas o desmontables deben usarse con supervisión, sobre todo al principio, hasta comprobar que el perro no intenta morder o tragar piezas sueltas. Los materiales lavables (goma maciza, tela extraíble) son más prácticos a largo plazo que los que absorben olor y no se pueden limpiar bien.",
        ],
      },
    ],
    checklist: [
      "Tipo de juguete según el objetivo: rellenable para calma, dispensador para estímulo mental",
      "Nivel de dificultad progresivo, empezando por el más bajo si es la primera vez",
      "Resistencia acorde al tamaño y estilo de mordida real del perro",
      "Supervisión en los primeros usos, sobre todo con piezas pequeñas",
      "Material lavable o fácil de limpiar",
    ],
    faq: [
      {
        q: "¿Los juguetes interactivos sirven para la ansiedad por separación?",
        a: "Ayudan como parte de un abordaje más amplio: un juguete rellenado con algo apetecible puede asociar el momento de quedarse solo con algo positivo y mantener al perro ocupado los primeros minutos, que suelen ser los más críticos. No sustituyen un trabajo de habituación a la soledad si la ansiedad es intensa; en esos casos conviene apoyo profesional además del juguete.",
      },
      {
        q: "¿Qué juguete elijo si mi perro come muy rápido?",
        a: "Las mantas olfativas o los dispensadores de comida lenta son la opción más directa: obligan al perro a trabajar para conseguir cada bocado, lo que ralentiza la ingesta de forma natural y reduce el riesgo de atragantamiento o de dilatación gástrica asociada a comer demasiado deprisa.",
      },
    ],
    products: [
      { asin: "B0002AR15U", title: "KONG Classic Juguete Rellenable, Talla Pequeña", note: "El rellenable de referencia: goma resistente y fácil de limpiar, varias tallas disponibles.", img: "https://m.media-amazon.com/images/I/61CT7VZTqQL._AC_UL320_.jpg", price: "9", rating: "4,5★" },
      { asin: "B0GF8FC1YB", title: "Juguete Interactivo con Dispensador de Premios", note: "Mecanismo sencillo para introducir a perros que nunca han usado dispensadores.", img: "https://m.media-amazon.com/images/I/71oPZGOtPEL._AC_UL320_.jpg", price: "11", rating: "4,3★" },
      { asin: "B0F32JYZ9G", title: "Juguetes Interactivos para Entrenamiento IQ", note: "Pensado para trabajar la parte cognitiva y aliviar ansiedad con estímulo mental.", img: "https://m.media-amazon.com/images/I/71HdtzuyYAL._AC_UL320_.jpg", price: "12", rating: "4,5★" },
      { asin: "B0GF8NQ3JV", title: "Juguete Interactivo para Perros Aburridos", note: "Alternativa de dispensador con nivel de dificultad medio.", img: "https://m.media-amazon.com/images/I/71j0sTRLEyL._AC_UL320_.jpg", price: "13", rating: "4,3★" },
      { asin: "B0B6N5L1P9", title: "Nobleza Alfombra Olfativa Snuffle Mat, 70x70cm", note: "Manta olfativa grande, ideal para perros que comen muy rápido o necesitan calma.", img: "https://m.media-amazon.com/images/I/61zgOfqMRUL._AC_UL320_.jpg", price: "17", rating: "4,4★" },
      { asin: "B0CJ2BL4QG", title: "Juguete Interactivo para Perros Medianos y Grandes", note: "Formato más resistente, pensado para perros con mordida más fuerte.", img: "https://m.media-amazon.com/images/I/61nNe4h8R-L._AC_UL320_.jpg", price: "17", rating: "4,1★" },
      { asin: "B0CXX6PZSL", title: "Alimentador Rompecabezas Indestructible para Cachorros", note: "Dispensador de golosinas para alimentación lenta, resistente a masticadores.", img: "https://m.media-amazon.com/images/I/71-EQwqEy7L._AC_UL320_.jpg", price: "17", rating: "4,0★" },
      { asin: "B0H45DDP1W", title: "Ycozy Palo Interactivo con 4 Juguetes de Cuerda", note: "Gama alta: pack completo con varios juguetes intercambiables y peluche sonoro.", img: "https://m.media-amazon.com/images/I/71EdisDWXbL._AC_UL320_.jpg", price: "40", rating: "4,4★" },
    ],
  },
  {
    slug: "collares-gps-para-mascotas",
    title: "Collares GPS para perros y gatos: qué mirar antes de comprar",
    dek: "Autonomía real, cobertura y si necesita suscripción: los criterios para no llevarte una sorpresa después de comprar.",
    updated: "2026-09-07",
    intro: [
      "El mercado de localizadores para mascotas mezcla dos tecnologías muy distintas bajo el mismo nombre: dispositivos con GPS y datos móviles reales (con cobertura prácticamente ilimitada, pero casi siempre con suscripción mensual) y dispositivos Bluetooth de corto alcance que se anuncian como \"sin suscripción\" pero solo funcionan bien a pocos metros de tu móvil.",
    ],
    sections: [
      {
        heading: "GPS con datos móviles frente a Bluetooth de corto alcance",
        body: [
          "Un localizador con GPS y tarjeta SIM integrada (datos móviles) permite ver la ubicación en tiempo real estés donde estés, siempre que haya cobertura, pero casi todos los fabricantes serios cobran una suscripción mensual o anual para mantener esa conexión de datos activa. Los dispositivos Bluetooth (a menudo anunciados como \"GPS sin suscripción\") solo transmiten la posición cuando están dentro del alcance del Bluetooth de tu móvil, normalmente unos 10-100 metros según el modelo: útiles para encontrar a la mascota en el jardín o el parque, no para una fuga real a varios kilómetros.",
        ],
      },
      {
        heading: "Autonomía de batería real, no la de la ficha técnica",
        body: [
          "La autonomía anunciada por el fabricante suele calcularse en condiciones ideales (pocas actualizaciones de posición, buena cobertura); el uso real con actualizaciones frecuentes y mala cobertura reduce bastante esa cifra. Si la mascota pasa mucho tiempo fuera de casa, prioriza modelos con autonomía de varios días y carga rápida frente a los que prometen semanas de batería con actualizaciones poco frecuentes.",
        ],
      },
      {
        heading: "Peso, tamaño y resistencia al agua",
        body: [
          "El dispositivo debe pesar poco en relación al tamaño de la mascota: un localizador demasiado pesado para un gato o un perro pequeño resulta incómodo y puede desanimar a que lleve el collar puesto. La resistencia al agua (idealmente con certificación IPX6 o IP67) es importante porque las mascotas se mojan con lluvia, charcos o al bañarse, y un dispositivo no resistente puede dañarse con facilidad.",
        ],
      },
      {
        heading: "Alertas de zona segura y funciones de salud",
        body: [
          "Las alertas de \"zona segura\" (geofencing) avisan al móvil en cuanto la mascota sale de un área definida como el jardín o el barrio, lo que permite reaccionar mucho antes que darse cuenta de la fuga por casualidad. Algunos modelos de gama alta añaden seguimiento de actividad o de constantes vitales, una función interesante pero secundaria frente a la localización en sí, que es la razón principal de compra.",
        ],
      },
    ],
    checklist: [
      "Diferenciar GPS con datos móviles (con suscripción) de Bluetooth de corto alcance",
      "Autonomía real esperada con uso frecuente, no solo la cifra de la ficha técnica",
      "Peso adecuado al tamaño de la mascota",
      "Resistencia al agua con certificación IPX6 o IP67",
      "Alertas de zona segura si el objetivo principal es prevenir fugas",
    ],
    faq: [
      {
        q: "¿Los collares GPS \"sin suscripción\" funcionan de verdad?",
        a: "Funcionan, pero con una limitación importante que no siempre se explica con claridad: la mayoría son dispositivos Bluetooth de corto alcance, no GPS con datos móviles. Sirven bien para encontrar a la mascota cerca de casa o en un parque, pero no para localizarla si se pierde a varios kilómetros, que es el caso donde más se necesita un localizador.",
      },
      {
        q: "¿Merece la pena pagar una suscripción mensual por el GPS?",
        a: "Si el riesgo real de fuga es alto (perro que se escapa con frecuencia, vive cerca de zonas con tráfico, viaja mucho) la cobertura de datos móviles y la localización en tiempo real de un GPS con suscripción suelen justificar el coste mensual. Si el objetivo es más bien tranquilidad dentro de casa o el jardín, un dispositivo Bluetooth sin cuota puede ser suficiente y más barato a largo plazo.",
      },
    ],
    products: [
      { asin: "B0HGQJB11X", title: "Localizador Bluetooth para Perros y Gatos, IP67", note: "Entrada de gama sin suscripción, collar ajustable resistente al agua.", img: "https://m.media-amazon.com/images/I/71V0UDclaeL._AC_UL320_.jpg", price: "22", rating: "4,8★" },
      { asin: "B0HF75VNHN", title: "Localizador Bluetooth, Resistente al Agua IPX6", note: "Posicionamiento en tiempo real dentro de corto alcance, collar ajustable.", img: "https://m.media-amazon.com/images/I/71VPig9bwnL._AC_UL320_.jpg", price: "28", rating: "4,5★" },
      { asin: "B0H7R7K8LH", title: "Collar Localizador Flexible e Impermeable", note: "Compatible con iOS y Android, buena valoración en facilidad de configuración.", img: "https://m.media-amazon.com/images/I/71zpa7TvLyL._AC_UL320_.jpg", price: "29", rating: "4,8★" },
      { asin: "B0HCZD8VSX", title: "Collar Localizador 2 en 1 para Perros Pequeños y Gatos", note: "Diseño ajustable con cascabel, pensado para mascotas pequeñas.", img: "https://m.media-amazon.com/images/I/81vYd6WcyDL._AC_UL320_.jpg", price: "30", rating: "4,7★" },
      { asin: "B0HBPDW1FK", title: "Localizador con Reproducción de Ruta de 7 Días", note: "Guarda el historial de recorridos de la última semana, resistente al agua IP67.", img: "https://m.media-amazon.com/images/I/71UO27i+u-L._AC_UL320_.jpg", price: "30", rating: "4,5★" },
      { asin: "B0HD67TG23", title: "Collar Localizador con Batería Reemplazable", note: "Batería que se puede sustituir en lugar de recargar, resistente al agua IP67.", img: "https://m.media-amazon.com/images/I/71P7q9dFjSL._AC_UL320_.jpg", price: "30", rating: "5,0★" },
      { asin: "B0HDHDS35P", title: "Localizador GPS para Gatos y Perros, Compatible App", note: "Configuración simple vía app, collar ajustable universal.", img: "https://m.media-amazon.com/images/I/71pq2GYV5nL._AC_UL320_.jpg", price: "26", rating: "5,0★" },
      { asin: "B0G52NY6HZ", title: "Tractive GPS para Perros, Localización en Tiempo Real", note: "Gama alta: GPS real con datos móviles y suscripción, cobertura sin límite de distancia, alertas de fuga y monitor de salud.", img: "https://m.media-amazon.com/images/I/71vLUp48zHL._AC_UL320_.jpg", price: "79", rating: "4,1★" },
    ],
  },
];

const ARTICLES = [
  {
    slug: "montar-el-rincon-perfecto-para-tu-mascota-en-casa",
    title: "Cómo montar el rincón perfecto para tu mascota en casa",
    dek: "Los elementos básicos y el orden en el que conviene incorporarlos, sin llenar la casa de accesorios innecesarios.",
    updated: "2026-09-17",
    body: [
      "Montar un rincón propio para el perro o el gato no requiere una habitación entera: con un par de metros cuadrados bien elegidos es suficiente para cubrir sus necesidades básicas de descanso, comida y, en el caso de los gatos, rascado.",
      "El orden que mejor funciona para la mayoría es empezar por lo que se usa a diario sin excepción: una cama de talla adecuada y, si es un gato, una fuente de agua y un rascador cerca de esa zona. Después llega el comedero (automático o no) y, si el espacio y el presupuesto lo permiten, elementos de enriquecimiento como un árbol para gatos o una manta olfativa para perros.",
      "Un error habitual es colocar el rincón en una zona de paso muy transitada: tanto perros como gatos descansan mejor en un sitio tranquilo, ni completamente aislado (para no generar ansiedad por separación) ni en medio del pasillo principal de la casa.",
      "Para gatos, la altura importa tanto como la superficie: un árbol o una balda elevada cerca de una ventana aprovecha el instinto de observar desde arriba, algo que un rincón solo a ras de suelo no cubre igual de bien.",
      "En las guías de este sitio (camas, comederos, fuentes de agua, rascadores y transportines) desarrollamos cada pieza por separado con más detalle sobre qué mirar antes de comprar.",
    ],
  },
  {
    slug: "errores-comunes-elegir-arnes-o-correa",
    title: "5 errores comunes al elegir arnés o correa",
    dek: "Fallos fáciles de evitar que no cuestan dinero extra, solo un poco más de atención antes de comprar.",
    updated: "2026-09-06",
    body: [
      "Antes de gastar en un arnés o correa nuevos, merece la pena revisar si el problema real está en la talla o el tipo elegido, no en la calidad del producto: varios de los errores más comunes se solucionan sin gastar más.",
      "1. Elegir la talla solo por el peso del perro. El contorno de pecho y cuello varía mucho entre perros del mismo peso según la raza y la complexión; medir con una cinta métrica es mucho más fiable que guiarse por una tabla genérica de peso.",
      "2. Usar solo el enganche de espalda en un perro que tira mucho. Ese punto de enganche apenas ayuda a corregir el tirón porque la fuerza va hacia delante sin control; un enganche frontal o un arnés de doble punto facilita mucho el trabajo de educación.",
      "3. Comprar una correa extensible para pasear por la ciudad. El mayor tiempo de reacción del freno y la menor sujeción directa la hacen poco recomendable cerca de tráfico o de otros perros; una correa fija corta da más control real en ese contexto.",
      "4. No comprobar la holgura del arnés hasta que el perro se escapa una vez. La prueba de los dos dedos (poder pasarlos entre la tira y el cuerpo, sin que sobre holgura) debería hacerse cada vez que cambia el pelaje estacional del perro, no solo al comprarlo.",
      "5. Ignorar el material de las hebillas en perros grandes o muy activos. Es el punto que más falla bajo tirones fuertes y repetidos; revisar las opiniones de compradores sobre durabilidad con perros de tamaño similar ayuda a anticipar este problema.",
    ],
  },
  {
    slug: "cuanto-gastar-en-accesorios-para-tu-mascota",
    title: "¿Cuánto merece la pena gastar en accesorios para tu mascota?",
    dek: "Dónde está el salto de calidad real y dónde el precio ya no compra nada adicional.",
    updated: "2026-09-05",
    body: [
      "No existe una cifra única válida para todo el mundo, pero sí hay tramos de precio donde el salto de calidad es real y tramos donde el precio adicional ya no se traduce en un beneficio claro para la mascota.",
      "El primer salto importante está entre no tener lo básico bien elegido y tenerlo: un arnés de la talla correcta, una cama del tamaño adecuado y, si es gato, un rascador y una fuente de agua. Ese salto es el que más impacto tiene en el bienestar diario del animal, con independencia de la marca concreta elegida.",
      "El segundo salto, más caro, está en la automatización y la conectividad: comederos con control por app, areneros autolimpiables, collares GPS con datos móviles. Compensan sobre todo si el estilo de vida del propietario lo justifica (viajes frecuentes, jornadas largas fuera de casa, varias mascotas en el hogar), no como mejora automática del bienestar del animal por sí sola.",
      "A partir de cierto precio dentro de una misma categoría, lo que se paga de más suele ser diseño, marca o funciones secundarias, no una mejora sustancial en los criterios que de verdad importan (talla correcta, materiales seguros, facilidad de limpieza), que ya estaban cubiertos en el tramo anterior.",
      "La pregunta que más ayuda a decidir no es \"¿cuánto cuesta?\" sino \"¿este accesorio concreto resuelve un problema real que tengo hoy con mi mascota?\". Si la respuesta es sí, el tramo de mayor automatización se amortiza rápido en tiempo y tranquilidad; si no, lo básico bien elegido cubre la necesidad sin gasto adicional.",
    ],
  },
  {
    slug: "preparar-a-tu-mascota-para-viajar-en-coche-o-avion",
    title: "Cómo preparar a tu mascota para viajar en coche o avión",
    dek: "Lo que conviene revisar antes del viaje, más allá de comprar el transportín adecuado.",
    updated: "2026-09-04",
    body: [
      "Elegir el transportín correcto es solo una parte de preparar un viaje con la mascota: la habituación previa y la documentación necesaria influyen tanto como el propio accesorio en que el trayecto salga bien.",
      "Para trayectos en coche, acostumbrar a la mascota al transportín en casa, con la puerta abierta y premios dentro, reduce mucho el estrés del primer viaje real. Empezar con trayectos cortos (una vuelta a la manzana) antes del viaje largo permite detectar si hay mareo o ansiedad y actuar con tiempo, en lugar de descubrirlo a mitad de un trayecto de varias horas.",
      "Para viajar en avión, además de comprobar la política concreta de la aerolínea sobre medidas y tipo de transportín, conviene verificar con antelación la documentación exigida por el país de destino: pasaporte de mascota, vacunación antirrábica al día y, en algunos casos, tratamiento antiparasitario reciente. Estos trámites suelen tener plazos mínimos antes del viaje, así que dejarlo para el último momento puede impedir viajar en la fecha prevista.",
      "El día del viaje, evitar una comida copiosa justo antes del trayecto reduce el riesgo de mareo, sobre todo en perros y gatos poco habituados a viajar. Llevar agua y, si el viaje es largo, la posibilidad de ofrecerla en las paradas es más importante que la comida durante el propio trayecto.",
      "Un collar GPS o un localizador puesto durante el viaje es una precaución razonable en trayectos con trasbordos o aeropuertos, donde el riesgo de una fuga puntual, aunque bajo, tiene consecuencias más graves que en un entorno conocido como el barrio de casa.",
    ],
  },
  {
    slug: "que-necesita-un-cachorro-o-gatito-el-primer-mes",
    title: "Qué necesita realmente un cachorro o gatito el primer mes",
    dek: "La lista corta de accesorios imprescindibles antes de plantearse el resto del equipamiento.",
    updated: "2026-09-03",
    body: [
      "La primera semana con un cachorro o un gatito nuevo en casa genera la tentación de comprar todo el catálogo de accesorios para mascotas de golpe, pero la lista de lo realmente imprescindible el primer mes es bastante más corta.",
      "Para un cachorro: un arnés ajustable (los cachorros crecen rápido, así que uno con varios puntos de ajuste dura más antes de quedarse pequeño), una correa fija corta para las primeras salidas controladas, y una cama de tamaño adecuado a la raza adulta esperada, no solo al tamaño actual del cachorro.",
      "Para un gatito: un arenero de bordes bajos (los areneros altos o automáticos no son adecuados hasta que el gatito es algo más mayor), un rascador de tamaño pequeño-mediano cerca de su zona de descanso, y un comedero y bebedero bajos, fáciles de alcanzar mientras todavía es pequeño.",
      "En ambos casos, resistir la compra de accesorios de gama alta o muy especializados (comederos automáticos, collares GPS, transportines premium) hasta pasado el primer mes suele ser buena idea: en esa etapa inicial es más importante observar los hábitos reales del animal (cuánto come, cómo duerme, si tiene alguna sensibilidad concreta) que anticipar equipamiento que todavía no se sabe si hace falta.",
      "Una revisión veterinaria en las primeras semanas también debería preceder a decisiones de equipamiento relacionadas con la salud (tipo de pienso, necesidad de una cama ortopédica, etc.), porque el veterinario puede detectar necesidades específicas que ninguna guía genérica puede anticipar.",
    ],
  },
];

// Un producto destacado por categoría, para el bloque "Lo más recomendado"
// que aparece en todas las páginas (ver featuredProductsSection en lib.js).
// Se reutilizan los datos ya cargados en GUIDES para no duplicar imagen/precio.
function pickFeatured(guideSlug, asin) {
  const g = GUIDES.find((x) => x.slug === guideSlug);
  const p = g.products.find((x) => x.asin === asin);
  return { ...p, category: g.slug, categoryTitle: g.title };
}

const FEATURED = [
  pickFeatured("arneses-para-perros", "B0CQX4HFL8"),
  pickFeatured("correas-para-perros", "B0G69YX5S1"),
  pickFeatured("comederos-automaticos-para-mascotas", "B0CD7NRW37"),
  pickFeatured("fuentes-de-agua-para-mascotas", "B0FN3K2DTK"),
  pickFeatured("camas-para-perros", "B0F23W976Y"),
  pickFeatured("transportines-para-mascotas", "B096FFCY3P"),
  pickFeatured("areneros-autolimpiables-para-gatos", "B0HDP9NRV2"),
  pickFeatured("rascadores-para-gatos", "B08MPV5Y7G"),
  pickFeatured("juguetes-interactivos-para-perros", "B0002AR15U"),
  pickFeatured("collares-gps-para-mascotas", "B0H7R7K8LH"),
];

module.exports = { GUIDES, ARTICLES, FEATURED };
