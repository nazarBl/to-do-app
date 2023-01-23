import style from './Task.module.scss';
const Task = ({
	id,
	taskNum,
	text,
	status,
	toDoList,
	setToDoList,
	removeTaskOnClick,
}) => {
	const changeTaskStatusOnClick = (id) => {
		switch (toDoList.find((obj) => obj.id === id).status) {
			case 'done':
				toDoList.find((obj) => obj.id === id).status = 'undone';
				setToDoList([...toDoList]);
				break;

			case 'undone':
				toDoList.find((obj) => obj.id === id).status = 'done';
				setToDoList([...toDoList]);
				break;
		}
	};
	return (
		<div className={style.taskWrapper}>
			<div>{taskNum}</div>
			<div
				className={status === 'done' ? style.task__done : style.task__undone}
				onClick={() => changeTaskStatusOnClick(id)}
			>
				{text}
			</div>
			<img
				src="./cross-icon.png"
				alt="cross"
				onClick={() => removeTaskOnClick(id)}
			/>
		</div>
	);
};

export default Task;
