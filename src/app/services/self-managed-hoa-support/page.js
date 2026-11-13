import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import Process from "@/components/sections/process/Process";
import HeroInner from "@/components/sections/hero/HeroInner";
import SelfManagedContent from "@/components/sections/others/SelfManagedContent";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Self-Managed HOA Support in Chicago",
	description:
		"Support for self-managed HOAs and condos in Chicago - collections, financials, documents, owner requests and vendors. Your board keeps every decision.",
	alternates: {
		canonical: "/services/self-managed-hoa-support",
	},
	openGraph: {
		title: "Self-Managed HOA Support in Chicago | HOA.Help",
		description:
			"Support for self-managed HOAs and condos in Chicago - collections, financials, documents, owner requests and vendors. Your board keeps every decision.",
		url: "https://hoa.help/services/self-managed-hoa-support",
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

const selfmanagedhoasupportFaqs = [
	{
		title: "What is self-managed HOA support?",
		desc: "A hybrid model: the board keeps every decision while we handle the administrative work - collections, financials, documents, owner requests and vendor coordination. Built for boards that want control without the paperwork.",
		initActive: true,
	},

	{
		title: "How much does it cost?",
		desc: "Pricing depends on the building - number of units, services and condition. Every board starts with a free financial and issues review, then receives a written quote with no obligation.",
		initActive: false,
	},

	{
		title: "What stays with the board?",
		desc: "Budget approval, reserve policy, special assessments, rules enforcement and all project decisions. We prepare the numbers and options; the board decides.",
		initActive: false,
	},

	{
		title: "Can we start with just bookkeeping?",
		desc: "Yes - many boards start with the financial side and add owner support or vendor coordination later. The pricing tiers are designed to stack.",
		initActive: false,
	},

	{
		title: "How fast does support start?",
		desc: "About two weeks: the roster is verified, portal opens, collections process starts and documents move into the drive.",
		initActive: false,
	},
];

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Self-Managed HOA Support in Chicago",
		serviceType: "Self-managed HOA administrative support",
		provider: {
			"@type": "ProfessionalService",
			"@id": "https://hoa.help/#organization",
			name: "HOA.Help",
		},
		areaServed: { "@type": "State", name: "Illinois" },
		url: "https://hoa.help/services/self-managed-hoa-support",
	};

export default function SelfManagedHoaSupport() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Self-Managed HOA Support in Chicago"}
							text={"Self-Managed HOA Support"}
							breadcrums={[
								{ name: "Self-Managed HOA Support in Chicago", path: "/services/self-managed-hoa-support" },
							]}
						/>
						<SelfManagedContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={selfmanagedhoasupportFaqs} />
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
