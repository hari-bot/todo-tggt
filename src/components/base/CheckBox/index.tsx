import React from 'react';

interface CheckboxProps {
  isChecked: boolean;
  onClick: () => void;
}

function Checkbox({ isChecked, onClick }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onClick={onClick}
      className="w-5 h-5 appearance-none rounded-full border-2 border-gray-300 checked:bg-white checked:border-[#CA8BFE] focus:outline-none focus:ring-2 focus:ring-[#CA8BFE] checked:ring-[#CA8BFE] checked:ring-1 checked:ring-offset-0 checked:before:content-['✓'] checked:before:text-[#CA8BFE] checked:before:text-xs checked:before:flex checked:before:items-center checked:before:justify-center"
    />
  );
}

export default Checkbox;
