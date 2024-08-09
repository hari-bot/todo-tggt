import React from 'react';
import { BsCalendar4 } from 'react-icons/bs';
import Indicator from '../../base/Indicator';

function IndicatorLegend() {
  return (
    <div className="pt-20">
      <div className="flex gap-5 mb-5">
        <BsCalendar4 className="text-gray-400 text-xl ml-2" />
        <p className="flex-grow text-gray-500 font-medium">Task Indicators</p>
      </div>
      <ul className="text-gray-500 font-medium px-5 space-y-3">
        <li className="flex items-center gap-2">
          <Indicator type="expired" />
          <span>Expired</span>
        </li>
        <li className="flex items-center gap-2">
          <Indicator type="upcoming" />
          <span>Upcoming</span>
        </li>
        <li className="flex items-center gap-2">
          <Indicator type="today" />
          <span>Today</span>
        </li>
      </ul>
    </div>
  );
}

export default IndicatorLegend;
