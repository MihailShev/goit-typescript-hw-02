import css from "./Loader.module.css";
import { RotatingLines } from "react-loader-spinner";

function Loader({ loader }) {
  return (
    <div className={css.wrap_loader}>
      <RotatingLines
        visible={loader}
        height="100"
        width="100"
        strokeColor="black"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
export default Loader;
