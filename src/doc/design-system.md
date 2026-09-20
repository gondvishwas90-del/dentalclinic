# DESIGN SYSTEM.md — PREMIUM DENTAL CLINIC

## MASTER DESIGN SYSTEM

This document is the **single source of truth for the visual design system** of the Dental Clinic website.

Antigravity MUST treat this document as a foundational design specification.

The system must be:

* Premium
* Clinical
* Modern
* Elegant
* Minimal
* Trustworthy
* Human
* Technology-forward
* Highly responsive
* Fluid
* Accessible
* Performance-conscious

The website should feel like a combination of:

**Premium Dental Care + Luxury Editorial Design + Modern Digital Technology**

Do NOT create a generic medical/dental website.

---

# 01 — DESIGN SYSTEM PRINCIPLE

The website is NOT designed as four independent layouts.

Do NOT create:

* One desktop design
* One laptop design
* One tablet design
* One mobile design

Instead, create **ONE fluid design system** that continuously adapts to the available viewport.

The four major device conditions are:

```text
MOBILE
TABLET
LAPTOP
DESKTOP
```

These are reference conditions, NOT rigid design boundaries.

The UI must continuously scale and reflow between them.

---

# 02 — FLUID-FIRST DESIGN PHILOSOPHY

Every visual property should be considered on a fluid scale where appropriate.

This includes:

* Typography
* Section spacing
* Container padding
* Grid gaps
* Card spacing
* Image dimensions
* Button dimensions
* Border radius
* Hero spacing
* Section heights
* Navigation spacing
* Content width
* Component gaps
* 3D model scale
* Animation distances

Do NOT hardcode large collections of unrelated pixel values.

Prefer:

```css
clamp()
min()
max()
vw
vh
rem
%
aspect-ratio
CSS Grid
Flexbox
container queries where appropriate
```

Example:

```css
font-size: clamp(2.75rem, 7vw, 7.5rem);
```

rather than:

```css
font-size: 72px;
```

The exact values should be chosen according to the actual component and viewport.

---

# 03 — 60 / 30 / 10 COLOR SYSTEM

The primary visual color ratio is:

```text
60% — Soft Ivory
30% — Deep Charcoal
10% — Luxury Bronze
```

This ratio is a visual guideline, not a mathematical requirement for every component.

The objective is to prevent the accent color from dominating the interface.

---

# 04 — PRIMARY 60% COLOR

## Soft Ivory

```text
#F7F8F6
```

Primary website canvas.

Use for:

* Main page background
* Large whitespace areas
* Main content sections
* Editorial sections
* Service sections
* Treatment sections
* Large visual spaces

This should establish the overall calm, premium environment.

---

# 05 — SECONDARY 30% COLOR

## Deep Charcoal

```text
#14151D
```

Primary dark visual color.

Use for:

* H1
* H2
* H3
* Navigation
* Important text
* Footer
* Dark sections
* Large typography
* Strong contrast areas

Do NOT use pure black everywhere.

The dark color should feel sophisticated rather than harsh.

---

# 06 — ACCENT 10% COLOR

## Luxury Bronze

```text
#B38C61
```

Primary premium accent.

Use selectively for:

* Primary CTA
* CTA hover state
* Active indicators
* Small highlights
* Important icons
* Treatment indicators
* Technology indicators
* Decorative details
* Selected UI states

Do NOT use bronze on:

* Every heading
* Every icon
* Every border
* Large background areas
* Every button
* Every section

The bronze should feel **rare and intentional**.

---

# 07 — SUPPORTING COLOR TOKENS

Use the following supporting colors:

```text
Background
#F7F8F6

Surface
#FFFFFF

Secondary Surface
#EAE8E8

Primary Text
#14151D

Secondary Text
#424346

Muted Text
#6B6D70

Border
#D6D1D0

Accent
#B38C61

Accent Soft
#EAE8E8

Soft Blue
#DCEBFA

Clinical Blue
#2F80ED

Success
Use an accessible, restrained green token.

Warning
Use an accessible, restrained amber token.

Error
Use an accessible, restrained red token.
```

