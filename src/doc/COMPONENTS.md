# COMPONENTS — PREMIUM DENTAL CLINIC WEBSITE

## MASTER REUSABLE COMPONENT ARCHITECTURE

This document defines the reusable component architecture for the premium dental clinic website.

The purpose is to ensure:

```text
ONE DESIGN SYSTEM
        ↓
REUSABLE COMPONENTS
        ↓
CONSISTENT USER EXPERIENCE
        ↓
FASTER DEVELOPMENT
        ↓
EASIER MAINTENANCE
        ↓
SCALABLE WEBSITE
```

Components must be:

* Reusable
* Modular
* Accessible
* Responsive
* Fluid
* Maintainable
* Content-independent
* Animation-ready
* Performance-conscious

Do not create separate versions of the same component for individual pages unless the behavior is genuinely different.

---

# 01 — COMPONENT ARCHITECTURE PRINCIPLE

Build the website using:

```text
FOUNDATION
↓
PRIMITIVES
↓
UI COMPONENTS
↓
COMPOSITE COMPONENTS
↓
SECTION COMPONENTS
↓
PAGE COMPONENTS
```

Example:

```text
Button
↓
AppointmentCTA
↓
BookingModal
↓
BookingSteps
↓
Appointment Section
↓
Treatment Page
```

Components should compose rather than duplicate each other.

---

# 02 — SOURCE OF TRUTH

Component decisions must follow:

```text
brain.md
      ↓
design-system.md
      ↓
ui-rules.md
      ↓
components.md
      ↓
animation.md
      ↓
content.md
      ↓
sections.md
```

If component behavior conflicts with:

* Accessibility
* Clinical accuracy
* Performance
* Usability

those requirements take priority.

---

# 03 — COMPONENT DESIGN RULE

Every reusable component must have:

```text
PURPOSE
↓
STRUCTURE
↓
PROPS / DATA
↓
STATES
↓
RESPONSIVE BEHAVIOR
↓
ACCESSIBILITY
↓
MOTION
↓
ERROR / EMPTY / LOADING BEHAVIOR
```

Do not build components only from visual appearance.

---

# 04 — FOUNDATION COMPONENTS

Create a small set of foundational primitives.

Recommended:

```text
Container
Section
Stack
Grid
Button
IconButton
Link
Text
Heading
Image
Video
Divider
Badge
Label
Card
```

These should be generic and reusable across the entire website.

---

# 05 — CONTAINER

### Component

`Container`

### Purpose

Controls page content width and horizontal alignment.

### Requirements

Use the fluid container rules from `design-system.md`.

Do not hardcode different container widths for every device.

Concept:

```text
Viewport
↓
Fluid Page Padding
↓
Centered Content Container
↓
Maximum Content Width
```

### Behavior

```text
width: min(100% - fluid padding, max-width)
margin-inline: auto
```

The container must adapt continuously between viewport sizes.

---

# 06 — SECTION

### Component

`Section`

### Purpose

Reusable wrapper for major website sections.

### Responsibilities

* Vertical spacing
* Background
* Content width
* Optional theme
* Optional section ID
* Optional overflow behavior

Possible variants:

```text
light
dark
image
accent
full-bleed
```

Do not create unnecessary variants.

---

# 07 — HEADING SYSTEM

### Components

```text
SectionLabel
SectionHeading
SectionDescription
```

### Structure

```text
LABEL
↓
HEADING
↓
DESCRIPTION
```

Not every section needs all three.

Typography must inherit from `design-system.md`.

Do not redefine typography inside individual components.

---

# 08 — BUTTON

### Component

`Button`

### Variants

```text
primary
secondary
tertiary
icon
```

### Primary

Used for:

```text
Book an Appointment
Request Consultation
```

### Secondary

Used for:

```text
Explore Treatments
Meet the Doctors
Learn More
```

### Tertiary

Used for:

```text
Read More →
View Details →
Explore →
```

### States

```text
default
hover
focus
pressed
disabled
loading
```

### Requirements

* Minimum touch target: 44×44px
* Clear keyboard focus
* No hover-only functionality
* Accessible label
* Motion follows `animation.md`
* No excessive scaling

---

# 09 — APPOINTMENT CTA

## Component

`AppointmentCTA`

This is the primary conversion component.

It must provide one consistent appointment experience throughout the website.

### Purpose

Provide a reusable entry point into:

```text
Appointment Request
OR
Live Appointment Booking
```

depending on the actual clinic booking implementation.

### Usage Locations

```text
Navbar
Hero
Treatment Cards
Treatment Detail
Doctor Profile
Patient Stories
Final CTA
Contact Page
Mobile Sticky CTA
```

### Props

Conceptually:

```text
label
variant
context
treatment
doctor
source
size
icon
```

Example:

```text
<AppointmentCTA
  label="Book an Appointment"
  context="dental-implants"
  source="treatment-page"
/>
```

### Context Preservation

If the CTA is clicked from a treatment page:

