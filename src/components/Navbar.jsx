export default function Navbar() {
	return (
		<nav className="flex justify-between items-center py-1 px-4 bg-[#18181B]">
			<div className="flex h-full items-center gap-4">
				<TwitchLogo />
				<a
					href="#"
					className="font-semibold pb-2 text-purple-400 border-b-purple-400 border-b-2 items-center h-full flex text-lg">
					Explorar
				</a>
			</div>
			<div className="flex py-1">
				<input
					className="bg-[#18181B] border border-gray-500 rounded-s p-1 px-2 hidden md:block w-[356px] text-lg"
					type="text"
					placeholder="Buscar"
				/>
				<a
					className="bg-[#2F2F35] p-1 rounded-e hidden md:block"
					href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25px"
						height="25px"
						viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="m16.893 16.92l3.08 3.08m-.889-8.419c0 4.187-3.383 7.581-7.555 7.581c-4.173 0-7.556-3.394-7.556-7.58C3.973 7.393 7.356 4 11.528 4c4.173 0 7.556 3.394 7.556 7.581"
						/>
					</svg>
				</a>
			</div>
			<div className="flex gap-3">
				<button className="">
					<div className="relative inline-block">
						<svg
							className="fill-current text-white"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							focusable="false"
							aria-hidden="true"
							role="presentation">
							<path
								fillRule="evenodd"
								d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
								clipRule="evenodd"></path>
						</svg>
						<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
							23
						</span>
					</div>
				</button>
				<button className="p-1 bg-[#2F2F35] px-3 rounded font-semibold text-[13px] hover:bg-[#3b3b41]">
					Iniciar Sesión
				</button>
				<button className="p-1 bg-[#9147FF] px-3 rounded font-semibold text-[13px] hover:bg-[#793ed1]">
					Registrarse
				</button>
				<button>
					<svg
						className="fill-current text-white"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						focusable="false"
						aria-hidden="true"
						role="presentation">
						<path
							fillRule="evenodd"
							d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
							clipRule="evenodd"></path>
					</svg>
				</button>
			</div>
		</nav>
	);
}

const TwitchLogo = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		id="Layer_1"
		x={0}
		y={0}
		style={{
			enableBackground: 'new 0 0 2400 2800',
		}}
		viewBox="0 0 2400 2800"
		width="30px"
		height="30px">
		<style>{'.st1{fill:#9146ff}'}</style>
		<path
			d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"
			style={{
				fill: '#fff',
			}}
		/>
		<g id="Layer_1-2">
			<path
				d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"
				className="st1"
			/>
			<path
				d="M1700 550h200v600h-200zM1150 550h200v600h-200z"
				className="st1"
			/>
		</g>
	</svg>
);
