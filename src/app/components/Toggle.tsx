"use client";

import React from "react";

function Toggle({
	completed,
	handleChangeCompleted,
}: {
	completed: boolean;
	handleChangeCompleted: any;
}) {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				value=""
				className="peer sr-only"
				checked={completed}
				onChange={handleChangeCompleted}
			/>

			<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 dark:bg-gray-700 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600 dark:peer-checked:bg-amber-600 transition-all duration-200"></div>
			{/* <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-amber-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span> */}
		</label>
	);
}

export default Toggle;
