import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieStats from '../../components/MovieStats';

const createMoviesArray = () => {
  const movies = [];
  for (let i = 0; i <= 20; i += 1) {
    const movieObject = {
      original_title: `FakeMovie${i}`,
      character: 'FakeCharacter',
      release_date: '2020',
    };

    movies.push(movieObject);
  }
  return movies;
};

const moviesArray = createMoviesArray();

describe('MovieStats', () => {
  render(<MovieStats movieStats={moviesArray} />);

  test('it should render a table with first 10 elements of movies array', () => {
    moviesArray.slice(0, 10).forEach((movie) => {
      expect(screen.getByText(movie.original_title)).toBeInTheDocument();
    });
  });

  test('it should not render more than 10 elements', () => {
    expect(screen.queryByText(moviesArray[10])).not.toBeInTheDocument();
  });

  test('it should load 10 more elements keeping the previous elements when showMore button is clicked', () => {
    render(<MovieStats movieStats={moviesArray} />);
    userEvent.click(screen.getByText('Show More'));
    moviesArray.slice(0, 20).forEach((movie) => {
      expect(screen.getByText(movie.original_title)).toBeInTheDocument();
    });
  });
});
