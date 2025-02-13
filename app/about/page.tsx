import './about.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Li Studios - About',
};

export default function About() {
	return (
		<div className='PageSection About'>
			<h1>About</h1>

			<p>
				Li Studios, founded in Dumfries, VA in 2024, is a game studio at the
				intersection of creativity and technology. We specialize in the
				development of video games, innovative software solutions, and
				cutting-edge game development tools. Our mission is to craft immersive
				gaming experiences that push boundaries while providing powerful tools
				to support the creative vision of developers. With a focus on quality,
				creativity, and technical excellence, we aim to revolutionize the gaming
				landscape, making a lasting impact on both players and creators alike.
				At Li Studios, we are shaping the future of interactive entertainment
				and software development, one project at a time.
			</p>

			<h1>Us</h1>
		</div>
	);
}