### Important

`#2F80ED` remains available as a **supporting clinical/functional blue**, but it is NOT the primary brand accent.

Use it only where blue communicates function, technology, links, information, or medical UI meaning.

The primary premium brand accent remains:

```text
#B38C61
```

---

# 08 — COLOR BEHAVIOR

Color should communicate hierarchy.

### Primary

```text
#F7F8F6
```

Creates calm space.

### Secondary

```text
#14151D
```

Creates authority and typography contrast.

### Accent

```text
#B38C61
```

Creates focus and premium detail.

### Supporting neutrals

Create hierarchy without introducing unnecessary colors.

Avoid introducing random colors during implementation.

If a new color is required, first check whether an existing token can fulfill the purpose.

---

# 09 — COLOR CONTRAST

Accessibility takes priority over aesthetics.

Ensure:

* Text remains readable
* CTA text remains readable
* Focus states are visible
* Disabled states remain understandable
* Bronze is not used for low-contrast body text
* Important information is never communicated by color alone

Do not sacrifice accessibility to preserve the 60/30/10 ratio.

---

# 10 — TYPOGRAPHY SYSTEM

Primary typography:

```text
DISPLAY
Instrument

BODY / UI
Inter
```

---

# 11 — DISPLAY FONT

## Instrument

Use Instrument for:

* H1
* H2
* Major H3
* Hero typography
* Editorial statements
* Large numbers
* Major treatment titles
* Section statements
* Signature visual moments

Default:

```css
font-family: "Instrument", sans-serif;
font-weight: 400;
```

Do NOT automatically use bold Instrument everywhere.

The design should rely on:

* Scale
* Spacing
* Composition
* Contrast
* Weight
* Position

rather than excessive font weight.

---

# 12 — BODY FONT

## Inter

Use Inter for:

* Body
* Navigation
* Buttons
* Forms
* Labels
* Metadata
* Descriptions
* Supporting information
* Doctor information
* Service descriptions

Default:

```css
font-family: "Inter", sans-serif;
font-weight: 400;
```

---

# 13 — FLUID TYPOGRAPHY

Typography MUST be fluid.

Do NOT define typography as fixed values for each device.

Avoid:

```text
Desktop = 96px
Laptop = 72px
Tablet = 52px
Mobile = 36px
```

Instead use fluid ranges.

Example:

```css
font-size: clamp(3rem, 8vw, 8rem);
```

This allows the type to interpolate naturally.

---

# 14 — TYPE SCALE

Use a responsive type scale approximately based on:

### Display / H1

```css
font-size: clamp(3rem, 7.5vw, 8rem);
line-height: 0.9;
letter-spacing: -0.04em;
```

### H2

```css
font-size: clamp(2.25rem, 5vw, 5rem);
line-height: 0.95;
letter-spacing: -0.035em;
```

### H3

```css
font-size: clamp(1.75rem, 3vw, 3rem);
line-height: 1;
letter-spacing: -0.025em;
```

### H4

```css
font-size: clamp(1.35rem, 2vw, 2rem);
line-height: 1.1;
```

### Body Large

```css
font-size: clamp(1.05rem, 1.2vw, 1.25rem);
line-height: 1.6;
```

### Body

```css
font-size: clamp(0.95rem, 1vw, 1.125rem);
line-height: 1.6;
```

### Small

```css
font-size: clamp(0.75rem, 0.8vw, 0.875rem);
line-height: 1.4;
```

### Navigation

```css
font-size: clamp(0.75rem, 0.8vw, 0.875rem);
font-weight: 500;
letter-spacing: 0.02em;
```

### Buttons

```css
font-size: clamp(0.8rem, 0.85vw, 0.95rem);
font-weight: 500;
```

These values are starting tokens.

Antigravity may adjust them slightly when required by actual content, layout, accessibility, or visual balance.

---

