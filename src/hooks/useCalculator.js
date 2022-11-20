import { useRef, useState } from 'react';

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [result, setResult] = useState('0');
  const lastOperation = useRef('');

  const reset = () => {
    if (result === '0' && previousNumber !== '0') {
      setPreviousNumber('0');
    }
    setResult('0');
  };

  const setCalculation = textNumber => {
    if (result.includes('.') && textNumber === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      if (textNumber === '.') {
        setResult(result + textNumber);
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result + textNumber);
      } else if (textNumber !== '0' && !result.includes('.')) {
        setResult(textNumber);
      } else if (textNumber === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + textNumber);
      }
    } else {
      setResult(result + textNumber);
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const deleteButton = () => {
    if (result.length === 1 || (result.length === 2 && result.includes('-'))) {
      setResult('0');
    } else if (result[result.length - 2] === '.') {
      setResult(result.slice(0, -2));
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const getPreviousNumber = () => {
    if (result.endsWith('.')) {
      setPreviousNumber(result.slice(0, -1));
    } else if (result.endsWith('.0')) {
      setPreviousNumber(result.slice(0, -2));
    } else {
      setPreviousNumber(result);
    }
    setResult('0');
  };

  const buttonDivide = () => {
    getPreviousNumber();
    lastOperation.current = 'div';
  };

  const buttonMultiply = () => {
    getPreviousNumber();
    lastOperation.current = 'mul';
  };

  const buttonSubtract = () => {
    getPreviousNumber();
    lastOperation.current = 'sub';
  };

  const buttonSum = () => {
    getPreviousNumber();
    lastOperation.current = 'sum';
  };

  const calculate = () => {
    const num1 = +result;
    const num2 = +previousNumber;

    switch (lastOperation.current) {
      case 'sum':
        setResult(`${num1 + num2}`);
        break;

      case 'sub':
        setResult(`${num2 - num1}`);
        break;

      case 'mul':
        setResult(`${num1 * num2}`);
        break;

      case 'div':
        if (num1 !== 0) {
          setResult(`${num2 / num1}`);
          break;
        }
    }

    setPreviousNumber('0');
  };

  return {
    previousNumber,
    result,
    reset,
    setCalculation,
    positiveNegative,
    deleteButton,
    buttonDivide,
    buttonMultiply,
    buttonSubtract,
    buttonSum,
    calculate,
  };
};
