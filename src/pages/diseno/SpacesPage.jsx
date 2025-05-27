import React from "react";
import sizes from "../../vars/sizes";

const SizeTable = ({ title, data }) => {
  return (
    <section id={title.toLowerCase().replace(/ /g, "-")} className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">Escala de tamaños utilizada en el sistema.</p>
      <table className="table-auto w-full border-collapse border border-gray-300 sizes">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Tamaño</th>
            <th className="border px-4 py-2">Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border">
              <td className="border px-4 py-2">{key}</td>
              <td className="border px-4 py-2">{value}px</td>
              <td className="border px-4 py-2 ejemplo">
                <span className="cyrcle"></span>
                <span className="rectangle" style={{ width: value }}></span>
                <span className="cyrcle"></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const SizeUsageTable = ({ title, description, data }) => {
  return (
    <section id={title.toLowerCase().replace(/ /g, "-")} className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, value }, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const SizesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Uso de Tamaños</h1>
      <SizeTable title="Escala de Tamaños" data={sizes.base} />
      {Object.entries(sizes.usage)
        .filter(([category]) => category !== "Bordes" && category !== "Radio de Bordes")
        .map(([category, { description, values }]) => (
          <SizeUsageTable key={category} title={category} description={description} data={values} />
        ))}
    </div>
  );
};

export default SizesPage;
