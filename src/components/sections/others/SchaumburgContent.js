import Link from "next/link";

const SchaumburgContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location"></i> Schaumburg, Illinois
							</span>
							<h2 className="sec-title title-anim">
								Association Management for{" "}
								<span>Schaumburg Townhomes &amp; Condos.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>Townhome associations built for community living</h3>
							<p>
								Schaumburg's association stock grew with the boom years -
								rows of townhomes and low-rise condos built from the mid-1970s
								through the 1990s around Woodfield, Weathersfield and the
								Golf Road corridor. Those communities share a management
								profile: large landscaping contracts, roofing and siding
								cycles that hit every building at once, snow removal across
								long private drives, and rules enforcement that keeps a
								200-unit association livable. The math only works when the
								reserve study is current and the assessment history matches it.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What Schaumburg boards get</h3>
							<ul>
								<li>
									Assessment collections and vendor bill pay for
									multi-building associations
								</li>
								<li>
									Board-ready financials with reserve tracking per asset
									class
								</li>
								<li>
									Owner portal, autopay and document drive for rules,
									minutes and contracts
								</li>
								<li>
									24/7 live support for owners and emergency escalation
								</li>
								<li>
									Reserve-first budgets and long-range roofing, siding and
									paving plans
								</li>
								<li>
									Vendor management for landscaping, snow, roofing and
									asphalt
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Rules enforcement without the friction</h3>
							<p>
								Large townhome associations live or die on consistent
								enforcement of parking, pets, landscaping and exterior
								changes. We run the process the same way every time -
								documented notices, appeal windows, board-approved penalties -
								so owners see a system instead of a manager's mood. The board
								sets policy; we execute it consistently and keep the record.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Serving Schaumburg from Rosemont</h3>
							<p>
								Schaumburg is a straight run up the tollway from our office,
								so walk-throughs, vendor supervision and board meetings are
								in person. The
								<Link href="/condo-management-chicago"> condo management program </Link>,
								<Link href="/association-management-chicago"> association management program </Link>
								and neighboring
								<Link href="/hoa-management-palatine"> Palatine page </Link>
								show the full scope for northwest suburban associations.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SchaumburgContent;
