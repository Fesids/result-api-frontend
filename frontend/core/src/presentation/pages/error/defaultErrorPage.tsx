import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "./defaultErrPage.module.scss"


export default function DefaultErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  console.error(error);

  return (
    <div id={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado ocorreu.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}