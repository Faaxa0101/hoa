import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import ReserveStudyContent from "@/components/sections/others/ReserveStudyContent";
import Process from "@/components/sections/process/Process";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "HOA Reserve Studies in Illinois: A Board Guide",
	description:
		"What an HOA reserve study contains, how Illinois boards use it, how often to update it, funding targets and the signs your study is out of date.",
	alternates: {
		canonical: "/hoa-reserve-study-illinois",
	},
	openGraph: {
		title: "HOA Reserve Studies in Illinois: A Board Guide",
		description:
			"Reserve studies explained for Illinois condo and HOA boards: components, funding targets, percent funded, update cadence and warning signs.",
		url: "https://www.hoa.help/hoa-reserve-study-illinois",
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

const reserveStudyFaqs = [
	{
		title: "What is a reserve study for an HOA?",
		desc: "A planning document that inventories the association's major components, estimates their replacement cost and remaining life, and models the annual contributions needed to fund them. It connects the building's condition to the budget.",
		initActive: true,
	},
	{
		title: "How often should a board update its reserve study?",
		desc: "A full update with a fresh site walk every three to five years, plus an annual update for inflation, completed projects and current costs. Revisit it after any major project or special assessment so the plan matches the building.",
		initActive: false,
	},
	{
		title: "Does Illinois require HOA reserve studies?",
		desc: "Illinois does not require every association statewide to commission one, but many declarations, insurers and lenders expect a current study - and some governing documents require updates. Check your documents and insurance requirements; association counsel can confirm what applies.",
		initActive: false,
	},
	{
		title: "How much should an HOA contribute to reserves?",
		desc: "Reserve studies typically recommend 15-20% of the annual operating budget, calibrated to fully fund projected capital needs over time. The right number depends on the components and their remaining life - the study models it and the board approves it in the budget.",
		initActive: false,
	},
	{
		title: "What does percent funded mean?",
		desc: "The reserve balance divided by the amount that should be on hand for the components' current age. Around 70% or better is reasonable; below 30% usually means years of underfunding. A multi-year plan to raise contributions steadily is better than one dramatic increase.",
		initActive: false,
	},
	{
		title: "Who prepares a reserve study?",
		desc: "A reserve study firm or qualified consultant who walks the property, counts and measures components and runs the funding model. Expect a site visit - a study filled in remotely from a template is not a study of your building.",
		initActive: false,
	},
];

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "HOA Reserve Studies in Illinois: A Board Guide",
	description:
		"What an HOA reserve study contains, how Illinois boards use it, how often to update it, funding targets and the signs your study is out of date.",
	image: "https://www.hoa.help/images/guides/reserve-funding-chart.png",
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
		"@id": "https://www.hoa.help/hoa-reserve-study-illinois",
	},
};

export default function HoaReserveStudyIllinois() {
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
							title={"HOA Reserve Studies in Illinois: A Board Guide"}
							text={"Planning Tool"}
							breadcrums={[
								{
									name: "Reserve Studies",
									path: "/hoa-reserve-study-illinois",
								},
							]}
						/>
						<ReserveStudyContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={reserveStudyFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
