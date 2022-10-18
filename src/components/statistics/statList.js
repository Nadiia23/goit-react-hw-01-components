import PropTypes from 'prop-types';
import css from "./statistics.module.css";

function StatList({ label, percentage}) {
  return (
      <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}; 

StatList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default StatList