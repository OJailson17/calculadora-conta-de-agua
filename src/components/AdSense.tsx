import Script from 'next/script';

interface AdSenseProps {
	pId: string;
}

export const AdSense = ({ pId }: AdSenseProps) => {
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
			crossOrigin='anonymous'
			strategy='afterInteractive'
		/>
	);
};
