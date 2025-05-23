import css from "./ErrorMessage.module.css";

import { ErrorMessageProps } from "./ErrorMessage.types";
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={css.err_message}>{message}</p>;
};

export default ErrorMessage;
