import React, { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { RenderBtn } from '../components/FeedBackBtnBlock/FeedBackBtnBlock';
import { Notifications } from 'Notifications/Notifications.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    switch (evt) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.ceil((good / countTotalFeedback()) * 100);
    return percentage;
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="" RenderBtn>
        <RenderBtn
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics" Statistics>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentageGood={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications />
        )}
      </Section>
    </div>
  );
}
