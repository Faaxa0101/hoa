import Link from "next/link";

const CostArticleContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-chart"></i> Pricing Guide
							</span>
							<h2 className="sec-title title-anim">
								What Does HOA Management Cost{" "}
								<span>in Chicago?</span>
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay=".4s">
								Published prices, real ranges, and the questions to ask
								before signing anything.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>The short answer</h3>
							<p>
								HOA and condo management in Chicago typically runs on one of
								two models: a flat monthly fee for small associations (often
								$250-$600/month depending on services), or a per-unit fee for
								larger buildings (commonly $15-$35/unit/month, scaled by
								service level). On top of either model, expect add-ons for
								emergency coverage, capital project management and
								collections beyond routine notices. Anyone who quotes you a
								single number without asking about units, building age and
								services is guessing.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>How HOA.Help pricing works</h3>
							<p>
								Every association starts with a free financial and issues
								review, then receives a written quote based on units,
								services and the building's condition. The quote lists
								exactly what is handled - collections, financials, the owner
								portal, documents, owner requests and vendor coordination -
								with no add-on fees and no auto-renewal traps. Options range
								from financials-only administration to full management with
								24/7 availability and a dedicated manager; the board decides
								how far to go.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What changes the price</h3>
							<p>
								Four things move a quote more than anything else: the number
								of units, the level of service (financials only versus
								round-the-clock support), the age and complexity of the
								building (elevators, garages, boilers and older masonry all
								add vendor management time), and how much history comes with
								the association - a clean set of records is cheaper to manage
								than five years of reconstructing.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What to watch for in a management contract</h3>
							<ul>
								<li>
									Add-on fees: administration charges, portal fees, "extra"
									notice fees and markups on vendor invoices
								</li>
								<li>
									Auto-renewal terms that lock the board in without an
									approval vote
								</li>
								<li>
									Termination clauses - know the notice period and whether
									records transfer cleanly
								</li>
								<li>
									Reserve fund handling: who reconciles it, who can sign, and
									what reporting the board receives
								</li>
								<li>
									Response commitments stated in hours, not phrases like
									"promptly"
								</li>
							</ul>
						</div>

						<div className="condo-content-block">
							<h3>DIY, bookkeeper, or full management</h3>
							<p>
								A board can absolutely self-manage a 6-unit walk-up - until
								the treasurer moves away. A part-time bookkeeper can keep the
								books - but not chase delinquencies, answer owners or manage
								vendors. Full management makes sense when the building has
								staff, elevators, or a board that wants the work off its
								plate entirely. Most associations land in the middle: they
								want the administrative work handled and the decisions kept.
								Our
								<Link href="/services/self-managed-hoa-support"> self-managed HOA support </Link>
								and
								<Link href="/services/hoa-accounting"> HOA accounting services </Link>
								are built for exactly that middle.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CostArticleContent;
