import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { GalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<GalleryProps> = ({ gallery, onOpen }) => {
  return (
    <ul className={css.ul}>
      {gallery.map((galleryEl) => (
        <li
          className={css.li}
          key={galleryEl.id + Math.random() * 10}
          onClick={() => onOpen(galleryEl)}
        >
          <ImageCard card={galleryEl} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
