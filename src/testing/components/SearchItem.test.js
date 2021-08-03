import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import SearchItem from '../../components/SearchItem';

const item = {
  id: '1',
  name: 'fakeActor',
};

test('it renders the search item for each actor', () => {
  render(
    <BrowserRouter>
      <SearchItem option={item} />
    </BrowserRouter>,
  );

  expect(screen.getByText('fakeActor')).toBeInTheDocument();
});
