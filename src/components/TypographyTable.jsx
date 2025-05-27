import React from "react";
import typographyStyles from "../vars/typographyStyles"



const TypographyTable = () => {
  return (
    <section>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Guía de Tipografía:</h2>
      {Object.entries(typographyStyles).map(([fontFamily, { description, styles }]) => (
        <div key={fontFamily} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{fontFamily}</h3>
          <p className="mb-4 text-sm text-gray-600">{description}</p>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Weight</th>
                <th className="border px-4 py-2">Size / Line-height</th>
              </tr>
            </thead>
            <tbody>
              {styles.map(({ name, weight, size, lineHeight }, index) => (
                <tr key={index} className="border">
                  <td className="border px-4 py-2" style={{ fontFamily, fontWeight: weight, fontSize: size, lineHeight }}>
                    { name}
                  </td>
                  <td className="border px-4 py-2">{weight}</td>
                  <td className="border px-4 py-2">{`${size} / ${lineHeight}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </section>
  );
};
  
  export default TypographyTable;
