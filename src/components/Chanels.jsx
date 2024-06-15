import Channel from './Chanel';
import twitchChannels from '../lib/chanels';

export default function Chanels() {
	return (
		<section className="hidden sm:block bg-[#1F1F23]">
			<section className="flex flex-col gap-2 items-center lg:items-stretch">
				<h2 className="font-semibold text-[18px] pt-3 hidden lg:block px-2">
					Para ti
				</h2>
				<svg
					className="lg:hidden size-6 mt-5"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 256 256">
					<path
						fill="currentColor"
						d="M221.6 58.38a56.06 56.06 0 0 0-79.12-.08L128 71.78L113.52 58.3a56 56 0 0 0-79.15 79.25l89.36 90.66a6 6 0 0 0 8.54 0l89.33-90.62a56 56 0 0 0 0-79.21m-8.52 70.75L128 215.45L42.89 129.1a44 44 0 0 1 62.22-62.23a1 1 0 0 0 .16.14l18.64 17.36a6 6 0 0 0 8.18 0L150.73 67a1 1 0 0 0 .16-.14a44 44 0 1 1 62.19 62.26Z"
					/>
				</svg>

				<section className="flex flex-col py-3">
					<p className="text-slate-400 font-medium pb-1 text-[13px] hidden lg:block px-2">
						CANALES QUE SIGO
					</p>
					{twitchChannels.map((channel, index) => {
						if (channel.follow) {
							return (
								<Channel
									key={index}
									channel={channel.channel}
									online={channel.online}
									game={channel.game}
									viewers={channel.viewers}
								/>
							);
						}
					})}
				</section>
				<svg
					className="lg:hidden size-6"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 20 20">
					<g
						fill="currentColor"
						fillRule="evenodd"
						clipRule="evenodd">
						<path
							d="M13 6.5H7A2.5 2.5 0 0 0 4.5 9v5A2.5 2.5 0 0 0 7 16.5h6a2.5 2.5 0 0 0 2.5-2.5v-.024l2.348 1.565a.5.5 0 0 0 .777-.416v-7a.5.5 0 0 0-.777-.416L15.5 9.274V9A2.5 2.5 0 0 0 13 6.5"
							opacity=".2"
						/>
						<path d="M11 4.5H5A2.5 2.5 0 0 0 2.5 7v5A2.5 2.5 0 0 0 5 14.5h6a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 11 4.5M3.5 7A1.5 1.5 0 0 1 5 5.5h6A1.5 1.5 0 0 1 12.5 7v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12z" />
						<path d="M15.728 5.58L12.75 7.517a.5.5 0 0 0-.228.414l-.027 2.612a.5.5 0 0 0 .227.425l3.004 1.952a.5.5 0 0 0 .773-.419V6a.5.5 0 0 0-.773-.42m-.226 6l-2.001-1.301l.021-2.07l1.98-1.287z" />
					</g>
				</svg>
				<section className="flex gap-2 flex-col py-3">
					<p className="font-bold pb-1 text-[13px] hidden lg:block px-2">
						CANALES RECOMENDADOS
					</p>
					{twitchChannels.map((channel, index) => {
						if (!channel.follow && channel.online) {
							return (
								<Channel
									key={index}
									channel={channel.channel}
									online={channel.online}
									game={channel.game}
									viewers={channel.viewers}
								/>
							);
						}
					})}
				</section>
			</section>
		</section>
	);
}
