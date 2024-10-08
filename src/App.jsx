// import { useEffect, useState } from "react";
// import "./App.css";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import "./App.css";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { Loader } from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FetchImages } from "./fetch-api";
import { useSearchContext } from "./hooks/useSearchContext";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const { searchWord } = useSearchContext();

  const handleSearch = async (word) => {
    try {
      setPage(1);
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await FetchImages(word);
      console.log(data);
      setImages(data);
      setPage((prev) => prev + 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      const data = await FetchImages(searchWord, page);
      setImages((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <LoadMoreBtn paginationClick={handleClick} />
          <ImageModal images={images} />
        </>
      )}
      {loading && <Loader />}
    </>
  );
}

// export default App;

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const savedContact = window.localStorage.getItem("saved-contact");

//     if (savedContact !== null) {
//       return JSON.parse(savedContact);
//     }

//     return [];
//   });
//   const [searchContact, setSearchContact] = useState("");

//   useEffect(() => {
//     window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
//   }, [contacts]);
//   const handleChange = (e) => {
//     setSearchContact(e.target.value);
//   };

//   const addContact = (newContact) => {
//     setContacts((prev) => {
//       return [...prev, newContact];
//     });
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prev) => {
//       return prev.filter((contact) => contact.id !== contactId);
//     });
//   };

//   const contactToRender = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchContact.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox handleChange={handleChange} value={searchContact} />
//       <ContactList contacts={contactToRender} onDelete={deleteContact} />
//     </div>
//   );
// }