```text
Dental Implants
↓
Book Appointment
↓
Reason automatically preselected:
Dental Implants
```

If clicked from a doctor profile:

```text
Dr. [Name]
↓
Book Appointment
↓
Doctor context preserved
```

Do not make the patient repeatedly enter information already known from their journey.

---

# 10 — APPOINTMENT CTA HIERARCHY

Use one primary appointment label consistently.

Preferred:

```text
Book an Appointment
```

Possible alternatives:

```text
Book a Consultation
Request an Appointment
```

Choose one primary wording for the website.

Do not randomly alternate CTA wording across pages.

---

# 11 — BOOKING ENTRY SYSTEM

Appointment CTA may open:

```text
Dedicated Booking Page
OR
Booking Modal
OR
Booking Drawer
```

Selection depends on:

* Number of steps
* Amount of information
* Mobile usability
* Actual booking integration
* Accessibility
* Complexity

For a multi-step booking flow, a dedicated page is generally preferred when a modal would become cramped or difficult to navigate.

---

# 12 — BOOKING PAGE / MODAL

## Component

`BookingModal`

or

`BookingPage`

The internal booking experience must use the same reusable booking components.

Architecture:

```text
BookingShell
    ↓
BookingHeader
    ↓
BookingProgress
    ↓
BookingSteps
    ↓
CurrentStep
    ↓
BookingNavigation
```

---

# 13 — BOOKING SHELL

### Component

`BookingShell`

### Responsibilities

* Overall booking layout
* Progress indicator
* Step content
* Back/Next navigation
* Close behavior if modal
* Error handling
* Loading states
* Accessibility focus management

### Desktop

Can use:

```text
Two-column layout
```

Example:

```text
Booking Form
        |
        | Booking Summary
```

### Mobile

Use:

```text
Single-column layout
```

Summary may become:

```text
Collapsible
OR
Bottom summary
OR
Review step
```

Do not force a two-column layout onto mobile.

---

# 14 — BOOKING MODAL

If implemented as a modal:

### Requirements

* Accessible dialog semantics
* Focus trap
* Escape key support where appropriate
* Clear close button
* Background scroll locking
* Focus returned to triggering CTA
* Keyboard navigation
* Screen-reader announcement
* No accidental dismissal during active submission

### Mobile

The modal should behave more like:

```text
Full-screen booking experience
```

rather than a tiny centered popup.

---

# 15 — BOOKING STEPS

## Component

`BookingSteps`

The appointment flow should follow:

```text
01
REASON

↓

02
DATE

↓

03
TIME

↓

04
PATIENT DETAILS

↓

05
REVIEW

↓

06
SUCCESS
```

Not every implementation requires every step.

If actual live availability is unavailable, time selection can be represented as a preferred time rather than a confirmed slot.

---

# 16 — BOOKING PROGRESS

### Component

`BookingProgress`

Display:

```text
Step 2 of 5
```

or an equivalent accessible progress representation.

Possible visual structure:

```text
●────●────○────○────○
Reason  Date  Time  Details  Review
```

### Requirements

* Clearly indicate current step
* Completed steps must be distinguishable
* Future steps must remain understandable
* Do not rely on color alone
* Mobile version must remain compact

---

# 17 — BOOKING STEP NAVIGATION

### Component

`BookingNavigation`

Actions:

```text
Back
Continue
Submit
```

### Rules

`Continue` should only become available when the current required information is valid.

However, do not hide validation feedback until the user clicks.

### Back behavior

Going back must:

```text
Preserve entered data
```

Never unexpectedly reset the form.

---

# 18 — REASON FOR VISIT

### Component

`AppointmentReasonSelector`

Purpose:

Understand why the patient is contacting the clinic.

Possible options:

```text
General Dental Care
Dental Implants
Cosmetic Dentistry
Smile Design
Orthodontics / Clear Aligners
Teeth Whitening
Restorative Dentistry
Pediatric Dentistry
Emergency Dental Care
I’m Not Sure
Other
```

Only show treatments actually offered by the clinic.

Do not fabricate services.

---

# 19 — REASON SELECTION UI

Prefer:

```text
Selectable Cards
```

or

```text
Accessible Radio Group
```

rather than a visually complex dropdown.

Each option should communicate:

```text
Treatment / Reason
+
Optional short description
```

Keep selection fast.

---

# 20 — DATE PICKER

## Component

`DatePicker`

### Purpose

Allow the user to select a preferred appointment date or an actually available date.

### Two modes

```text
PREFERRED DATE MODE
```

User expresses preference.

OR:

```text
LIVE AVAILABILITY MODE
```

User chooses an actual available appointment date.

The UI must clearly communicate which mode is being used.

### Requirements

* Keyboard accessible
* Screen-reader accessible
* Touch friendly
* Clear selected state
* Clear unavailable state
* Clear today state
* Prevent invalid dates
* Respect clinic availability
* Preserve selected date when navigating months

---

