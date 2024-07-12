import React from 'react';
import CalculatorButton from './CalculatorButton';

interface CalculatorButtonsProps {
  handleClick: (label: string) => void;
}

// ボタンのラベルを管理しやすいようにコンポーネントの外に移動
const buttonLabels = [
  "7", "8", "9", "+", "CM", 
  "4", "5", "6", "-", "RM", 
  "1", "2", "3", "*", "M+", 
  "C", "0", "=", "÷", "M-", "CA"
];

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({ handleClick }) => (
  <div className="buttons">
    {buttonLabels.map((label) => (
      <CalculatorButton key={label} onClick={() => handleClick(label)} label={label} />
    ))}
  </div>
);

export default CalculatorButtons;