import './BottomBar.css';
import Link from 'next/link';

export default function BottomBar() {
	return (
		<nav className='BottomBar'>
			<div className='Info'>
				<p>Contact: contact@listudios.io</p>
			</div>

			<div className='Socials'></div>
		</nav>
	);
}
