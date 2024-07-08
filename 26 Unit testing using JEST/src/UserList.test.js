import React from 'react';
import { render } from '@testing-library/react';
import UserList from './UserList';

describe('UserList component', () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  test('renders a table with user data', () => {
    const { getByText } = render(<UserList users={users} />);
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('alice@example.com')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('bob@example.com')).toBeInTheDocument();
  });

  test('renders a table with the correct table headers', () => {
    const { getByText } = render(<UserList users={users} />);
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Email')).toBeInTheDocument();
  });

  test('renders the correct number of rows', () => {
    const { getAllByRole } = render(<UserList users={users} />);
    const rows = getAllByRole('row');
    expect(rows).toHaveLength(users.length + 1); // +1 for the header row
  });
});
