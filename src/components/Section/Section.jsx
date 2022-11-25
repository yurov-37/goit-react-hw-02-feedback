import PropTypes from 'prop-types';
import { FeedbackSection, FeedbackTitle } from './Section.styled';

function Section({ title, children }) {
  return (
    <FeedbackSection>
      {title && <FeedbackTitle>{title}</FeedbackTitle>}
      {children}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
