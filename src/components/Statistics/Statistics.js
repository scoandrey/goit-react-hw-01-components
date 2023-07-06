import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';
class Statistics extends Component {
  static propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };
  render() {
    const { title, stats } = this.props;
    return (
      <div>
        <section className="statistics">
          {title ? <h2 className="title">{title}</h2> : null}
          <ul className="stat-list">
            {stats.map(item => {
              return (
                <li
                  className="item"
                  key={item.id}
                  style={{ backgroundColor: randomColor() }}
                >
                  <span className="label">{item.label}</span>
                  <br />
                  <span className="percentage">{item.percentage}</span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

export default Statistics;
