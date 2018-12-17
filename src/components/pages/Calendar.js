import React from 'react';
import {Component} from 'react';
import Header from '../Header';
import NavigationBar from '../NavigationBar';

import headerCalendar from '../../img/headers/header-calendar.png';

import '../../style/Calendar.css';

class Calendar extends Component {
    render() {
      return (
        <div>
          <Header headRef={headerCalendar} headId="calendar-header" />
          <NavigationBar />
        </div>
      );
    }
  }
  
  export default Calendar;