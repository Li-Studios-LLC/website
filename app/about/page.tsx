import './about.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Person from '@/components/Person';
import SquareLogo from '@/public/logos/exports/SquareNormal.png';
import SquareInvLogo from '@/public/logos/exports/SquareInverted.png';

export const metadata: Metadata = {
	title: 'Li Studios - About',
};

export default function About() {
	return (
		<div className='PageSection About'>
			<h1>About</h1>

			<p>
				Li Studios was founded in Dumfries, VA in 2025, by Luke Inlow. We
				specialize in game development, tool development, and software
				solutions. Right now we are a small team, with dreams of expanding.
			</p>

			<div>
				<Image src={SquareInvLogo} alt='Square logo inverted' priority />
				<Image src={SquareLogo} alt='Square logo' priority />
			</div>

			<h1>Us</h1>
			<Person
				name='Luke Inlow'
				description='Programmer'
				email='lukeinlow@listudios.io'
				links={{
					github: 'https://github.com/Lii02',
					portfolio: 'https://lii02.github.io/portfolio',
					linkedin: 'https://www.linkedin.com/in/luke-inlow-709b81100/',
				}}
			/>
		</div>
	);
}
