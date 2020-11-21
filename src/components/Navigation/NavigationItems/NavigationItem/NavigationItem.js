import React from 'react';
import navigationItems from '../NavigationItems';
import styles from './NavigationItem.module.css'

const navigationItem = (props) => (
<li>
  <a href={props.link} 
  className={props.active ? styles.active : null}>{props.children}</a>
  </li>
)

export default navigationItems