# 21 — DATE PICKER RESPONSIVE BEHAVIOR

Desktop:

```text
Calendar
```

Mobile:

```text
Compact calendar
OR
Scrollable date selector
```

depending on the actual booking system.

Do not make the calendar unnecessarily large on small screens.

---

# 22 — TIME PICKER

## Component

`TimePicker`

### Live booking

Show actual available slots.

Example:

```text
09:30 AM
10:00 AM
11:30 AM
02:00 PM
04:30 PM
```

### Request booking

Use preference categories if exact slots are unavailable:

```text
Morning
Afternoon
Evening
```

The UI must never imply that a preferred time is confirmed when it is only a request.

---

# 23 — PATIENT DETAILS FORM

## Component

`PatientDetailsForm`

Collect only information genuinely required for the appointment workflow.

### Recommended fields

```text
Full Name *
Phone *
Email
```

Additional fields only when necessary:

```text
New / Existing Patient
Date of Birth
Additional Message
Preferred Contact Method
```

Do not unnecessarily collect sensitive information.

---

# 24 — FORM FIELD COMPONENTS

Build reusable primitives:

```text
TextField
PhoneField
EmailField
SelectField
RadioGroup
Checkbox
Textarea
```

All form fields must share:

```text
Label
Input
Helper Text
Validation Message
```

---

# 25 — FORM VALIDATION

Validation must be:

```text
Inline
Clear
Neutral
Helpful
Accessible
```

Example:

```text
Please enter your full name.
```

Not:

```text
INVALID!!!
```

Errors should be associated programmatically with their fields.

Do not rely only on red borders.

---

# 26 — CONTACT PREFERENCE

### Component

`ContactPreference`

Possible options:

```text
Phone
WhatsApp
Email
```

Only show channels the clinic actually supports.

Do not promise communication through unsupported channels.

---

# 27 — ADDITIONAL MESSAGE

### Component

`AppointmentMessage`

Optional field:

```text
Is there anything you'd like our team to know?
```

Keep it optional unless clinically or operationally required.

Do not encourage users to submit unnecessary sensitive medical information.

---

# 28 — BOOKING SUMMARY

## Component

`BookingSummary`

Purpose:

Give the patient confidence that their information is correct before submission.

Display:

```text
Reason
Date
Time
Doctor — if selected
Patient Name
Phone / Email
Contact Preference
Additional Information — if applicable
```

Use:

```text
Edit
```

actions for individual sections.

---

# 29 — BOOKING SUMMARY RULE

The summary must answer:

```text
WHAT am I booking?
WHEN?
WITH WHOM?
WHO is attending?
HOW can the clinic contact me?
```

Avoid unnecessary information.

---

# 30 — SUBMISSION COMPONENT

## Component

`BookingSubmit`

Primary action:

```text
Request Appointment
```

when the clinic manually confirms appointments.

Use:

```text
Confirm Appointment
```

only when the system actually confirms a live booking.

Never create ambiguity.

---

# 31 — BOOKING SUCCESS

## Component

`BookingSuccess`

Success must depend on the booking model.

### Appointment Request

Display:

```text
Request Received

Your appointment request has been received.
Our team will contact you to confirm the appointment.
```

### Confirmed Appointment

Display:

```text
Appointment Confirmed

Date
Time
Doctor
Location
Confirmation Reference
```

Only show information that actually exists.

---

# 32 — SUCCESS ACTIONS

Possible actions:

```text
View Appointment Details
Add to Calendar
Call Clinic
WhatsApp Clinic
Get Directions
Return Home
Explore Treatments
```

Only show actions supported by the actual system.

---

# 33 — BOOKING ERROR

## Component

`BookingError`

If submission fails:

```text
Your request could not be completed.
Please try again or contact the clinic directly.
```

Actions:

```text
Try Again
Call Clinic
WhatsApp Clinic
```

Never show:

```text
500 INTERNAL SERVER ERROR
API ERROR
DATABASE FAILURE
```

to patients.

---

# 34 — BOOKING LOADING

## Component

`BookingLoading`

Loading state must communicate:

```text
Processing your request...
```

Use subtle motion.

Do not use:

```text
AI scanning
Fake medical processing
Random loading animations
Long decorative loaders
```

---

# 35 — DUPLICATE SUBMISSION PROTECTION

When the user submits:

```text
Disable duplicate submission
↓
Show loading
↓
Process request
↓
Show success OR error
```

Do not allow multiple accidental submissions.

---

# 36 — NETWORK FAILURE

If connection fails:

```text
Preserve entered information
```

Then display:

```text
We couldn't complete your request.
Please check your connection and try again.
```

Do not erase the form.

---

# 37 — BOOKING STATE MACHINE

The booking system should conceptually support:

```text
IDLE
↓
STARTED
↓
STEP_ACTIVE
↓
VALIDATING
↓
SUBMITTING
↓
SUCCESS
```

Error states can occur from:

```text
VALIDATING
SUBMITTING
```

and should return to a recoverable state.

