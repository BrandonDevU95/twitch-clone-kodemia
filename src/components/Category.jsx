export default function Category({ title, img }) {
	return (
		<a
			href="#"
			className="p-2 font-bold bg-[#5C16C5] flex justify-between rounded-lg h-[45px] items-center hover:bg-[#531da5]">
			<p className="text-2xl ml-[5px]">{title}</p>
			<img
				src={img}
				alt={`${title}`}
				className="size-16 overflow-x-clip overflow-y-clip"
			/>
		</a>
	);
}
