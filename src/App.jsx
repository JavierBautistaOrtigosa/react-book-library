import { useState } from 'react';

function App() {
  const [book, setBook] = useState({
    title: '',
    subtitle: '',
    author: '',
    genre: '',
    pages: '',
    language: '',
    publisher: '',
    publicationYear: '',
    isbn: '',
    description: '',
    coverUrl: '',
    isPublished: null,
    isHardcover: false,
    rating: 0
  });

  const [books, setBooks] = useState([]);

  //   #region - handlers
  const handleTitleChange = (e) => {
    setBook((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleSubtitleChange = (e) => {
    setBook((prev) => ({ ...prev, subtitle: e.target.value }));
  };

  const handleAuthorChange = (e) => {
    setBook((prev) => ({ ...prev, author: e.target.value }));
  };

  const handleGenreChange = (e) => {
    setBook((prev) => ({ ...prev, genre: e.target.value }));
  };

  const handlePagesChange = (e) => {
    setBook((prev) => ({ ...prev, pages: e.target.value }));
  };

  const handleLanguageChange = (e) => {
    setBook((prev) => ({ ...prev, language: e.target.value }));
  };

  const handlePublisherChange = (e) => {
    setBook((prev) => ({ ...prev, publisher: e.target.value }));
  };

  const handlePublicationYearChange = (e) => {
    setBook((prev) => ({ ...prev, publicationYear: e.target.value }));
  };

  const handleIsbnChange = (e) => {
    setBook((prev) => ({ ...prev, isbn: e.target.value }));
  };

  const handleDescriptionChange = (e) => {
    setBook((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleCoverUrlChange = (e) => {
    setBook((prev) => ({ ...prev, coverUrl: e.target.value }));
  };

  const handleIsPublishedChange = (e) => {
    setBook((prev) => ({ ...prev, isPublished: e.target.value === 'true' }));
  };

  const handleIsHardCoverChange = (e) => {
    setBook((prev) => ({ ...prev, isHardcover: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setBook((prev) => ({ ...prev, rating: e.target.value }));
  };

  // #endregion

  return (
    <>
      <h2>Book Library</h2>
      <section>
        <p>{book.title}</p>
        <p>{book.subtitle}</p>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.pages}</p>
        <p>{book.language}</p>
        <p>{book.publisher}</p>
        <p>{book.publicationYear}</p>
        <p>{book.isbn}</p>
        <p>{book.description}</p>
        <p>{book.coverUrl}</p>
        <p>{book.isPublished !== nullll &&}</p>
        <p>{book.isHardcover}</p>
        <p>{book.rating}</p>
      </section>
      <section>
        <input
          placeholder='Enter book title...'
          value={book.title}
          onChange={handleTitleChange}
        />
        <input
          placeholder='Enter book subtitle...'
          value={book.subtitle}
          onChange={handleSubtitleChange}
        />
        <input
          placeholder='Enter book author...'
          value={book.author}
          onChange={handleAuthorChange}
        />
        <input
          placeholder='Enter book genre...'
          value={book.genre}
          onChange={handleGenreChange}
        />
        <input
          placeholder='Enter book pages...'
          value={book.pages}
          onChange={handlePagesChange}
        />
        <input
          placeholder='Enter book language...'
          value={book.language}
          onChange={handleLanguageChange}
        />
        <input
          placeholder='Enter book publisher...'
          value={book.publisher}
          onChange={handlePublisherChange}
        />
        <input
          placeholder='Enter book publication year...'
          value={book.publicationYear}
          onChange={handlePublicationYearChange}
        />
        <input
          placeholder='Enter book ISBN...'
          value={book.isbn}
          onChange={handleIsbnChange}
        />
        <input
          placeholder='Enter book description...'
          value={book.description}
          onChange={handleDescriptionChange}
        />
        <input
          placeholder='Enter book cover URL...'
          value={book.coverUrl}
          onChange={handleCoverUrlChange}
        />
        {/* isPublished - true/false - <select> */}

        <select
          value={String(book.isPublished)}
          onChange={handleIsPublishedChange}
        >
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        {/* isHardcover - true/false - <select> */}
        {/* rating - 0 to 10 - <select> */}

        <br />
        <br />
        <button>Save</button>
      </section>
    </>
  );
}

export default App;

/*
Note - controlled value, UI render, logical operator:

- Formula:
- condition && <Element />

- If the condition is true...
- React renders the element

- If the condition is false...
- React renders nothing

---

- Use case:

- {book.isPublished}
- The value of this property is null by default, therefore...

- {book.isPublished !== null}
- React evaluates this expression

- {null !== null}
- false

- Therefore...

- {false && <p>...</p>}

- Since the left side is false, React stops here
- It doesn't even need to look at the <p>

- Result:
- <p>{book.isPublished ? "Published" : "Not Published"}</p>
- Won't be rendered

---

- Later, the user selects "Yes"

- {book.isPublished}
- The value is now true

- {book.isPublished !== null}
- React evaluates:

- {true !== null}
- true

- Therefore...

- {true && <p>...</p>}

- Since the left side is true, React continues and renders the element

- Result:
- Output: "Published"
*/

/*
Note - <select>, ternary operator:

- Formula:
- condition ? expressionIfTrue : expressionIfFalse

- Read it as:
- "If this condition is true, use this value.
- Otherwise, use the other value."

---

- Use case:

value={
  book.isPublished === null
    ? ""
    : String(book.isPublished)
}

- React needs to know which option should appear selected

- To decide that, it first checks:

- {book.isPublished === null}

---

- Initial render:

- {book.isPublished}
- The value is null by default

- React evaluates:

- {null === null}
- true

- Therefore...

- value = ""

- React now looks for:

- <option value="">

- Match found:

- <option value="">Select an option</option>

- Result:
- "Select an option" appears in the UI

---

- User selects "Yes"

- setBook({ isPublished: true })

- React renders again

- This time:

- {book.isPublished === null}

- becomes:

- {true === null}

- false

- Therefore...

- value = String(book.isPublished)

- value = String(true)

- value = "true"

- React now looks for:

- <option value="true">

- Match found:

- <option value="true">Yes</option>

- Result:
- "Yes" appears as the selected option
*/