import { useState } from "react";
import { searchContext } from "../hooks/useSearchContext";

export const SearchProviders = ({ children }) => {
  const [searchWord, setSearchWord] = useState(null);
  const [clickedId, setClickId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return (
    <searchContext.Provider
      value={{
        searchWord,
        setSearchWord,
        clickedId,
        setClickId,
        isOpen,
        setIsOpen,
        handleModalClose,
        handleModalOpen,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
