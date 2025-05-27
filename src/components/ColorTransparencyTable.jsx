import React from "react";
import colors from "../vars/colors";

const transparencyLevels = [1, 0.8, 0.6, 0.4, 0.2]; // Niveles de opacidad de 100% a 20%

const ColorTransparencyTable = () => {
  // Filtramos el gris y solo dejamos los demás colores
  const filteredColors = Object.entries(colors).filter(([key]) => key !== "grey");

  return (
    <div className="p-6">
      <table className="table-auto table-colors w-full border-collapse border border-gray-300">
        {/* <thead>
          <tr className="bg-gray-200">
            {filteredColors.map(([colorName]) => (
              <th key={colorName} className="border px-4 py-2 text-center">{colorName}</th>
            ))}
          </tr>
        </thead> */}
        <tbody>
          {transparencyLevels.map((opacity, index) => (
            <tr key={index}>
              {filteredColors.map(([colorName, colorValues]) => (
                <td key={colorName} className="border px-4 py-2 text-center" style={{ backgroundColor: `${colorValues["50"]}`, opacity }}>
                  {/* <div
                    className="w-16 h-8 mx-auto rounded"
                    style={{ backgroundColor: `${colorValues["50"]}`, opacity }}
                  ></div>
                  <p className="text-sm mt-1">{colorName}-{(index + 1) * 10}</p> */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorTransparencyTable;
