import './globals.css';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import BottomBar from '@/components/BottomBar';

export const metadata: Metadata = {
	title: 'Li Studios',
	description: 'Homepage for Li Studios',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<TopBar />
				{children}
				<BottomBar />
			</body>
		</html>
	);
}
