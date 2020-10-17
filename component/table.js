import React from 'react';
import { table } from 'table';

class Table extends React.Component {
  render() {
    return (
      <div>
        <h1>List of todos</h1>
        <div>{table(this.props.data)}</div>
      </div>
      );
  }
}

export default Table;
