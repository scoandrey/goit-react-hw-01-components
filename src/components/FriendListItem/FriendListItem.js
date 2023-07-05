import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

class FriendListItem extends Component {
  render() {
    const { avatar, name, isOnline } = this.props.item;
    return (
      <li className="friend-item">
        <span className={isOnline ? 'onlineGreen' : 'offLineRed'}>◉</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    );
  }
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
