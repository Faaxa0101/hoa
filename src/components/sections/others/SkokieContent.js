import Link from "next/link";

const SkokieContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location"></i> Skokie, Illinois
							</span>
							<h2 className="sec-title title-anim">
								HOA &amp; Condo Management for{" "}
								<span>Skokie's Building Stock.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>1960s and 70s buildings need a different kind of plan</h3>
							<p>
								Skokie's condo and townhome stock was largely built between
								the late 1950s and the 1980s - brick buildings along Skokie
								Boulevard and Dempster, mid-rise condos off Oakton, and
								townhome rows tucked through the village. Buildings from that
								era are usually solid, but they arrive at management with the
								same list: original windows, galvanized plumbing reaching end
								of life, flat roofs past their warranty, and boilers that need
								a real replacement schedule instead of annual patches. The
								reserve plan has to be honest about that timeline, or the
								board gets a special assessment right when owners can least
								afford it.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What Skokie boards get</h3>
							<ul>
								<li>
									Assessment collections, late notices and vendor bill pay
								</li>
								<li>
									Monthly board reporting and live financials in the portal
								</li>
								<li>
									Document drive for declarations, bylaws, minutes and
									insurance certificates
								</li>
								<li>
									24/7 live support with emergency escalation
								</li>
								<li>
									Reserve-first budgets targeting 15-20%+ annual contributions
								</li>
								<li>
									Vendor coordination for roofs, masonry, boilers and snow
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Code compliance, handled before it becomes a letter</h3>
							<p>
								Skokie enforces property standards closely - violations over
								sidewalks, signage, landscaping or exterior maintenance move
								quickly. Our managers keep a compliance calendar for each
								building: seasonal inspections, documented walk-throughs and
								vendor work orders that resolve items before the village has
								to send anything. Boards see the paper trail, not a surprise
								fine.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Nearby, on-site, and reachable</h3>
							<p>
								Our Rosemont office is a short drive from Skokie, so
								walk-throughs, contractor meetings and board sessions happen
								in person. The
								<Link href="/condo-management-chicago"> condo management program </Link>
								and
								<Link href="/association-management-chicago"> association management program </Link>
								cover the full scope, and the
								<Link href="/hoa-management-evanston"> Evanston page </Link>
								shows how we work with the neighboring building stock.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkokieContent;
