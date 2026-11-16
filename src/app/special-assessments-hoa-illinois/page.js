import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BuildingsWeManage from "@/components/sections/others/BuildingsWeManage";
import SpecialAssessmentContent from "@/components/sections/others/SpecialAssessmentContent";
import Process from "@/components/sections/process/Process";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Special Assessments in Illinois HOAs and Condos",
	description:
		"What a special assessment is, why Illinois HOAs and condos impose one, how the board approves it, how it is split and how owners and boards can prepare.",
	alternates: {
		canonical: "/special-assessments-hoa-illinois",
	},
	openGraph: {
		title: "Special Assessments in Illinois HOAs and Condos",
		description:
			"How special assessments work in Illinois: board approval, how the amount is calculated, payment options and how to avoid the next one.",
		url: "https://www.hoa.help/special-assessments-hoa-illinois",
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

const specialAssessmentFaqs = [
	{
		title: "What is a special assessment in an HOA or condo?",
		desc: "A one-time charge to owners above regular assessments, used to fund a capital project, emergency repair or shortfall that operating funds and reserves cannot cover. It is approved by the board and billed to owners, usually as a lump sum or a written payment plan.",
		initActive: true,
	},
	{
		title: "How is a special assessment amount decided?",
		desc: "Take the total project cost including engineering, permits and contingency, subtract what reserves can cover, and allocate the gap to owners by their percentage interest in the common elements. Unit size usually drives the share, not an equal split per unit.",
		initActive: false,
	},
	{
		title: "Can a board impose a special assessment without owner approval?",
		desc: "In most Illinois associations the board approves special assessments by vote, under authority in the declaration and bylaws - but some documents require owner notice or a membership vote above a set threshold. Check the declaration and have counsel review the notice for a large assessment.",
		initActive: false,
	},
	{
		title: "Can an owner refuse to pay a special assessment?",
		desc: "No - a properly approved special assessment is an obligation of ownership, like regular assessments. Unpaid amounts typically follow the same collection path as delinquency, including lien rights where the documents allow. Boards should still publish a consistent hardship policy for owners who genuinely cannot pay on schedule.",
		initActive: false,
	},
	{
		title: "Does a special assessment have to be paid in one lump sum?",
		desc: "No. The board sets the payment terms when it approves the assessment: lump sum, installments over a defined period, or both. The terms and the schedule should be in the board minutes and in the written notice to owners.",
		initActive: false,
	},
	{
		title: "Is a special assessment tax deductible?",
		desc: "Sometimes, depending on what the assessment funds and how the association accounts for it. That is a question for a tax professional who can review the association's records and the owner's situation - we do not give tax advice.",
		initActive: false,
	},
];

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Special Assessments in Illinois HOAs and Condos",
	description:
		"What a special assessment is, why Illinois HOAs and condos impose one, how the board approves it, how it is split and how owners and boards can prepare.",
	image: "https://www.hoa.help/images/guides/hoa-special-assessment-brick-water-damage.webp",
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
		"@id": "https://www.hoa.help/special-assessments-hoa-illinois",
	},
};

export default function SpecialAssessmentsHoaIllinois() {
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
							title={"Special Assessments in Illinois HOAs and Condos"}
							text={"Plain Answers"}
							breadcrums={[
								{
									name: "Special Assessments",
									path: "/special-assessments-hoa-illinois",
								},
							]}
						/>
						<SpecialAssessmentContent />
						<Process />
						<BuildingsWeManage />
						<Faq2 type={1} items={specialAssessmentFaqs} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
