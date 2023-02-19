import PropTypes from 'prop-types';
import css from '../FeedBackBtnBlock/FeedBackBtnBlock.module.css';

export function RenderBtn({ options, onLeaveFeedback = () => {} }) {
  return (
    <div style={{ color: '#009688' }}>
      <h1 className="">Please leave feedBack</h1>
      <div className={css.btnBlock}>
        {options.map((option, idx) => {
          return (
            <button
              key={idx}
              name={option}
              className={css.btnFeedBack}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
RenderBtn.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
