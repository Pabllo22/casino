import { useState } from 'react';

export type ChipValue = string | number;
interface ChipProps {
  label: string;
  value: ChipValue;
  defaultActive?: boolean;
  active?: boolean;
  onChange?: (value: ChipValue | null) => void;
  className?: string;
  disabled?: boolean;
}

export const Chip = ({ 
  label,
  value,
  defaultActive = false,
  active: activeProp,
  onChange,
  className = '',
  disabled
}: ChipProps) => {
  const isControlled = typeof activeProp === 'boolean';
  const [internalActive, setInternalActive] = useState(defaultActive);
  const active = isControlled ? (activeProp as boolean) : internalActive;

  const handleClick = () => {
    if (disabled) return;
    const next = !active;
    if (!isControlled) setInternalActive(next);
    onChange?.(next ? value : null);
  };

  const base =
    'md:p-4 p-3 md:min-w-[200px] min-w-[150px] border rounded-[30px] md:text-[32px] text-xl font-medium leading-none transition-colors duration-200 m-0';
  const passive = 'bg-black-100 border-gray-100 text-white';
  const activeCls = 'bg-green-100 border-green-100 text-black';
  const finalCls = `${base} ${active ? activeCls : passive} ${className}`;

  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      onClick={handleClick}
      className={finalCls}
    >
      {label}
    </button>
  );
};