# 15 — TYPOGRAPHY RULES

Never allow text to become:

* Too small
* Too wide
* Too tightly packed
* Too difficult to scan

Use:

* `max-width`
* `ch`
* responsive line lengths
* controlled line-height

Example:

```css
max-width: 60ch;
```

Body paragraphs should generally not span the entire viewport.

---

# 16 — FLUID SPACING SYSTEM

Spacing must also be fluid.

Do NOT use a rigid:

```text
20px
40px
60px
80px
```

system everywhere.

Instead define fluid spacing tokens.

Example:

```css
--space-xs: clamp(0.375rem, 0.5vw, 0.625rem);

--space-sm: clamp(0.625rem, 0.8vw, 1rem);

--space-md: clamp(1rem, 1.5vw, 1.5rem);

--space-lg: clamp(1.5rem, 2.5vw, 2.5rem);

--space-xl: clamp(2.5rem, 4vw, 4rem);

--space-2xl: clamp(4rem, 7vw, 7rem);

--space-3xl: clamp(6rem, 10vw, 12rem);
```

Use these as fluid foundations.

---

# 17 — SECTION SPACING

Section spacing should adapt according to:

* Viewport width
* Content density
* Section importance
* Image size
* Typography scale
* Device orientation

Example:

```css
padding-block: clamp(4rem, 9vw, 10rem);
```

Do not make every section the same height.

Premium design depends on intentional rhythm.

---

# 18 — CONTAINER SYSTEM

Use a centered responsive container.

Recommended:

```css
width: min(100% - 2 * var(--page-padding), var(--container-max));
margin-inline: auto;
```

Example token:

```css
--container-max: 1440px;
```

The exact maximum can be adjusted according to the actual design.

---

# 19 — FLUID PAGE PADDING

Page padding should scale with the viewport.

Example:

```css
--page-padding: clamp(1rem, 4vw, 5rem);
```

The UI should never feel:

* Cramped on mobile
* Excessively stretched on desktop
* Disconnected from the viewport

---

# 20 — GRID SYSTEM

Use CSS Grid and Flexbox.

Do NOT build the layout using arbitrary absolute positioning.

Primary grid:

```text
12-column desktop-oriented grid
```

But the grid must collapse fluidly.

Possible behavior:

```text
Large desktop
12 columns

Laptop
12 / 8 / 6 depending on component

Tablet
6 / 4 columns

Mobile
1–2 columns depending on content
```

Do not force every section into the same column count.

Choose the grid according to content.

---

# 21 — FLUID GRID GAPS

Use:

```css
gap: clamp(1rem, 2vw, 2rem);
```

For large editorial layouts:

```css
gap: clamp(2rem, 4vw, 5rem);
```

Grid spacing must scale naturally.

---

# 22 — CONTENT WIDTH

Use different maximum widths for different content types.

### Reading content

Approximately:

```text
55–70ch
```

### Hero copy

Approximately:

```text
8–14 words per major line where appropriate
```

### Large display composition

May use significantly wider containers.

### Forms

Avoid unnecessarily wide form fields.

---

# 23 — RESPONSIVE SYSTEM

The website must support:

```text
MOBILE
TABLET
LAPTOP
DESKTOP
```

But these are NOT rigid design modes.

Use responsive CSS to continuously interpolate between states.

---

# 24 — MOBILE

Mobile width can vary significantly.

The design must work across:

* Small phones
* Standard phones
* Large phones

Rules:

* Maintain comfortable page padding
* Prevent horizontal overflow
* Reduce unnecessary animation
* Simplify complex layouts
* Preserve hierarchy
* Maintain readable typography
* Keep CTA interactions accessible
* Use touch-friendly controls

Do not simply shrink desktop.

---

# 25 — TABLET

Tablet should be treated as a genuine intermediate layout.

Do not automatically use the mobile layout.

Depending on width:

* Two-column layouts may remain
* Gallery layouts may become 2-column
* Navigation may transition to compact mode
* Typography should continue scaling fluidly
* Images should maintain intended proportions

