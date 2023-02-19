import PropTypes from 'prop-types';
import css from "../Section/Section.module.css"

export function Section({ title, children }) {
  return (
    <div>
      <h2 className={css.statTitle}>{title}</h2>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
