import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

class Statistics extends Component {
  render() {
    const { title, stats } = this.props;
    return (
      <div>
        <section className="statistics">
          <h2 className="title">Upload stats</h2>

          <ul className="stat-list">
            <li className="item">
              <span className="label">.docx</span>
              <br />
              <span className="percentage">4%</span>
            </li>
            <li className="item">
              <span className="label">.mp3</span>
              <br />
              <span className="percentage">14%</span>
            </li>
            <li className="item">
              <span className="label">.pdf</span>
              <br />
              <span className="percentage">41%</span>
            </li>
            <li className="item">
              <span className="label">.mp4</span>
              <br />
              <span className="percentage">12%</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
