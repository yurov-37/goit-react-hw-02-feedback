import styled from '@emotion/styled';

export const FeedBackList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const FeedBackItem = styled.li``;

export const FeedBackButton = styled.button`
  font-size: 20px;
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return '#3bb14397';
        case 'neutral':
          return '#ee9e278d';
        case 'bad':
          return '#ff554582';
        default:
          return 'grey';
      }
    }};
  }
  background-color: ${props => {
    switch (props.name) {
      case 'good':
        return '#3bb143';
      case 'neutral':
        return '#ee9f27';
      case 'bad':
        return '#ff5545';
      default:
        return 'grey';
    }
  }};
`;
