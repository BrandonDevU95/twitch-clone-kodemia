import Browse from './components/Browse';
import Chanels from './components/Chanels';
import Games from './components/Games';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="w-full grid grid-rows-[50px_1fr] min-h-screen">
			<Navbar />
			<div className="grid lg:grid-cols-[240px_1fr] sm:grid-cols-[50px_1fr]">
				<Chanels />
				<div className="p-4 flex flex-col gap-7">
					<Browse />
					<ChanelsTab />
					<Games />
				</div>
			</div>
		</div>
	);
}

const ChanelsTab = () => {
	return (
		<>
			<div className="flex text-sm font-semibold gap-3">
				<a
					className="font-semibold text-xl p-1 text-purple-400 border-b-purple-400 border-b-2 pb-3"
					href="#">
					Categorías
				</a>
				<a
					className="font-semibold text-xl p-1 hover:text-purple-400"
					href="#">
					Canales en directo
				</a>
			</div>
			<div className="relative w-[250px]">
				<div className="absolute inset-y-0 left-0 flex items-center pl-2">
					<svg
						className="h-4 w-4 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M12.9 14.32a8 8 0 1 1 1.42-1.42l4.58 4.59a1 1 0 0 1-1.42 1.42l-4.58-4.59zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="search"
					className="w-full pl-9 p-1 bg-[#1F1F23] border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
					placeholder="Buscar etiquetas de categorías"
				/>
			</div>
		</>
	);
};
