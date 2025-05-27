import React from "react";
import { navigationData } from "../../vars/navigationData.js";
import "../../css/navigationCss.css";

const NavigationPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{navigationData.title}</h1>
      <p className="text-lg mb-6">{navigationData.description}</p>

      {navigationData.types.map((type) => (
        <section key={type.id} id={type.id} className="examples-container">
          <h2 className="text-2xl font-semibold mb-2">{type.title}</h2>
          <p className="text-md mb-4">{type.description}</p>

          {/* Variantes */}
          {type.variants?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Estados</h3>
              <div className="grid gap-4 wrap-flex">
                {type.variants.map((variant, i) => (
                  <div key={i} className="example-container">
                    <h4 className="text-sm font-semibold">{variant.name}</h4>
                    <img src={variant.img} alt={variant.name} className="example-image" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estados */}
          {type.estados?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Estados</h3>
              <div className="grid gap-4 wrap-flex">
                {type.estados.map((estado, i) => (
                  <div key={i} className="example-container">
                    <h4 className="text-sm font-semibold">{estado.name}</h4>
                    <img src={estado.img} alt={estado.name} className="state-example-image" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estilos */}
          {type.estilos && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Estilos</h3>
              <p className="text-sm text-gray-600 mb-2">{type.estilos.description}</p>
              <img src={type.estilos.img} alt="Estilos" className="style-example-image" width={200} />
            </div>
          )}

          {/* Responsive */}
          {type.responsive && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Responsive</h3>
              <p className="text-sm text-gray-600 mb-2">{type.responsive.description}</p>
              <img src={type.responsive.img} alt="Responsive" className="responsive-example-image" />
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default function NavigationCompoPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <NavigationPage />
      <section id="comentarios" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Notas Finales</h2>
        <p className="text-lg">
          Asegúrate de mantener consistencia, accesibilidad, y adaptabilidad en cada tipo de menú.
        </p>
      </section>
    </div>
  );
}
