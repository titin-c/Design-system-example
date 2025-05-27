import React from "react";
import { buttonData } from "../../vars/buttonData";
import "../../css/btnCss.css";

const ButtonPage = () => {
  return (
    <div className="p-6">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
      <h1 className="text-3xl font-bold mb-4">{buttonData.title}</h1>
      <p className="text-lg mb-6">{buttonData.description}</p>
      {buttonData.sections.map((section) => (
        <section key={section.id} id={section.id} className="examples-container">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-lg">{section.description}</p>
          <div className="wrap-flex">
            {section.buttons.map((button, index) => (
              <span key={index} className={button.name ? "example-container" : "span"}>
                {button.name && <h3 className="text-xl font-medium">{button.name}</h3>}
                {button.description && <p className="text-lg">{button.description}</p>}
                <a className={button.className} disabled={button.disabled} aria-label={button.label} focusable="true">
                  <div className="label-container">
                    <span class="l-icon material-symbols-outlined" aria-hidden="true" focusable="false">{button.lIcon && button.lIcon}</span>
                    {button.label && <span className="label">{button.label}</span>}
                    <span class="l-icon material-symbols-outlined"  aria-hidden="true" focusable="false">{button.rIcon && button.rIcon}</span>
                  </div>
                </a>
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};



export default function BotonesCompoPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      
      <ButtonPage></ButtonPage>

      <section id="contenido">
        <h2 className="text-2xl font-semibold mb-4">Contenido</h2>
        <p className="text-lg mb-6">
          Usa un lenguaje claro y conciso en los botones, priorizando la acción que realizan.
        </p>


        <h3 className="text-xl font-medium">Ejemplo de botones bien nombrados</h3>
        <span className="btn-container">
          <a className="btn">
            <div className="label-container">
              <span class="l-icon material-symbols-outlined">note_add</span>
              <span className="label">Nuevo Documento</span>
              <span class="l-icon material-symbols-outlined"></span>
            </div>
          </a>
        </span>
        <span className="btn-container">
        <a className="btn">
            <div className="label-container">
              <span class="l-icon material-symbols-outlined">person_add</span>
              <span className="label">Añadir usuario</span>
              <span class="l-icon material-symbols-outlined"></span>
            </div>
          </a>
        </span>
        
      </section>
      <section id="accesibilidad">
        <h2 className="text-2xl font-semibold mb-4">Accesibilidad</h2>
        <p className="text-lg mb-6">
          Asegura que los botones tengan un contraste adecuado y sean accesibles para todos los usuarios.
        </p>
      </section>
    </div>
  );
}