---

# 26 — LAPTOP

Laptop is not simply a smaller desktop.

Consider:

* Reduced horizontal space
* Reduced viewport height
* Navigation compression
* Hero composition
* Text wrapping
* Image proportions
* Section density

Use fluid sizing to naturally adapt.

---

# 27 — DESKTOP

Large desktop should provide:

* Generous whitespace
* Strong typography
* Editorial compositions
* Large imagery
* Sophisticated grid layouts
* More visual breathing room

Do not stretch content indefinitely.

Use max-width containers.

---

# 28 — BREAKPOINT PHILOSOPHY

Breakpoints may be used when the layout genuinely needs structural change.

Do NOT create dozens of breakpoints.

Prefer:

```css
clamp()
min()
max()
auto-fit
auto-fill
minmax()
flex-wrap
grid-template-columns
container queries
```

before adding another breakpoint.

Breakpoints should describe **layout changes**, not arbitrary device names.

---

# 29 — COMPONENT RESPONSIVENESS

Every component must define:

```text
Minimum viable width
Preferred width
Maximum width
```

The component should gracefully resize between these values.

Example:

```text
Service Card
min-width → readable mobile size
fluid width → available space
max-width → controlled desktop width
```

---

# 30 — BUTTON SYSTEM

Buttons must also be fluid.

Avoid unnecessarily fixed dimensions.

Use:

```css
padding-inline: clamp(1rem, 2vw, 1.75rem);
padding-block: clamp(0.7rem, 1vw, 1rem);
```

Minimum touch target:

```text
44 × 44px
```

Prefer slightly larger where appropriate.

---

# 31 — BORDER RADIUS

Use a restrained radius system.

Example:

```css
--radius-sm: 0.5rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
```

Use larger radius only where the component design benefits from it.

Avoid making every element excessively rounded.

---

# 32 — IMAGE SYSTEM

Images are a major part of the premium dental experience.

Use:

* High-quality dental photography
* Patient transformation photography
* Clinic photography
* Doctor photography
* Technology photography
* Carefully selected editorial imagery

Maintain:

```text
aspect-ratio
object-fit
object-position
```

Avoid distorted images.

Use responsive image loading.

Use optimized formats where supported.

---

# 33 — IMAGE COMPOSITION

Image layouts should use:

* Editorial cropping
* Controlled whitespace
* Asymmetric compositions
* Large image blocks
* Layered image compositions
* Before/after comparisons
* Technology imagery

Avoid random masonry layouts unless they serve the content.

---

# 34 — CARD SYSTEM

Cards should not automatically have:

* Heavy shadows
* Thick borders
* Excessive rounding
* Bright backgrounds

Premium cards may use:

* Clean surface
* Thin border
* Strong typography
* Image-led design
* Subtle hover movement

Use whitespace as a primary design tool.

---

# 35 — SHADOW SYSTEM

Use shadows minimally.

Example:

```css
--shadow-soft:
0 10px 30px rgba(20, 21, 29, 0.06);

--shadow-medium:
0 20px 50px rgba(20, 21, 29, 0.10);
```

Avoid dramatic floating-card effects.

---

# 36 — NAVIGATION VISUAL SYSTEM

Navbar should be:

* Minimal
* Clean
* Compact
* Highly readable

Use:

* Deep Charcoal typography
* Soft Ivory/transparent background initially where appropriate
* Controlled surface transition on scroll
* Bronze only for important active/CTA states

Navigation must not dominate the page.

---

# 37 — DARK SECTIONS

Dark sections use:

```text
Background → #14151D
Primary text → #F7F8F6
Accent → #B38C61
Secondary text → supporting neutral with sufficient contrast
```

Dark sections should be used strategically.

They can create:

* Visual breaks
* Technology storytelling
* CTA moments
* Footer
* Premium transitions

Do not make half the website dark without purpose.

---

# 38 — CTA SYSTEM

Primary CTA:

