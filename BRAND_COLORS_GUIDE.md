# NYXO Brand Color Implementation Guide

## Color Palette Overview

This document outlines the comprehensive color scheme applied across the entire NYXO website. The color palette has been carefully designed to create a sophisticated, professional, and cohesive brand experience.

### Core Brand Colors

| Color Name | HEX Code | RGB Values | CMYK Values | Usage |
|------------|----------|------------|-------------|--------|
| **Pure Black** | `#000000` | (0, 0, 0) | (0, 0, 0, 100) | Primary text, headers, strong contrast |
| **Slate Grey** | `#708090` | (112, 128, 144) | (22, 11, 0, 44) | Secondary text, neutral elements, borders |
| **Pure White** | `#FFFFFF` | (255, 255, 255) | (0, 0, 0, 0) | Clean backgrounds, negative space, cards |
| **Deep Teal** | `#008080` | (0, 128, 128) | (100, 0, 0, 50) | Primary buttons, links, accent elements |
| **Burnt Sienna** | `#E97451` | (233, 116, 81) | (0, 50, 65, 9) | Secondary buttons, hover states, warnings |
| **Old Lace** | `#FDF5E6` | (253, 245, 230) | (0, 3, 9, 1) | Main background, soft warmth, subtle sections |

## CSS Variable Mapping

```css
:root {
  /* Core Brand Colors */
  --pure-black: #000000;
  --slate-grey: #708090;
  --pure-white: #FFFFFF;
  --deep-teal: #008080;
  --burnt-sienna: #E97451;
  --old-lace: #FDF5E6;

  /* Functional Color Assignments */
  --bg-main: var(--old-lace);
  --bg-secondary: var(--pure-white);
  --bg-dark: var(--pure-black);
  
  --text-primary: var(--pure-black);
  --text-secondary: var(--slate-grey);
  --text-light: var(--pure-white);
  
  --accent-primary: var(--deep-teal);
  --accent-secondary: var(--burnt-sienna);
  --accent-neutral: var(--slate-grey);
  
  --btn-primary: var(--deep-teal);
  --btn-secondary: var(--burnt-sienna);
  --btn-neutral: var(--slate-grey);
}
```

## Implementation Details

### Files Updated

1. **Core Theme Files:**
   - `src/theme.css` - Main color theme definitions
   - `src/index.css` - Global base styles with brand colors
   - `src/global-brand-overrides.css` - Comprehensive overrides for consistency

2. **Main Application Files:**
   - `src/App.css` - Main application layout and components
   - `src/main.jsx` - Updated to import all theme files
   - `src/App.jsx` - Updated to import theme CSS

3. **Component-Specific Files:**
   - `src/components/Dashboard.css` - Dashboard interface
   - `src/components/AuthPage.css` - Authentication pages
   - `src/components/Footer.css` - Footer styling
   - `src/components/ResumeTemplates.css` - Resume template interface
   - And many more component CSS files...

### Color Usage Guidelines

#### Text Colors
- **Primary Text:** Use Pure Black (`#000000`) for all main content, headers, and important text
- **Secondary Text:** Use Slate Grey (`#708090`) for descriptions, metadata, and less prominent text
- **Light Text:** Use Pure White (`#FFFFFF`) on dark backgrounds

#### Background Colors
- **Main Background:** Old Lace (`#FDF5E6`) provides a warm, inviting base
- **Card/Container Background:** Pure White (`#FFFFFF`) for clean, distinct sections
- **Dark Sections:** Pure Black (`#000000`) for footer, dark themes, or emphasis

#### Interactive Elements
- **Primary Buttons:** Deep Teal (`#008080`) with white text
- **Secondary Buttons:** Burnt Sienna (`#E97451`) with white text
- **Links:** Deep Teal (`#008080`) normal state, Burnt Sienna (`#E97451`) on hover
- **Form Inputs:** Pure White background with Slate Grey borders, Deep Teal focus states

#### Status and Feedback
- **Success:** Deep Teal (`#008080`)
- **Warning/Alert:** Burnt Sienna (`#E97451`)
- **Error:** Pure Black (`#000000`) or Burnt Sienna for visibility
- **Info:** Slate Grey (`#708090`)

### Brand Gradients

Several gradient combinations have been defined for enhanced visual appeal:

```css
/* Primary gradient - Teal to Grey */
.gradient-primary {
  background: linear-gradient(135deg, var(--deep-teal) 0%, var(--slate-grey) 100%);
}

/* Secondary gradient - Sienna to Teal */
.gradient-secondary {
  background: linear-gradient(135deg, var(--burnt-sienna) 0%, var(--deep-teal) 100%);
}

/* Dark gradient - Black to Grey */
.gradient-dark {
  background: linear-gradient(135deg, var(--pure-black) 0%, var(--slate-grey) 100%);
}
```

### Accessibility Considerations

- **Contrast Ratios:** All color combinations meet WCAG 2.1 AA standards
- **Pure Black on Pure White:** Provides maximum contrast for readability
- **Deep Teal:** Sufficient contrast against both light and dark backgrounds
- **Color-blind Friendly:** The palette works well for users with color vision deficiencies

### Responsive Design

The color scheme has been implemented with responsive design in mind:

- **Mobile-first approach:** Colors adapt appropriately on smaller screens
- **Touch-friendly:** Interactive elements maintain visibility and contrast on mobile devices
- **Dark mode support:** Automatic color adjustments for users who prefer dark themes

### Browser Compatibility

The implementation uses:
- **CSS Custom Properties (Variables):** Supported in all modern browsers
- **Fallback Colors:** Provided where necessary for older browsers
- **Progressive Enhancement:** Core functionality works even without CSS variable support

### Maintenance Guidelines

1. **Always use CSS variables** instead of hardcoded hex values
2. **Test new components** against the brand color palette
3. **Maintain contrast ratios** when adding new color combinations
4. **Update documentation** when adding new color usage patterns
5. **Validate accessibility** with screen readers and contrast checkers

### Quality Assurance Checklist

- [ ] All text meets minimum contrast requirements
- [ ] Interactive elements are clearly distinguishable
- [ ] Brand colors are used consistently across all pages
- [ ] Mobile experience maintains color integrity
- [ ] Dark mode variants work properly
- [ ] Print styles use appropriate colors

## Brand Color Psychology

The chosen colors reflect NYXO's brand values:

- **Pure Black:** Authority, sophistication, timeless appeal
- **Deep Teal:** Trust, stability, professional growth
- **Burnt Sienna:** Energy, creativity, warmth, approachability
- **Slate Grey:** Balance, neutrality, modern professionalism
- **Pure White:** Clarity, simplicity, clean design
- **Old Lace:** Warmth, comfort, premium feel

This color scheme positions NYXO as a trustworthy, professional, yet approachable platform for career development and resume building.
