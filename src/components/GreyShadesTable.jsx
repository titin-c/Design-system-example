import React from "react";
import colors from "../vars/colors";

const GreyGradientTable = () => {
    const greyShades = Object.entries(colors.grey)
      .sort(([a], [b]) => Number(b) - Number(a)) // Ordena de grey-100 a grey-00
      .map(([key, value]) => ({ key: `grey-${key}`, color: value }));
  
    const numShades = greyShades.length;
    const tableData = Array.from({ length: numShades }, (_, rowIndex) =>
      greyShades.map((_, colIndex) => {
        const shadeIndex = (rowIndex + colIndex) % numShades; // Desplazamiento diagonal
        return greyShades[shadeIndex];
      })
    );
  
    return (
      <div className="overflow-auto">
        <table className="table-auto table-greys border-collapse w-full">
          {/* <thead>
            <tr>
              {greyShades.map((shade) => (
                <th key={shade.key} className="border px-4 py-2 text-center">
                  {shade.key}
                </th>
              ))}
            </tr>
          </thead> */}
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="border w-12 h-12"
                    style={{ backgroundColor: cell.color }}
                    title={cell.key}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default GreyGradientTable;