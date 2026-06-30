# Guía para Agentes - UD Monterrey

## Comandos del Proyecto

```bash
# Desarrollo local
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview
```

## Arquitectura del Proyecto

- **Framework**: Astro v6 (estático por defecto)
- **Lenguaje**: TypeScript estricto (`astro/tsconfigs/strict`)
- **CSS**: Vanilla CSS con scopes por componente (`<style>` en cada `.astro`)
- **Fuente**: Montserrat Variable (importada vía `@fontsource-variable/montserrat`)

### Estructura de Directorios

```
src/
├── assets/           # Imágenes y SVGs optimizados por Astro
│   └── images/
│       └── main-page/
├── components/       # Componentes Astro reutilizables
├── layouts/          # Layouts base (BaseLayout.astro)
├── pages/            # Rutas del sitio (file-based routing)
└── styles/           # Estilos globales (global.css)
public/               # Assets estáticos sin procesar
```

### Páginas Existentes

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `index.astro` | Página principal |
| `/medicina` | `medicina.astro` | Licenciatura en Medicina (placeholder) |
| `/odontologia` | `odontologia.astro` | Licenciatura en Odontología (placeholder) |
| `/escuela_de_medicina` | `escuela_de_medicina.astro` | Escuela de Medicina (placeholder) |

## Convenciones de Código

### Componentes Astro

- Usar **TypeScript interfaces** para definir Props en cada componente
- Nombrar componentes en **PascalCase**: `Hero.astro`, `CtaBanner.astro`
- Usar **BEM-like** para clases CSS: `.hero__title`, `.hero__link--primary`
- El CSS se escribe dentro de `<style>` scoped al componente
- Usar **CSS custom properties** para colores definidas en `:root` de `global.css`

### Ejemplo de Estructura de Componente

```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<section class="component">
  <h2 class="component__title">{title}</h2>
</section>

<style>
  .component { /* estilos */ }
  .component__title { /* estilos */ }
</style>
```

### Imágenes

- Usar `<Image>` de `astro:assets` para imágenes optimizadas
- Importar imágenes desde `src/assets/`
- Usar `densities={[1, 2]}` para responsive images
- Usar `loading="lazy"` excepto en el Hero principal (`loading="eager"`)

### Variables CSS Principales

Definidas en `src/styles/global.css`:

```css
--color-primary: #c10230;     /* Rojo UD */
--color-primary-dark: #9a0226;
--color-hero-btn: #c1272d;
--color-dark: #1a1a1a;
--color-white: #ffffff;
--color-gray-100: #f5f5f5;
--color-gray-800: #1f2937;
--color-text: #333333;
--font-sans: 'Montserrat Variable', 'Montserrat', system-ui, sans-serif;
```

### Temas por Página

Las páginas de carreras usan un color primario diferente:

```astro
---
const primaryColor = '#0ea5e9'; // Azul para medicina/odontología
---

<BaseLayout title="..." primaryColor={primaryColor}>
```

El `primaryColor` se inyecta como CSS variable en el `<html>`:

```html
<html style="--color-primary: ${primaryColor};">
```

## Patrones de Diseño

### Layout Base (`BaseLayout.astro`)

- Acepta: `title`, `description`, `primaryColor`
- Importa `global.css` y la fuente Montserrat
- Renderiza `<html>`, `<head>`, `<body>` con `<slot />`

### Hero (Patrón Fixed)

- El Hero es **fixed** (`position: fixed`) cubriendo toda la pantalla
- El contenido de la página usa `margin-top: var(--hero-height)` para offset
- `--hero-height: min(100vh, 800px)`
- El Hero incluye el logo SVG inline

### Formulario de Contacto

- La sección tiene `id="contacto"` para anclaje
- El formulario es **HTML estático** (action="#", method="POST")
- No hay backend integrado actualmente

## Reglas para Modificar el Proyecto

1. **No agregar dependencias innecesarias** - El proyecto es deliberadamente ligero
2. **Mantener CSS scoped** - Usar `<style>` en componentes, evitar CSS global
3. **Respetar BEM** - Nomenclatura `block__element--modifier`
4. **Imágenes en assets** - Colocar en `src/assets/images/` y usar `<Image>`
5. **TypeScript estricto** - Siempre definir interfaces para Props
6. **Sin frameworks UI** - Solo componentes Astro, no usar React/Vue/Svelte
7. **Responsive primero** - Usar `clamp()`, media queries en 768px y 900px
8. **Colores vía CSS variables** - Nunca hardcodear colores en componentes

## Pendiente / En Desarrollo

- Las páginas de `/medicina`, `/odontologia`, `/escuela_de_medicina` son placeholders
- El formulario de contacto no tiene backend integrado
- No hay sistema de navegación (solo logo link a home)
- No hay página 404 personalizada
