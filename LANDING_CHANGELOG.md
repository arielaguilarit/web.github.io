# Evolución integral de la landing

## Diagnóstico

- React 18 con Vite 4, React Router 6 y styled-components.
- Landing sin rutas editoriales ni contenido centralizado.
- Posicionamiento orientado a Technical Lead, pero con poca evidencia narrativa.
- Componentes de proyectos y acordeones sin uso en el flujo principal.
- Sin visuales propios ni recuperación de rutas directas para GitHub Pages.

## Cambios

- Hero orientado a evolución de plataformas, arquitectura, UX, equipos e IA aplicada con criterio.
- Home reorganizada: Hero, enfoque, aporte, principios, evolución, caso, capacidades, CTA y contacto.
- Trayectoria basada exclusivamente en `CAREER_STORY.md`.
- Caso redactado como propuesta, sin afirmar despliegue completo ni resultados no confirmados.
- Narrativa centralizada en `src/content/landing.js`.
- `react-router-dom` añadido para implementar navegación web accesible entre las rutas editoriales.
- Dos ilustraciones originales según `IMAGE_PROMPTS.md`, optimizadas como JPEG.
- Foco visible, movimiento reducido, landmarks, headings, alt y objetivos táctiles revisados.
- SEO, Open Graph, Twitter Card y datos estructurados alineados con Technical Lead.
- Eliminación de componentes sin consumidores.

## Rutas

- `/`: landing principal.
- `/evolucion-profesional`: historia profesional por capítulos.
- `/casos/evolucion-spa`: caso de propuesta multi-host a SPA con Shell.
- `public/404.html`: recuperación de rutas directas en GitHub Pages.

## Componentes principales

- `About`, `Leadership`, `Contribution` y `EngineeringPrinciples`.
- `CareerPreview` y `CasePreview`.
- `CareerPage` y `CaseStudyPage`.
- `PageHeader`: cabecera y metadatos de páginas internas.

## Validación

- `npm run lint`: sin errores.
- `npm test -- --run`: 4 archivos y 6 pruebas aprobadas.
- `npm run build`: build de producción generado correctamente.
- Las pruebas cubren apertura y cierre del menú, enfoque, capacidades y las dos rutas editoriales.

## Pendientes

- Confirmar fechas exactas y nombre del proyecto de ICA.
- Precisar alcance del proyecto con Mercado Público.
- Confirmar qué propuestas de WSCargo se implementaron.
- Confirmar si la SPA se implementó completa, parcialmente o quedó como propuesta.
- Incorporar mediciones Lighthouse reales antes y después.
- Confirmar fechas de ascenso a Senior y Technical Lead.
- Generar ilustraciones individuales si la historia larga necesita más apoyo visual.

## Riesgos

- GitHub Pages requiere publicar `404.html` para recuperar accesos directos.
- Algunas redes sociales solo leerán los metadatos de `index.html`, no los actualizados en cliente.
- No se declaran puntajes Lighthouse hasta medir la versión desplegada.
