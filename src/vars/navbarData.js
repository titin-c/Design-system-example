export const navigationData = {
  title: "Menús de Navegación",
  description: "Componentes de navegación esenciales para estructurar y guiar la experiencia de usuario dentro de una interfaz.",
  sections: [
    {
      id: "tipos",
      title: "Tipos de Menús",
      description: "Variaciones del sistema de navegación según su propósito y ubicación en la interfaz.",
      menus: [
        {
          name: "Menú principal (aside desplegado)",
          description: "Barra lateral expandida con iconos y textos, ideal para navegación principal en escritorio.",
          img: "/images/navigation/aside-expanded.svg"
        },
        {
          name: "Menú principal (aside colapsado)",
          description: "Versión comprimida del menú lateral con solo iconos, útil para ahorrar espacio.",
          img: "/images/navigation/aside-collapsed.svg"
        },
        {
          name: "Menú por botones para secciones secundarias",
          description: "Menú superior de botones para navegar entre áreas relacionadas.",
          img: "/images/navigation/secondary-buttons.svg"
        },
        {
          name: "Menú dropdown cuando no cabe el menú de botones",
          description: "Menú desplegable que agrupa elementos cuando hay poco espacio horizontal.",
          img: "/images/navigation/dropdown-overflow.svg"
        },
        {
          name: "Menú tipo tabs para subsecciones",
          description: "Navegación en pestañas para dividir contenido dentro de una misma sección.",
          img: "/images/navigation/tabs.svg"
        },
        {
          name: "Menús de iconos para acciones en filas de tabla",
          description: "Botonera compacta con acciones rápidas por fila, como editar, borrar, ver.",
          img: "/images/navigation/table-row-actions.svg"
        },
        {
          name: "Menú de multiacciones en tablas",
          description: "Menú para ejecutar acciones sobre múltiples elementos seleccionados en una tabla.",
          img: "/images/navigation/table-multiactions.svg"
        }
      ]
    },
    {
      id: "estados",
      title: "Estados",
      description: "Representación visual de los diferentes estados que pueden tener los menús según la interacción del usuario.",
      menus: [
        {
          name: "Estado default",
          description: "Estado inicial, sin interacción. Generalmente colores neutros y sin resaltado.",
          img: "/images/navigation/state-default.svg"
        },
        {
          name: "Estado hover",
          description: "Resaltado al pasar el cursor. Refuerza que es interactivo.",
          img: "/images/navigation/state-hover.svg"
        },
        {
          name: "Estado activo",
          description: "Elemento actualmente seleccionado. Suele usarse color de marca o fondo resaltado.",
          img: "/images/navigation/state-active.svg"
        },
        {
          name: "Estado disabled",
          description: "Elemento inactivo, con estilo atenuado. No responde a interacción.",
          img: "/images/navigation/state-disabled.svg"
        }
      ]
    },
    {
      id: "responsive",
      title: "Responsive",
      description: "Adaptaciones del menú en diferentes tamaños de pantalla.",
      menus: [
        {
          name: "Aside a menú hamburguesa",
          description: "En móviles, el menú lateral se convierte en un botón desplegable.",
          img: "/images/navigation/responsive-aside.svg"
        },
        {
          name: "Botones a dropdown",
          description: "Los menús de botones se agrupan en un dropdown en pantallas estrechas.",
          img: "/images/navigation/responsive-buttons.svg"
        },
        {
          name: "Tabs en scroll horizontal",
          description: "Las pestañas se desplazan lateralmente en móviles para no romper el diseño.",
          img: "/images/navigation/responsive-tabs.svg"
        }
      ]
    },
    {
      id: "estilos",
      title: "Estilos y Espaciados",
      description: "Detalles sobre la construcción visual de los menús: iconos, padding, gaps y márgenes.",
      menus: [
        {
          name: "Padding y margenes",
          description: "Uso consistente de espacio interno y externo para lograr claridad visual.",
          img: "/images/navigation/style-padding.svg"
        },
        {
          name: "Separación entre ítems (gap)",
          description: "Espacio uniforme entre elementos del menú para facilitar la lectura.",
          img: "/images/navigation/style-gaps.svg"
        },
        {
          name: "Iconos dentro de los menús",
          description: "Tamaño y ubicación de los iconos según tipo de menú.",
          img: "/images/navigation/style-icons.svg"
        }
      ]
    }
  ]
};
