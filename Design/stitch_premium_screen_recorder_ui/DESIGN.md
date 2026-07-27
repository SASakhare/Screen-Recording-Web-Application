---
name: Obsidian Glow
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e2e2eb'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e2e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#fbabff'
  on-secondary: '#580065'
  secondary-container: '#ae05c6'
  on-secondary-container: '#ffd8fd'
  tertiary: '#ffb869'
  on-tertiary: '#482900'
  tertiary-container: '#ca801e'
  on-tertiary-container: '#3f2300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffd6fd'
  secondary-fixed-dim: '#fbabff'
  on-secondary-fixed: '#36003e'
  on-secondary-fixed-variant: '#7c008e'
  tertiary-fixed: '#ffdcbb'
  tertiary-fixed-dim: '#ffb869'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#111319'
  on-background: '#e2e2eb'
  surface-variant: '#33343b'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for the high-end creative professional, evoking a sense of precision, power, and cinematic focus. The aesthetic is "Studio Dark"—a refined fusion of **Minimalism** and **Glassmorphism**. It prioritizes the user's content by receding into the background with deep charcoal tones, while utilizing vibrant electric violet accents to signal action and state changes. 

The emotional response is one of calm control and technical mastery. By employing soft background blurs, subtle glowing gradients, and generous negative space, the UI feels like a premium piece of hardware. It balances the utility of a pro-tool like CleanShot X with the visual polish of a high-end video editor.

## Colors

The palette is anchored in a "True Dark" philosophy. The primary background uses a deep charcoal (#0F1117) to ensure high contrast for recorded content. 

- **Primary & Secondary**: An electric gradient (Violet to Fuchsia) is reserved for high-intent actions, recording indicators, and premium features.
- **Neutrals**: Slate-800 (#1E293B) is used for structural borders to maintain a "barely-there" architectural feel. 
- **Surfaces**: We use a slightly elevated surface color (#161B22) for cards and modals, often paired with a 60% opacity for glassmorphism effects.
- **Accents**: Subtle glows should use the primary violet with a 20% opacity and a high (40px+) blur radius to simulate light emission from active tools.

## Typography

This design system utilizes **Inter** for its incredible legibility and neutral, professional character. For technical labels and UI metadata (like timestamps or resolution settings), **Geist** is used to provide a modern, developer-tool aesthetic that feels precise.

- **Headlines**: Use tighter letter spacing and semi-bold weights to create a "locked-in" look.
- **Body**: Standard weight with generous line height for readability against dark backgrounds.
- **Labels**: Always uppercase with increased tracking to differentiate functional UI elements from narrative content.
- **Scale**: On mobile, large display type should scale down significantly to avoid awkward wrapping in dense toolbars.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict adherence to a 4px baseline shift. This ensures that even complex video editing timelines and recording controls remain perfectly aligned.

- **Desktop**: A 12-column grid for dashboard views. Toolbars and floating controllers (like the recorder HUD) use "No Grid" positioning, relying on fixed margins (32px) from the screen edges.
- **Mobile**: A 4-column grid with 16px side margins.
- **Rhythm**: Use `md` (16px) for internal component padding and `lg` (24px) for spacing between distinct functional groups. Large `xl` (40px) gaps are used to separate the "Stage" (recorded area) from the "Controls" (UI).

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

1.  **Level 0 (Base)**: Deep Charcoal (#0F1117).
2.  **Level 1 (Cards/Panels)**: Surface (#161B22) with a 1px Slate-800 border.
3.  **Level 2 (Floating HUDs/Modals)**: Semi-transparent surface (60% opacity) with a `backdrop-filter: blur(12px)`.
4.  **Level 3 (Active State)**: Elements gain a subtle outer glow using the Primary Violet color (Spread: 2px, Blur: 15px, Opacity: 0.2).

Avoid traditional black shadows; instead, use darker "inner glows" or simply rely on the contrast of the Slate-800 borders to define edges.

## Shapes

The design system uses a **Rounded** philosophy to soften the technical nature of the app, making it feel more like a modern consumer product.

- **Standard Elements**: 0.5rem (8px) for buttons and inputs.
- **Containers**: 1rem (16px) for cards, sidebars, and main UI panels.
- **Featured Surfaces**: 1.5rem (24px) for the main recording HUD and floating action menus to create a distinct, "pebble" feel that stands out from the screen edges.

## Components

### Buttons
- **Primary**: Gradient background (Violet to Fuchsia), white text, 8px corner radius. On hover, increase the brightness of the gradient.
- **Secondary**: Ghost style. Slate-800 border, transparent background, white text.
- **Recording Button**: A distinctive "Pulse" state. When active, the button becomes a perfect circle with a red glowing center.

### Input Fields & Controls
- **Fields**: Background #161B22, 1px border #1E293B. Focus state uses a 1px Violet border with a very subtle inner glow.
- **Sliders**: Used for volume/mic levels. Track is Slate-800; the "fill" is the Violet gradient; the "thumb" is a crisp white circle.

### Cards & HUDs
- Floating components must have a subtle white "top-light" border (0.5px at 10% opacity) on the top edge only to simulate 3D depth in a dark environment.

### Chips & Badges
- Used for "Resolution" (e.g., 4K) or "Status" (e.g., Live). Use a dark background with text in the Primary Violet color. High roundedness (Pill-shaped).

### Special Component: The "Recorder HUD"
- A floating, draggable bar. Must use the highest level of Glassmorphism (blur 20px) and a 24px corner radius. All icons within should be "Linear" style with a 1.5px stroke width.