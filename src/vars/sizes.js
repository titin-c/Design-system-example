const sizes = {
  base: {
    "size-00": 0,
    "size-01": 1,
    "size-02": 2,
    "size-04": 4,
    "size-06": 6,
    "size-08": 8,
    "size-10": 10,
    "size-12": 12,
    "size-16": 16,
    "size-24": 24,
    "size-32": 32,
  },
  usage: {
    "Margins": {
      description: "Espaciado exterior de los elementos para separar su contenido del entorno. funciona con escala de 8",
      values: [
        { name: "margin-xxs", value: "size-02" },
        { name: "margin-xs", value: "size-04" },
        { name: "margin-s", value: "size-08" },
        { name: "margin-m", value: "size-16" },
        { name: "margin-l", value: "size-32" },
      ],
    },
    "Paddings": {
      description: "Espaciado interior de un elemento, definiendo el área entre su contenido y su borde.  Para contrarestrar la diferencia con el borde, funciona con la escala de 6",
      values: [
        { name: "padding-xxs", value: "size-02" },
        { name: "padding-xs", value: "size-06" },
        { name: "padding-s", value: "size-10" },
        { name: "padding-m", value: "size-12" },
        { name: "padding-l", value: "size-24" },
      ],
    },
    "Bordes": {
      description: "Grosor de las líneas que delimitan los elementos.",
      values: [
        { name: "border-s", value: "size-01" },
        { name: "border-m", value: "size-02" },
        { name: "border-l", value: "size-04" },
      ],
    },
    "Radio de Bordes": {
      description: "Define el redondeo de las esquinas de los elementos.",
      values: [
        { name: "border-radius-xs", value: "size-02" },
        { name: "border-radius-s", value: "size-04" },
        { name: "border-radius-m", value: "size-08" },
        { name: "border-radius-l", value: "size-16" },
      ],
    },
  }
};

export default sizes;
