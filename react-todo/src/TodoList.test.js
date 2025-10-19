test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
});
