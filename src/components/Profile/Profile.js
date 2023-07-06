import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

class Profile extends Component {
  static defaultProps = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };

  render() {
    const { username, tag, location, avatar, stats } = this.props;
    return (
      <div>
        <div className="profile">
          <div className="description">
            <img src={avatar} alt={username} className="avatar" />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className="stats">
            <li className="stats-li">
              <span className="label">Followers</span>
              <br />
              <span className="quantity">{stats.followers}</span>
            </li>
            <li className="stats-li">
              <span className="label">Views</span>
              <br />
              <span className="quantity">{stats.views}</span>
            </li>
            <li className="stats-li">
              <span className="label">Likes</span>
              <br />
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

