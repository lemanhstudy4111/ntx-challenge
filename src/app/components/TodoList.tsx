"use client";

import DeleteIcon from "../assets/DeleteIcon";
import EditIcon from "../assets/EditIcon";
import { TaskType } from "../lib/types";

function TaskEach({ taskEach }: { taskEach: TaskType }) {
	return (
		<div className="m-2 p-4 border-1 rounded-2xl">
			<span className="flex flex-row justify-between">
				<label className="text-3xl">{taskEach.title}</label>
				<span className="flex flex-row gap-3">
					{taskEach.completed ? (
						<input type="checkbox" checked readOnly />
					) : (
						<input type="checkbox" readOnly />
					)}
					<button className="hover:cursor-pointer">
						<EditIcon />
					</button>
					<button className="hover:cursor-pointer">
						<DeleteIcon />
					</button>
				</span>
			</span>
			<span>
				<p>User ID: {taskEach.userId}</p>
				<p>Task ID: {taskEach.id}</p>
			</span>
		</div>
	);
}

function TaskDisplay({ tasks }: { tasks: TaskType[] }) {
	return (
		<ul className="flex flex-col gap-2">
			{tasks?.length > 0 ? (
				tasks.map((task: TaskType) => (
					<TaskEach key={`${task.id}`} taskEach={task} />
				))
			) : (
				<li key={"none"}>Something went wrong...</li>
			)}
		</ul>
	);
}

export default TaskDisplay;
