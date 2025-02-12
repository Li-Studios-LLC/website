import './TopBar.css';

export default function TopBar() {
	return (
		<nav className='TopBar'>
			<a href='/'>
				<img src='logos/exports/WideInverted.png' alt='Logo' />
			</a>

			<a href='/about'>
				<h1>About</h1>
			</a>

			<a href='/contact'>
				<h1>Contact</h1>
			</a>
		</nav>
	);
}
