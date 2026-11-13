import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import AssociationContent from "@/components/sections/others/AssociationContent";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import Process from "@/components/sections/process/Process";
import Services3 from "@/components/sections/services/Services3";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Association Management in Chicago",
	description:
		"Association management for self-managed Chicago HOAs and condos - governance support, reserve-first budgets, collections and 24/7 live support. Free call.",
	alternates: {
		canonical: "/association-management-chicago",
	},
	openGraph: {
		title: "Association Management in Chicago | HOA.Help",
		description:
			"Association management for self-managed HOAs and condo associations in Chicago - governance support, reserve-first budgets, collections and 24/7 live support.",
		url: "https://www.hoa.help/association-management-chicago",
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

const associationFaqs = [
	{
		title: "What does association management include?",
		desc: "Assessment collections and bill pay, real-time financials and board reporting, meeting and records support, the owner portal and document drive, 24/7 live support, reserve-first budgeting and vendor coordination - with every decision staying with the board.",
		initActive: true,
	},
	{
		title: "How much does HOA management cost in Chicago?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},
	{
		title: "What is the difference between HOA management and condo management?",
		desc: "The work is similar - collections, financials, vendors, meetings - but the legal structure differs: condos are governed by declarations and the Condominium Property Act, while HOAs often run on covenants and bylaws. We manage both and tailor reporting and reserve planning to the association's actual governing documents.",
		initActive: false,
	},
	{
		title: "Do you work with self-managed associations?",
		desc: "Yes - self-managed associations are our focus. We take the repetitive work off volunteer boards: collections, financials, document drive, owner requests and vendor management, while the board keeps control of every decision.",
		initActive: false,
	},
	{
		title: "How fast can you take over management?",
		desc: "Our onboarding playbook gets an association live in about two weeks - records, roster, bank accounts and vendor logins transferred, portals enabled and welcome packets sent, with no gap in collections or bill pay.",
		initActive: false,
	},
	{
		title: "What do management agreements look like?",
		desc: "Month-to-month or annual terms with a plain-language scope: what is included, what costs extra, and how termination works. No auto-renewal traps and no surprise add-on fees.",
		initActive: false,
	},
	{
		title: "Which areas do you serve?",
		desc: "We serve associations across Illinois only - on-site in Chicago, Rosemont, Schiller Park, the suburbs and beyond. As we grow into other markets, service areas will be announced here.",
		initActive: false,
	},
];

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Association Management in Chicago",
		serviceType: "HOA and association management",
		provider: {
			"@type": "ProfessionalService",
			"@id": "https://www.hoa.help/#organization",
			name: "HOA.Help",
		},
		areaServed: { "@type": "State", name: "Illinois" },
		url: "https://www.hoa.help/association-management-chicago",
	};

export default function AssociationManagementChicago() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Association Management in Chicago"}
							text={"Association Management Chicago"}
							breadcrums={[
								{
									name: "Association Management Chicago",
									path: "/association-management-chicago",
								},
							]}
						/>
						<Services3 />
						<AssociationContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={associationFaqs} />
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
