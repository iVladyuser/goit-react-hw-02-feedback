import { Component } from 'react';
import css from './Feedbackoptions.module.css';

class Feedbackoptions extends Component {
  state = {};
  render() {
    return (
      <div className={css.containerFeedback}>
        <button className={css.buttonFeedback} type="button">
          Good
        </button>
        <button className={css.buttonFeedback} type="button">
          Neutral
        </button>
        <button className={css.buttonFeedback} type="button">
          Bad
        </button>
      </div>
    );
  }
}

export default Feedbackoptions;

// const Feedbackoptions = () => {
//     return (
//         <div className={css.containerFeedback}>
//         <button className={css.buttonFeedback} type="button">
//           Good
//         </button>
//         <button className={css.buttonFeedback} type="button">
//           Neutral
//         </button>
//         <button className={css.buttonFeedback} type="button">
//           Bad
//         </button>
//       </div>
//     );
//   };
  
//   export default Feedbackoptions;