```text
Background → #B38C61
Text → appropriate high-contrast light/dark value
```

Secondary CTA:

```text
Transparent / minimal
Border → #14151D
Text → #14151D
```

Tertiary CTA:

```text
Text / arrow interaction
```

CTA hierarchy must remain obvious.

---

# 39 — ICON SYSTEM

Icons should be:

* Minimal
* Consistent
* Geometric
* Lightweight

Avoid mixing unrelated icon styles.

Use icons primarily for:

* Navigation
* Treatment categories
* Technology
* Contact
* Interaction affordances

Do not use icons merely for decoration.

---

# 40 — FORM SYSTEM

Forms must use:

* Clear labels
* Large touch targets
* Strong focus state
* Proper validation
* Accessible error messages
* Success feedback

Visual design:

```text
Soft surface
Subtle border
Strong text
Minimal accent
```

Focus state may use the bronze or clinical blue token depending on context and accessibility.

---

# 41 — UI STATE SYSTEM

Every interactive component should account for:

```text
Default
Hover
Focus
Active
Pressed
Disabled
Loading
Success
Error
```

Not every component needs every state, but interactive behavior must be defined intentionally.

---

# 42 — HOVER SYSTEM

Hover should be subtle.

Preferred behaviors:

* Image scale
* Arrow movement
* Text color transition
* Border transition
* Background transition
* Small translation

Avoid:

* Huge scaling
* Excessive rotation
* Flashing colors
* Strong distortion

Touch devices must not depend on hover.

---

# 43 — ACCESSIBILITY

The visual system must support:

* Keyboard navigation
* Screen readers
* Focus visibility
* Reduced motion
* Sufficient contrast
* Touch accessibility
* Readable font sizes

Do not hide important content behind visual interactions.

---

# 44 — REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce or remove:

* Parallax
* Large transforms
* Continuous animation
* Cursor effects
* Complex transitions
* Scroll-scrub effects

Keep essential state changes understandable.

---

# 45 — PERFORMANCE

The design system must support high performance.

Prioritize:

* CSS transforms
* Opacity
* Responsive images
* Lazy loading
* Efficient DOM
* CSS Grid
* Flexbox
* Optimized fonts
* Optimized 3D assets

Avoid:

* Excessive DOM nesting
* Unnecessary JavaScript
* Heavy blur
* Massive images
* Unoptimized video
* Unnecessary WebGL

---

# 46 — 3D VISUAL SYSTEM

If the website uses 3D dental models:

3D must feel:

* Anatomically accurate
* Premium
* Clean
* Controlled
* Medically credible

The model should integrate into the layout rather than look like a separate game/demo.

Use 3D for:

* Tooth anatomy
* Implant visualization
* Smile design
* Treatment explanation
* Technology storytelling

Provide a fallback for devices that cannot efficiently render the model.

---

# 47 — FLUID 3D SCALE

3D models should also scale fluidly.

Do not use:

```text
Desktop model = 600px
Mobile model = 300px
```

Instead consider:

```css
width: clamp(18rem, 45vw, 42rem);
```

Position and scale should adapt according to the available composition.

---

# 48 — DESIGN RHYTHM

The website should alternate between:

```text
Whitespace
↓
Typography
↓
Image
↓
Information
↓
Interaction
↓
Whitespace
```

Avoid stacking:

```text
Card
Card
Card
Card
Card
Card
```

without visual breathing room.

Premium design comes from rhythm.

---

# 49 — VISUAL HIERARCHY

Every section must have:

### Level 1

Primary message.

### Level 2

Supporting explanation.

### Level 3

Interaction/CTA.

### Level 4

Secondary information.

Do not make everything visually important.

---

# 50 — EDITORIAL DESIGN PRINCIPLES

Use:

* Large typography
* Generous whitespace
* Strong image composition
* Asymmetry
* Controlled grid-breaking
* Large negative space
* Intentional alignment

But never sacrifice usability for visual experimentation.

---

