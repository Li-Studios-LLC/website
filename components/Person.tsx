import Links, { LinksProps } from './Links';

export interface PersonProps {
	name: string;
	description: string;
	email: string;
	links: LinksProps;
}

export default function Person(props: PersonProps) {
	return (
		<div className='Person'>
			<p>{props.name}</p>
			<p>{props.description}</p>
			<p>{props.email}</p>
			<Links
				github={props.links.github}
				portfolio={props.links.portfolio}
				linkedin={props.links.linkedin}
			/>
		</div>
	);
}
