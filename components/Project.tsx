export interface ProjectProps {
	name: String;
}

export default function Project(props: ProjectProps) {
	return (
		<div>
			<h2>{props.name}</h2>
		</div>
	);
}
