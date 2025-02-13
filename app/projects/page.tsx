import './projects.css';
import type { Metadata } from 'next';
import Project from '@/components/Project';

export const metadata: Metadata = {
	title: 'Li Studios - Projects',
};

export default function Projects() {
	return (
		<div className='PageSection Projects'>
			<h1>Projects</h1>
			<Project name='liTech' />
		</div>
	);
}
