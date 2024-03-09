// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { describe, test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  test('should render the app', () => {
    render(<App />);
    expect(screen.getByText('Books')).toBeInTheDocument();
  });
  test('should add new book to the list', async () => {
    render(<App />);

    const titleInput = screen.getByPlaceholderText('Title');
    const authorInput = screen.getByPlaceholderText('Author');

    await userEvent.type(titleInput, 'The Great book');
    await userEvent.type(authorInput, 'John Doe');

    expect(screen.getByText('Dodaj')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Dodaj'));

    expect(screen.queryByText('The Great book')).toBeInTheDocument();
  });

  test('should remove book from the list', async () => {
    render(<App />);

    const titleInput = screen.getByPlaceholderText('Title');
    const authorInput = screen.getByPlaceholderText('Author');

    await userEvent.type(titleInput, 'The Great book');
    await userEvent.type(authorInput, 'John Doe');
    expect(screen.getByText('Dodaj')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Dodaj'));

    const deleteButton = await screen.findByText('Delete');
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('delete'));
    expect(deleteButton).not.toBeInTheDocument();
  });
});
