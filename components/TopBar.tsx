import './TopBar.css';
import Link from 'next/link';

export default function TopBar() {
	return (
		<nav className='TopBar'>
			<Link href='/'>
				<img src='logos/exports/WideInverted.png' alt='Logo' />
			</Link>

			<Link href='/about' prefetch={true}>
				<h1>About</h1>
			</Link>

			<Link href='/contact' prefetch={true}>
				<h1>Contact</h1>
			</Link>
		</nav>
	);
}
