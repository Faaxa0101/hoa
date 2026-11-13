import Link from "next/link";

const AboutContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-home"></i> About HOA.Help
							</span>
							<h2 className="sec-title title-anim">
								A Local Management Team Built{" "}
								<span>for Illinois Boards.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>Who we are</h3>
							<p>
								HOA.Help is the condo and HOA management practice of{" "}
								<strong>MKZ Management LLC</strong>, based at 10700 W Higgins
								Rd in Rosemont, Illinois. We manage self-managed condominium
								associations and HOAs across Chicago, the north suburbs and
								more of Illinois - associations whose boards want professional
								administration without giving up control of their buildings.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What we believe</h3>
							<p>
								Most special assessments are not accidents - they are years of
								deferring the obvious. Our whole operating model rests on that
								premise:
							</p>
							<ul>
								<li>
									<strong>Reserve-first budgets</strong> - target 15-20%+
									annual reserve contributions and fund the roof before it
									leaks
								</li>
								<li>
									<strong>The board decides, the manager executes</strong> -
									budgets, rules and projects stay in the board's hands
								</li>
								<li>
									<strong>Written, itemized quotes</strong> - scope and
									price in writing before signing, with no add-on fees and
									no auto-renewal traps
								</li>
								<li>
									<strong>A real person, 24/7</strong> - call, text or email
									and get a human who drives the issue to resolution
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>How we work</h3>
							<p>
								Onboarding takes about two weeks: software and owner portals
								enabled, roster and vendor logins collected, welcome packets
								sent, board trained. From then on the rhythm is monthly
								financials, quarterly board reporting, annual budget season
								and reserve review - with a manager who walks the building
								rather than reading about it. You can see the workings on the
								<Link href="/condo-management-chicago"> condo management </Link>
								and
								<Link href="/association-management-chicago"> association management </Link>
								pages, and the exact numbers on the
								<Link href="/hoa-management-cost-chicago"> cost guide </Link>
								page.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Where we work</h3>
							<p>
								On-site across Chicago, Rosemont, Schiller Park, Evanston,
								Skokie, Schaumburg, Arlington Heights, Palatine and more of
								Illinois. We serve Illinois only - depth in one state beats a
								national map with nobody local on it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContent;
