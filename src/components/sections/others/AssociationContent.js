import Link from "next/link";

const AssociationContent = () => {
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
								Association Management for{" "}
								<span>Self-Managed Boards.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>Governance support, not a takeover</h3>
							<p>
								Association management works best when it supports the board
								instead of replacing it. We prepare meeting notices, agendas,
								board packets and minutes; we track action items between
								meetings so nothing waits a quarter to resurface; and we keep
								the governing documents, rules and insurance certificates
								organized and accessible. Every decision - budgets, rules
								enforcement, reserves policy - stays with the board.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Reserve-first budgeting and special assessments</h3>
							<p>
								Most boards come to professional management after a surprise
								special assessment or a reserve study that showed a funding
								gap. Our approach is conservative by design: budgets target
								15-20%+ annual reserve contributions, reserve projections are
								modeled honestly, and large projects get planned years ahead
								instead of discovered in a crisis. When a loan or special
								assessment is genuinely necessary, the board gets the numbers
								and options early enough to decide calmly.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>HOA management in Chicago, without the call center</h3>
							<p>
								Search for HOA management companies near me in Chicago and
								most results lead to national firms running call centers
								several states away. A volunteer board with a leaking roof
								needs the opposite: a manager who answers, understands the
								building, and can walk it when it matters. Our association
								management company is based in Rosemont and on-site across
								Chicago and the suburbs - so hoa management here means a
								local person, not a ticket number.
								If your building is a condominium rather than an HOA, the
								<Link href="/condo-management-chicago"> condo management in Chicago </Link>
								page covers the condo-specific side of the same work.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Vendors and seasonal work in Chicago</h3>
							<p>
								Chicago weather runs the maintenance calendar: snow removal
								contracts renewed before the first forecast, gutters cleared
								before fall, roofing and tuckpointing bid in spring, and
								landscaping locked in early enough to keep pricing sane. We
								maintain a vendor bench for each trade, collect certificates of
								insurance, compare bids and supervise the work - so the board
								sees results, not chasing.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>From volunteer-run to professionally managed</h3>
							<p>
								For a board that has been doing everything itself, the
								transition is the scary part. It takes about two weeks:
								records are gathered, the owner roster is verified, bank
								accounts and vendor logins transfer, the portal opens and
								welcome packets go out. At 30 days the board gets a first
								check-in on collections and open items, and from there the
								rhythm is quarterly reporting, annual budget season and
								reserve review - with a real person on call in between.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AssociationContent;
