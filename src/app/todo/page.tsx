import { todo } from "node:test";
import AddIcon from "../assets/AddIcon";
import AddDialog from "../components/AddDialog";
import TaskDisplay from "../components/TodoList";
import { TaskType } from "../lib/types";

export default async function Page() {
	try {
		let todos: TaskType[] = [];
		const data = await fetch("https://jsonplaceholder.typicode.com/todos")
			.then((returnData) => returnData.json())
			.catch((err) => {
				throw new Error(err);
			});
		if (data) {
			const random3: number[] = [];
			for (let i = 0; i < 3; i++) {
				random3.push(Math.floor(Math.random() * (data.length - 1)));
			}
			todos = random3.map((num) => data[num]);
		}
		return (
			<div className="flex flex-col justify-between gap-10">
				<span className="sticky m-5">
					<h1 className="text-6xl">My Todo List</h1>
					<AddDialog todos={todos} />
				</span>
				<TaskDisplay tasks={todos} />
			</div>
		);
	} catch (err) {
		return (
			<div>
				<h1 className="text-6xl">Something went wrong...</h1>
				<p>An error occurred when loading the data</p>
			</div>
		);
	}
}
