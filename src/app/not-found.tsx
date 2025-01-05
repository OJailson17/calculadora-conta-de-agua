import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-center mt-9 flex flex-col gap-7'>
			<h1 className='text-4xl font-bold'>404 - Página não encontrada</h1>
			<p className='mt-6'>A página que você procura não existe</p>
			<Link href={'/'} className='text-secondary font-bold hover:underline'>
				Página Inicial
			</Link>
		</div>
	);
}
