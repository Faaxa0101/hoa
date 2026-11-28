import Link from "next/link";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CalendlyEmbed from "@/components/shared/calendly/CalendlyEmbed";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Book a free 30-min call",
	description:
		"Book a free 30-minute call with HOA.Help - review your financials and open issues, and leave with a plan for your Chicago or Illinois association.",
	robots: {
		index: false,
		follow: true,
	},
};

const points = [
	"Review of your financials and open issues",
	"A step-by-step plan toward the “Promised Land”",
	"Tools, resources and contacts, free or paid",
	"The option to do each step yourself or hire us",
];

export default function BookCall() {
	return (
		<div>
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<section className="tj-about-section section-gap book-page">
							<div className="container">
								<div className="row row-gap-4 align-items-start">
									<div className="col-lg-5">
										<div className="book-intro">
											<span className="sub-title">
												<i className="tji-box"></i> Free 30-minute call
											</span>
											<h1>
												Book a call with a real person, <span>not a call center.</span>
											</h1>
											<p>
												Pick a time below. We review the association&apos;s
												financials and issues, outline a plan, and answer what
												management or a hybrid setup would look like for your
												building. No obligation.
											</p>

											<h2>What you leave with</h2>
											<ul className="book-points">
												{points.map((point) => (
													<li key={point}>{point}</li>
												))}
											</ul>

											<p className="book-fallback">
												Prefer to talk now? Call or text{" "}
												<Link href="tel:+18477730026">(847) 773-0026</Link> or
												email{" "}
												<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>{" "}
												- a real person answers 24/7.
											</p>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="book-card">
											<CalendlyEmbed />
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
