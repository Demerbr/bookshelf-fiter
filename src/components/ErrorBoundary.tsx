"use client";

import React, { Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error Boundary caught:', error);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Algo deu errado
          </h2>
          <p className="text-red-600 mb-4">
            Ocorreu um erro inesperado neste componente.
          </p>
          <Button 
            onClick={() => this.setState({ hasError: false })}
            size="sm"
          >
            Tentar novamente
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
