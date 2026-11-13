import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import Process from "@/components/sections/process/Process";
import HeroInner from "@/components/sections/hero/HeroInner";
import AccountingContent from "@/components/sections/others/AccountingContent";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA Accounting & Bookkeeping Services in Chicago",
	description:
		"HOA accounting and bookkeeping in Chicago - assessment billing, collections, bill pay, monthly board reports and reserve tracking. Quoted after a free review.",
	alternates: {
		canonical: "/services/hoa-accounting",
	},
	openGraph: {
		title: "HOA Accounting & Bookkeeping Services in Chicago | HOA.Help",
		description:
			"HOA accounting and bookkeeping in Chicago - assessment billing, collections, bill pay, monthly board reports and reserve tracking. Quoted after a free review.",
		url: "https://www.hoa.help/services/hoa-accounting",
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

const hoaaccountingFaqs = [
	{
		title: "What do HOA accounting services include?",
		desc: "Assessment billing and collections, vendor bill pay, monthly bank reconciliation, board-ready financial statements, reserve fund tracking, budget preparation and the year-end package for your CPA.",
		initActive: true,
	},

	{
		title: "How much does HOA bookkeeping cost?",
		desc: "The Basic Financials tier covers assessments, bill pay, real-time financials and the owner portal - quoted in writing after a free review, so the board knows the scope before signing.",
		initActive: false,
	},

	{
		title: "Do you replace our CPA or auditor?",
		desc: "No - we prepare the records and the year-end package your CPA needs for the audit or review and tax filing. Many boards keep their CPA and simply stop doing the prep work twice.",
		initActive: false,
	},

	{
		title: "How are delinquent assessments handled?",
		desc: "One documented process: statements, late notices, payment plans where appropriate and board-approved escalation. Every step is recorded so the board can see status per unit at any time.",
		initActive: false,
	},

	{
		title: "Can we start with accounting only and add management later?",
		desc: "Yes - the same team and systems scale into full condo or association management later without a re-onboarding.",
		initActive: false,
	},
];

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "HOA Accounting & Bookkeeping Services in Chicago",
		serviceType: "HOA accounting and bookkeeping",
		provider: {
			"@type": "ProfessionalService",
			"@id": "https://www.hoa.help/#organization",
			name: "HOA.Help",
		},
		areaServed: { "@type": "State", name: "Illinois" },
		url: "https://www.hoa.help/services/hoa-accounting",
	};

export default function HoaAccountingServices() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"HOA Accounting & Bookkeeping Services in Chicago"}
							text={"HOA Accounting Chicago"}
							breadcrums={[
								{ name: "HOA Accounting & Bookkeeping Services in", path: "/services/hoa-accounting" },
							]}
						/>
						<AccountingContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={hoaaccountingFaqs} />
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
