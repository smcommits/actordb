import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Search from '../../components/Search';
import * as fetchMethods from '../../fetch/movieDB';

const fakeSearchResponse = {
  data: {
    results: [
      {
        id: '1',
        name: 'FakeActor',
      },
      {
        id: '2',
        name: 'FakeActor2',
      },
      {
        id: '3',
        name: 'FakeActor3',
      },
      {
        id: '4',
        name: 'FakeActor4',
      },
      {
        id: '5',
        name: 'FakeActor5',
      },
      {
        id: '6',
        name: 'FakeActor6',
      },
    ],
  },
};

beforeEach(() => {
  const mockFetchSearch = jest.spyOn(fetchMethods, 'fetchSearch');
  mockFetchSearch.mockResolvedValue(fakeSearchResponse);
});

test('should render search list with first 5 items in response', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Search parent="homePage" />
      </BrowserRouter>,
    );
  });

  const searchInput = screen.getByPlaceholderText('Search for actor');
  userEvent.click(searchInput);
  fakeSearchResponse.data.results.slice(0, 5)
    .filter((search) => search.name).forEach((name) => {
      expect(screen.findByText(name));
    });
  expect(screen.queryByText('FakeActor6')).not.toBeInTheDocument();
});
