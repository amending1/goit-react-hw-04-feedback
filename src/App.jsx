import { useState } from 'react';
import Section from './components/Section.jsx';
import Statistics from 'components/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions.jsx';
import Notification from './components/Notification.jsx';
import css from './components/FeedbackForm.module.css';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  //   'prevState' to aktualny stan komponentu
  // [type] oznacza, że używam wartości zmiennej type jako klucza obiektu, co pozwala mi na dynamiczne określanie, którą właściwość stanu chcę zaktualizować
  const handleFeedback = opinion => {
    //'...prevFeedback' bez tego, po kliknięciu na któryś z przycisków, pozostałe znikają. Dzięki temu, że '...prevFeedback' jest zmieniam tylko jedną 'opinion' np. good, a pozostałe zostają niezmienione. Czyli, kiedy wywoływana jest funkcja setFeedback amiast całkowici zastępoa stan 'feedback' nowym obiektem, który zawiera tylko jedną właściwość, 'podmieniam' stan tej właściwości , a pozostałe właściwości oiekty 'feedback' nie są zmienione
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [opinion]: prevFeedback[opinion] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={`App ${css['container-feedback-form']}`}>
      <Section title="Please leave feedback"></Section>
      <Section title="Feedback Options">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={handleFeedback}
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
