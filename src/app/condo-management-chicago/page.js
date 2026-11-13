import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import CondoContent from "@/components/sections/others/CondoContent";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Condo Management Companies in Chicago",
	description:
		"Condo association management in Chicago - collections, real-time financials, owner portal, 24/7 support and reserve-first budgets. Free 30-min call.",
	alternates: {
		canonical: "/condo-management-chicago",
	},
	openGraph: {
		title: "Condo Management Companies in Chicago | HOA.Help",
		description:
			"Full-service condo association management in Chicago - collections, financials, owner portal, 24/7 live support and reserve-first budgeting.",
		url: "https://hoa.help/condo-management-chicago",
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

const condoFaqs = [
	{
		title: "What does condo association management include?",
		desc: "Assessment collections and bill pay, real-time financials and board reporting, the owner web portal and document drive, 24/7 live support, reserve-first budgeting, and vendor coordination - your board keeps every decision.",
		initActive: true,
	},
	{
		title: "How much does condo management cost in Chicago?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},
	{
		title: "Do you work with self-managed condo associations?",
		desc: "Yes - self-managed associations are our focus. We take the repetitive work off the board: collections, financials, document drive, owner requests and vendor management, while the board stays in control of decisions.",
		initActive: false,
	},
	{
		title: "How fast can you take over our building?",
		desc: "Our onboarding playbook gets a Chicago building live in about two weeks - software and portals enabled, owner roster and vendor logins collected, welcome packets sent and the board trained.",
		initActive: false,
	},
	{
		title: "What do management agreements look like?",
		desc: "Month-to-month or annual terms with a plain-language scope - what is included, what costs extra, how termination works. No auto-renewal traps and no surprise add-on fees; the board can leave on reasonable notice if the fit is wrong.",
		initActive: false,
	},
	{
		title: "We already have a manager - how does switching work?",
		desc: "We handle the transition: records and bank accounts transfer, vendors and utility providers are notified, the owner roster is verified and the portal opens. Most buildings are live in about two weeks with no gap in collections or bill pay.",
		initActive: false,
	},
	{
		title: "Which Chicago neighborhoods do you serve?",
		desc: "We serve condo associations across Chicago and the north side, plus Rosemont, Schiller Park and the north suburbs. On-site walk-throughs, meetings and vendor supervision are included across our service area.",
		initActive: false,
	},
];

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Condo Association Management in Chicago",
		serviceType: "Condo and condominium association management",
		provider: {
			"@type": "ProfessionalService",
			"@id": "https://hoa.help/#organization",
			name: "HOA.Help",
		},
		areaServed: { "@type": "State", name: "Illinois" },
		url: "https://hoa.help/condo-management-chicago",
	};

export default function CondoManagementChicago() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Condo Management Companies in Chicago"}
							text={"Condo Management Chicago"}
							breadcrums={[{ name: "Condo Management Chicago", path: "/condo-management-chicago" }]}
						/>
						<Services3 />
						<CondoContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={condoFaqs} />
						<Cta />
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{
								__html: JSON.stringify(serviceSchema),
							}}
						/>
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
