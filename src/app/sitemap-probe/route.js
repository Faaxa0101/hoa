export const dynamic = "force-static";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://www.hoa.help/</loc>
	</url>
	<url>
		<loc>https://www.hoa.help/condo-management-chicago</loc>
	</url>
	<url>
		<loc>https://www.hoa.help/hoa-management-guide-chicago</loc>
	</url>
</urlset>
`;

export async function GET() {
	return new Response(xml, {
		status: 200,
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=0, must-revalidate",
		},
	});
}
