import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ openModal, photos }) {
  return (
    <ul className={css.wrap_img}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => openModal(photo)}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
