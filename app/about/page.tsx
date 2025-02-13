import './about.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Li Studios - About',
};

export default function About() {
	return (
		<div className='About'>
			<h1>About</h1>
		</div>
	);
}