---

# 38 — BOOKING DATA MODEL

Keep booking information structured.

Conceptual model:

```text
appointment:
  reason
  treatment
  doctor
  date
  time
  patient
    name
    phone
    email
  contactPreference
  message
  source
```

Do not store unnecessary information.

---

# 39 — CONTEXT-AWARE BOOKING

Every appointment CTA should optionally pass context.

Example:

```text
Treatment Page
Dental Implants
        ↓
AppointmentCTA
        ↓
Booking
        ↓
Reason = Dental Implants
```

Another example:

```text
Doctor Profile
Dr. [Name]
        ↓
AppointmentCTA
        ↓
Booking
        ↓
Doctor = Dr. [Name]
```

Context should remain editable by the patient.

---

# 40 — MOBILE STICKY APPOINTMENT BAR

## Component

`MobileAppointmentBar`

Optional persistent mobile conversion component.

Example:

```text
[ Call ]     [ Book Appointment ]
```

Use only when it improves usability.

Requirements:

* Does not cover important content
* Respects safe-area insets
* Does not interfere with forms
* Can be dismissed if appropriate
* Does not become visually dominant
* Remains accessible

---

# 41 — DOCTOR CARD

## Component

`DoctorCard`

Structure:

```text
IMAGE
↓
NAME
↓
ROLE / SPECIALIZATION
↓
SHORT DESCRIPTION
↓
VIEW PROFILE
```

Optional:

```text
Book Appointment
```

### Requirements

Doctor information must come from verified clinic content.

Never fabricate:

* Credentials
* Experience
* Specialization
* Awards

---

# 42 — TREATMENT CARD

## Component

`TreatmentCard`

Structure:

```text
CATEGORY / LABEL
↓
TREATMENT NAME
↓
SHORT DESCRIPTION
↓
VISUAL
↓
EXPLORE
```

Optional:

```text
Book Appointment
```

### Interaction

Hover may introduce:

* Image movement
* Arrow transition
* Subtle elevation
* Accent transition

Motion must remain restrained.

---

# 43 — TREATMENT GRID

## Component

`TreatmentGrid`

Responsibilities:

* Arrange treatment cards
* Support categories
* Adapt to viewport width
* Maintain consistent visual rhythm

Do not create separate layouts for each device.

The grid should naturally adapt based on available space.

---

# 44 — TREATMENT DETAIL HEADER

## Component

`TreatmentHero`

Structure:

```text
CATEGORY
↓
TREATMENT TITLE
↓
SHORT EXPLANATION
↓
PRIMARY CTA
↓
SUPPORTING VISUAL
```

Optional:

```text
Treatment duration
Treatment category
Related treatments
```

Only display verified information.

---

# 45 — TREATMENT JOURNEY

## Component

`TreatmentJourney`

Use for explaining:

```text
Consultation
↓
Assessment
↓
Planning
↓
Treatment
↓
Follow-up
```

Steps should be configurable.

Do not hardcode one treatment process for every treatment.

---

# 46 — TECHNOLOGY CARD

## Component

`TechnologyCard`

Structure:

```text
TECHNOLOGY
↓
WHAT IT DOES
↓
PATIENT BENEFIT
↓
OPTIONAL VISUAL
```

Example:

```text
Digital Scanning
Captures detailed dental structures digitally.
```

Only include technology actually available.

---

# 47 — TECHNOLOGY SHOWCASE

## Component

`TechnologyShowcase`

May support:

```text
Tabs
Carousel
Horizontal interaction
Interactive visualization
3D model
```

The content must remain understandable without animation.

---

# 48 — BEFORE / AFTER SLIDER

## Component

`BeforeAfterSlider`

Purpose:

Compare authentic patient imagery where appropriate.

Requirements:

* Clear Before / After labels
* Keyboard accessibility
* Touch support
* Drag support
* Accessible alternative
* No misleading image manipulation

Never fabricate patient results.

---

# 49 — PATIENT STORY CARD

## Component

`PatientStoryCard`

Structure:

```text
PATIENT STORY
↓
CONCERN
↓
TREATMENT
↓
EXPERIENCE
↓
RESULT / OUTCOME
```

Only use real patient information with appropriate permission and clinic approval.

---

# 50 — TESTIMONIAL

## Component

`Testimonial`

Possible data:

```text
Quote
Name
Treatment
Date — optional
Photo — optional
```

Do not fabricate testimonials.

If no authentic testimonials exist:

```text
Do not generate fake reviews.
```

---

# 51 — FAQ ACCORDION

## Component

`FAQAccordion`

Each item:

```text
Question
+
Answer
```

States:

```text
closed
open
focus
```

Requirements:

* Keyboard accessible
* Proper accordion semantics
* Clear expanded/collapsed state
* One or multiple open items based on UX need
* Content remains accessible without animation

---

# 52 — IMAGE REVEAL COMPONENT

## Component

`ImageReveal`

Reusable for:

