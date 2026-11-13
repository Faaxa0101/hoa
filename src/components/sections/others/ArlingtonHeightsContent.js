import Link from "next/link";

const ArlingtonHeightsContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location"></i> Arlington Heights, Illinois
							</span>
							<h2 className="sec-title title-anim">
								HOA &amp; Condo Management in{" "}
								<span>Arlington Heights.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>From downtown lofts to established complexes</h3>
							<p>
								Arlington Heights runs two management stories at once. Near
								the Metra station and the downtown dining district, newer
								condo buildings and loft conversions serve commuters who want
								lock-and-leave living - small associations with tight
								operating budgets and owners sensitive to common-area upkeep
								and parking enforcement. West of the tracks, the 1970s and
								1980s complexes around Dunton, Dryden and the Palatine Road
								corridor are older associations working through their second
								roof cycle, original windows and pavement replacements. Both
								need the same thing: honest reserves and a manager who budgets
								for the year the building actually has ahead of it.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What Arlington Heights boards get</h3>
							<ul>
								<li>
									Assessment collections, late notices and vendor bill pay
								</li>
								<li>
									Monthly board reporting, live financials and reserve
									tracking
								</li>
								<li>
									Owner portal, autopay and a searchable document drive
								</li>
								<li>
									24/7 live support with emergency escalation
								</li>
								<li>
									Reserve-first budgets targeting 15-20%+ annual contributions
								</li>
								<li>
									Vendor management for roofing, windows, paving, masonry and
									snow
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Commuters notice the details</h3>
							<p>
								A downtown condo association near the Metra is judged by its
								lobby, sidewalks and garage on the walk from the train -
								and those costs land on every budget. We build maintenance
								calendars around visibility: entries and common areas kept
								clean and current, lights and doors maintained, snow and ice
								handled before the morning train. Small line items, managed
								consistently, are what keep a commuter building's assessments
								stable.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Local coverage from Rosemont</h3>
							<p>
								Arlington Heights is a short drive from our office, so
								walk-throughs, contractor meetings and board sessions happen
								in person. The
								<Link href="/condo-management-chicago"> condo management program </Link>
								and
								<Link href="/association-management-chicago"> association management program </Link>
								cover the full scope, and the
								<Link href="/hoa-management-palatine"> Palatine page </Link>
								shows our work in the neighboring market.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArlingtonHeightsContent;
