import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import { fetchSearchPhoto } from "../../js/fetch-api";
import { useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [userValue, setUserValue] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!userValue) {
      return;
    }

    async function fetchPhotos() {
      try {
        setError(false);
        setLoader(true);
        const results = await fetchSearchPhoto(userValue, page);

        if (page === 1) {
          setPhotos(results);
        } else {
          setPhotos((prevPhoto) => [...prevPhoto, ...results]);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    fetchPhotos();
  }, [userValue, page]);

  const closeModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModal(true);
  };

  const handleUserValue = (newValue) => {
    setUserValue(newValue);
    setPage(1);
    setPhotos([]);
  };

  const handleMoreBtn = () => setPage(page + 1);

  return (
    <>
      <SearchBar onSubmit={handleUserValue} />

      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery openModal={openModal} photos={photos} />
      )}

      {photos.length === 0 ? "" : <LoadMoreBtn onClick={handleMoreBtn} />}

      <Loader loader={loader} />

      <ImageModal isOpen={modal} onClose={closeModal} photo={selectedPhoto} />
    </>
  );
}

export default App;
