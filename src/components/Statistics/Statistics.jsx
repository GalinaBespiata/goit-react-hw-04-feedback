import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentageGood }) => {
  return (
    <ul className={css.statBlock}>
      <li className={css.itemFeedback}>Good : {good}</li>
      <li className={css.itemFeedback}>Neutral : {neutral}</li>
      <li className={css.itemFeedback}>Bad : {bad}</li>
      <li className={css.itemFeedback}>Total : {total}</li>
      <li className={css.itemFeedback}>
        Positive Feedback : {percentageGood}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentageGood: PropTypes.number.isRequired,
};
