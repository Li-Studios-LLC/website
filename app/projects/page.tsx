import './projects.css';
import type { Metadata } from 'next';
import Project from '@/components/Project';
import logo from '@/public/logos/exports/WideInverted.png';

export const metadata: Metadata = {
	title: 'Li Studios - Projects',
};

export default function Projects() {
	return (
		<div className='PageSection Projects'>
			<h1>Projects</h1>
			<Project name='liTech' description='The in house and open source game engine used for our projects.' alt='liTech' image={logo} />
			<Project name='This Site' description='This website was written in house, using React and NextJS.' alt='This Site' image={logo} />
		</div>
	);
}
