import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useSearchContext } from "../../hooks/useSearchContext";

export const SearchBar = ({ onSearch }) => {
  const { setSearchWord } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const word = form.elements.search.value;
    setSearchWord(word);

    if (word === "") {
      toast.error("Complete the word !");
      return;
    }
    onSearch(word);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.search_box}>
        <input
          type="text"
          name="search"
          placeholder="Search images..."
          className={css.search_input}
          autoComplete="off"
          autoFocus
        ></input>
        <Toaster position="top-right" reverseOrder={false} />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
