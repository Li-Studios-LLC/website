import './Links.css';
import Image, { StaticImageData } from 'next/image';
import githubLogo from '@/public/github.png';
import linkedinLogo from '@/public/linkedin.png';

function Connection({
	link,
	logo,
}: {
	link: string | undefined;
	logo: StaticImageData;
}) {
	if (link != undefined) {
		return (
			<a href={link} target='_blank'>
				<Image src={logo} alt='GitHub' />
			</a>
		);
	} else {
		return <></>;
	}
}

function Portfolio({ link }: { link: string | undefined }) {
	if (link != undefined) {
		return (
			<a href={link} target='_blank'>
				<button>Portfolio</button>
			</a>
		);
	} else {
		return <></>;
	}
}

export interface LinksProps {
	github?: string;
	portfolio?: string;
	linkedin?: string;
}

export default function Links(props: LinksProps) {
	return (
		<div className='Links'>
			<Connection link={props.github} logo={githubLogo} />
			<Connection link={props.linkedin} logo={linkedinLogo} />
			<Portfolio link={props.portfolio} />
		</div>
	);
}
