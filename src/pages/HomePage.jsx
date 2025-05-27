export default function HomePage() {
    return (
      <main className="main">
      <div className="main-header">
      <div className="main-header-content">
      <h1 className="h1">Inicio</h1>
      </div>
      </div>
      <div className="main-body">
        <section class="ds-home px-6 py-10 max-w-5xl mx-auto">
  <h1 class="text-4xl font-bold mb-4">Bienvenido al Design System</h1>
  <p class="text-lg text-gray-700 mb-8">
    Este sistema de diseño es la fuente de verdad para construir productos coherentes, accesibles y escalables. Proporciona los principios, componentes y guías necesarias para crear experiencias consistentes en toda nuestra plataforma.
  </p>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-2">¿Qué encontrarás aquí?</h2>
    <ul class="list-disc list-inside text-gray-700">
      <li><strong>Fundamentos:</strong> Colores, tipografías, espacios y tono de voz.</li>
      <li><strong>Patrones:</strong> Buenas prácticas de interacción y experiencia de usuario.</li>
      <li><strong>Guías de desarrollo:</strong> Tokens, variables, comportamiento y accesibilidad.</li>
      <li><strong>Componentes:</strong> Botones, inputs, navegación, selectores y más.</li>
    </ul>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-2">¿Para quién es?</h2>
    <p class="text-gray-700">
      Este sistema está diseñado para <strong>diseñadores, desarrolladores, product managers y redactores UX</strong> que buscan trabajar de forma unificada y coherente, independientemente del equipo o producto.
    </p>
  </section>

  <section class="mb-10">
    <h2 class="text-2xl font-semibold mb-2">Principios del sistema</h2>
    <ul class="list-disc list-inside text-gray-700">
      <li><strong>Consistencia:</strong> Un lenguaje visual y de interacción común.</li>
      <li><strong>Escalabilidad:</strong> Pensado para crecer sin perder estructura.</li>
      <li><strong>Accesibilidad:</strong> Diseñado para todos los usuarios, en cualquier contexto.</li>
      <li><strong>Colaboración:</strong> Facilita el trabajo entre diseño y desarrollo.</li>
    </ul>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-2">Cómo usarlo</h2>
    <p class="text-gray-700 mb-4">
      Explora las secciones del menú lateral para acceder a fundamentos, componentes y ejemplos. Cada elemento incluye documentación visual, código y recomendaciones de uso.
    </p>
    <a href="/diseno" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Empezar ahora →
    </a>
  </section>

  <footer class="text-sm text-gray-500 border-t pt-4">
    Última actualización: Mayo 2025. Si tienes sugerencias o encuentras errores, contacta al equipo de diseño.
  </footer>
</section>

      </div>
  </main>);
  }