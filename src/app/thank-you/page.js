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
						<section className="tj-about-section section-gap">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8 text-center">
										<div className="sec-heading style-2">
											<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
												<i className="tji-box"></i> Call booked
											</span>
											<h1 className="sec-title title-anim">
												You&apos;re booked.{" "}
												<span>Here&apos;s what happens next.</span>
											</h1>
											<p className="desc wow fadeInUp" data-wow-delay=".4s">
												Your 30-minute call is confirmed. A real person from our
												Rosemont team will meet you on the call - no sales
												script, no call center.
											</p>
										</div>
									</div>
								</div>

								<div className="row justify-content-center">
									<div className="col-lg-8">
										<div className="condo-content-block">
											<h3>1. Check your email</h3>
											<p>
												Calendly sends a confirmation with the meeting link and
												calendar invite. If it is not there in a few minutes,
												check spam or promotions.
											</p>
										</div>

										<div className="condo-content-block">
											<h3>2. Bring what you have</h3>
											<p>
												Nothing is required for the call, but these make it more
												useful: your current management agreement, the last three
												months of financials, and the reserve study if the
												association has one. Rough numbers are fine - the point is
												to see the shape of the issues.
											</p>
										</div>

										<div className="condo-content-block">
											<h3>3. On the call</h3>
											<p>
												We review the financials and the open issues, outline a
												step-by-step plan, and answer what a transition or a hybrid
												setup would look like for your building. If a written
												quote makes sense, you leave the call with one - itemized,
												with no add-on fees.
											</p>
										</div>

										<div className="condo-content-block">
											<h3>Need to change the time?</h3>
											<p>
												Use the reschedule link in your confirmation email, call
												or text{" "}
												<Link href="tel:+18477730026">(847) 773-0026</Link>, or
												email <Link href="mailto:hello@hoa.help">hello@hoa.help</Link>{" "}
												- a real person answers 24/7.
											</p>
										</div>

										<div className="btn-wrap mt-4">
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
