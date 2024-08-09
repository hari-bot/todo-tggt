import React from 'react';
import Profile from '../../custom/Profile';
import IndicatorLegend from '../../custom/IndicatorLegend';

interface SideBarProps {
  name: string;
}

function SideBar({ name }: SideBarProps) {
  return (
    <div className="w-[20%] bg-white p-5">
      <Profile name={name} />
      <IndicatorLegend />
    </div>
  );
}

export default SideBar;
