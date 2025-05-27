import React from "react";
import { inputData } from "../../vars/inputData";
import "../../css/inputCss.css";

const InputPage = () => {
  return (
    <div className="p-6">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
      />
      <h1 className="text-3xl font-bold mb-4">{inputData.title}</h1>
      <p className="text-lg mb-6">{inputData.description}</p>

      {inputData.sections.map((section) => (
        <section key={section.id} id={section.id} className="examples-container">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-lg mb-4">{section.description}</p>

          <div className="examples-containers">
            {section.inputs?.map((input, index) => (
              <div key={index} className="example-container">
                {input.name && <h3 className="text-md font-medium mb-1">{input.name}</h3>}
                {input.description && (
                  <p className="text-sm text-gray-600 mb-2">{input.description}</p>
                )}
                {input.image && (
                  <img
                    src={input.image}
                    alt={input.name}
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

export default function InputsCompoPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <InputPage />
      <section id="comentarios" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Notas Finales</h2>
        <p className="text-lg">
          Asegúrate de seguir buenas prácticas en accesibilidad, consistencia visual y funcionalidad de los inputs.
        </p>
      </section>
    </div>
  );
}
