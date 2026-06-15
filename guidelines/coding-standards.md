# LMS Coding Standards

## Introduction

Since multiple developers are working on this LMS project, it is important that everyone follows the same coding practices. This helps keep the codebase clean, reduces merge conflicts, and makes it easier for others to understand and maintain your work.

Please follow these guidelines while working on your assigned tasks.

---

## Organizing Your Work

### Create New Files for New Features

When building a new feature, create new pages and components instead of modifying existing files whenever possible.

For example:

* New page → Create a new page file.
* New card or widget → Create a new component file.

This helps prevent conflicts when multiple team members are working simultaneously.

Try to keep files organized in the appropriate folders such as:

* pages
* components
* services
* hooks
* utils

---

## Naming Conventions

### Components

Component names should always start with a capital letter.

Examples:

* CourseCard.jsx
* StudentProfile.jsx
* AnalyticsDashboard.jsx

Avoid names such as:

* coursecard.jsx
* studentprofile.jsx

---

### Variables and Functions

Use camelCase for variables and functions.

Examples:

* courseList
* studentName
* handleSubmit()
* fetchCourses()

This keeps the code readable and consistent across the project.

---

## Working with APIs

Always use the shared API instance that already exists in the project.

Good Example:

```jsx
import API from "../../api/api";

const response = await API.get("/courses");
```

Avoid writing API URLs directly inside components.

Bad Example:

```jsx
axios.get("http://localhost:5000/api/courses");
```

Using the shared API instance ensures that authentication, headers, and future configuration changes work correctly across the application.

---

## React Development Guidelines

### Use Functional Components

All new components should be built using React Functional Components and Hooks.

Example:

```jsx
const Dashboard = () => {
  return <div>Dashboard</div>;
};
```

Avoid creating class-based components.

---

### Keep Components Focused

If a component becomes too large or difficult to manage, break it into smaller reusable components.

Example:

Instead of placing everything inside one CoursePage component, split it into:

* CourseHeader
* CourseDetails
* CourseCurriculum
* EnrollButton

Smaller components are easier to understand, test, and reuse.

---

## State Management

* Use React state (`useState`) for local component data.
* Use Context API or Redux for application-wide state.
* Avoid passing props through multiple layers when a global state solution is more appropriate.

---

## Error Handling

Always handle errors when making API requests.

Example:

```jsx
try {
  const response = await API.get("/courses");
} catch (error) {
  console.error(error);
}
```

Whenever possible, show a user-friendly message instead of failing silently.

---

## Forms

All forms in the application should:

* Validate user input.
* Display clear error messages.
* Show loading indicators during submission.
* Prevent duplicate submissions.

Examples:

* Login Form
* Registration Form
* Profile Update Form
* Course Creation Form

---

## Code Quality

### Keep the Code Clean

Before pushing your code:

* Remove unused imports.
* Remove unused variables.
* Remove old commented-out code.
* Check for console logs that are no longer needed.

Clean code is easier for everyone to work with.

---

## Reuse Before Rebuilding

Before creating a new component, check whether a similar one already exists.

This applies especially to:

* Buttons
* Cards
* Inputs
* Tables
* Modals

Reusing components keeps the design and behavior consistent throughout the LMS.

---

## Routing

Whenever you create a new page:

1. Create the page component.
2. Register the route.
3. Test navigation to ensure the route works correctly.

Do not assume a page is complete until it is accessible through routing.

---

## Before Committing Your Code

Make sure that:

* The application runs successfully.
* Your feature works as expected.
* There are no obvious errors in the console.
* Existing functionality has not been broken.

Please avoid committing code that is incomplete or causes build failures.

---

## Writing Readable Code

Write code with the assumption that another team member may need to understand or modify it later.

Use:

* Meaningful variable names
* Clear function names
* Logical component structures

Add comments only when they genuinely help explain something complex.

---

## Final Principle

The goal is not just to make your feature work.

The goal is to create code that is:

* Clean
* Readable
* Reusable
* Easy to maintain

If another developer can open your code and immediately understand it, you have done a good job.
