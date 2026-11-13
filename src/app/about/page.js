import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import AboutContent from "@/components/sections/others/AboutContent";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "About HOA.Help - Condo & HOA Management in Illinois",
	description:
		"HOA.Help is the condo and HOA management practice of MKZ Management LLC in Rosemont, IL - reserve-first budgets, published pricing and 24/7 live support for Illinois boards.",
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		title: "About HOA.Help | HOA.Help",
		description:
			"Condo and HOA management for Illinois boards - reserve-first budgets, published pricing and 24/7 live support from Rosemont, IL.",
		url: "https://hoa.help/about",
		images: [
			{
				url: "/images/og/hoa-help-og.png",
				width: 1200,
				height: 630,
				alt: "HOA.Help",
			},
		],
	},
};

const aboutFaqs = [
	{
		title: "Who owns HOA.Help?",
		desc: "HOA.Help is the management practice of MKZ Management LLC, based in Rosemont, Illinois - a local team, not a national franchise or call center.",
		initActive: true,
	},
	{
		title: "What makes HOA.Help different from other managers?",
		desc: "Three things boards can verify before signing: reserve-first budgets targeting 15-20%+ annual contributions, a written itemized quote before any commitment, and 24/7 live support with a real person responding.",
		initActive: false,
	},
	{
		title: "Do you only work in Illinois?",
		desc: "Yes - we serve Illinois only. On-site across Chicago, Rosemont, Schiller Park and the north suburbs, with more of Illinois available.",
		initActive: false,
	},
	{
		title: "Can we keep control of our building?",
		desc: "Always. The board makes every decision - budgets, rules, projects and reserves. We prepare the numbers, the bids and the options; the board approves.",
		initActive: false,
	},
];

export default function About() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"About HOA.Help"}
							text={"About"}
							breadcrums={[{ name: "About", path: "/about" }]}
						/>
						<AboutContent />
						<BuildingsWeManage />
						<Faq2 type={1} items={aboutFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
