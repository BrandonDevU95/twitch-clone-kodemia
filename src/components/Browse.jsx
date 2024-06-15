import Category from './Category';
import categories from '../lib/categories';

export default function Browse() {
	return (
		<section className="p-4 flex flex-col">
			<h1 className="font-bold text-5xl pb-6">Explorar</h1>
			<div className="hidden sm:block">
				<article className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{categories.map((category, index) => {
						return (
							<Category
								key={index}
								title={category.title}
								img={category.img}
							/>
						);
					})}
				</article>
			</div>
		</section>
	);
}
