import React from "react";
import { selectData } from "../../vars/selectData";
import "../../css/selects.css";

const SelectPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{selectData.title}</h1>
      <p className="text-lg mb-6">{selectData.description}</p>

      {selectData.sections.map((section) => (
              <section key={section.id} id={section.id} className="examples-container">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-lg mb-4">{section.description}</p>
      
                <div className="examples-containers">
                  {section.selects?.map((select, index) => (
                    <div key={index} className="example-container">
                      {select.name && <h3 className="text-md font-medium mb-1">{select.name}</h3>}
                      {select.description && (
                        <p className="text-sm text-gray-600 mb-2">{select.description}</p>
                      )}
                      {select.img && (
                        <img
                          src={select.img}
                          alt={select.name}
                          className="example-image rounded shadow"
                        />
                      )}
                    </div>
                  ))}
      
                 
      
      
                </div>
              </section>
            ))}
    </div>
  );
};

export default function SelectsCompoPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SelectPage />
      <section id="accesibilidad">
        <h2 className="text-2xl font-semibold mb-4">Accesibilidad</h2>
        <p className="text-lg mb-6">
          Todos los componentes select deben ser accesibles por teclado y compatibles con lectores de pantalla.
        </p>
      </section>
    </div>
  );
}
