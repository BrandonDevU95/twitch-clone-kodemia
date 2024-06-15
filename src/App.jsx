import Browse from './components/Browse';
import Chanels from './components/Chanels';
import Games from './components/Games';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="grid grid-rows-[auto_1fr] grid-cols-1 min-h-screen">
			<Navbar />
			<div className="grid grid-cols-[240px_1fr]">
				<Chanels />
				<div className="p-4 flex flex-col gap-7">
					<Browse />
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
					<Games />
				</div>
			</div>
		</div>
	);
}
