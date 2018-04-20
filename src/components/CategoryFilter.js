import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class CategoryFilters extends React.PureComponent {

  static propTypes = {
    category: PropTypes.string.isRequired,
    active: PropTypes.bool,
    handleCategoryFilter: PropTypes.func.isRequired
  };

  static defaultProps = {
    active: false
  };

  handleCategoryFilter = e => {
    e.preventDefault();
    this.props.handleCategoryFilter(this.props.category);
  }

  render() {
    const { category, active } = this.props;
    return (
      <a
        className={
          classNames('nav-link nav-category', { active })
        }
        href={`#${category}`}
        onClick={this.handleCategoryFilter}
      >
        {category}
      </a>
    );
  }

}
