import { Link } from "react-router-dom";

const ShadowBox = ({ shadow }) => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="box-shadow"
        style={{ boxShadow: shadow }}
      ></div>

    </div>
  );
};

const ElevationTable = ({ title, data }) => {
  return (
    <section className="mb-6">
      <table className={`${title} table-auto w-full border-collapse border border-gray-300`}>
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Fórmula</th>
            <th className="border px-4 py-2">Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, formula, shadow }, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{formula}</td>
              <td className="border px-4 py-2">
                <ShadowBox shadow={shadow} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
const ElevationColorTable = ({ title, data }) => {
    return (
      
        
        <table className=" table-color-shadow table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Fórmula</th>
              <th className="border px-4 py-2">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, formula, example }, index) => (
              <tr key={index} className="border">
                <td className="border px-4 py-2">{name}</td>
                <td className="border px-4 py-2">{formula}</td>
                <td className="border px-4 py-2">
                  <div className="box-color-shadow" style={{boxShadow: example }}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    );
  };

const colorElevationData = [
    {
      name: "Shadow 1",
      formula: "Round(42 - 0.116 * luminosity)",
      example: "0px 2px 4px rgba(0, 0, 0, 0.3)"
    },
    {
      name: "Shadow 2",
      formula: "Round(34 - 0.09 * luminosity)",
      example: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    }
  ];
const lowElevationData = [
  { name: "Shadow 2", formula: "0px 1px 2px rgba(0, 0, 0, 0.05)", shadow: "0px 1px 2px rgba(0, 0, 0, 0.14)" },
  { name: "Shadow 4", formula: "0px 2px 4px rgba(0, 0, 0, 0.1)", shadow: "0px 2px 4px rgba(0, 0, 0, 0.14)" },
  { name: "Shadow 8", formula: "0px 4px 8px rgba(0, 0, 0, 0.1)", shadow: "0px 4px 8px rgba(0, 0, 0, 0.14)" },
  { name: "Shadow 16", formula: "0px 8px 16px rgba(0, 0, 0, 0.1)", shadow: "0px 8px 16px rgba(0, 0, 0, 0.11)" },
];

const highElevationData = [
  { name: "Shadow 16", formula: "0px 8px 16px rgba(0, 0, 0, 0.24)", shadow: "0px 8px 16px rgba(0, 0, 0, 0.24)" },
  { name: "Shadow 32", formula: "0px 16px 32px rgba(0, 0, 0, 0.24)", shadow: "0px 16px 32px rgba(0, 0, 0, 0.24)" },
  { name: "Shadow 64", formula: "0px 32px 64px rgba(0, 0, 0, 0.3)", shadow: "0px 32px 64px rgba(0, 0, 0, 0.3)" },
];

export default function ShadowsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Sombras y elevaciones</h1>

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">Profundidad, sombra y luz</h2>
          <p className="text-gray-600 mb-4">
            Las interfaces imitan el espacio tridimensional colocando componentes a diferentes elevaciones a lo largo del eje z para aumentar la prominencia visual de ciertos elementos de la interfaz de usuario. Esto crea una jerarquía clara y un sentido de enfoque dentro de una experiencia.
          </p>
          <p className="text-gray-600 mb-4">
            La elevación utiliza la interacción de sombras y luces para implicar la distancia entre dos superficies e ilustrar qué tan lejos parece un objeto de la superficie detrás de él.
          </p>
        </section>

        <section className="mb-6">
          <h2 id="direccion" className="text-xl font-bold mb-2">Dirección de la sombra</h2>
          <p className="text-gray-600 mb-4">
            Una dirección de sombra consistente transmite una fuente de luz percibida.
          </p>
          {/* Aquí puedes agregar una imagen o ilustración sobre la dirección de la sombra */}
        </section>

        <section className="mb-6">
          <h2 id="tamano" className="text-xl font-bold mb-2">Tamaño de la sombra</h2>
          <p className="text-gray-600 mb-4">
            Al igual que en el mundo físico, las sombras nítidas e intensas indican cercanía a una superficie, mientras que las sombras más grandes y suaves indican una mayor distancia.
          </p>
          {/* Aquí puedes agregar una imagen o ilustración sobre el tamaño de la sombra */}
        </section>

        <section className="mb-6">
          <h2 id="sistemas-de-sombras" className="text-xl font-bold mb-2">Sistema de sombras</h2>
          <p className="text-gray-600 mb-4">
            Fluent utiliza un conjunto de ecuaciones para generar sombras consistentes y cohesivas basadas en cualquier valor dado. La escala de sombras hace referencia a valores de desenfoque crecientes para indicar el tamaño de la sombra y, por lo tanto, la distancia. Por ejemplo, la sombra 2 tiene un desenfoque de 2 píxeles y la sombra 64 tiene un desenfoque de 64 píxeles.
          </p>
          <p className="text-gray-600 mb-4">
            Las sombras de Fluent se crean combinando sombras direccionales nítidas (clave) para definir los bordes de un elemento y sombras suaves y difusas (ambiente) para implicar distancia.
          </p>
          {/* Aquí puedes agregar una imagen o ilustración sobre el sistema de sombras */}
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold mb-2">Rango de baja elevación</h3>
          <p className="text-gray-600 mb-4">
            Este rango se utiliza para elementos como tarjetas sin borde y botones de acción flotantes cuando se presionan.
          </p>
          <p><strong>Fórmula</strong><br></br>
            Blur = 1 * n<br></br>
            X Axis = 0<br></br>
            Y Axis = 0.5 * n<br></br>
            Opacity = 14%
          </p>
          {/* Aquí puedes agregar una tabla o lista sobre el rango de baja elevación */}
          <ElevationTable title="Low Elevation Ramp" data={lowElevationData} />

        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold mb-2">Rango de alta elevación</h3>
          <p className="text-gray-600 mb-4">
            Este rango se utiliza para elementos como hojas inferiores, navegación lateral y barras de pestañas elevadas.
          </p>
          <p><strong>Fórmula</strong><br></br>
            Blur = 1 * n<br></br>
            X Axis = 0<br></br>
            Y Axis = 0.5 * n<br></br>
            Opacity = 24%
          </p>
          {/* Aquí puedes agregar una tabla o lista sobre el rango de alta elevación */}
          <ElevationTable title="High Elevation Ramp" data={highElevationData} />
        </section>

        <section className="mb-6 bg-primary-light">
          <h3 className="text-xl font-bold mb-2">Sombras en superficies de color</h3>
          <p className="text-gray-600 mb-4">
            Para transmitir el mismo nivel de elevación en superficies de color, ajustamos las sombras utilizando la ecuación de luminosidad. Utiliza los tokens de sombra de marca proporcionados para aplicar sombras a colores en una interfaz.
          </p>
          <p>0.2126 * R + 0.7152 * G + 0.0722 * B</p>
          <p>Round ( 42 - 0.116 * luminosity )</p>
          <p className="text-gray-600 mb-4">
            Cuando se compara con neutros, el mismo valor de sombra en colores de marca puede no dar la impresión de los mismos niveles de elevación. Para llevar visualmente los elementos al mismo nivel de elevación, utilizamos la ecuación de luminosidad para calcular la opacidad de la sombra basada en la luminosidad del color.
          </p>
          {/* Aquí puedes agregar una imagen o ilustración sobre sombras en superficies de color */}
          <ElevationColorTable title="Luminosidad y Sombras" data={colorElevationData} />
        </section>
      </div>
    </div>

  );
}