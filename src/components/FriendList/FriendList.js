import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import './FriendList.css';

class FriendList extends Component {
  static propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
  };
  render() {
    const { friends } = this.props;
    return (
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem item={friend} key={friend.id} />
        ))}
      </ul>
    );
  }
}

export default FriendList;
