import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AwardStats from '../../components/AwardStats';

const createAwardsArray = () => {
  const awards = [];
  for (let i = 0; i <= 20; i += 1) {
    const awardObject = {
      award: `FakeAward${i}`,
      movie: {
        title: 'FakeAwardMovie',
      },
      event_name: 'FakeAwardEvent',
      type: 'FakeAwardType',
    };

    awards.push(awardObject);
  }
  return awards;
};

const awardsArray = createAwardsArray();

describe('AwardStats', () => {
  render(<AwardStats awards={awardsArray} />);

  test('it should render a table with first 10 elements of awards array', () => {
    awardsArray.slice(0, 10).forEach((award) => {
      expect(screen.getByText(award.award)).toBeInTheDocument();
    });
  });

  test('it should not render more than 10 elements', () => {
    expect(screen.queryByText(awardsArray[10])).not.toBeInTheDocument();
  });

  test('it should load 10 more elements keeping the previous elements when showMore button is clicked', () => {
    render(<AwardStats awards={awardsArray} />);
    userEvent.click(screen.getByText('Show More'));
    awardsArray.slice(0, 20).forEach((award) => {
      expect(screen.getByText(award.award)).toBeInTheDocument();
    });
  });
});
