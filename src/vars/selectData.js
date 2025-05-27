export const selectData = {
  title: "Selects",
  description: "Componentes desplegables para seleccionar una o varias opciones. Adaptables a distintos contextos, permiten presentar información de forma clara y eficiente.",
  sections: [
    {
      id: "tipos",
      title: "Tipos",
      description: "Diferentes tipos de selectores según su funcionalidad y necesidades del usuario.",
      selects: [
        {
          name: "Select único",
          description: "Permite seleccionar una sola opción de una lista desplegable. Ideal para formularios simples o configuraciones donde solo una respuesta es válida.",
          img: "/images/selects/select-single.svg"
        },
        {
          name: "Multiselect",
          description: "Permite seleccionar múltiples opciones simultáneamente. Es útil en filtros o formularios donde se permite la elección de más de una alternativa.",
          img: "/images/selects/select-multi.svg"
        },
        {
          name: "Con calendario",
          description: "Integra un calendario dentro del select para elegir fechas de forma visual y precisa. Perfecto para agendas, reservas o eventos.",
          img: "/images/selects/select-calendar.svg"
        },
        {
          name: "Con creación de opción",
          description: "Ofrece la posibilidad de añadir una nueva opción si no existe en la lista. Ideal para etiquetas personalizadas, categorías nuevas o datos abiertos que pueden crecer.",
          img: "/images/selects/select-creable.svg"
        }
      ]
    },
    {
      id: "estados",
      title: "Estados",
      description: "Diferentes representaciones visuales del componente Select según su interacción o validación.",
      selects: [
        {
          name: "Estado default",
          description: "Estado inicial del componente, sin interacción previa. Muestra el placeholder o el valor por defecto.",
          img: "/images/selects/select-default.svg"
        },
        {
          name: "Estado focus",
          description: "Se activa cuando el componente recibe el foco. Destaca visualmente para indicar que el usuario puede interactuar.",
          img: "/images/selects/select-focus.svg"
        },
        {
          name: "Estado error",
          description: "Indica que ha ocurrido un error de validación. Suele ir acompañado de un mensaje y estilo visual distintivo (rojo, ícono de advertencia, etc.).",
          img: "/images/selects/select-error.svg"
        },
        {
          name: "Estado disabled",
          description: "El componente se presenta inactivo, impidiendo la interacción. Se utiliza para mostrar que una acción no está disponible.",
          img: "/images/selects/select-disabled.svg"
        },
        {
          name: "Estado loading",
          description: "Se muestra cuando el componente está esperando la carga de datos. Suele ir acompañado de un spinner u otro indicador visual.",
          img: "/images/selects/select-loading.svg"
        }
      ]
    },
    {
      id: "iconos",
      title: "Con Iconos",
      description: "Selectores que incorporan iconos o elementos gráficos para reforzar su función o facilitar su lectura.",
      selects: [
        {
          name: "Select con icono a la izquierda",
          description: "Incluye un icono al inicio del campo, generalmente para reforzar la semántica de la selección (por ejemplo, usuario, ubicación, etc.).",
          img: "/images/selects/select-icon-right2.svg"
        },
        {
          name: "Select con icono a la derecha",
          description: "Añade un icono al final del campo, comúnmente usado para indicar el estado o el tipo de acción (desplegar, confirmar, etc.).",
          img: "/images/selects/select-icon-right.svg"
        }
      ]
    }
  ]
};
