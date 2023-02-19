import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { RenderBtn } from '../components/FeedBackBtnBlock/FeedBackBtnBlock';
import { Notifications } from 'Notifications/Notifications.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = btnName => {
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 };
    });
  };

  countTotalFeedback(objState) {
    const arrValues = Object.values(this.state);
    let totalFeedback = 0;
    arrValues.map(el => (totalFeedback += el));
    return totalFeedback;
  }

  countPositiveFeedbackPercentage(total) {
    const percentage = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return percentage;
  }

  render() {
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics" Statistics>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentageGood={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notifications />
          )}
        </Section>
      </div>
    );
  }
}
