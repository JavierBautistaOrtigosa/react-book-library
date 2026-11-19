# React Book Library

A React CRUD application for managing a book collection using local component state and controlled form inputs.

---

# Objective

Build a small React application that allows users to:

- Create books
- Display books in a table
- Edit existing books
- Delete books

The application must use React Hooks (`useState`) and local state management only.

---

# Functional Requirements

## Create Book

The user should be able to:

1. Enter a title.
2. Enter an author.
3. Click the **Save** button.
4. Add a new row to the table.

### Expected Result

Before:

| Title | Author  |
| ----- | ------- |
| Dune  | Herbert |

After saving:

| Title | Author  |
| ----- | ------- |
| Dune  | Herbert |
| 1984  | Orwell  |

---

## Update Book

The user should be able to:

1. Click the **Edit** button of a row.
2. Load that book into the form.
3. Modify the values.
4. Click **Save**.
5. Update the existing row.

### Expected Result

Before:

| Title | Author  |
| ----- | ------- |
| Dune  | Herbert |

User edits title:

```
Dune Messiah
```

After save:

| Title        | Author  |
| ------------ | ------- |
| Dune Messiah | Herbert |

---

## Delete Book

The user should be able to:

1. Click **Delete**.
2. Remove the selected row from the table.

### Expected Result

Before:

| Title | Author  |
| ----- | ------- |
| Dune  | Herbert |
| 1984  | Orwell  |

After deleting "1984":

| Title | Author  |
| ----- | ------- |
| Dune  | Herbert |

---

# Technical Requirements

## React Hooks

Use:

```javascript
useState;
```

No Redux, Context API, Zustand or external state libraries.

---

# State Design

## Current Form Data

Stores the values currently entered in the form.

```javascript
const [book, setBook] = useState({
  title: '',
  author: ''
});
```

### Purpose

Controls form inputs.

Example:

```javascript
{
  title: 'Dune',
  author: 'Frank Herbert'
}
```

---

## Books Collection

Stores all books displayed in the table.

```javascript
const [books, setBooks] = useState([]);
```

### Purpose

Acts as the application database.

Example:

```javascript
[
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];
```

---

## Editing State

Stores the item currently being edited.

```javascript
const [editingBook, setEditingBook] = useState(null);
```

### Purpose

Determines whether the form is:

- Creating a new book
- Updating an existing book

### Possible Values

No edition in progress:

```javascript
null;
```

Editing a book:

```javascript
{
  title: 'Dune',
  author: 'Frank Herbert'
}
```

---

# UI Structure

## Form Section

Required fields:

```text
Title
Author
```

Required action:

```text
Save
```

---

## Table Section

Columns:

```text
Title
Author
Actions
```

Example:

```text
Title        Author             Actions
------------------------------------------------
Dune         Frank Herbert      Edit Delete
1984         George Orwell      Edit Delete
```

---

# Component Architecture

A single component implementation is acceptable.

Suggested structure:

```text
App
 ├── Form
 └── Table
```

For better organization:

```text
App
 ├── BookForm
 └── BookTable
```

---

# Data Flow

## Create Flow

```text
User types
↓
book state updates
↓
User clicks Save
↓
New book added to books state
↓
Table re-renders
↓
Form resets
```

---

## Edit Flow

```text
User clicks Edit
↓
Selected row copied to book state
↓
editingBook receives selected book
↓
Inputs display current values
↓
User modifies values
↓
Save
↓
Book updated
↓
editingBook reset to null
```

---

## Delete Flow

```text
User clicks Delete
↓
Book removed from books state
↓
Table re-renders
```

---

# Form Behaviour

## Controlled Components

All inputs must be controlled.

Example concept:

```text
Input value
↓
State
↓
Input renders state value
```

Every input change should immediately update state.

---

# Save Button Logic

The Save button has two responsibilities.

## Case 1: Create

Condition:

```javascript
editingBook === null;
```

Action:

```text
Add new book
```

---

## Case 2: Update

Condition:

```javascript
editingBook !== null;
```

Action:

```text
Update existing book
```

---

# Update Strategy

When updating a book:

1. Find the target book.
2. Replace its values.
3. Preserve all other books.
4. Update state with a new array.

Important:

```text
Never mutate state directly.
```

Always create a new array.

---

# Delete Strategy

When deleting:

1. Identify selected book.
2. Remove it from collection.
3. Update state with a new array.

Important:

```text
Never use array mutation methods directly on state.
```

Avoid:

```javascript
splice();
```

Prefer immutable operations.

---

# Validation Rules

Minimum validation:

## Title

Must not be empty.

## Author

Must not be empty.

If either field is empty:

```text
Do not save.
```

---

# Form Reset

After successful create:

```javascript
{
  title: '',
  author: ''
}
```

After successful update:

```javascript
{
  title: '',
  author: ''
}
```

and:

```javascript
editingBook = null;
```

---

# Expected Learning Outcomes

After completing this exercise you should understand:

- React state management
- Controlled components
- Array updates in React
- Immutable state updates
- Conditional logic
- CRUD operations
- Form handling
- Component communication
- React rendering cycle

---

# Optional Enhancements

Once the basic solution works, try implementing:

- Search books
- Sort by title
- Sort by author
- Confirmation before delete
- Form validation messages
- LocalStorage persistence
- Separate components
- TypeScript version
- Unit tests with Jest
- Responsive layout

---

# Definition of Done

The exercise is complete when:

- A user can create books.
- A user can edit books.
- A user can delete books.
- The form is controlled by state.
- The table always reflects the current state.
- No page refresh is required.
- State is updated immutably.
- The application runs without console errors.
