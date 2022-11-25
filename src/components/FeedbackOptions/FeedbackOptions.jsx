import PropTypes from 'prop-types';
import {
  FeedBackList,
  FeedBackItem,
  FeedBackButton,
} from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedBackList>
      {options.map(option => (
        <FeedBackItem key={option}>
          <FeedBackButton type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </FeedBackButton>
        </FeedBackItem>
      ))}
    </FeedBackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
