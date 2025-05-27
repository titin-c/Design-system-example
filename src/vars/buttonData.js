export const buttonData = {
    title: "Botones",
  description: "Los botones permiten a los usuarios realizar acciones y tomar decisiones con un solo clic o toque.",
  sections: [
    {
      id: "tipos",
      title: "Tipos de Botones",
      buttons: [
        {
          name: "Botón Bordered (Default)",
          description: "El botón bordered es el estilo predeterminado para acciones generales.",
          className: "btn btn-default",
          label: "Default Button",
        },
        {
          name: "Botón Primary",
          description: "El botón primary destaca una acción principal en la interfaz.",
          className: "btn btn-primary",
          label: "Primary Button",
        },
        {
          name: "Botón Danger",
          description: "El botón danger se usa para acciones críticas o destructivas.",
          className: "btn btn-danger",
          label: "Danger Button",
        },
        {
          name: "Botón Icon",
          description: "Un botón que contiene solo un ícono para acciones rápidas.",
          className: "btn btn-icon",
          lIcon: "settings",
        },
      ],
    },
    {
      id: "tamanos",
      title: "Tamaños",
      description: "Los botones están disponibles en tres tamaños:",
      buttons: [
        { name: "Botón pequeño",
          description: "El botón pequeño se utiliza únicamente en espacios reducidos como pueda ser dentro de componentes de selección donde el espacio es más reducido.",
          className: "btn btn-default btn-s", 
          label: "Small Button" },
        { name: "Botón default",
          description: "El botón default es el que se utiliza más comummente en la parte de contenido de la interfaz.",
          className: "btn btn-default ", label: "Default Button" },
        { name: "Botón Grande",
          description: "El botón Grande se utiliza en espacios destacados o más amplios como drawers y ventanas emergentes.",
          className: "btn btn-default btn-l", label: "Large Button" },
      ],
    },
    {
      id: "tamaños2",
      
      buttons: [
        { className: "btn btn-primary btn-s", label: "Small Button" },
        { className: "btn btn-primary ", label: "Default Button" },
        { className: "btn btn-primary btn-l", label: "Large Button" },
      ],
    },
    {
      id: "tamaños2",
      
      buttons: [
        { className: "btn btn-icon btn-s", lIcon: "delete", },
        { className: "btn btn-icon ", lIcon: "delete", },
        { className: "btn btn-icon btn-l", lIcon: "delete", },
      ],
    },
    {
      id: "estados",
      title: "Estados",
      description: "Los botones tienen diferentes estados según la interacción del usuario.",
      buttons: [
        { className: "btn btn-default ", label: "Default" },
        { className: "btn btn-default btn-hover", label: "Hover" },
        { className: "btn btn-default btn-active", label: "Active" },
        { className: "btn btn-default btn-disabled cursor-not-allowed", label: "Disabled", disabled: true },
      ],
    },
    {
        id: "iconos",
        title: "Left & Right icons",
        description: "Los botones pueden tener iconos a la izquierda o a la derecha del label.",
        buttons: [
            {
                
                className: "btn btn-default",
                label: "Volver al listado",
                lIcon: "arrow_back",
              },
              {
                
                className: "btn btn-danger",
                label: "Eliminar ítem",
                lIcon: "delete",
              },
              {
                
                className: "btn btn-primary",
                label: "Continuar",
                rIcon: "arrow_forward",
              },
              {
                
                className: "btn btn-primary",
                label: "Dos iconos",
                lIcon: "arrow_back",
                rIcon: "arrow_forward",
              },
        ],
      },
  ],
};

export default buttonData;