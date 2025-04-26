import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <>
      <p className={css.err_message}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </>
  );
}

export default ErrorMessage;
