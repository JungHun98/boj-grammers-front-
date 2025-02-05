let timer: string | number | NodeJS.Timeout | undefined;

function openSnackBar(message: string) {
  const snackbar = document.querySelector('#snackbar-container');
  const snackbarMessage = document.querySelector('#snackbar-msg');

  clearTimeout(timer);

  if (snackbar === null || snackbarMessage === null) return;

  snackbar.classList.add('snackbar-opened');
  snackbarMessage.textContent = message;

  timer = setTimeout(() => {
    snackbar.classList.remove('snackbar-opened');
  }, 2000);
}

export default openSnackBar;
