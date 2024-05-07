import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const text = 'Hello man!';
const elem = (
	<div>
		<h2>Текст: {text}</h2>
		<input type='text'/>
		<button data-day="0">Send</button>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	elem,
);