import { Content, Message, SnackbarIcon, Wrapper } from './Snackbar.styles';

function Snackbar() {
  return (
    <Wrapper id="snackbar-container">
      <Content>
        <SnackbarIcon>ℹ️</SnackbarIcon>
        <Message id="snackbar-msg"></Message>
      </Content>
    </Wrapper>
  );
}

export default Snackbar;
