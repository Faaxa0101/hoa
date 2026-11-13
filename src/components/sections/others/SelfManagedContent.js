import Link from "next/link";

const SelfManagedContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-support"></i> Self-Managed HOA
							</span>
							<h2 className="sec-title title-anim">
								Help for Self-Managed Associations,{" "}
								<span>Without Giving Up Control.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>The hybrid model: your board stays in charge</h3>
							<p>
								Self-managed associations usually stall for one of two
								reasons: the board burns out, or the record-keeping drifts
								until nobody can reconstruct what happened. The fix is not
								necessarily handing the building to a full management company
								- it is taking the repetitive work off volunteers while the
								board keeps every decision. That is the model we built:
								collections, financials, documents, owner requests and vendor
								coordination handled professionally, with the board still
								approving budgets, rules and projects.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What changes in week one</h3>
							<ul>
								<li>
									Every owner gets a portal login: balance, payment history,
									autopay, documents
								</li>
								<li>
									Assessments, late notices and receipts follow one documented
									process
								</li>
								<li>
									Vendor bills arrive to us, not to the treasurer's inbox
								</li>
								<li>
									The document drive fills with declarations, bylaws, minutes
									and contracts
								</li>
								<li>
									A real person answers owner calls and tracks every request
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>The records a volunteer board never gets to</h3>
							<p>
								Self-managed associations usually have the paperwork - it is
								just spread across a treasurer's laptop, a former president's
								email and a filing cabinet nobody can open. We consolidate
								the file: declarations and bylaws, insurance certificates
								with expiration dates, vendor contracts, meeting minutes and
								the last reserve study, indexed and searchable in the drive.
								When a buyer's attorney sends a questionnaire or an insurer
								asks for a loss run, the answer takes minutes instead of a
								weekend.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Who this fits</h3>
							<p>
								Small walk-ups and courtyard buildings where the board wants
								to keep hands on the building but stop doing paperwork at
								11 p.m.; associations where a volunteer treasurer has carried
								the books for years and the next volunteer does not exist;
								and newly formed associations that need the systems in place
								before the first problem arrives. If the building later wants
								full management, the same team and systems scale into the
								<Link href="/hoa-management-skokie"> Skokie </Link>,
								<Link href="/hoa-management-evanston"> Evanston </Link>
								or broader
								<Link href="/association-management-chicago"> Chicago association management </Link>
								program without a re-onboarding.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What it costs</h3>
							<p>
								Pricing is set after the free review and quoted in writing -
								a flat monthly scope for small associations, or per-unit for
								larger buildings. The quote lists exactly what is handled:
								collections, financials, the portal, documents, owner
								requests and vendors. No add-on fees, no auto-renewal traps,
								and an honest recommendation on which tier the building
								actually needs.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelfManagedContent;
