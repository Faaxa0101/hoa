import Link from "next/link";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BookedEvent from "@/components/shared/analytics/BookedEvent";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Your call is booked",
	description:
		"Confirmation page for a booked HOA.Help call - what happens next and what to prepare.",
	robots: {
		index: false,
		follow: true,
	},
};

const steps = [
	{
		title: "Check your email",
		text: "Calendly sends the meeting link and a calendar invite right away. If it is not there in a few minutes, check spam or the promotions tab.",
	},
	{
		title: "Bring what you have",
		text: "Nothing is required. It helps to have your management agreement, the last three months of financials and the reserve study if the association has one. Rough numbers are fine - the point is to see the shape of the issues.",
	},
	{
		title: "On the call",
		text: "We review the financials and open issues, outline a step-by-step plan, and answer what a transition or hybrid setup would look like for your building. If a written quote makes sense, you leave the call with one - itemized, with no add-on fees.",
	},
];

export default function ThankYou() {
	return (
		<div>
			<BookedEvent />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<section className="tj-about-section section-gap thankyou-page">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-9 col-xl-8">
										<div className="thankyou-head">
											<span className="sub-title">
												<i className="tji-box"></i> Call booked
											</span>
											<h1>You&apos;re booked. Here&apos;s what happens next.</h1>
											<p>
												Your 30-minute call is confirmed. A real person from our
												Rosemont team meets you on the call - no sales script,
												no call center.
											</p>
										</div>

										<div className="thankyou-steps">
											{steps.map((step, index) => (
												<div className="thankyou-step" key={step.title}>
													<span className="step-num">{index + 1}</span>
													<div className="step-body">
														<h2>{step.title}</h2>
														<p>{step.text}</p>
													</div>
												</div>
											))}
										</div>

										<div className="thankyou-help">
											<h2>Need to change the time?</h2>
											<p>
												Use the reschedule link in your confirmation email, call
												or text{" "}
												<Link href="tel:+18477730026">(847) 773-0026</Link>, or
												email{" "}
												<Link href="mailto:hello@hoa.help">hello@hoa.help</Link>{" "}
												- a real person answers 24/7.
											</p>
										</div>

										<div className="thankyou-actions">
											<ButtonPrimary text={"Back to homepage"} url={"/"} />
											<ButtonPrimary
												text={"Read the board guide"}
												url={"/hoa-management-guide-chicago"}
												isTextBtn={true}
											/>
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
