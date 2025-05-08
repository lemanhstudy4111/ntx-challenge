"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { TaskType } from "../lib/types";
import { todo } from "node:test";
import AddIcon from "../assets/AddIcon";

function DialogComponent({
	openModal,
	closeModal,
	children,
}: {
	openModal: boolean;
	closeModal: () => void;
	children: any;
}) {
	const [title, setTitle] = useState("");
	const [completed, setCompleted] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		if (openModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [openModal]);

	return (
		<dialog ref={ref}>
			<dialog onCancel={closeModal}>
				<button autoFocus onClick={closeModal}>
					Close
				</button>
				{children}
			</dialog>
		</dialog>
	);
}

function AddForm({
	todos,
	changeTitle,
	changeCompleted,
}: {
	todos: TaskType[];
	changeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	changeCompleted: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<form>
			<div>
				<label>Title: </label>
				<input type="text" required onChange={changeTitle} />
			</div>
			<div>
				<label>Completed: </label>
				<input type="checkbox" onChange={changeCompleted} />
			</div>
			<div>
				<input
					type="submit"
					value="Add!"
					onClick={() =>
						todos.push({
							title: title,
							completed: completed,
							userId: todos[0].userId,
							id: Math.max(...todos.map((todo) => todo.id)) + 1,
						})
					}
				/>
			</div>
		</form>
	);
}

function AddDialog({ todos }: { todos: TaskType[] }) {
	const [modalOpen, setModal] = useState(false);

	return (
		<div>
			<DialogComponent
				openModal={modalOpen}
				closeModal={() => setModal(false)}
			/>
			<button
				className="p-3 right-0 flex flex-row gap-2 hover:cursor-pointer bg-amber-300 hover:drop-shadow-xl hover:bg-amber-400 rounded-2xl absolute"
				onClick={addButtonClick}>
				Add new Todo <AddIcon />
			</button>
		</div>
	);
}

export default AddDialog;