* Hero
* Treatment images
* Doctor images
* Technology
* Gallery

Animation should be implemented according to `animation.md`.

Component should still function with animation disabled.

---

# 53 — GALLERY

## Components

```text
GalleryGrid
GalleryItem
GalleryLightbox
```

### GalleryItem

Supports:

```text
Image
Video
Category
Caption
```

### Lightbox

Must support:

* Close
* Previous
* Next
* Keyboard navigation
* Touch navigation
* Focus management

Do not load every high-resolution image immediately.

---

# 54 — 3D MODEL VIEWER

## Component

`Dental3DViewer`

Possible uses:

```text
Tooth anatomy
Implant visualization
Smile design
Treatment explanation
Technology
```

Requirements:

```text
Accurate model
+
Controlled interaction
+
Responsive scale
+
Performance optimization
+
Fallback
```

If WebGL fails:

```text
Show static image / simplified visual
```

Do not leave an empty space.

---

# 55 — 3D MODEL CONTROLS

Controls should be minimal.

Possible:

```text
Rotate
Reset
Zoom
Explore
```

Do not require complex controls unless necessary.

Touch gestures must work on supported devices.

---

# 56 — NAVBAR

## Component

`Navbar`

Responsibilities:

```text
Brand
Navigation
Appointment CTA
Mobile menu
```

Desktop:

```text
Logo | Navigation | Appointment
```

Mobile:

```text
Logo | Menu
```

Appointment CTA may remain visible depending on available width.

---

# 57 — MOBILE MENU

## Component

`MobileMenu`

Requirements:

* Full keyboard access
* Focus management
* Clear close action
* Prevent background interaction when open
* Accessible navigation labels
* Smooth open/close
* Does not depend on hover

Possible structure:

```text
Treatments
Doctors
Technology
About
Contact
Book Appointment
```

---

# 58 — FOOTER

## Component

`Footer`

Structure:

```text
Clinic Identity
Navigation
Treatments
Contact
Location
Appointment
Social
Legal
```

Keep information hierarchy clear.

---

# 59 — CONTACT COMPONENTS

Reusable:

```text
ContactCard
PhoneLink
WhatsAppLink
EmailLink
LocationCard
DirectionsCTA
OpeningHours
```

Only display information actually provided by the clinic.

---

# 60 — CONTACT CARD

Structure:

```text
ICON
↓
LABEL
↓
VALUE
↓
ACTION
```

Example:

```text
Phone
+XX XXX XXX XXXX
Call Clinic →
```

Do not expose placeholder contact details in production.

---

# 61 — FORM SYSTEM

All forms should use a common architecture:

```text
Form
├── Field
├── Field
├── Field
├── Helper
├── Error
└── Submit
```

Forms must share consistent:

* Labels
* Input heights
* Border behavior
* Focus states
* Validation
* Error messaging
* Button behavior

Detailed visual rules belong to `design-system.md` and `ui-rules.md`.

---

# 62 — MODAL SYSTEM

## Component

`Modal`

Reusable for:

```text
Booking
Gallery
Doctor details
Video
Important information
```

Requirements:

* Accessible dialog
* Focus trap
* Escape behavior
* Scroll locking
* Responsive sizing
* Clear close control
* Screen-reader support

Do not create individual custom modal implementations for every feature.

---

# 63 — DRAWER

## Component

`Drawer`

Useful for:

```text
Mobile navigation
Filters
Booking
Additional information
```

Must support:

```text
Keyboard
Touch
Focus management
Escape
Close button
```

---

# 64 — TOAST / FEEDBACK

## Component

`Toast`

Use for lightweight feedback such as:

```text
Appointment request sent
Copied
Saved
Something went wrong
```

Do not use toast messages for information that requires persistent attention.

---

# 65 — LOADING SYSTEM

Reusable:

```text
Skeleton
Spinner
ButtonLoader
SectionLoader
PageLoader
```

Loading states should feel like part of the interface.

Do not create decorative loading experiences.

---

# 66 — EMPTY STATES

## Component

`EmptyState`

Structure:

```text
Simple visual
↓
Clear explanation
↓
Next action
```

Example:

```text
No appointment slots are currently available.
Please contact our clinic team for assistance.

[Contact Clinic]
```

---

# 67 — ERROR STATES

## Component

`ErrorState`

Must provide:

```text
What happened
+
What the user can do
```

Example:

```text
We couldn't load this information.

[Try Again]
```

Never expose technical implementation details.

---

# 68 — CARD SYSTEM

Create a reusable base:

`Card`

Variants may include:

```text
default
interactive
image
dark
bordered
```

Other cards should extend the base system rather than creating independent styling systems.

---

# 69 — BADGE / LABEL

## Component

`Badge`

Use for:

```text
Treatment Category
Technology
New
Featured
Department
```

Do not overuse badges.

They should improve information hierarchy.

---

# 70 — ICON SYSTEM

Use a consistent icon library or custom SVG system.

Icons should:

