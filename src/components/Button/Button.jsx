import React from 'react';
import style from './Button.module.scss';

function Button({ title, toDoList, text, setToDoList, setInputValue }) {
	const addTaskOnClick = () => {
		if (text) {
			const id = toDoList.length;
			const newList = [{ id, text, status: 'undone' }, ...toDoList];
			setToDoList(newList);
			setInputValue('');
		} else {
			console.log(`Error: Invalid input value`);
		}
	};

	return (
		<button
			onClick={() =>
				title === 'Add Task' ? addTaskOnClick() : setToDoList([])
			}
			className={title === 'Add Task' ? style.buttonAdd : style.buttonClear}
		>
			{title}
		</button>
	);
}

export default Button;
