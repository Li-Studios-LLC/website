import Image, { StaticImageData } from 'next/image';

export interface ProjectProps {
	name: string;
	description: string;
	alt: string;
	image: string | StaticImageData;
}

export default function Project(props: ProjectProps) {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.description}</p>
			<Image src={props.image} alt={props.alt} priority />
		</div>
	);
}
