import { Count } from '@/components/count'
import Head from 'next/head'

export default function Home() {
	return (
		<main className="flex items-center justify-center w-full h-full">
			<Head>
				<title>Tailwind Tips</title>
				<meta name="description" content="Tailwind Tips" />
			</Head>
			<Count />
		</main>
	)
}
