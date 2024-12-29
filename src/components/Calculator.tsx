import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(input)); // Avoid `eval` in production; use math libraries for better security.
            } catch (error) {
                setResult(NaN);
            }
        } else if (value === 'C') {
            setInput('');
            setResult(null);
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        'C','CE', '%', 'x',
        '7', '8', '9','/',
        '4', '5', '6','*',
        '1', '2', '3', '+' ,
        '0', '.', '=',
    ];

    const calButtons = [
        [
            { label: 'CE', value: 'CE' },
            { label: 'C', value: 'C' },
            { label: '%', value: '%' },
            { label: 'x', value: 'x' },
        ],
        [
            { label: '7', value: '7' },
            { label: '8', value: '8' },
            { label: '9', value: '9' },
            { label: '*', value: '*' },
        ],
        [
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
            { label: '-', value: '-' },
        ],
        [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '+', value: '4' },
        ],
        [
            { label: '0', value: '0' },
            { label: '.', value: '.' },
            { label: '=', value: '=' },
            { label: '/', value: '/' },
        ],
    ]

    return (
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-lg p-6 w-80">
            <div className="mb-4">
                <h1 className="text-3xl font-bold text-center">Calculator</h1>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full bg-gray-800 text-right text-2xl p-4 rounded-lg border border-gray-600 focus:outline-none"
                />
                {result !== null && (
                    <div className="text-right text-green-400 mt-2 text-xl">
                        = {result}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-4 gap-3">
                {buttons.map((btn, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleButtonClick(btn)}
                        className={`p-4 rounded-lg text-xl font-bold bg-gray-800  hover:bg-gray-900 shadow-lg shadow-cyan-500/50 ${
                                btn === '=' ? 'text-green-500 hover:text-green-600'
                                : btn === 'C' ? 'text-red-500 hover:text-red-600 shadow-red-500/50'
                                : btn === 'CE' ? ' text-red-600 shadow-red-500/50' : ''
                            } ${!btn ? 'invisible' : ''}`}
                    >
                        {btn}
                    </button>
                ))}

                {/* {calButtons.map((row, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        {row.map((btn, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleButtonClick(btn.value)}
                                className={`p-4 rounded-lg text-xl font-bold bg-gray-800  hover:bg-gray-900 shadow-lg shadow-cyan-500/50'} ${!btn.label ? 'invisible' : ''}`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default Calculator;
