import Link from "next/link";

const CondoContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>The Details
							</span>
							<h2 className="sec-title title-anim">
								Full-Service Condo Management, Built for{" "}
								<span>Self-Managed Boards.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>What your board keeps</h3>
							<p>
								Every decision. Budget approval, reserve policy, special
								assessments, rules enforcement and capital projects all stay in
								the board's hands - we prepare the numbers, the bids and the
								options, and the board decides. Management should make the work
								lighter, never take the building out of the board's control.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What we take off your plate</h3>
							<p>
								The repetitive work that burns volunteer boards out:
							</p>
							<ul>
								<li>
									Assessment collections, late notices and vendor bill pay
								</li>
								<li>
									Monthly financial reporting and year-end accountant
									coordination
								</li>
								<li>
									The document drive - declarations, bylaws, minutes, insurance
									certificates
								</li>
								<li>
									Owner requests and issue handling, with a tracked queue and
									response times
								</li>
								<li>
									Vendor scheduling and supervision - elevators, roofing, snow,
									landscaping
								</li>
								<li>
									24/7 live support with emergency escalation paths
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>Condo property management, done from the board's side of the table</h3>
							<p>
								Most condo property management arrangements in Chicago are
								written for the manager's convenience - the board gets a
								monthly packet and a phone number that rings an office. Ours
								is built the other way around: your manager answers directly,
								reporting is formatted for board meetings, and the documents
								behind every decision stay in a drive the board controls.
								If your building is an HOA or townhome association rather
								than a condo, the
								<Link href="/association-management-chicago"> association management program </Link>
								covers the same operations with HOA-specific governance
								support.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Chicago buildings are not all the same</h3>
							<p>
								A six-flat in Lincoln Square and a 60-unit high-rise near the
								lakefront have different math. High-rise boards deal with
								elevator maintenance contracts, garage operations and
								common-area utilities; walk-ups tend to be older masonry
								buildings where roofs, tuckpointing and plumbing reserves
								matter more. We review the building's actual condition and
								governing documents before quoting anything, and the reserve
								plan reflects the building in front of us - not a template.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Changing managers? The first 90 days</h3>
							<p>
								Transitioning from another manager or from volunteer
								self-management takes about two weeks to go live: records and
								bank accounts transfer, vendors are notified, the owner roster
								is verified and the portal opens. At 30 days the board gets a
								first check-in on collections and open items; from there the
								cadence is quarterly board reporting, annual budget season and
								reserve review - with the manager on call in between.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CondoContent;
