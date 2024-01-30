import { Component } from 'react';
import css from './FeedbackForm.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.props;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.props;
    // wywołuję funkcję i przypisuje jej wynik do zmiennej
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css['statistics-wrapper']}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <br></br>
        <p>Total: {totalFeedback}</p>
        <p>Positive Feedback Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired, 
  neutral: PropTypes.number.isRequired, 
  bad: PropTypes.number.isRequired, 
};

export default Statistics;