```text
Match visual language
Have consistent stroke/weight
Be accessible
Scale cleanly
Not become decorative clutter
```

Do not mix random icon styles.

---

# 71 — LINK SYSTEM

## Component

`TextLink`

Support:

```text
Arrow
Underline
Subtle hover
```

Links must remain visually recognizable.

---

# 72 — STICKY ELEMENTS

Possible sticky components:

```text
StickyNavbar
MobileAppointmentBar
BookingNavigation
```

Do not make every element sticky.

Sticky UI should solve a navigation or conversion problem.

---

# 73 — RESPONSIVE COMPONENT PRINCIPLE

Components must not contain rigid device-specific designs.

Do not write:

```text
Desktop component
Tablet component
Mobile component
```

Instead:

```text
ONE COMPONENT
↓
FLUID RULES
↓
AVAILABLE SPACE
↓
NATURAL ADAPTATION
```

Use:

```text
clamp()
min()
max()
%
vw
vh
rem
fr
auto-fit
auto-fill
container queries
```

where appropriate.

---

# 74 — CONTAINER-AWARE COMPONENTS

Reusable components should respond to their own available space whenever useful.

For example:

```text
TreatmentCard
```

should adapt based on its container rather than assuming:

```text
desktop = 1440px
tablet = 768px
mobile = 375px
```

This reduces breakpoint-specific patchwork.

---

# 75 — COMPONENT STATES

Interactive components must account for:

```text
Default
Hover
Focus
Pressed
Active
Selected
Disabled
Loading
Error
Success
Empty
```

Not every component requires every state.

Only implement states relevant to its function.

---

# 76 — ACCESSIBILITY REQUIREMENTS

Every interactive component must support:

```text
Keyboard navigation
Focus visibility
Screen readers
Touch interaction
Reduced motion
Semantic HTML
Accessible names
Accessible state announcements
```

Never use:

```text
div
```

as a button when a real:

```text
button
```

is appropriate.

Use:

```text
button
a
nav
main
section
article
form
label
input
```

semantically.

---

# 77 — REDUCED MOTION

Every animated component must support:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

```text
Remove unnecessary movement
Reduce transitions
Disable parallax
Disable decorative motion
Keep functional feedback
```

The component must remain fully usable.

---

# 78 — COMPONENT ANIMATION

Animation must not be hardcoded randomly inside every component.

Use the motion rules defined in:

`animation.md`

Components should expose meaningful animation states such as:

```text
enter
exit
hover
active
loading
success
error
```

The animation system controls the actual motion language.

---

# 79 — PERFORMANCE RULE

Components must avoid unnecessary:

```text
Re-renders
Large dependencies
Large images
Heavy WebGL
Continuous animation
Expensive scroll listeners
Unnecessary observers
```

Use lazy loading where appropriate.

Prefer:

```text
CSS
transform
opacity
GPU-friendly properties
```

for common animations.

---

# 80 — IMAGE COMPONENT RULE

Use a centralized image component where practical:

`OptimizedImage`

Responsibilities:

* Responsive sizing
* Lazy loading
* Appropriate formats
* Aspect ratio
* Fallback
* Alt text
* Object positioning

Do not duplicate image optimization logic across components.

---

# 81 — CONTENT / COMPONENT SEPARATION

Components should receive content through structured data.

Example:

```text
TreatmentCard
```

should not contain permanent treatment-specific copy.

Instead:

```text
<TreatmentCard
  title={treatment.title}
  description={treatment.description}
  image={treatment.image}
/>
```

This makes the website easier to maintain and eventually connect to a CMS.

---

# 82 — REUSABLE DATA ENTITIES

Structure recurring content as:

```text
Treatment
Doctor
Technology
PatientStory
Testimonial
FAQ
GalleryItem
Location
Appointment
```

This allows components to render dynamic content consistently.

---

# 83 — APPOINTMENT COMPONENT ECOSYSTEM

The complete appointment architecture should be:

```text
AppointmentCTA
        ↓
BookingShell
        ↓
BookingProgress
        ↓
BookingSteps
        ↓
┌──────────────────────────┐
│ AppointmentReasonSelector│
│ DatePicker               │
│ TimePicker               │
│ PatientDetailsForm       │
│ ContactPreference        │
│ AppointmentMessage       │
└──────────────────────────┘
        ↓
BookingSummary
        ↓
BookingSubmit
        ↓
┌──────────────────────────┐
│ BookingSuccess           │
│ BookingError             │
└──────────────────────────┘
```

This entire system must be reusable from:

```text
Home
Treatment Page
Treatment Detail
Doctor Page
Contact Page
Mobile CTA
```

---

# 84 — APPOINTMENT SOURCE TRACKING

The booking component may receive:

```text
source
```

Examples:

```text
navbar
hero
treatment
doctor
contact
footer
mobile-sticky
```

This allows analytics to understand where appointment intent originates.

Do not expose unnecessary tracking information to patients.

---

# 85 — APPOINTMENT ANALYTICS

