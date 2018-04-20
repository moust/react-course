import React from 'react';
import PropTypes from 'prop-types';

import CategoryFilter from './CategoryFilter';

export default class Filters extends React.PureComponent {

  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    categoryFilter: PropTypes.string,
    filterByCategory: PropTypes.func.isRequired
  };

  static defaultProps = {
    categories: [],
    categoryFilter: 'all'
  };

  render() {
    return (
      <nav className="nav nav-pills mb-4">
        {this.props.categories.map(category => (
          <CategoryFilter
            key={category}
            category={category}
            active={category === this.props.categoryFilter}
            handleCategoryFilter={this.props.filterByCategory}
          />
        ))}
      </nav>
    );
  }

}
