import PropTypes from 'prop-types';
import { StatList, StatListItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatList>
      <StatListItem className="statistics__item">Good: {good}</StatListItem>
      <StatListItem className="statistics__item">
        Neutral: {neutral}
      </StatListItem>
      <StatListItem className="statistics__item">Bad: {bad}</StatListItem>
      <StatListItem className="statistics__item">Total: {total}</StatListItem>
      <StatListItem className="statistics__item">
        Positive feedback: {positivePercentage}%
      </StatListItem>
    </StatList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