Where analytics are implemented, support meaningful events such as:

```text
appointment_cta_clicked
appointment_started
reason_selected
date_selected
time_selected
patient_details_started
appointment_submitted
appointment_confirmed
appointment_error
```

Analytics must be privacy-conscious.

Do not send unnecessary patient information into analytics systems.

---

# 86 — APPOINTMENT SECURITY / PRIVACY

Appointment components must:

```text
Collect minimum necessary data
Avoid exposing patient information in URLs
Avoid logging sensitive form values
Avoid placing personal data in analytics events
Use secure submission mechanisms
Handle errors safely
```

Do not store sensitive information in browser storage unless there is a clear, secure reason.

---

# 87 — COMPONENT FILE ORGANIZATION

Recommended structure:

```text
components/
│
├── ui/
│   ├── Button
│   ├── Container
│   ├── Section
│   ├── Card
│   ├── Modal
│   ├── Drawer
│   ├── Input
│   ├── Select
│   ├── Textarea
│   ├── Badge
│   └── Toast
│
├── navigation/
│   ├── Navbar
│   ├── MobileMenu
│   └── Footer
│
├── appointment/
│   ├── AppointmentCTA
│   ├── BookingShell
│   ├── BookingModal
│   ├── BookingProgress
│   ├── BookingSteps
│   ├── AppointmentReasonSelector
│   ├── DatePicker
│   ├── TimePicker
│   ├── PatientDetailsForm
│   ├── ContactPreference
│   ├── AppointmentMessage
│   ├── BookingSummary
│   ├── BookingSubmit
│   ├── BookingSuccess
│   ├── BookingError
│   └── MobileAppointmentBar
│
├── treatments/
│   ├── TreatmentCard
│   ├── TreatmentGrid
│   ├── TreatmentHero
│   └── TreatmentJourney
│
├── doctors/
│   ├── DoctorCard
│   └── DoctorProfile
│
├── technology/
│   ├── TechnologyCard
│   ├── TechnologyShowcase
│   └── Dental3DViewer
│
├── patient/
│   ├── BeforeAfterSlider
│   ├── PatientStoryCard
│   └── Testimonial
│
├── media/
│   ├── GalleryGrid
│   ├── GalleryItem
│   ├── GalleryLightbox
│   └── OptimizedImage
│
└── feedback/
    ├── Loading
    ├── Skeleton
    ├── EmptyState
    ├── ErrorState
    └── Toast
```

The exact folder structure may adapt to the existing project architecture.

Do not restructure the entire project unnecessarily.

---

# 88 — COMPONENT NAMING

Use predictable PascalCase names.

Examples:

```text
AppointmentCTA
BookingModal
BookingSteps
DatePicker
PatientDetailsForm
BookingSummary
BookingSuccess
TreatmentCard
DoctorCard
TechnologyCard
BeforeAfterSlider
FAQAccordion
```

Avoid vague names such as:

```text
Thing
Box
Section1
NewCard
FancyButton
Test
Component2
```

---

# 89 — PROPS PRINCIPLE

Props should represent meaningful variation.

Good:

```text
variant
size
title
description
image
href
context
source
disabled
loading
```

Avoid excessive boolean props.

Bad:

```text
isBlue
isBig
isRound
isFancy
isSpecial
isPremium
```

If many booleans are required, redesign the component API.

---

# 90 — COMPOSITION OVER DUPLICATION

Prefer:

```text
Card
+
Image
+
Text
+
Button
```

over creating:

```text
SpecialCard
SpecialCard2
SpecialCardDark
SpecialCardTreatment
SpecialCardDoctor
```

unless their behavior genuinely differs.

---

# 91 — COMPONENT OWNERSHIP

Each component should have one clear responsibility.

For example:

`DatePicker`

handles:

```text
Date selection
```

It should not also handle:

```text
Patient details
API submission
Success messaging
```

Similarly:

`BookingSuccess`

handles:

```text
Success presentation
```

not:

```text
Entire booking state management
```

---

# 92 — STATE MANAGEMENT PRINCIPLE

Keep state as close as practical to the component that owns it.

For booking:

```text
BookingShell
```

may own the overall booking state.

Individual components own their local UI state.

Avoid unnecessary global state.

---

# 93 — BOOKING STATE EXAMPLE

Conceptual:

```text
currentStep
reason
date
time
doctor
patientDetails
contactPreference
message
status
error
```

Status:

```text
idle
submitting
success
error
```

Keep the implementation framework-appropriate.

---

# 94 — COMPONENT TESTING

Critical interactive components should be tested for:

```text
Rendering
Interaction
Keyboard
Mobile
Validation
Loading
Error
Success
Reduced Motion
Long Content
Slow Network
```

Especially:

```text
AppointmentCTA
BookingModal
BookingSteps
DatePicker
PatientDetailsForm
BookingSummary
BookingSuccess
MobileMenu
FAQAccordion
BeforeAfterSlider
Dental3DViewer
```

