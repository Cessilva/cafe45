# Design System — Café 455

## Vibe
Cafetería boutique de especialidad. Minimalista, artesanal, acogedora. Inspirada en las calles empedradas de Coyoacán: raíces mexicanas, modernidad sutil.

## Paleta de colores
```css
--color-espresso:   #2C1A0E;  /* Café oscuro — titulos, texto principal */
--color-caramel:    #7B4A2D;  /* Café medio — acentos, botones */
--color-cream:      #F5ECD7;  /* Crema — fondo principal */
--color-parchment:  #EAD9BC;  /* Crema oscura — secciones alternadas */
--color-olive:      #5C6B4A;  /* Verde olivo — acentos secundarios */
--color-fog:        #D9CDB8;  /* Gris cálido — bordes, divisores */
--color-white:      #FEFAF4;  /* Blanco cálido — hero bg */
```

## Tipografía
- **Display / Títulos**: `Playfair Display` (serif elegante, Google Fonts) — evoca calidez clásica
- **Body / UI**: `DM Sans` (sans-serif limpia, legible) — moderna pero amigable
- Jerarquía: H1 3.5rem / H2 2.25rem / H3 1.5rem / body 1rem / caption 0.875rem
- Line-height generoso: 1.7 para cuerpo, 1.2 para titulares

## Layout
- Single page scrollable (SPA one-pager)
- Mobile-first, max-width 1200px centrado
- Secciones: Hero → Servicios → Menú preview → Horarios & Precios → Contacto → Footer
- Espaciado generoso entre secciones (padding 80px desktop / 48px mobile)

## Componentes
- **Hero**: Imagen de fondo con overlay, texto centrado, badge de apertura
- **Cards de servicios**: íconos minimalistas, texto breve, sin bordes cuadrados
- **Horarios**: tabla limpia, tipografía elegante
- **Contacto**: mapa embed + datos
- **Footer**: links de redes sociales, copyright

## Motion
- Fade-in + slide-up al hacer scroll (Intersection Observer, CSS puro)
- Transiciones suaves en hover (200ms ease)

## Fuentes (Google Fonts)
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap
```
