# LMS Design Guide

## Overview

Our LMS follows a modern dark-themed design with smooth animations, gradient highlights, glassmorphism effects, and a clean learning-focused user experience.

When building new pages, always try to make them feel like they are part of the existing platform. A user should be able to move between pages without feeling like they are using different applications.

---

## Before You Start

Before creating any new page or component:

1. Review the existing Login page.
2. Review the Home page.
3. Observe how cards, buttons, forms, colors, and spacing are used.
4. Follow the same design patterns throughout your feature.

Consistency is more important than creativity in this project.

---

## Design Standards

### Theme

The entire application uses a dark theme.

Primary backgrounds:

* Main Background: `#050816`
* Secondary Background: `#081028`
* Tertiary Background: `#0F172A`

Avoid introducing new background colors unless absolutely necessary.

---

### Accent Colors

Use the existing accent colors throughout the project:

* Cyan: `#06B6D4`
* Blue: `#3B82F6`
* Purple: `#8B5CF6`
* Orange: `#F97316`

These colors should be used for:

* Buttons
* Highlights
* Icons
* Important actions
* Interactive elements

---

### Typography

Keep typography simple and consistent:

* Main Page Titles → Large and bold
* Section Headings → Medium-sized and semi-bold
* Regular Content → Light gray text
* Secondary Information → Slightly darker gray text

Do not introduce multiple font styles or font families.

---

### Cards & Containers

Whenever displaying information such as:

* Courses
* Statistics
* User Profiles
* Analytics
* Dashboard Widgets

Use card-based layouts with:

* Rounded corners
* Soft borders
* Dark backgrounds
* Consistent padding

Cards should feel clean and spacious.

---

### Buttons

Use the existing cyan-to-blue gradient style for primary actions such as:

* Login
* Register
* Save
* Publish
* Enroll
* Submit

Secondary actions should use subtle borders and dark backgrounds.

All buttons should have smooth hover effects.

---

### Forms

All forms should follow the same structure and styling.

Examples:

* Login
* Registration
* Profile Settings
* Course Creation

Requirements:

* Rounded input fields
* Consistent spacing
* Clear labels
* Proper focus states

---

### Validation

Provide clear feedback to users.

Valid fields:

* Green border
* Success indication

Invalid fields:

* Red border
* Error message

Error messages should be easy to understand and clearly visible.

---

### Animations

The platform already uses subtle animations.

You may use:

* Floating effects
* Fade-in effects
* Soft hover transitions

Avoid excessive or distracting animations.

---

### Icons

Use the `react-icons` library for all icons.

Try to maintain consistent icon sizing throughout the project.

---

## Student Dashboard Pages

The following pages should match the existing student experience:

* Course Catalog
* Course Details
* My Courses
* Profile & Settings

Use:

* Dark backgrounds
* White text
* Gradient buttons
* Rounded cards
* Consistent spacing

---

## Admin Dashboard Pages

All admin pages should maintain the same visual identity as the student side.

Examples:

* Analytics Dashboard
* Student Management
* Course Management

Keep layouts clean, professional, and easy to scan.

---

## Development Rules

### Create New Files

For new features:

* Create new page/component files.
* Avoid modifying existing files unless necessary.

### Register Routes

Every new page must be added to the appropriate router configuration.

### Use Shared API Utilities

Always use the project's central API configuration.

Do not hardcode API URLs inside components.

### Follow Existing Patterns

Before creating a new component, check whether a similar component already exists and reuse the same structure where possible.

---

## Final Goal

The goal is to ensure that every feature built by different team members looks and feels like it was created by a single development team.

When in doubt, prioritize consistency over customization.
