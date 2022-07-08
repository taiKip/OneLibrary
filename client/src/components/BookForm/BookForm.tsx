import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { addNewBook } from "../../features/books/bookSlice";
import { authorType, bookType, categoryType } from "../../types";
import BookDetails from "./BookDetails";
import classes from "./BookForm.module.css";
import BookProfile from "./BookProfile";
import FormSteps from "./FormSteps/FormSteps";
import PublishDetails from "./PublishDetails";

const BookForm = () => {
  const imageUrl = useSelector((state: RootState) => state.imageUpload.url);
const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>();
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState<string[]>();
  const [headline, setHeadline] = useState<string>("");
  const [publishDate, setPublishDate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");

  const [page, setPage] = useState(1);
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };
  console.log(categories)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const book: bookType = {
      title,
      authors,
      longDescription: description,
      category: categories,
      shortDescription: headline,
      publisherDate: publishDate,
      isbn,
      publisher: publisher,
    };
  dispatch(addNewBook(book))
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormSteps currPage={page} />
      <div className={classes.form__wrapper}>
        {page === 1 && (
          <BookProfile
            nextPage={handleNextPage}
            setAuthors={setAuthors}
            setDescription={setDescription}
            setTitle={setTitle}
          />
        )}
        {page === 2 && (
          <BookDetails
            nextPage={handleNextPage}
            prevPage={handlePrevPage}
            setCategory={setCategories}
            setHeadline={setHeadline}
            headline={headline}
          />
        )}
        {page === 3 && (
          <PublishDetails
            prevPage={handlePrevPage}
            setIsbn={setIsbn}
            setPublishDate={setPublishDate}
            setPublisher={setPublisher}
          />
        )}
      </div>
    </form>
  );
};

export default BookForm;
