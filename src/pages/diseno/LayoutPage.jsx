import { Link } from "react-router-dom";



export default function LayoutPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Layout y Profundidad</h1>

      <section id="grid">
        <h2 className="text-2xl font-semibold">Grid</h2>
        <p className="mt-2 text-gray-700">
          El sistema de grid organiza elementos en columnas y filas para mantener coherencia visual.
        </p>
        <table className="table-auto w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tipo</th>
              <th className="border p-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Flexible</td>
              <td className="border p-2">Se adapta a diferentes tamaños de pantalla.</td>
            </tr>
            <tr>
              <td className="border p-2">Fijo</td>
              <td className="border p-2">Mantiene medidas constantes en todos los dispositivos.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="espaciados">
        <h2 className="text-2xl font-semibold">Espaciado</h2>
        <p className="mt-2 text-gray-700">
          El espacio en blanco se usa estratégicamente para separar o agrupar contenido.{" "}
          <Link to="/diseno/Espacios" className="">
            Ir a márgenes
          </Link>
        </p>
        <table className="table-auto w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tipo</th>
              <th className="border p-2">Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Margen</td>
              <td className="border p-2">Separa elementos externos.</td>
            </tr>
            <tr>
              <td className="border p-2">Padding</td>
              <td className="border p-2">Añade espacio interno a los elementos.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="alineacion">
        <h2 className="text-2xl font-semibold">Alineación</h2>
        <p className="mt-2 text-gray-700">
          Mantener una alineación clara mejora la legibilidad y el flujo visual.
        </p>
        <table className="table-auto w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tipo</th>
              <th className="border p-2">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Izquierda</td>
              <td className="border p-2">Alinea el texto o elementos a la izquierda.</td>
            </tr>
            <tr>
              <td className="border p-2">Centro</td>
              <td className="border p-2">Ubica los elementos en el medio del contenedor.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="responsive">
        <h2 className="text-2xl font-semibold">Responsividad</h2>
        <p className="mt-2 text-gray-700">
          Se logra adaptando el diseño a diferentes tamaños de pantalla con un sistema flexible de breakpoints.
        </p>
        <table className="table-auto w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tamaño</th>
              <th className="border p-2">Rango</th>
              <th className="border p-2">Breakpoints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Small</td>
              <td className="border p-2">320-479px</td>
              <td className="border p-2">640px o menos</td>
            </tr>
            <tr>
              <td className="border p-2">Medium</td>
              <td className="border p-2">480-639px</td>
              <td className="border p-2">641px a 1007px</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="profundidad">
        <h2 className="text-2xl font-semibold">Profundidad</h2>
        <p className="mt-2 text-gray-700">
          La profundidad ayuda a jerarquizar visualmente los elementos mediante sombras y contraste de colores.
        </p>
        <table className="table-auto w-full mt-4 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Elemento</th>
              <th className="border p-2">Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Sombras</td>
              <td className="border p-2">Destacan los elementos elevados.{" "}
                <Link to="/diseno/Sombras" className="">
                  Ir a sombras
                </Link>

              </td>
            </tr>
            <tr>
              <td className="border p-2">Contraste</td>
              <td className="border p-2"><p>Diferencia planos sin depender solo de sombras.</p>
                <p>Para lograr una percepción de profundidad en los layouts, no solo utilizamos sombras, sino que también
                  aplicamos una técnica de superposición de capas. Esto se logra intercalando colores como el blanco y el gris,
                  generando una jerarquía visual más clara y destacando elementos clave dentro de la interfaz. La combinación de
                  sombras con capas superpuestas permite un contraste sutil pero efectivo, mejorando la legibilidad y la navegación.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>

  );
}