import React from "react";
import colors from "../../vars/colors";
import ColorTransparencyTable from "../../components/ColorTransparencyTable";
import GreyShadesTable from "../../components/GreyShadesTable";



// Función para determinar si un color es claro u oscuro y devolver el color de texto apropiado
function getContrastColor(hexcolor) {
  // Remover el '#' si está presente
  hexcolor = hexcolor.replace("#", "");

  // Convertir a valores RGB
  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 4), 16);
  const b = parseInt(hexcolor.substring(4, 6), 16);

  // Calcular la luminancia usando la fórmula: (0.299 * R + 0.587 * G + 0.114 * B) / 255
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Si la luminancia es mayor a 0.5 el fondo es claro, por lo que se usa texto oscuro; 
  // en caso contrario se usa texto claro.
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

const ColorPalette = ({ name, shades }) => {
  return (
    <div>
      <h3 className="text-xl font-bold">{name} colors</h3>
      <div className="color-boxes">
        {Object.entries(shades)
          .sort(([a], [b]) => parseInt(a) - parseInt(b)) // Ordena las claves numéricamente
          .map(([key, value]) => {
            // Obtener el color de texto adecuado según el fondo
            const textColor = getContrastColor(value);
            return (
              <div key={key} className="color-box" style={{ backgroundColor: value }}>
                <div
                  className="color-box-header"
                  style={{ color: textColor }}
                >
                  {value}
                </div>
                <div className="color-box-body">
                  <span className="color-var-name" style={{ color: textColor }}>
                    {`${name}-${key}`}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};





const ColorGuide = () => {
  return (
    <div className="p-6">

      {Object.entries(colors).map(([colorName, shades]) => (
        <ColorPalette key={colorName} name={colorName} shades={shades} />
      ))}
    </div>
  );
};


const colorRoles = [
  {
    title: "Colores Semánticos",
    description:
      "Los colores compartidos se utilizan para resaltar información clave, como indicadores de estado o elementos interactivos.",
    items: [
      { name: "success", color: "green-50" , colordark: "green-45"},
      { name: "alert", color: "yellow-50", colordark: "yellow-45" },
      { name: "danger", color: "red-50", colordark: "red-45" },
    ],
  },
  {
    title: "Colores de Marca",
    description:
      "Los colores de marca refuerzan la identidad del producto y se aplican estratégicamente a botones, encabezados y elementos destacados.",
    items: [
      { name: "primary", color: "blue-50", colordark: "blue-45"  },
      { name: "secondary", color: "teal-50", colordark: "teal-45"  },
      { name: "primary-light", color: "blue-40", colordark: "blue-35" },
    ],
  },
  {
    title: "Colores Neutros",
    description: "Los colores de neutros bla bla bla.",
    items: [
      { name: "darker", color: "grey-100", colordark: "grey-00" },
      { name: "lighter", color: "grey-00", colordark: "grey-100" },
      { name: "grey-light", color: "grey-02", colordark: "grey-94" },
      { name: "grey-medium", color: "grey-10", colordark: "grey-90" },
      { name: "grey-dark", color: "grey-30", colordark: "grey-70" },
    ],
  },
];

const ColorRoles = () => {
  return (
    <div>


      {colorRoles.map((role, index) => (
        <div key={index}>
          <h3 className="text-2xl font-semibold">{role.title}</h3>
          <p className="mt-2 text-lg">{role.description}</p>
          <table className="table-auto w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Tokens Name</th>
                <th className="px-4 py-2">Variable</th>
                <th className="px-4 py-2 td-dark">Variable Dark mode</th>
              </tr>
            </thead>
            <tbody>
              {role.items.map((item, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">
                    <ul>
                      <li>bg-{item.name}</li>
                      <li>br-{item.name}</li>
                      <li>txt-{item.name}</li>
                    </ul>
                  </td>
                  <td >
                  <div className="color-var">
                  <span
                      className="color-box-mini"
                      style={{ backgroundColor: `var(--${item.color})` }}
                    ></span>{" "}
                    {item.color}
                  </div>
                    
                  </td>
                  <td className=" td-dark">
                    <div className="color-var">
                    <span
                      className="color-box-mini"
                      style={{ backgroundColor: `var(--${item.colordark})` }}
                    ></span>{" "}
                    {item.colordark}
                    </div>
  
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};




export default function ColoresPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Uso del Color</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Importancia del Color</h2>
        <p className="mt-2 text-lg">
          El color es una herramienta clave para expresar estilo, evocar emociones y comunicar significado dentro de la interfaz.
          Un uso intencionado de la paleta de colores garantiza una experiencia coherente y accesible.
        </p>
        <GreyShadesTable></GreyShadesTable>
      </section>
      <section id="introducción" className="section-top">
        <h2 className="h2">Introducción</h2>
        <p>El Color System define la paleta base utilizada en el Design System. Se compone de diferentes gamas de colores que cumplen funciones específicas dentro de la interfaz. Cada color se representa en una escala de tonalidades que permite flexibilidad en su uso según la jerarquía y la profundidad de los elementos.
        </p>
        <ColorTransparencyTable></ColorTransparencyTable>
      </section>

      <section id="color-system" className="section">
        <h2 className="h2" id="">Color System</h2>
        <p>Los colores influyen en la percepción y la usabilidad de la interfaz. Definir un esquema de color claro garantiza una experiencia visual accesible y armoniosa.</p>
        <p>El sistema de colores se compone de:</p>
        <ul>
          <li>Escala de grises: La numeración representa la cantidad de "tinta" del color más oscuro sobre un fondo blanco, pero sin utilizar transparencia real. Grey-100 es el tono más oscuro (casi negro), mientras que grey-00 es el mismo color pero llevado al blanco absoluto, simulando una transparencia total sin ser realmente transparente. A medida que el número disminuye, el tono se aclara progresivamente.</li>
          <li>Escalas de color (Blue, Green, Yellow, Red):
            La numeración de cada escala representa la cantidad de "tinta" del color base aplicada sobre un fondo blanco, sin utilizar transparencia real. En este caso, el tono más intenso del color base se encuentra en el nivel 50. A medida que la numeración desciende hacia 00, el color se va aclarando progresivamente hasta llegar a un tono casi blanco.

            Este sistema permite expandir la escala en el futuro, agregando tonos más oscuros por encima del nivel 50, hasta llegar al nivel 100, que representaría una versión casi negra del color base.</li>
          <ul>
            <li>Escala de azules</li>
            <li>Escala de verdes</li>
            <li>Escala de amarillos</li>
            <li>Escala de rojos</li>
          </ul>
        </ul>
        <ColorGuide></ColorGuide></section>



      <section>


        <h2 className="h2" id="color-roles">Color Roles</h2>
        <p>Cada color tiene una función específica dentro de la UI:</p>
        <ul>
          <li><strong>Fondo (bg-):</strong> Color de base y variantes.</li>
          <li><strong>Texto (txt-):</strong> Colores diferenciados por niveles de importancia.</li>
          <li><strong>Bordes (br-):</strong> Líneas divisorias y contornos de elementos interactivos.</li>
        </ul>
        <h3 className="h3">Modo de uso</h3>
        <ul>
          <li><strong>Colores primarios:</strong> Representan la identidad de la marca, deben usarse en llamadas a la acción principales..</li>
          <li><strong>Colores secundarios:</strong> Complementan a los primarios en elementos secundarios.</li>
          <li><strong>Colores semánticos:</strong> Incluyen colores de estado como error, éxito o advertencia, debe estar reservado para estados específicos.</li>
          <li><strong>Colores neutrales:</strong> Usados para fondos, textos y separadores, ayudan a equilibrar la interfaz sin sobrecargarla.</li>
        </ul>


        <ColorRoles></ColorRoles>
      </section>


      <section id="accesibilidad">
        <h2 className="text-2xl font-semibold">Buenas Prácticas de Accesibilidad</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Asegurar un contraste adecuado para mejorar la legibilidad.</li>
          <li>No usar el color como único indicador de información.</li>
          <li>Permitir a los usuarios personalizar la paleta de colores cuando sea posible.</li>
        </ul>
      </section>
      <section className="dodont">

        <div className="box do-box">
          <div className="box-container">
            {/* <div className="box-header">Contrastes</div> */}
            <div className="box-body">
              <ul>
                <li>Usar colores con suficiente contraste para garantizar legibilidad.</li>
                <li>Definir roles de color para cada uso específico.</li>
              </ul>
            </div>
            <div className="box-footer">DO</div>
          </div>
        </div>

        <div className="box dont-box">
          <div className="box-container">
            {/* <div className="box-header">Contrastes</div> */}
            <div className="box-body">
              <ul>
                <li>No utilizar demasiados colores en una sola pantalla.</li>
                <li>No usar colores de estado como elementos decorativos.</li>
              </ul>
            </div>
            <div className="box-footer">DON´T</div>
          </div>
        </div>

      </section>
    </div>
  );
}
