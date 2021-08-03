import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Actor from '../../components/Actor';

const actor = {
  id: '1',
  name: 'FakeActor',
  popularity: '24.34',
};

beforeEach(() => {
  render(
    <BrowserRouter>
      <Actor actor={actor} />
    </BrowserRouter>,
  );
});

test('it will render a single actor preview name', () => {
  expect(screen.getByText('FakeActor')).toBeInTheDocument();
});

test('it will render a single actor preview popularity', () => {
  expect(screen.getByText('Popularity:')).toBeInTheDocument();
  expect(screen.getByText('24.34')).toBeInTheDocument();
});
