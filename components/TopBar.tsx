import './TopBar.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logos/exports/WideInverted.png';

export default function TopBar() {
	return (
		<nav className='TopBar'>
			<Link href='/'>
				<Image src={logo} alt='Home' width={512} height={256} priority />
			</Link>

			<Link href='/about'>
				<h1>About</h1>
			</Link>

			<Link href='/contact'>
				<h1>Contact</h1>
			</Link>

			<Link href='/projects'>
				<h1>Projects</h1>
			</Link>
		</nav>
	);
}
