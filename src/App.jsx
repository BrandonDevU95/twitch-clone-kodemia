import Chanels from './components/Chanels';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="grid grid-rows-[auto_1fr] grid-cols-1 min-h-screen">
			<Navbar />
			<div className="grid grid-cols-[240px_1fr]">
				<Chanels />
			</div>
		</div>
	);
}
