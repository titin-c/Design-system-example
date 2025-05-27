import React from "react";
import sizes from "../../vars/sizes";

const ExampleBox = ({ borderRadius, borderWidth }) => {
  return (
    <span
    className="cuadro"
      style={{
        borderRadius: borderRadius ? `${borderRadius}px 0 0 0` : "0",
        border: borderWidth ? `${borderWidth}px solid black` : "none",
      }}
    ></span>
  );
};

const SizeTable = ({ title, description, data, isBorderRadius }) => {
  return (
    <section id={title.toLowerCase().replace(/ /g, "-")} className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Valor</th>
            <th className="border px-4 py-2">Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, value }, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{value}</td>
              <td className="border px-4 py-2 ejemplo">
                <ExampleBox
                  borderRadius={isBorderRadius ? sizes.base[value] : undefined}
                  borderWidth={!isBorderRadius ? sizes.base[value] : undefined}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const BordersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Guía de Bordes y Radio de Bordes</h1>
      
      {sizes.usage?.["Bordes"] && (
        <SizeTable
          title="Bordes"
          description={sizes.usage["Bordes"].description}
          data={sizes.usage["Bordes"].values}
          isBorderRadius={false}
        />
      )}

      {sizes.usage?.["Radio de Bordes"] && (
        <SizeTable
          title="Radio de Bordes"
          description={sizes.usage["Radio de Bordes"].description}
          data={sizes.usage["Radio de Bordes"].values}
          isBorderRadius={true}
        />
      )}
    </div>
  );
};

export default BordersPage;