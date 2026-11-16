import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import SwitchingContent from "@/components/sections/others/SwitchingContent";
import Process from "@/components/sections/process/Process";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "How to Switch HOA Management Companies in Chicago",
	description:
		"How Chicago boards switch HOA management companies without chaos: notice, records, bank accounts, owners and the first 30 days - step by step.",
	alternates: {
		canonical: "/how-to-switch-hoa-management-chicago",
	},
	openGraph: {
		title: "How to Switch HOA Management Companies in Chicago",
		description:
			"The board's step-by-step guide to changing management companies in Chicago: notice, records transfer, owner communication and the first 30 days.",
		url: "https://www.hoa.help/how-to-switch-hoa-management-chicago",
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

const switchingFaqs = [
	{
		title: "How much notice do we need to give our current manager?",
		desc: "It depends on the management agreement - most contracts set a notice window, often 30 to 90 days, and some auto-renew if notice is missed. Read the termination clause before the board votes, and calendar the deadline so the decision is not made by default.",
		initActive: true,
	},
	{
		title: "Can a Chicago condo board switch managers mid-year?",
		desc: "Usually yes. The agreement's termination clause governs notice and record transfer, not the calendar. A well-run transition takes about two weeks from notice to live, with collections continuing without a gap.",
		initActive: false,
	},
	{
		title: "Does the board need owner approval to change management companies?",
		desc: "In most Illinois associations the board hires and fires management without a membership vote - but check the bylaws, because some declarations require owner notice or approval above a threshold. Record the board vote and the reasons in the minutes either way.",
		initActive: false,
	},
	{
		title: "What records must the outgoing manager hand over?",
		desc: "Governing documents, minutes and resolutions, several years of financials and tax filings, the reserve study and ledger, the owner roster and balances, vendor and insurance contracts, warranties, permits, keys and open matters. Request them in writing the day notice goes out, in native digital formats where possible.",
		initActive: false,
	},
	{
		title: "How much does it cost to switch HOA management companies?",
		desc: "Plan for a possible one-month overlap where both companies bill, plus setup work if records are in poor condition. Switching should not require a special assessment or interrupt collections - and every quote should be written and itemized before the board signs.",
		initActive: false,
	},
	{
		title: "What should we tell owners during the switch?",
		desc: "Send a short letter before the cutover: who manages the association now, what changes for owners (payment address, portal, phone), what stays the same (assessment amount, due dates, services) and where to ask questions. Post it in the lobby as well.",
		initActive: false,
	},
	{
		title: "What if the current manager is slow to release records?",
		desc: "Put the request in writing, copy the board, and set a deadline tied to the contract's exit terms. Illinois law gives owners and the association rights to association records - a manager who stalls is creating a paper trail the board can use. The incoming manager should chase the list, not the board alone.",
		initActive: false,
	},
];

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "How to Switch HOA Management Companies in Chicago",
	description:
		"How Chicago boards switch HOA management companies without chaos: notice, records, bank accounts, owners and the first 30 days - step by step.",
	image: "https://www.hoa.help/images/og/hoa-help-og.png",
	author: {
		"@type": "Organization",
		name: "HOA.Help",
		url: "https://www.hoa.help",
	},
	publisher: {
		"@type": "Organization",
		name: "HOA.Help",
		logo: {
			"@type": "ImageObject",
			url: "https://www.hoa.help/images/logo/hoa-help-logo.png",
		},
	},
	datePublished: "2026-11-16",
	dateModified: "2026-11-16",
	mainEntityOfPage: {
		"@type": "WebPage",
		"@id": "https://www.hoa.help/how-to-switch-hoa-management-chicago",
	},
};

export default function HowToSwitchHoaManagementChicago() {
	return (
		<div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"How to Switch HOA Management Companies in Chicago"}
							text={"Board Guide"}
							breadcrums={[
								{
									name: "Switching Managers",
									path: "/how-to-switch-hoa-management-chicago",
								},
							]}
						/>
						<SwitchingContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={switchingFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