---

# 95 — RESPONSIVE TESTING

Every reusable component must be tested across continuous viewport changes.

At minimum verify:

```text
Small Mobile
Large Mobile
Tablet Portrait
Tablet Landscape
Laptop
Large Laptop
Desktop
Large Desktop
Ultra-wide
Short Viewport
Tall Viewport
```

Do not only verify exact breakpoint widths.

Resize continuously.

Look for:

```text
Text wrapping
Overflow
Button compression
Grid collapse
Image cropping
Navigation collision
Modal height
Form usability
Sticky element overlap
```

---

# 96 — CONTENT STRESS TEST

Components must survive:

```text
Short title
Long title
Short description
Long description
Long doctor name
Long treatment name
Missing optional image
Large image
No testimonial photo
Long FAQ answer
Long error message
```

Do not assume content will always be the perfect length.

---

# 97 — COMPONENT QUALITY CHECK

Before accepting a component, Antigravity must verify:

```text
□ Clear purpose
□ Reusable
□ No unnecessary duplication
□ Correct semantic HTML
□ Keyboard accessible
□ Touch accessible
□ Responsive
□ Fluid
□ Loading state where necessary
□ Error state where necessary
□ Empty state where necessary
□ Reduced-motion support
□ Performance-conscious
□ Content separated from layout
□ Uses design-system tokens
□ Uses animation-system rules
□ No random magic numbers
□ No unnecessary dependencies
```

---

# 98 — APPOINTMENT SYSTEM QUALITY CHECK

Verify:

```text
□ AppointmentCTA works from every intended location
□ Context is preserved
□ Booking starts clearly
□ Reason can be selected
□ Date can be selected
□ Time can be selected
□ Patient details are minimal
□ Validation is clear
□ Back navigation preserves data
□ Summary is accurate
□ Submission cannot be duplicated
□ Loading state exists
□ Error recovery exists
□ Success state is accurate
□ Request ≠ confirmed booking
□ Mobile experience is strong
□ Keyboard navigation works
□ Reduced motion works
□ Sensitive information is handled responsibly
```

---

# 99 — ANTI-DUPLICATION RULE

Before creating a new component, Antigravity must ask:

```text
Does a reusable component already solve this?
```

If yes:

```text
REUSE IT.
```

If not:

```text
CREATE A NEW COMPONENT ONLY IF THE NEW COMPONENT HAS A DISTINCT RESPONSIBILITY.
```

Do not create duplicate components simply because a new page has a different visual arrangement.

---

# 100 — FINAL COMPONENT ARCHITECTURE

The website should ultimately behave like:

```text
DESIGN SYSTEM
      ↓
UI PRIMITIVES
      ↓
REUSABLE COMPONENTS
      ↓
COMPOSITE COMPONENTS
      ↓
SECTIONS
      ↓
PAGES
```

Appointment architecture:

```text
AppointmentCTA
      ↓
BookingShell
      ↓
BookingSteps
      ↓
Reason
      ↓
Date
      ↓
Time
      ↓
PatientDetailsForm
      ↓
BookingSummary
      ↓
Submit
      ↓
BookingSuccess / BookingError
```

Treatment architecture:

```text
TreatmentCard
      ↓
TreatmentGrid
      ↓
TreatmentHero
      ↓
TreatmentJourney
      ↓
AppointmentCTA
```

Doctor architecture:

```text
DoctorCard
      ↓
DoctorProfile
      ↓
AppointmentCTA
```

Technology architecture:

```text
TechnologyCard
      ↓
TechnologyShowcase
      ↓
Dental3DViewer
```

Patient proof architecture:

```text
BeforeAfterSlider
+
PatientStoryCard
+
Testimonial
```

---

# 101 — MASTER COMPONENT RULE

Never build the website as:

```text
PAGE 1
→ custom code

PAGE 2
→ different custom code

PAGE 3
→ duplicated custom code

PAGE 4
→ another version
```

Build:

```text
ONE COMPONENT
        ↓
REUSABLE DATA
        ↓
REUSABLE BEHAVIOR
        ↓
FLUID RESPONSIVENESS
        ↓
CONSISTENT EXPERIENCE
```

The component system must make the website feel like **one coherent product**, not a collection of independently designed pages.

---

# FINAL ANTIGRAVITY COMMAND

Before creating any new UI element:

> **SEARCH THE EXISTING COMPONENT SYSTEM FIRST.**

If an existing component can solve the requirement:

```text
REUSE
```

If it needs a small variation:

```text
EXTEND
```

If the behavior is genuinely different:

```text
CREATE
```

Every component must follow:

```text
REUSABLE
+
FLUID
+
ACCESSIBLE
+
PERFORMANT
+
CONTENT-INDEPENDENT
+
ANIMATION-READY
+
CLINICALLY RESPONSIBLE
```

The ultimate rule:

# **BUILD COMPONENTS ONCE. COMPOSE THEM EVERYWHERE.**
