import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const prev = parseFloat(previousValue);
      const result = calculate(prev, current, operation);
      setDisplay(String(result));
      setPreviousValue(String(result));
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : 0;
      case '%':
        return a % b;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(display);
      const result = calculate(prev, current, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const handleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
  };

  return (
    <div className="calculator-page">
      <div className="calculator-container">
        <div className="calculator-header">
          <h1 className="page-title">Kalkulačka</h1>
          <p className="page-subtitle">Moderná a elegantná kalkulačka</p>
        </div>

        <div className="calculator">
          <div className="calculator-display">
            <div className="display-operation">
              {previousValue && operation && `${previousValue} ${operation}`}
            </div>
            <div className="display-value">{display}</div>
          </div>

          <div className="calculator-buttons">
            <button className="btn btn-function" onClick={handleClear}>AC</button>
            <button className="btn btn-function" onClick={handleSign}>+/-</button>
            <button className="btn btn-function" onClick={() => handleOperation('%')}>%</button>
            <button className="btn btn-operator" onClick={() => handleOperation('÷')}>÷</button>

            <button className="btn btn-number" onClick={() => handleNumber('7')}>7</button>
            <button className="btn btn-number" onClick={() => handleNumber('8')}>8</button>
            <button className="btn btn-number" onClick={() => handleNumber('9')}>9</button>
            <button className="btn btn-operator" onClick={() => handleOperation('×')}>×</button>

            <button className="btn btn-number" onClick={() => handleNumber('4')}>4</button>
            <button className="btn btn-number" onClick={() => handleNumber('5')}>5</button>
            <button className="btn btn-number" onClick={() => handleNumber('6')}>6</button>
            <button className="btn btn-operator" onClick={() => handleOperation('-')}>-</button>

            <button className="btn btn-number" onClick={() => handleNumber('1')}>1</button>
            <button className="btn btn-number" onClick={() => handleNumber('2')}>2</button>
            <button className="btn btn-number" onClick={() => handleNumber('3')}>3</button>
            <button className="btn btn-operator" onClick={() => handleOperation('+')}>+</button>

            <button className="btn btn-number btn-zero" onClick={() => handleNumber('0')}>0</button>
            <button className="btn btn-number" onClick={handleDecimal}>.</button>
            <button className="btn btn-equals" onClick={handleEquals}>=</button>
          </div>

          <div className="calculator-footer">
            <button className="btn-backspace" onClick={handleBackspace}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
              </svg>
              Backspace
            </button>
          </div>
        </div>

        <div className="calculator-info">
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Rýchle výpočty</h3>
            <p>Základné matematické operácie</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎨</div>
            <h3>Moderný dizajn</h3>
            <p>Elegantné a prehľadné rozhranie</p>
          </div>
          <div className="info-card">
            <div className="info-icon">💚</div>
            <h3>Zelená téma</h3>
            <p>Príjemná pre oči</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
