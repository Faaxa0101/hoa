import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";

const bodyFont = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});
const headingFont = Mona_Sans({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: {
		default:
			"HOA & Condo Association Management in Illinois | HOA.Help",
		template: "%s | HOA.Help",
	},
	description:
		"HOA & condo management for self-managed associations. On-site across Chicago, Rosemont, Schiller Park, the suburbs and more of Illinois. Free 30-min call.",
	keywords: [
		"HOA management",
		"condo association management",
		"self-managed HOA",
		"HOA management company Illinois",
		"Northern Illinois HOA management",
		"Chicago condo management",
		"Rosemont HOA management",
		"Schiller Park condominium management",
		"north suburbs HOA management",
		"HOA assessment collections",
		"HOA accounting",
		"reserve-first budgeting",
	],
	metadataBase: new URL("https://hoa.help"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "HOA & Condo Association Management in Illinois | HOA.Help",
		description:
			"HOA & condo management for self-managed associations. On-site across Chicago, Rosemont, Schiller Park, the suburbs and more of Illinois. Free 30-min call.",
		url: "https://hoa.help",
		siteName: "HOA.Help",
		images: [
			{
				url: "/images/og/hoa-help-og.png",
				width: 1200,
				height: 630,
				alt: "HOA.Help - Make Your Assessments Predictable, Not Special",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "HOA & Condo Association Management in Illinois | HOA.Help",
		description:
			"HOA & condo management for self-managed associations. On-site across Chicago, Rosemont, Schiller Park, the suburbs and more of Illinois. Free 30-min call.",
		images: ["/images/og/hoa-help-og.png"],
	},
	icons: {
		icon: "/images/logos/hoa-favicon.png",
	},
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	"@id": "https://hoa.help/#organization",
	name: "HOA.Help",
	legalName: "MKZ Management LLC",
	url: "https://hoa.help",
	logo: "https://hoa.help/images/logos/hoa-help-logo.png",
	image: "https://hoa.help/images/hero/hoa-hero-il-expert.webp",
	telephone: "+1-847-773-0026",
	email: "hello@hoa.help",
	priceRange: "Custom quote after free review",
	address: {
		"@type": "PostalAddress",
		streetAddress: "10700 W Higgins Rd, Suite 270",
		addressLocality: "Rosemont",
		addressRegion: "IL",
		postalCode: "60018",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 41.9797,
		longitude: -87.8619,
	},
	areaServed: [
		{ "@type": "State", name: "Illinois" },
		{ "@type": "City", name: "Chicago" },
		{ "@type": "City", name: "Rosemont" },
		{ "@type": "City", name: "Schiller Park" },
		{ "@type": "City", name: "Evanston" },
		{ "@type": "City", name: "Skokie" },
		{ "@type": "City", name: "Schaumburg" },
		{ "@type": "City", name: "Arlington Heights" },
		{ "@type": "City", name: "Palatine" },
		{ "@type": "City", name: "Des Plaines" },
		{ "@type": "City", name: "Park Ridge" },
	],
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		opens: "00:00",
		closes: "23:59",
	},
	sameAs: [
		"https://g.page/r/CYdU1Z2O3AVaEBM/review",
		"https://app.hoa.help",
	],
	description:
		"HOA and condo association management for self-managed associations. On-site across Chicago, Rosemont, Schiller Park, the north suburbs and more of Illinois. 24/7 live support and reserve-first budgeting.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" dir="ltr">
			<body className={`${bodyFont.variable} ${headingFont.variable}`}>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
			</body>
		</html>
	);
}
