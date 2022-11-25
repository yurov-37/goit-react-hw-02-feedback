import PropTypes from 'prop-types';
import { FeedbackNotify } from './Notification.styled';

function Notification({ message }) {
  return <FeedbackNotify>{message}</FeedbackNotify>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
