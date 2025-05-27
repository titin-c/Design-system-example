export default function ContactoPage() {
  return (
    <main className="main">
        <div className="main-header">
          <div className="main-header-content">
          <h1 className="h1">Contacto</h1>
          </div>
        
        </div>
        <div className="main-body">
          <section class="ds-contact px-6 py-10 max-w-3xl mx-auto">
  <h1 class="text-4xl font-bold mb-4">Contacto</h1>
  <p class="text-lg text-gray-700 mb-8">
    ¿Tienes dudas, sugerencias o encontraste algún error en el sistema de diseño? Aquí te dejamos los canales disponibles para comunicarte con el equipo responsable.
  </p>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-2">Contactar con el equipo</h2>
    <ul class="list-disc list-inside text-gray-700 space-y-2">
      <li>
        <strong>Slack:</strong> Escríbenos en el canal <code>#design-system</code> para soporte rápido o discusión.
      </li>
      <li>
        <strong>Email:</strong> Puedes escribirnos a <a href="mailto:designsystem@tudominio.com" class="text-blue-600 hover:underline">designsystem@tudominio.com</a>.
      </li>
      <li>
        <strong>Reuniones:</strong> Si necesitas una revisión o una demo, agenda una reunión en nuestro <a href="#" class="text-blue-600 hover:underline">calendario compartido</a>.
      </li>
    </ul>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-2">Colabora con nosotros</h2>
    <p class="text-gray-700">
      Puedes proponer cambios, reportar bugs o sugerir nuevos componentes. Visita nuestro <a href="https://github.com/tuequipo/design-system" class="text-blue-600 hover:underline">repositorio en GitHub</a> para abrir una issue o hacer un pull request.
    </p>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">Preguntas frecuentes</h2>
    <ul class="text-gray-700 space-y-3">
      <li>
        <strong>¿Puedo usar el sistema fuera del producto principal?</strong><br />
        Sí, siempre que mantengas consistencia y lo comuniques al equipo.
      </li>
      <li>
        <strong>¿Qué hago si necesito un componente nuevo?</strong><br />
        Contáctanos para discutirlo. Evaluamos si se adapta al sistema o necesita personalización.
      </li>
      <li>
        <strong>¿Puedo proponer mejoras de accesibilidad o UX?</strong><br />
        ¡Por supuesto! Este sistema está vivo y siempre abierto a mejorar.
      </li>
    </ul>
  </section>

  <footer class="text-sm text-gray-500 border-t pt-4">
    Gracias por ayudarnos a construir un sistema más sólido y colaborativo. Última actualización: Mayo 2025.
  </footer>
</section>

        </div>
    </main>);
  }