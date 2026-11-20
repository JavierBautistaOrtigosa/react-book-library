### Example 1: Without handler

NOTES:

- The onChange logic is defined inline inside the JSX.
- This is perfectly valid for simple state updates.
- Useful when the update logic is short and only used once.
- Can reduce readability when the logic starts growing.
- The input is controlled because it uses both:
  value={book.title}
  onChange={...}

```jsx
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({ title: '' });

  return (
    <>
      <p>{book.title}</p>
      <input
        placeholder='Enter book title...'
        value={book.title}
        onChange={(e) =>
          setBook((prev) => ({ ...prev, title: e.target.value }))
        }
      />
    </>
  );
}
```

### Example 2: With handler

NOTES:

- The onChange logic is extracted into a dedicated handler function.
- Functionally equivalent to Example 1.
- Improves readability by keeping JSX cleaner.
- Makes the logic reusable and easier to test or extend.
- Preferred when the handler contains multiple statements or business logic.
- The input remains controlled because it uses:
  value={book.title}
  onChange={handleNewBook}

```jsx
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({ title: '' });

  const handleNewBook = (e) =>
    setBook((prev) => ({ ...prev, title: e.target.value }));

  return (
    <>
      <p>{book.title}</p>
      <input
        placeholder='Enter book title...'
        value={book.title}
        onChange={handleNewBook}
      />
    </>
  );
}

export default App;
```

### Example 3: Controlled Input With Initial Value

NOTES:

- The input starts with the value "Dune".
- Because the input is controlled, React displays whatever is stored in state.
- Typing updates the state through onChange.
- onFocus={(e) => e.target.select()} is optional.
- select() highlights the entire input value when the field receives focus.
- This improves UX by allowing the user to immediately replace "Dune" with new text.
- The input works correctly without select(), but new text will be appended to the existing value unless manually selected.

```jsx
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({ title: 'Dune' });

  const handleNewBook = (e) =>
    setBook((prev) => ({ ...prev, title: e.target.value }));

  return (
    <>
      <h2>Test</h2>
      <p>{book.title}</p>
      <input
        placeholder='Enter book title...'
        value={book.title}
        onChange={handleNewBook}
        onFocus={(e) => e.target.select()} // This needs to be used to overwrite 'Dune'
      />
    </>
  );
}

export default App;
```

### Example 4: Simplified State Update

NOTES:

- The book object only contains one property: title.
- Since no other properties need to be preserved, using prev and the spread operator is unnecessary.
- This is sufficient:

  setBook({ title: e.target.value });

- If additional properties are added later (author, year, isbn, etc.), the updater function and spread operator should be used again.

- After saving:
  - The book is added to the books array.
  - The input is cleared by resetting book.title to an empty string.

- console.log(books) immediately after setBooks() will show the previous state value.
- React state updates are asynchronous.
- To observe the updated books array, use:

  useEffect(() => {
  console.log(books);
  }, [books]);

````jsx
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({ title: '' });
  const [books, setBooks] = useState([]);

  const handleBookChange = (e) => setBook({ title: e.target.value });

  const handleBookSave = () => {
    setBooks((prev) => [...prev, { title: book.title }]);
    setBook({ title: '' });
    console.log(books);
  };

  return (
    <>
      <h2>Test</h2>
      <p>{book.title}</p>
      <input
        placeholder='Enter book title...'
        value={book.title}
        onChange={handleBookChange}
      />
      <button onClick={handleBookSave}>Save</button>
    </>
  );
}

export default App;
```



### Reglas Generales y notas:

- Uncontrolled:
  `<input />`
- Controlled:
  `<input value={state} onChange={...} />`
- Utiliza esto mucho mejor para observar cambios en el array de books...

```jsx
useEffect(() => {
  console.log(books);
}, [books]);
````

### Example 5: Multiple Properties (title, author, genre)

- The book object now contains multiple properties:

  ```jsx
  {
    title: '',
    author: '',
    genre: ''
  }
  ```

- Because the object has multiple properties, using the spread operator becomes important:

```jsx
setBook((prev) => ({
  ...prev,
  title: e.target.value
}));
```

- Without ...prev, all other properties would be lost.

- Example:

  Current state:

```jsx
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Sci-Fi'
  }
```

Incorrect:

```jsx
setBook({
  title: 'Dune Messiah'
});
```

Result:

```jsx
{
  title: 'Dune Messiah';
}
```

author and genre are removed.

- Correct:

```jsx
setBook((prev) => ({
  ...prev,
  title: 'Dune Messiah'
}));
```

Result:

```jsx
  {
    title: 'Dune Messiah',
    author: 'Frank Herbert',
    genre: 'Sci-Fi'
  }
```

- Use the updater function and spread operator whenever you need to preserve existing properties in an object state.

- This is one of the most common React patterns for managing forms with multiple inputs.

- Rule of thumb:

  Single property:

  ```jsx
  setBook({ title: value });
  ```

  Multiple properties:

```jsx
setBook((prev) => ({
  ...prev,
  title: value
}));
```

```jsx
import { useState } from 'react';

function App() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const [books, setBooks] = useState([]);

  const handleTitleChange = (e) =>
    setBook((prev) => ({
      ...prev,
      title: e.target.value
    }));

  const handleAuthorChange = (e) =>
    setBook((prev) => ({
      ...prev,
      author: e.target.value
    }));

  const handleGenreChange = (e) =>
    setBook((prev) => ({
      ...prev,
      genre: e.target.value
    }));

  const handleBookSave = () => {
    setBooks((prev) => [...prev, book]);

    setBook({
      title: '',
      author: '',
      genre: ''
    });
  };

  return (
    <>
      <h2>Book Form</h2>

      <input
        placeholder='Title...'
        value={book.title}
        onChange={handleTitleChange}
      />

      <input
        placeholder='Author...'
        value={book.author}
        onChange={handleAuthorChange}
      />

      <input
        placeholder='Genre...'
        value={book.genre}
        onChange={handleGenreChange}
      />

      <button onClick={handleBookSave}>Save</button>

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
```