# 51 — PREMIUM DENTAL VISUAL LANGUAGE

The final visual identity should communicate:

```text
PRECISION
      +
CARE
      +
TECHNOLOGY
      +
TRUST
      +
LUXURY
```

Avoid:

```text
Generic hospital UI
Generic blue medical template
Overly rounded SaaS UI
Excessive gradients
Excessive glassmorphism
Excessive neon
AI-generated visual clichés
```

---

# 52 — RESPONSIVE CONTENT PRIORITY

When space becomes limited, reduce visual complexity in this order:

```text
Decorative elements
↓
Secondary imagery
↓
Non-essential animation
↓
Secondary metadata
↓
Complex grid relationships
```

Never remove:

```text
Primary message
Primary CTA
Important medical information
Navigation access
Essential contact information
Accessibility
```

---

# 53 — FLUIDITY RULE

Whenever a designer/developer asks:

"Should this be 40px or 60px?"

Do not automatically choose one fixed number.

Ask:

* What is the minimum comfortable size?
* What is the preferred size?
* What is the maximum size?
* How should it interpolate between viewport widths?

Then use a fluid value where appropriate.

Example:

```css
padding-block: clamp(2rem, 5vw, 5rem);
```

---

# 54 — NO OVERFITTING

Do not optimize only for the developer's current monitor.

The design must be tested across:

```text
Small Mobile
Large Mobile
Tablet Portrait
Tablet Landscape
Laptop
Large Laptop
Desktop
Large Desktop
```

Also test:

* Short viewport height
* Tall viewport
* Browser zoom
* Different text lengths
* Long doctor names
* Long treatment names
* Long practical details

---

# 55 — DESIGN TOKENS

Create reusable CSS variables.

Example:

```css
:root {
  /* Colors */
  --color-bg: #F7F8F6;
  --color-surface: #FFFFFF;
  --color-surface-soft: #EAE8E8;

  --color-text: #14151D;
  --color-text-secondary: #424346;
  --color-text-muted: #6B6D70;

  --color-border: #D6D1D0;

  --color-accent: #B38C61;
  --color-accent-soft: #EAE8E8;

  --color-clinical-blue: #2F80ED;
  --color-soft-blue: #DCEBFA;

  /* Typography */
  --font-display: "Instrument", sans-serif;
  --font-body: "Inter", sans-serif;

  /* Spacing */
  --space-xs: clamp(0.375rem, 0.5vw, 0.625rem);
  --space-sm: clamp(0.625rem, 0.8vw, 1rem);
  --space-md: clamp(1rem, 1.5vw, 1.5rem);
  --space-lg: clamp(1.5rem, 2.5vw, 2.5rem);
  --space-xl: clamp(2.5rem, 4vw, 4rem);
  --space-2xl: clamp(4rem, 7vw, 7rem);
  --space-3xl: clamp(6rem, 10vw, 12rem);

  /* Layout */
  --container-max: 1440px;
  --page-padding: clamp(1rem, 4vw, 5rem);

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}
```

Antigravity may refine token values after inspecting the actual project, but must preserve the design philosophy.

---

# 56 — FLUID COMPONENT RULE

Every component must be:

```text
Responsive
Fluid
Reusable
Accessible
Content-aware
Performance-aware
```

A component should not break simply because:

* Text becomes longer
* Screen becomes narrower
* Screen becomes wider
* Font rendering differs
* User zooms the page
* Image dimensions change

---

# 57 — DESIGN SYSTEM RELATIONSHIP

This file controls:

```text
COLOR
TYPOGRAPHY
SPACING
GRID
LAYOUT
RESPONSIVENESS
VISUAL HIERARCHY
SURFACES
BORDERS
RADIUS
SHADOWS
IMAGES
3D VISUAL LANGUAGE
UI VISUAL STATES
```

Other files control different systems.

```text
brain.md
→ Strategy / website intelligence

content.md
→ Actual website content

design-system.md
→ Visual language

ui-rules.md
→ UI application rules

components.md
→ Reusable component architecture

animation.md
→ Motion and interaction system

sections.md
→ Page and section architecture
```

