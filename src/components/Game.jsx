export default function Game({ title, views, tags, image, isnew }) {
	return (
		<div className="flex flex-col">
			<div className="hover:translate-x-1 hover:-translate-y-2 transition duration-100 relative">
				<img src={image} alt={title} className="max-w-full h-auto " />
				{isnew && (
					<p className="top-1 right-1 bg-[#FF75E6] rounded-2xl absolute p-[1px] px-2 text-[10px] text-black font-medium">
						NEW
					</p>
				)}
			</div>
			<div className="flex flex-col py-2">
				<a
					className="text-base font-semibold hover:text-purple-500"
					href="#">
					{title}
				</a>
				<p className="text-[12px] text-slate-400">{views} views</p>
			</div>
			<div className="flex gap-1 flex-wrap">
				{tags.map((tag, index) => {
					return <Tag key={index} title={tag} />;
				})}
			</div>
		</div>
	);
}

const Tag = ({ title }) => {
	return (
		<div className="bg-[#29292E] rounded-lg p-1 text-[12px] h-5 items-center flex px-3 hover:bg-slate-800">
			{title}
		</div>
	);
};
