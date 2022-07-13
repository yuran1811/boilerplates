import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorContent } from './shared';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError)
      return (
        <div className="bg-ct-bg-800 fullscreen">
          <ErrorContent errorBoundaries={true} />;
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
