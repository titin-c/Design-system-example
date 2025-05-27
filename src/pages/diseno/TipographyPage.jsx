import TypographyTable from "../../components/TypographyTable";

export default function TypographyPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Guía de Tipografía</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Importancia de la Tipografía</h2>
        <p className="mt-2 text-lg">
          Una jerarquía tipográfica clara organiza y estructura el contenido, facilitando la navegación y la comprensión de la información dentro de la plataforma.
        </p>
      </section>

      <section id="guia">
        
        <TypographyTable></TypographyTable>
        
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Buenas Prácticas</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Usar Montserrat para mantener coherencia en la interfaz.</li>
          <li>Reservar IBM Plex Sans solo para tablas de datos.</li>
          <li>Garantizar suficiente contraste entre el texto y el fondo.</li>
          <li>Mantener tamaños legibles, especialmente en dispositivos móviles.</li>
          <li>Utilizar <strong>casing en minúsculas</strong> para una mejor legibilidad, evitando el uso de mayúsculas para llamar la atención.</li>
          <li>Aplicar alineación a la izquierda para idiomas de lectura izquierda-derecha (LTR) y alineación a la derecha para idiomas RTL.</li>
          <li>Evitar centrar textos largos, reservando la alineación centrada solo para resaltar fragmentos cortos.</li>
        </ul>
      </section>

      <section id="color-accesibilidad">
        <h2 className="text-2xl font-semibold">Color y Accesibilidad</h2>
        <p className="mt-2 text-lg">
          El color en el texto puede enfatizar o suavizar su prominencia visual. Es importante seguir las pautas de accesibilidad para garantizar una experiencia inclusiva.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>El texto estándar debe tener un contraste mínimo de 4.5:1 con el fondo.</li>
          <li>El texto grande (mayor a 18.5px en negrita o 24px en regular) debe tener un contraste mínimo de 3:1.</li>
          <li>Evitar colores muy tenues para asegurar una lectura cómoda.</li>
        </ul>
      </section>
    </div>
  )
}