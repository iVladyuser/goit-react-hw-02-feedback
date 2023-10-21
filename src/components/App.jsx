import { Component } from 'react';
import { Feedbackoptions, Section, Statistics } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedbackoptions
            options={Object.keys(this.state)}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </div>
    );
  }
}

export default App;
