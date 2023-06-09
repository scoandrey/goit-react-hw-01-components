import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

class TransactionHistory extends Component {
  static propTypes = {
    items: PropTypes.array,
  };
  render() {
    const { items } = this.props;
    return (
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => {
            const { type, amount, currency, id } = item;
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TransactionHistory;
