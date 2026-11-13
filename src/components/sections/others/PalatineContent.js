import Link from "next/link";

const PalatineContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location"></i> Palatine, Illinois
							</span>
							<h2 className="sec-title title-anim">
								Association Management in{" "}
								<span>Palatine.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>Downtown condos, suburban townhomes, older walk-ups</h3>
							<p>
								Palatine's associations spread across three eras. Downtown,
								condo buildings near the Metra station serve commuters who
								want maintenance-free living close to the line. Through the
								subdivisions, 1980s and 1990s townhome associations run
								landscaping, private drives and snow contracts across dozens
								of buildings at once. And the village's older brick walk-ups
								near the historic core carry plumbing and window cycles that
								need the most conservative reserves of all. A manager who
								applies one template to all three is guessing - we price each
								property against its actual systems and documents.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What Palatine boards get</h3>
							<ul>
								<li>
									Assessment collections and vendor bill pay
								</li>
								<li>
									Monthly reporting with live financials and reserve tracking
								</li>
								<li>
									Owner portal, autopay and document drive
								</li>
								<li>
									24/7 live support with emergency escalation
								</li>
								<li>
									Reserve-first budgets targeting 15-20%+ annual contributions
								</li>
								<li>
									Vendor management for roofing, siding, driveways and snow
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Water, weather and the northwest suburbs</h3>
							<p>
								Palatine sits near creek corridors that make water intrusion
								a recurring budget item for lower units and garage
								structures. We keep drainage, grading and sump maintenance on
								a scheduled cycle, verify the association's insurance
								coverage matches its flood exposure, and document every
								repair - so a wet spring becomes a maintenance line, not an
								emergency assessment. Winter gets the same planning: snow
								contracts bid in fall, plow routes documented, ice treatment
								budgeted.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Close to Rosemont, on site when it matters</h3>
							<p>
								Palatine is a straight run up the tollway from our office -
								walk-throughs, vendor supervision and board meetings happen
								in person. The
								<Link href="/condo-management-chicago"> condo management program </Link>
								and
								<Link href="/association-management-chicago"> association management program </Link>
								cover the full scope, and the
								<Link href="/hoa-management-schaumburg"> Schaumburg page </Link>
								shows our work in the neighboring market.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PalatineContent;
