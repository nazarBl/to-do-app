import { useRef, useState } from 'react';
import style from './App.module.scss';
import Button from './components/Button/Button';
import Task from './components/Task/Task';
const App = () => {
	let [inputValue, setInputValue] = useState('');
	const [toDoList, setToDoList] = useState([
		{ id: 0, text: '1 to dos', status: 'done' },
		{ id: 1, text: '2 to dos', status: 'undone' },
		{ id: 2, text: '3 to dos', status: 'undone' },
		{ id: 3, text: '4 to dos', status: 'undone' },
	]);
	const inputRef = useRef();

	const removeTaskOnClick = (id) => {
		setToDoList(toDoList.filter((el) => el.id !== id));
	};

	return (
		<div className={style.appWrapper}>
			<div className={style.header}>TO DO LIST</div>
			<div className={style.inputWrapper}>
				<input
					type="text"
					value={inputValue}
					onChange={() => setInputValue(inputRef.current.value)}
					className={style.input}
					ref={inputRef}
				/>
				<img
					src="./cross-icon.png"
					alt="input-cross"
					className={inputValue ? style.crossInput : style.crossInputOff}
					onClick={() => setInputValue('')}
				/>
			</div>

			<div className={style.buttonsWrapper}>
				<Button
					title={'Add Task'}
					setInputValue={setInputValue}
					toDoList={toDoList}
					setToDoList={setToDoList}
					text={inputValue}
				/>
				<Button
					title={'Clear List'}
					setInputValue={setInputValue}
					toDoList={toDoList}
					setToDoList={setToDoList}
					text={inputValue}
				/>
			</div>

			<div className={style.taskWrapper}>
				{toDoList.map((task, index) => {
					return (
						<Task
							id={task.id}
							key={index}
							status={task.status}
							taskNum={index + 1}
							text={task.text}
							toDoList={toDoList}
							setToDoList={setToDoList}
							removeTaskOnClick={removeTaskOnClick}
							inputValue={inputValue}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
