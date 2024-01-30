import { Component } from 'react';
import Section from './components/Section.jsx';
import Statistics from 'components/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions.jsx';
import Notification from './components/Notification.jsx';
import css from './components/FeedbackForm.module.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  //   'prevState' to aktualny stan komponentu
  // [type] oznacza, że używam wartości zmiennej type jako klucza obiektu, co pozwala mi na dynamiczne określanie, którą właściwość stanu chcę zaktualizować
  handleFeedback = opinion => {
    this.setState(prevState => ({
      [opinion]: prevState[opinion] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <div className={`App ${css['container-feedback-form']}`}>
        <Section title="Please leave feedback"></Section>
        <Section title="Feedback Options">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback}
            //funkcja handleFeedback, zdefiniowana w komponencie App, zostanie przekazana jako props do komponentu FeedbackOptions, aby mogła zostać wywołana w odpowiedzi na akcję użytkownika
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
