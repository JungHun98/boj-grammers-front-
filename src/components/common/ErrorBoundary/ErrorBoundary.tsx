import { ReactNode, Component } from 'react';
import { isAxiosError } from 'axios';
import getErrorDataByCode from '@/utils/getErrorDataByCode';
import { ErrorCode, ErrorContainer, ErrorTitle } from './ErrorBoundary.styles';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  code: string | null;
  message: string | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, code: null, message: null };
  }

  componentDidCatch(error: Error) {
    let code = null;
    let message = null;

    if (isAxiosError(error)) {
      const errorInfo = getErrorDataByCode(error);
      code = errorInfo.code;
      message = errorInfo.message;
    } else {
      message = '알수없는 에러가 발생했습니다.';
    }

    this.setState({ hasError: true, code: code, message: message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>{this.state.message}</ErrorTitle>
          {this.state.code && <ErrorCode>{this.state.code}</ErrorCode>}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
