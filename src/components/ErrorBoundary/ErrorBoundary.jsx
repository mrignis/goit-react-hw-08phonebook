// ErrorBoundary.jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Оновити стан, щоб наступний рендер показав запасний UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ви можете також занести помилку в службу звітів
    console.error("Помилка у компоненті:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Ви можете відобразити будь-який користувацький запасний UI
      return <h1>Вибачте, сталася помилка.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
