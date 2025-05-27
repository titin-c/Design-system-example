// src/vars/inputData.js

export const inputData = {
    title: "Inputs",
    description:
        "Los inputs permiten a los usuarios ingresar datos de manera estructurada. Se han diseñado para ser consistentes, accesibles y fáciles de usar, adaptándose a múltiples contextos (formularios, búsquedas, entradas numéricas, etc.).",
    sections: [
        {
            id: "tipos",
            title: "Tipos de Inputs",
            description:
                "Existen varios tipos de inputs, cada uno optimizado para diferentes tipos de datos y contextos de uso.",
            inputs: [
                
                {
                    name: "Input de Texto",
                    description: "El input de texto es el tipo más común, usado para ingresar información alfanumérica.",
                    image: "/images/inputs/input-text-default.svg"
                  },
                {
                    name: "Input Numérico",
                    description:
                        "Diseñado para ingresar números, puede incluir controles para aumentar o disminuir el valor.",

                    image: "/images/inputs/input-number-default.svg"
                },
                {
                    name: "Input de Correo Electrónico",
                    description:
                        "Valida la entrada para asegurar que el formato corresponde a un email. Se usa en formularios de registro o contacto.",
                    
                    image: "/images/inputs/input-email-default.svg"
                },
                {
                    name: "Input de Búsqueda",
                    description: "Incluye un ícono (e.g., 'search') para reforzar su función, facilitando al usuario realizar búsquedas.",
                    image: "/images/inputs/input-search-default.svg",
                    
                    lIcon: "search",
                    rIcon: "attach_money",
                    type: "text",
                    label: "Buscador:",
                    required: false,
                    class:"input input-default input-search",
                    placeholder: "Introduce un término de búsqueda...",
                },
                {
                    name: "Input con Unidad de Medida",
                    description:
                        "Este tipo de input muestra una unidad (por ejemplo, 'kg' o '$') para contextualizar el dato ingresado.",
                    image: "/images/inputs/input-medida-default.svg",
                    image: "/images/inputs/input-medida-default.svg"
                },
            ],
        },
        {
            id: "estados",
            title: "Estados",
            description:
                "Los inputs pueden adoptar distintos estados para reflejar la interacción y el estado de la validación:",
            inputs: [
                {
                    name: "Normal",
                    description: "Estado por defecto sin interacción.",
                    image: "/images/inputs/input-state-default.svg"
                },
                {
                    name: "En Foco",
                    description: "Indica que el campo está activo para ingresar datos (highlight en el borde o sombra).",
                    image: "/images/inputs/input-state-focused.svg"
                },
                {
                    name: "Error",
                    description:
                        "Se muestra para entradas inválidas, usando colores de alerta y un mensaje opcional de error.",
                        image: "/images/inputs/input-state-error.svg"
                },
                {
                    name: "Deshabilitado",
                    description: "El input no permite interacción y se muestra con un estilo atenuado.",
                    image: "/images/inputs/input-state-disabled.svg",
                    disabled: true,
                },
            ],
        },
        {
            id: "tamanos",
            title: "Tamaños",
            description:
                "Los inputs están disponibles en diferentes tamaños para adaptarse a distintos contextos y prioridades visuales.",
            inputs: [
                {
                    name: "Pequeño",
                    description: "Ideal para formularios compactos y uso en interfaces con espacio limitado.",
                    image: "/images/inputs/input-size-small.svg"
                },
                {
                    name: "Mediano",
                    description: "El tamaño predeterminado para la mayoría de los formularios.",
                    image: "/images/inputs/input-size-default.svg"
                },
                {
                    name: "Grande",
                    description: "Se utiliza cuando se requiere una mayor visibilidad del campo de entrada.",
                    image: "/images/inputs/input-size-big.svg"
                },
            ],
        },
        {
  id: "toggles",
  title: "Toggles, Checkbox & Radio",
  description:
    "Componentes de selección binaria o única que permiten al usuario activar o elegir opciones de forma rápida y clara.",
  inputs: [
    {
      name: "Toggles",
      description:
        "Interruptores que permiten activar o desactivar una opción. Son ideales para configuraciones rápidas y se representan con un movimiento deslizante.",
      image: "/images/inputs/input-toggle.svg"
    },
    {
      name: "Checkbox",
      description:
        "Permiten seleccionar una o varias opciones dentro de un grupo. Se representan con una casilla que puede estar marcada o desmarcada.",
      image: "/images/inputs/input-checkbox.svg"
    },
    {
      name: "Radio",
      description:
        "Permiten seleccionar una sola opción entre un conjunto. Se representan con un círculo que se rellena cuando está seleccionado.",
      image: "/images/inputs/input-radio.svg"
    }
  ]
},
        {
            id: "iconos",
            title: "Iconos en Inputs",
            description:
                "Algunos inputs incluyen íconos para mejorar la experiencia del usuario y ofrecer indicaciones visuales (por ejemplo, en el input de búsqueda o aquellos que indican unidades de medida).",
            inputs: [
                {
                    name: "Input con Icono a la izquierda",
                    description: "Muestra el ícono 'search' a la izquierda para reforzar su función.",
                    lIcon: "search",
                    image: "/images/inputs/input-icon-left.svg"
                },
                {
                    name: "Input con Icono a la derecha",
                    description:
                        "Presenta un ícono o símbolo a la derecha para indicar la unidad de medida, como '$' o 'kg'.",
                    rIcon: "attach_money",
                    image: "/images/inputs/input-icon-right.svg"
                },
            ],
        },
        {
            id: "accesibilidad",
            title: "Accesibilidad y Placeholders",
            description:
                "Los inputs deben ser accesibles, con etiquetas adecuadas, placeholders descriptivos y un contraste correcto entre el texto y el fondo.",
            inputs: [
                {
                    name: "Placeholder Descriptivo",
                    description: "Ejemplo: 'Ingrese su nombre completo'.",
                    image: "/images/inputs/input-accesibility-1.svg"
                },
                {
                    name: "Etiqueta Asociada",
                    description:
                        "Cada input debe tener una etiqueta asociada que, en caso de ser necesaria, puede ser visualmente oculta pero presente para lectores de pantalla.",
                        image: "/images/inputs/input-accesibility-2.svg"
                },
            ],
        },
    ],
};

export default inputData;
