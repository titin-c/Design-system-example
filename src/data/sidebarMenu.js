// src/data/sidebarMenu.js

const sidebarMenu = {
    diseno: {
      label: "Diseño",
      items: {
        Colores: [
          { label: "Color System", slug: "color-system" },
          { label: "Color Roles", slug: "color-roles" },
          { label: "Accesibilidad", slug: "accesibilidad" }
        ],
        Tipografia: [
          { label: "Guía", slug: "guia" },
          { label: "Color y accesibilidad", slug: "color-accesibilidad" }
        ],
        Layouts: [
          { label: "Grid", slug: "grid" },
          { label: "Espaciados", slug: "espaciados" },
          { label: "Alineación", slug: "alineacion" },
          { label: "Responsive", slug: "responsive" },
          { label: "Profundidad", slug: "profundidad" }
        ],
        Iconos: [],
        Espacios: [
          { label: "Paddings", slug: "paddings" },
          { label: "Margins", slug: "margins" }
        ],
        Bordes: [
          { label: "Borders", slug: "bordes" },
          { label: "Border Radius", slug: "radio-de-bordes" }
        ],
        Sombras: [
          { label: "Dirección", slug: "direccion" },
          { label: "Tamaño", slug: "tamano" },
          { label: "Sistema de sombras", slug: "sistemas-de-sombras" }
        ]
      }
    },
    componentes: {
      label: "Componentes",
      items: {
        Botones: [
          { label: "Tipos", slug: "tipos" },
          { label: "Tamaños", slug: "tamanos" },
          { label: "Estados", slug: "estados" },
          { label: "Contenido", slug: "contenido" },
          { label: "Accesibilidad", slug: "accesibilidad" }
        ],
        Navegación: [
          { label: "Menú principal", slug: "aside" },
          { label: "Menu de botones secundario", slug: "secundario" },
          { label: "Tab menú", slug: "tabs" },
          { label: "Menú acciones rápidas", slug: "actions" }
        ],
        Inputs: [
          { label: "Tipos", slug: "tipos" },
          { label: "Estados", slug: "estados" },
          { label: "Toggles, checkbox & radio", slug: "toggles" },
          { label: "Iconos", slug: "iconos" },
          { label: "Accesibilidad", slug: "accesibilidad" },
          { label: "Comentarios", slug: "comentarios" }
        ],
        selects: [
          { label: "Tipos", slug: "tipos" },
          { label: "Estados", slug: "estados" },
          { label: "Iconos", slug: "iconos" },
          { label: "Accesibilidad", slug: "accesibilidad" }
        ]
      }
    },
    desarrollo: {
      label: "Desarrollo",
      items: {
        botones: [
          { label: "Estilos", slug: "estilos" },
          { label: "hover", slug: "hover" },
          { label: "focus", slug: "focus" }
        ],
        navbars: [],
        inputs: [],
        selects: []
      }
    }
  };
  
  export default sidebarMenu;
  