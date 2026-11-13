import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const defaultItems = [
		{
			title: "Do we need to prepare anything for the call?",
			desc: "No. Just bring your questions and issues. The call is free, with no paperwork and no obligation.",
			initActive: true,
		},
		{
			title: "How fast can you take over management?",
			desc: "Our onboarding playbook gets you live in about two weeks, including software setup, welcome packets, and vendor coordination.",
			initActive: false,
		},
		{
			title: "How do you help us avoid special assessments?",
			desc: "We push conservative, reserve-first budgets (targeting 15-20%+) and strict expense control, so emergencies don't become crises.",
			initActive: false,
		},
		{
			title: "Do you work with self-managed associations?",
			desc: "Yes - self-managed associations are our focus. We handle the repetitive work: assessment collections, financials prep, a virtual drive for your documents, requests and issue handling, and vendor management. Your board still makes every decision and stays in control.",
			initActive: false,
		},
		{
			title: "Where do you work?",
			desc: "We currently serve associations across Illinois only - on-site in Chicago, Rosemont, Schiller Park, the suburbs and beyond. As we grow into other markets, service areas will be announced here.",
			initActive: false,
		},
	];

const Faq2 = ({ type = 1, items: customItems }) => {
	const items = customItems?.length ? customItems : defaultItems;
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.title,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.desc,
			},
		})),
	};

	return (
		<section
			id="faq"
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>FAQ
									</span>
									<h2 className="sec-title title-anim">
										Answers to <span>common questions.</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									Everything boards usually ask before the free call.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary
										text={"Book a Free 30-min Call"}
										url={"https://calendly.com/mike-mkzmanagement/30min"}
									/>
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/hoa-faq-neenah.webp"
										alt="Questions HOA and condo boards ask before working with HOA.Help"
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Answers to common questions.
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h3 className="title">Book a Free 30-min Call?</h3>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:+18477730026">
											<span>(847) 773-0026</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
		</section>
	);
};

export default Faq2;