---

# 58 — ANIMATION RELATIONSHIP

`design-system.md` defines the visual state.

`animation.md` defines how the state changes over time.

Example:

```text
design-system.md

Button:
Bronze background
Dark/light text
Rounded surface
Controlled padding

        ↓

animation.md

Button hover:
Color transition
Arrow movement
Subtle translation
Smooth easing
```

Do not duplicate conflicting values between files.

---

# 59 — FINAL ANTIGRAVITY INSTRUCTION

Before implementing the website, inspect the entire existing project.

Then establish the design system from this document.

Do NOT:

* Replace the palette randomly
* Introduce random fonts
* Create fixed desktop-only dimensions
* Create separate disconnected designs for each device
* Hardcode unnecessary pixel values
* Overuse the bronze accent
* Overuse blue
* Create excessive rounded cards
* Add random shadows
* Add random gradients
* Break the typography hierarchy
* Break the grid
* Ignore mobile
* Treat tablet as a stretched mobile layout
* Treat laptop as a scaled desktop
* Ignore unusual viewport sizes

The system must behave as one coherent visual language across all screen sizes.

---

# 60 — FINAL QUALITY STANDARD

Before considering the design system implemented, verify:

### Visual

* 60/30/10 balance is maintained.
* Soft Ivory dominates.
* Deep Charcoal creates hierarchy.
* Bronze is used selectively.
* Instrument and Inter are consistent.
* Typography feels premium.
* Whitespace feels intentional.

### Responsive

* Mobile works.
* Tablet works.
* Laptop works.
* Desktop works.
* Large desktop works.
* No horizontal overflow.
* No broken grids.
* No awkward text wrapping.
* No excessive whitespace on small screens.
* No cramped layouts on large screens.

### Fluid

* Typography scales naturally.
* Spacing scales naturally.
* Grid adapts naturally.
* Images scale naturally.
* Components resize naturally.
* Buttons remain usable.
* Sections maintain visual rhythm.

### Accessibility

* Contrast is sufficient.
* Focus states are visible.
* Touch targets are adequate.
* Reduced motion works.
* Keyboard navigation works.

### Performance

* Images are optimized.
* Fonts are optimized.
* Layout remains stable.
* No unnecessary heavy effects are introduced.

---

# MASTER RULE

**DO NOT DESIGN FOR DEVICES.**

Design for the **available space**.

The website should feel intentionally designed at:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

while remaining one continuous, fluid, premium design system.

The goal is:

**ONE DESIGN → MANY VIEWPORTS → NATURAL ADAPTATION**

not:

**FOUR DESIGNS → FOUR BREAKPOINTS → PATCHED RESPONSIVENESS** 

---

# 61 — COMPACT IMPLEMENTATION CHECKLIST

Before marking the Design System implementation complete, verify every item below.

## FOUNDATION

* [ ] `design-system.md` is treated as the visual source of truth.
* [ ] No random colors, fonts, spacing values, or UI styles were introduced.
* [ ] Existing project architecture was inspected before implementation.

## COLOR

* [ ] Soft Ivory `#F7F8F6` is the dominant visual color.
* [ ] Deep Charcoal `#14151D` establishes primary contrast.
* [ ] Luxury Bronze `#B38C61` is used selectively.
* [ ] Clinical Blue `#2F80ED` is reserved for functional/medical UI where appropriate.
* [ ] Supporting colors use the defined tokens.
* [ ] Contrast passes accessibility requirements.
* [ ] Accent color does not visually dominate the website.

## TYPOGRAPHY

* [ ] Instrument is used for display typography.
* [ ] Inter is used for body/UI typography.
* [ ] H1–H4 hierarchy is consistent.
* [ ] Typography uses fluid sizing where appropriate.
* [ ] Long text remains readable.
* [ ] No unnecessary font-weight variation was introduced.
* [ ] Typography does not overflow or wrap awkwardly.

