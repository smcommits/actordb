import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TVStats from '../../components/TVStats';

const createTVArray = () => {
  const tvShows = [];
  for (let i = 0; i <= 20; i += 1) {
    const movieObject = {
      original_name: `FakeTV${i}`,
      character: 'FakeCharacter',
      release_date: '2020',
    };

    tvShows.push(movieObject);
  }
  return tvShows;
};

const tvShowsArray = createTVArray();

describe('TVStats', () => {
  render(<TVStats tvStats={tvShowsArray} />);

  test('it should render a table with first 10 elements of tvShows array', () => {
    tvShowsArray.slice(0, 10).forEach((movie) => {
      expect(screen.getByText(movie.original_name)).toBeInTheDocument();
    });
  });

  test('it should not render more than 10 elements', () => {
    expect(screen.queryByText(tvShowsArray[10])).not.toBeInTheDocument();
  });

  test('it should load 10 more elements keeping the previous elements when showMore button is clicked', () => {
    render(<TVStats tvStats={tvShowsArray} />);
    userEvent.click(screen.getByText('Show More'));
    tvShowsArray.slice(0, 20).forEach((movie) => {
      expect(screen.getByText(movie.original_name)).toBeInTheDocument();
    });
  });
});
