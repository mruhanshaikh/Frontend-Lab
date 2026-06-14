# [React Hook Form + Zod Validation](https://validateformm.netlify.app/)
 
A multi-field registration form built with **React Hook Form** and **Zod** for schema-based validation, demonstrating dynamic field arrays, conditional rendering, and cross-field validation.
 
## Features
 
- Form state management with `react-hook-form`
- Schema validation via `zod` and `@hookform/resolvers`
- Dynamic input list (Skills) using `useFieldArray` — add/remove fields
- Conditional field rendering (Confirm Password shown only after password meets length requirement) via `watch`
- Cross-field validation using `.refine()` (password & confirm password match)
- Supported input types: text, email, password, number, date, select, radio, checkbox, textarea
- Form reset after successful submission
- Live preview of submitted data
## Tech Stack
 
- React
- React Hook Form
- Zod
- @hookform/resolvers
## Project Structure
 
```
src/
├── components/
│   ├── Form.jsx       # Main form with all fields and validation
│   └── Showsec.jsx     # Displays submitted form data
├── schema.js           # Zod validation schema
└── index.css           # Styling
```
 
## Validation Rules
 
| Field | Rules |
|---|---|
| Name | 3–20 characters |
| Email | Valid email format |
| Password | Min 8 chars, requires uppercase, lowercase, number, special character |
| Confirm Password | Must match password |
| Age | Between 10 and 90 |
| Date | Required |
| Hobby | One of: music, dancing, playing |
| Skills | Dynamic list, each skill min 3 characters |
| Gender | One of: male, female |
| Terms | Must be accepted |
| Description | 10–1000 characters |
 
## Getting Started
 
```bash
npm install
npm run dev
```
 
## Key Concepts Demonstrated
 
- Connecting `useFieldArray` to `useForm` via `control`
- Registering dynamic fields using dot-notation paths (`skills.${index}.skill`)
- Accessing nested validation errors with bracket notation
- Combining `useForm` watch with conditional UI rendering
- Using Zod `.refine()` for multi-field validation logic
 
