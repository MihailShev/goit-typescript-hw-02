// import css from "./ImageCard.module.css";

function ImageCard({
  photo: {
    alt_description,
    urls: { small },
  },
}) {
  return (
    <div>
      <img width={300} height={250} src={small} alt={alt_description} />
    </div>
  );
}

export default ImageCard;
