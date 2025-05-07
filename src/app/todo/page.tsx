import AddIcon from "../assets/AddIcon";
import TaskDisplay from "../components/TodoList";
import { TaskType } from "../lib/types";

export default async function Page() {
	try {
		const data = await fetch("https://jsonplaceholder.typicode.com/todos")
			.then((returnData) => returnData.json())
			.catch((err) => {
				throw new Error(err);
			});
		let dataRandom3 = [];
		if (data) {
			const random3: number[] = [];
			for (let i = 0; i < 3; i++) {
				random3.push(Math.floor(Math.random() * (data.length - 1)));
			}
			dataRandom3 = random3.map((num) => data[num]);
		}
		return (
			<div className="flex flex-col justify-between gap-16">
				<span className="sticky m-5">
					<h1 className="text-6xl">My Todo List</h1>
					<button className="p-3 right-0 flex flex-row gap-2 hover:cursor-pointer bg-amber-300 hover:drop-shadow-xl hover:bg-amber-400 rounded-2xl absolute">
						Add new Todo <AddIcon />
					</button>
				</span>
				<TaskDisplay tasks={dataRandom3} />
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
