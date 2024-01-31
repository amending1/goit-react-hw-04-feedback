import React from 'react';
import css from './FeedbackForm.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //Object.keys() - metoda, która zwraa tablicę kluczy np:
  // const object1 = {
  //   a: 'somestring',
  //   b: 42,
  //   c: false,};
  // console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]

  //przy uzyciu 'map' iteruje przez klucze i zwracam dla każdego kluzza przycisk, gdzie klucz jest uzywany jako nazzwa opcji
  //'onClick' przekazuje nazwę opcji do funkcji 'onLeaveFeedback'
  const optionButtons = Object.keys(options).map(option => (
    <button
      key={option}
      className={css['button-opinion']}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
  return <div className={css['button-wrapper']}>{optionButtons}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

//Poprzednia wersja kodu (zostawione krótsze rozwiązanie)
// return (
//   <div className={css['button-wrapper']}>
//     <button
//       className={css['button-opinion']}
//       onClick={() => this.props.onLeaveFeedback('good')} //Przekazanie funkcji jako props jest sposobem, aby komponent mógł komunikować się z rodzicem. 'good' to argument przekazywany do funkcji handleFeedback
//     >
//       Good
//     </button>
//     <button
//       className={css['button-opinion']}
//       onClick={() => this.props.onLeaveFeedback('neutral')}
//     >
//       Neutral
//     </button>
//     <button
//       className={css['button-opinion']}
//       onClick={() => this.props.onLeaveFeedback('bad')}
//     >
//       Bad
//     </button>
//   </div>
// );
