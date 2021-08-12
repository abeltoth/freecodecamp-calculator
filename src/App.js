import React, { useEffect } from 'react';
import './App.css';

const App = () => {
	const [input, setInput] = React.useState('');
	const [result, setResult] = React.useState(0);
	const [calculationInProgress, setCalculationInProgress] = React.useState(true);

	/* useEffect(() => {
		if (typeof result === 'number') {
			setInput(result);
		}
	}, [result]); */

	const getResultClicked = () => {
		evaluateResult();
		setInput((prevInput) => prevInput + '=');
		setCalculationInProgress(false);
	};

	const evaluateResult = () => {
		setResult(eval(input));
	};

	const deleteLastChar = () => {
		if (input.length) {
			setInput((prevInput) => {
				prevInput.slice(0, -1);
			});
		}
	};

	const reset = () => {
		setInput('');
		setResult(0);
	};

	const addNumber = (number) => {
		if (!calculationInProgress) {
			reset();
			setCalculationInProgress(true);
		}
		setInput((prevInput) => prevInput + number);
	};

	const addOperator = (operator) => {
		if (!calculationInProgress) {
			setInput(result);
			setCalculationInProgress(true);
		}
		setInput((prevInput) => prevInput + operator);
	};

	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="previous-operand">{input}</div>
				<div className="current-operand" id="display">
					{result}
				</div>
			</div>
			<button className="span-two" id="clear" onClick={() => reset()}>
				AC
			</button>
			<button id="delete" onClick={() => deleteLastChar()}>
				DEL
			</button>
			<button id="divide" onClick={() => addOperator('/')}>
				/
			</button>
			<button id="one" onClick={() => addNumber('1')}>
				1
			</button>
			<button id="two" onClick={() => addNumber('2')}>
				2
			</button>
			<button id="three" onClick={() => addNumber('3')}>
				3
			</button>
			<button id="multiply" onClick={() => addOperator('*')}>
				*
			</button>
			<button id="four" onClick={() => addNumber('4')}>
				4
			</button>
			<button id="five" onClick={() => addNumber('5')}>
				5
			</button>
			<button id="six" onClick={() => addNumber('6')}>
				6
			</button>
			<button id="add" onClick={() => addOperator('+')}>
				+
			</button>
			<button id="seven" onClick={() => addNumber('7')}>
				7
			</button>
			<button id="eight" onClick={() => addNumber('8')}>
				8
			</button>
			<button id="nine" onClick={() => addNumber('9')}>
				9
			</button>
			<button id="subtract" onClick={() => addOperator('-')}>
				-
			</button>
			<button id="decimal" onClick={() => addNumber('.')}>
				.
			</button>
			<button id="zero" onClick={() => addNumber('0')}>
				0
			</button>
			<button className="span-two" id="equals" onClick={() => getResultClicked()}>
				=
			</button>
		</div>
	);
};

export default App;
