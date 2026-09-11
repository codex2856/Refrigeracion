import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('La página se rompió:', error, info.componentStack);
  }

  handleReset = () => {
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="font-display text-2xl font-bold text-ink">Algo se rompió</h1>
          <p className="text-sm text-ink-soft">
            Tuvimos un error inesperado cargando la página. Intenta de nuevo.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="rounded-2xl bg-ice px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Volver a intentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
