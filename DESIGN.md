# Design System - UD Monterrey

## Identidad Visual

### Paleta de Colores

**Colores Principales**
| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-primary` | `#c10230` | Rojo UD - Color institucional principal |
| `--color-primary-dark` | `#9a0226` | Rojo oscuro - Estados hover |
| `--color-hero-btn` | `#c1272d` | Rojo botones Hero |

**Colores Neutros**
| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-dark` | `#1a1a1a` | Fondos oscuros, footer |
| `--color-black` | `#000000` | Textos, elementos decorativos |
| `--color-gray-800` | `#1f2937` | Texto principal body |
| `--color-gray-600` | `#4b5563` | Texto secundario |
| `--color-gray-400` | `#9ca3af` | Placeholder, texto terciario |
| `--color-gray-200` | `#e5e5e5` | Bordes, divisores |
| `--color-gray-100` | `#f5f5f5` | Fondos alternos |
| `--color-white` | `#ffffff` | Fondos principales |

**Colores de Carreras** (para páginas de programas)
| Carrera | `primaryColor` |
|---------|----------------|
| Medicina | `#0ea5e9` (azul) |
| Odontología | `#0ea5e9` (azul) |
| Escuela de Medicina | `#0ea5e9` (azul) |

### Tipografía

**Fuente Principal**: Montserrat Variable

```css
--font-sans: 'Montserrat Variable', 'Montserrat', system-ui, -apple-system, sans-serif;
```

**Escala de Tamaños**
| Elemento | Tamaño | Peso |
|----------|--------|------|
| Hero Title | `clamp(2.2rem, 5vw, 3.8rem)` | 600 |
| Hero Subtitle | `clamp(1rem, 2vw, 1.2rem)` | 400 |
| Section Title | `2rem` | 600 |
| CTA Title | `clamp(1.8rem, 4vw, 2.8rem)` | 700 |
| Body Text | `0.95rem` | 400 |
| Small Text | `0.82rem` | 400 |
| Button Text | `0.85rem - 0.95rem` | 600 |

### Espaciado

- **Secciones verticales**: `5rem` padding
- **Container max-width**: `1200px`
- **Container padding**: `0 2rem`
- **Grid gaps**: `2.5rem - 4rem`

## Componentes

### Hero

- **Posición**: `fixed` (full viewport height)
- **Altura**: `min(100vh, 800px)`
- **Overlay**: Gradiente de negro (35% -> 25% -> 55%)
- **Contenido**: centrado verticalmente, alineado a la izquierda
- **Logo**: SVG inline dentro de badge blanco redondeado
- **Botones**: pills (border-radius: 50px), con variantes primary/secondary

**Botones Hero**
- Primary: fondo rojo (`--color-hero-btn`), texto blanco
- Secondary: fondo blanco, texto rojo
- Hover: transform translateY(-2px) + sombra

### Navbar (No utilizado actualmente)

- Posición fixed, transparente
- Logo SVG con badge blanco
- Variante dark: fondo semi-transparente con blur

### NuestraUniversidad

- Grid de 2 columnas (texto + imagen)
- Breakpoint: 900px (colapsa a 1 columna)
- Stats: valores grandes + labels
- Imágenes: sombra `0 8px 30px`

### CtaBanner

- Full width con imagen de fondo
- Overlay configurable (opacity 0.5 por defecto)
- Contenido centrado
- Botón blanco pill

### ContactForm

- Layout: grid 2 columnas (info + formulario)
- Panel izquierdo: fondo `--color-primary`, texto blanco
- Panel derecho: fondo blanco con sombra
- Inputs: border-radius 10px, fondo `--color-gray-100`
- Focus: borde primary + ring
- Botón: primary pill
- Breakpoint: 768px (colapsa a 1 columna)

### Footer

- Fondo: `--color-dark`
- Logo SVG en blanco
- Links sociales: opacity 0.8, hover 1.0
- Texto bottom: opacity 0.6, centrado

## Patrones de Diseño

### Responsividad

| Breakpoint | Comportamiento |
|------------|----------------|
| `> 900px` | Grid 2 columnas |
| `769px - 900px` | Transición |
| `≤ 768px` | 1 columna, Hero centrado |

### Sombras

```css
--color-shadow: rgba(0, 0, 0, 0.15);
```

Usado en:
- Hero buttons: `0 4px 15px`
- Cards: `0 8px 40px`
- Imágenes: `0 8px 30px`
- Logo badge: `0 2px 12px`

### Bordes Redondeados

- Buttons/badges: `50px` (pill)
- Cards: `24px`
- Inputs: `10px`
- Imágenes: `4px`

### Transiciones

```css
transition: all 0.25s ease;  /* Botones */
transition: all 0.2s ease;    /* Links, logo */
```

## Iconografía

- SVGs inline en componentes (logo, redes sociales, iconos de contacto)
- No se usa librería de iconos externa
- Iconos de redes sociales: Facebook, Instagram, WhatsApp

## Accesibilidad

- `lang="es"` en `<html>`
- `alt` vacío en imágenes decorativas (`alt=""`)
- `aria-label` en links de redes sociales
- `required` en campos obligatorios del formulario
- Focus states visibles en inputs

## Assets

### Imágenes

| Archivo | Uso | Dimensiones |
|---------|-----|-------------|
| `main-hero.jpg` | Hero principal | 1920x800 (densities 1x, 2x) |
| `edificio-uad.jpg` | Sección universidad | 600w (densities 1x, 2x) |
| `baner.jpg` | CTA Banner | 1920x800 (densities 1x, 2x) |
| `Lobos-logo-rojo.svg` | Logo | No utilizado en componentes |

### Favicon

- `favicon.svg`: SVG con logo UD
- `favicon.ico`: Fallback para navegadores antiguos
