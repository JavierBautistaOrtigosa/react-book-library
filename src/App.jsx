import { useState } from 'react';
import { bc } from './BookClasses';

function App() {
  const [book, setBook] = useState({
    // ---> Book Information
    title: '',
    subtitle: '',
    author: '',
    genre: '',
    pages: '',
    language: '',
    description: '',
    coverUrl: '',
    // ---> Publication Information
    publisher: '',
    publicationYear: '',
    isbn: '',
    // ---> Book Features
    isPublished: null,
    isHardcover: null,
    isBestseller: null,
    isTranslated: null,
    isIllustrated: null,
    isPartOfSeries: null,
    isFirstEdition: null,
    hasAudiobook: null,
    hasMovieAdaptation: null,
    isAwardWinner: null,
    hasDigitalVersion: null,
    isSignedCopy: null,
    // ---> Rating
    rating: null
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
    const selectedValue = e.target.value;
    const isPublished = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isPublished }));
  };

  const handleIsHardCoverChange = (e) => {
    const selectedValue = e.target.value;
    const isHardcover = selectedValue === 'true';

    setBook((prev) => ({ ...prev, isHardcover }));
  };

  const handleIsBestsellerChange = (e) => {
    const selectedValue = e.target.value;
    const isBestseller = selectedValue === 'true';

    setBook((prev) => ({ ...prev, isBestseller }));
  };

  const handleIsTranslatedChange = (e) => {
    const selectedValue = e.target.value;
    const isTranslated = selectedValue === 'true';

    setBook((prev) => ({ ...prev, isTranslated }));
  };

  const handleBookIsIllustratedChange = (e) => {
    const selectedValue = e.target.value;
    const isIllustrated = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isIllustrated }));
  };

  const handleIsPartOfSeriesChange = (e) => {
    const selectedValue = e.target.value;
    const isPartOfSeries = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isPartOfSeries }));
  };

  const handleIsFirstEditionChange = (e) => {
    const selectedValue = e.target.value;
    const isFirstEdition = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isFirstEdition }));
  };

  const handleHasAudiobookChange = (e) => {
    const selectedValue = e.target.value;
    const hasAudiobook = selectedValue === 'true';
    setBook((prev) => ({ ...prev, hasAudiobook }));
  };

  const handleHasMovieAdaptationChange = (e) => {
    const selectedValue = e.target.value;
    const hasMovieAdaptation = selectedValue === 'true';
    setBook((prev) => ({ ...prev, hasMovieAdaptation }));
  };

  const handleIsAwardWinnerChange = (e) => {
    const selectedValue = e.target.value;
    const isAwardWinner = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isAwardWinner }));
  };

  const handleHasDigitalVersionChange = (e) => {
    const selectedValue = e.target.value;
    const hasDigitalVersion = selectedValue === 'true';
    setBook((prev) => ({ ...prev, hasDigitalVersion }));
  };

  const handleIsSignedCopyChange = (e) => {
    const selectedValue = e.target.value;
    const isSignedCopy = selectedValue === 'true';
    setBook((prev) => ({ ...prev, isSignedCopy }));
  };

  const handleRatingChange = (e) => {
    const selectedValue = e.target.value;
    const rating = selectedValue === '' ? null : Number(selectedValue);
    setBook((prev) => ({ ...prev, rating }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(book);
    setBooks((prev) => [...prev, book]);
  };

  // #endregion

  return (
    <>
      <div className={bc.f}>
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

          {book.isPublished !== null && (
            <p>{book.isPublished ? 'Published' : 'Not Published'}</p>
          )}

          {book.isHardcover !== null && (
            <p>{book.isHardcover ? 'Harcover' : 'Not Hardcover'}</p>
          )}

          {book.isBestseller !== null && (
            <p>{book.isBestseller ? 'Bestseller' : 'Not bestseller'}</p>
          )}

          {book.isTranslated !== null && (
            <p>{book.isTranslated ? 'Translated' : 'Not translated'}</p>
          )}

          {book.isIllustrated !== null && (
            <p>{book.isIllustrated ? 'Illustrated' : 'Not illustrated'}</p>
          )}

          {book.isPartOfSeries !== null && (
            <p>
              {book.isPartOfSeries
                ? 'Part of series'
                : 'Not part of series'}
            </p>
          )}

          {book.isFirstEdition !== null && (
            <p>{book.isFirstEdition ? 'First edition' : 'Not first edition'}</p>
          )}

          {book.hasAudiobook !== null && (
            <p>{book.hasAudiobook ? 'Has audiobook' : 'Has not audiobook'}</p>
          )}

          {book.hasMovieAdaptation !== null && (
            <p>
              {book.hasMovieAdaptation
                ? 'Has movie adaptation'
                : 'Has not movie adaptation'}
            </p>
          )}

          {book.isAwardWinner !== null && (
            <p>
              {book.isAwardWinner ? 'Is award winner' : 'Is not award winner'}
            </p>
          )}

          {book.hasDigitalVersion !== null && (
            <p>
              {book.hasDigitalVersion
                ? 'Has digital version'
                : 'Has not digital version'}
            </p>
          )}

          {book.isSignedCopy !== null && (
            <p>{book.isSignedCopy ? 'Is signed' : 'Is not signed'}</p>
          )}

          {book.rating !== null && <p>{book.rating}</p>}
        </section>
      </div>

      <form className={bc.f} onSubmit={handleSave}>
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
          placeholder='Enter book description...'
          value={book.description}
          onChange={handleDescriptionChange}
        />

        <input
          placeholder='Enter book cover URL...'
          value={book.coverUrl}
          onChange={handleCoverUrlChange}
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

        <select
          onChange={handleIsPublishedChange}
          value={book.isPublished === null ? '' : String(book.isPublished)}
        >
          <option value=''>Is published?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          value={book.isHardcover === null ? '' : String(book.isHardcover)}
          onChange={handleIsHardCoverChange}
        >
          <option value=''>Is hardcover?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          value={book.isBestseller === null ? '' : String(book.isBestseller)}
          onChange={handleIsBestsellerChange}
        >
          <option value=''>Is a best seller?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          value={book.isTranslated === null ? '' : String(book.isTranslated)}
          onChange={handleIsTranslatedChange}
        >
          <option value=''>Is translated?</option>
          <option value='true'>Yes</option>
          <option value='false'>Yes</option>
        </select>

        <select
          value={book.isIllustrated === null ? '' : String(book.isIllustrated)}
          onChange={handleBookIsIllustratedChange}
        >
          <option value=''>Is Illustrated?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleIsPartOfSeriesChange}
          value={
            book.isPartOfSeries === null ? '' : String(book.isPartOfSeries)
          }
        >
          <option value=''>Is part of series?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleIsFirstEditionChange}
          value={
            book.isFirstEdition === null ? '' : String(book.isFirstEdition)
          }
        >
          <option value=''>Is first edition?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleHasAudiobookChange}
          value={book.hasAudiobook === null ? '' : String(book.hasAudiobook)}
        >
          <option value=''>Has an audiobook?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleHasMovieAdaptationChange}
          value={
            book.hasMovieAdaptation === null
              ? ''
              : String(book.hasMovieAdaptation)
          }
        >
          <option value=''>Has movie adaptation?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleIsAwardWinnerChange}
          value={book.isAwardWinner === null ? '' : String(book.isAwardWinner)}
        >
          <option value=''>Is award winner?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleHasDigitalVersionChange}
          value={
            book.hasDigitalVersion === null
              ? ''
              : String(book.hasDigitalVersion)
          }
        >
          <option>Has digital version?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleIsSignedCopyChange}
          value={book.isSignedCopy === null ? '' : String(book.isSignedCopy)}
        >
          <option>Is signed?</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <select
          onChange={handleRatingChange}
          value={book.rating === null ? '' : String(book.rating)}
        >
          <option value=''>Book rating</option>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <button type='submit'>Save</button>
      </form>
    </>
  );
}

export default App;
