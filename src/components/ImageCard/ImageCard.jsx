import css from "./ImageCard.module.css";
import { useSearchContext } from "../../hooks/useSearchContext";

export const ImageCard = ({ image }) => {
  const { urls, alt_description, id } = image;

  const { setClickId, handleModalOpen } = useSearchContext();

  const handleClickImg = (e) => {
    setClickId(e.target.id);
    handleModalOpen();
  };
  return (
    <div onClick={handleClickImg}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        id={id}
      />
    </div>
  );
};