## FLUID SPACING

* [ ] Major spacing uses fluid tokens.
* [ ] Section padding adapts to viewport size.
* [ ] Page padding adapts continuously.
* [ ] Component gaps adapt naturally.
* [ ] No unnecessary fixed pixel spacing was introduced.

## GRID & LAYOUT

* [ ] Layout uses Grid/Flexbox appropriately.
* [ ] Containers have controlled maximum widths.
* [ ] Content does not stretch excessively on large screens.
* [ ] Layout does not become cramped on small screens.
* [ ] No unnecessary absolute positioning is used.
* [ ] Grid relationships adapt naturally between viewport sizes.

## RESPONSIVE

Test at minimum:

* [ ] Small Mobile
* [ ] Large Mobile
* [ ] Tablet Portrait
* [ ] Tablet Landscape
* [ ] Laptop
* [ ] Large Laptop
* [ ] Desktop
* [ ] Large Desktop

Verify:

* [ ] No horizontal overflow.
* [ ] No broken components.
* [ ] No awkward text wrapping.
* [ ] Images maintain correct proportions.
* [ ] Navigation remains usable.
* [ ] CTAs remain accessible.
* [ ] Sections maintain visual rhythm.

## FLUIDITY

* [ ] Typography interpolates smoothly.
* [ ] Spacing interpolates smoothly.
* [ ] Containers resize naturally.
* [ ] Cards resize naturally.
* [ ] Images resize/crop correctly.
* [ ] Buttons remain comfortable at every viewport.
* [ ] Components do not depend on specific device widths.
* [ ] Breakpoints are used only for genuine structural changes.

## COMPONENTS

* [ ] Components use design tokens.
* [ ] Components are reusable.
* [ ] Components support responsive behavior.
* [ ] Interactive states are defined.
* [ ] Components do not contain duplicated styling unnecessarily.

## UI STATES

Verify where applicable:

* [ ] Default
* [ ] Hover
* [ ] Focus
* [ ] Active
* [ ] Pressed
* [ ] Disabled
* [ ] Loading
* [ ] Success
* [ ] Error

## ACCESSIBILITY

* [ ] Keyboard navigation works.
* [ ] Focus states are clearly visible.
* [ ] Touch targets are sufficiently large.
* [ ] Color is not the only way information is communicated.
* [ ] Text remains readable.
* [ ] `prefers-reduced-motion` is respected.

## IMAGES & MEDIA

* [ ] Images are responsive.
* [ ] Correct aspect ratios are maintained.
* [ ] Images are optimized.
* [ ] No stretched/distorted images.
* [ ] Large media does not unnecessarily block page loading.

## PERFORMANCE

* [ ] Layout remains stable.
* [ ] No unnecessary layout-triggering animations/styles.
* [ ] Transform/opacity are preferred for motion.
* [ ] Heavy assets are lazy-loaded where appropriate.
* [ ] No unnecessary dependencies were added.
* [ ] Mobile performance was checked.

## VISUAL QA

Check the actual rendered website, not just the code.

* [ ] Compare implementation against `design-system.md`.
* [ ] Check spacing consistency.
* [ ] Check typography consistency.
* [ ] Check color consistency.
* [ ] Check alignment.
* [ ] Check image composition.
* [ ] Check responsive interpolation.
* [ ] Check all major UI states.

## FINAL RULE

If a design decision is not explicitly specified, choose the solution that best preserves:

**Premium + Clinical + Elegant + Minimal + Fluid + Accessible + Fast**

Do not solve responsive problems by adding random breakpoint-specific patches.

Prefer improving the underlying fluid system.

### FINAL ACCEPTANCE TEST

```text
ONE DESIGN
     ↓
FLUID SYSTEM
     ↓
MOBILE → TABLET → LAPTOP → DESKTOP
     ↓
NO PATCHWORK
     ↓
PREMIUM CONSISTENT EXPERIENCE
```
