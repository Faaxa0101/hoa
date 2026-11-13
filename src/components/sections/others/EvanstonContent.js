import Link from "next/link";

const EvanstonContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location"></i> Evanston, Illinois
							</span>
							<h2 className="sec-title title-anim">
								Local HOA &amp; Condo Management,{" "}
								<span>Minutes from Rosemont.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>Evanston buildings are their own story</h3>
							<p>
								Evanston's housing stock mixes lakefront high-rises along
								Sheridan Road, 1920s walk-ups converted to condos around
								downtown and the Main-Dempster Mile, and townhome
								associations tucked off Central Street and Green Bay Road.
								Each type carries its own management reality: lakefront
								buildings fight wind-driven rain and salt air on masonry and
								windows; vintage walk-ups carry plumbing and radiator systems
								that need real reserve planning; townhome HOAs wrestle with
								landscaping contracts and shared driveway maintenance. We
								walk the building, read the governing documents, and price
								management against what the property actually needs.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What Evanston boards get</h3>
							<ul>
								<li>
									Assessment collections, late notices and vendor bill pay
								</li>
								<li>
									Real-time financials and board-ready monthly reporting
								</li>
								<li>
									Owner portal and document drive for declarations, bylaws
									and minutes
								</li>
								<li>
									24/7 live support - call, text or email, with emergency
									escalation
								</li>
								<li>
									Reserve-first budgets targeting 15-20%+ annual contributions
								</li>
								<li>
									Local vendor bench for snow, roofing, tuckpointing and
									landscaping
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Close enough to walk the property</h3>
							<p>
								HOA and condo management works better when the manager can
								actually get to the building. Our office in Rosemont is a
								short drive from Evanston - close enough for regular
								walk-throughs, contractor supervision and board meetings that
								do not have to happen over video. That proximity is also why
								our vendor relationships in Evanston are with people who show
								up: the same roofers, masons and snow crews we use across
								Chicago's north side.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Managing Evanston condos and HOAs</h3>
							<p>
								Whether your association sits near Northwestern, along the
								lakefront or west of Ridge Avenue, the
								<Link href="/condo-management-chicago"> condo management program </Link>
								and
								<Link href="/association-management-chicago"> association management program </Link>
								cover the full scope - collections, financials, the owner
								portal, reserve planning and vendors - with the board keeping
								every decision.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EvanstonContent;
