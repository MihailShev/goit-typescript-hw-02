import css from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.userSearchQuery.value.trim();

    if (value === "") {
      return toast.error("Please enter the meaning.");
    }

    onSubmit(value);

    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <Toaster position="top-right" reverseOrder={false} />
        <input
          className={css.input}
          type="text"
          name="userSearchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
export default SearchBar;
