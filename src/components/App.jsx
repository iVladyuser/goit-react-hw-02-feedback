import React from 'react';
import { Feedbackoptions, Section, Statistics } from 'components';

export const App = () => {
  return (
    <div>
      <Section title='Please leave feedback'>
      <Feedbackoptions />
      </Section>

      <Section title='Statistics'>
      <Statistics />
      </Section>
     
    </div>
      

  );
};
