export const navigationData = {
  title: "Menús de Navegación",
  description: "Componentes estructurales que permiten guiar al usuario a través de las diferentes áreas de una interfaz.",
  types: [
    {
      id: "aside",
      title: "Menú Principal (Aside)",
      description: "Barra lateral para navegación principal. Puede mostrarse expandida o colapsada según el contexto.",
      variants: [
        {
          name: "Expandido",
          img: "/images/navigation/aside-expanded.svg"
        },
        {
          name: "Colapsado",
          img: "/images/navigation/aside-collapsed.svg"
        }
      ],
      estados: [
        {
          name: "Default",
          img: "/images/navigation/aside-state-default.svg"
        },
        {
          name: "Hover",
          img: "/images/navigation/aside-state-hover.svg"
        },
        {
          name: "Activo",
          img: "/images/navigation/aside-state-active.svg"
        },
        {
          name: "Disabled",
          img: "/images/navigation/aside-state-disabled.svg"
        }
      ],
      estilos: {
        description: "Espaciados internos, márgenes entre ítems y uso de iconos a la izquierda.",
        img: "/images/navigation/aside-style.svg"
      }
    },
    {
      id: "secundario",
      title: "Menú de Botones Secundarios",
      description: "Menús superiores horizontales para acceder a secciones relacionadas.",
      variants: [],
      estados: [
        {
          name: "Default",
          img: "/images/navigation/buttons-state-default.svg"
        },
        {
          name: "Hover",
          img: "/images/navigation/buttons-state-hover.svg"
        },
        {
          name: "Activo",
          img: "/images/navigation/buttons-state-active.svg"
        },
        {
          name: "Disabled",
          img: "/images/navigation/buttons-state-disabled.svg"
        }
      ],
      estilos: {
        description: "Botones con padding horizontal uniforme y separación mediante gaps.",
        img: "/images/navigation/buttons-style.svg"
      }
    },
    {
      id: "tabs",
      title: "Menús de Tabs",
      description: "Navegación en pestañas para subsecciones dentro de una misma vista.",
      variants: [],
      estados: [
        {
          name: "Default",
          img: "/images/navigation/tabs-state-default.svg"
        },
        {
          name: "Hover",
          img: "/images/navigation/tabs-state-hover.svg"
        },
        {
          name: "Activo",
          img: "/images/navigation/tabs-state-active.svg"
        },
        {
          name: "Disabled",
          img: "/images/navigation/tabs-state-disabled.svg"
        }
      ]
    },
    {
      id: "actions",
      title: "Menús de Iconos en Tablas",
      description: "Acciones rápidas dentro de las filas de tablas o para múltiples elementos seleccionados.",
      variants: [
        {
          name: "Acciones por fila",
          img: "/images/navigation/table-row-actions.svg"
        },
        {
          name: "Multiacciones",
          img: "/images/navigation/table-multiactions.svg"
        }
      ]
    }
  ]
};
