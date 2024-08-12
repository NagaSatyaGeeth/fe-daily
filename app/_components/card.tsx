import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProductCardProps {
	imageUrl: string;
	name: string;
	githubUrl?: string;
	designUrl?: string;
	designName?: string;
	linkUrl: string; // Add linkUrl prop
}

export default function Cards({
	imageUrl,
	name,
	githubUrl,
	designUrl,
	designName,
	linkUrl,
}: ProductCardProps) {
	return (
		<Card className="w-full max-w-sm overflow-hidden cursor-pointer">
			<Link href={linkUrl}>
				<div className="relative overflow-hidden">
					<Image
						src={imageUrl}
						width="400"
						height="250"
						alt="Product"
						className="transform transition-transform duration-500 ease-in-out hover:scale-110"
					/>
				</div>
			</Link>
			<CardHeader className="p-4">
				<div className="flex justify-between">
					<CardTitle className="font-normal">{name}</CardTitle>
					{githubUrl && (
						<a href={githubUrl}>
							<Image
								src="/github-mark.svg"
								width="30"
								height="30"
								alt="Source Design"
							/>
						</a>
					)}
				</div>
			</CardHeader>
			<CardContent className="px-4 pb-4 text-sm text-gray-700 underline underline-offset-4">
				<a href={designUrl}>
					<div>Design from {designName}</div>
				</a>
			</CardContent>
		</Card>
	);
}
