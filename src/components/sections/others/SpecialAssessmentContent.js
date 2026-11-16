import Link from "next/link";

const SpecialAssessmentContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Plain Answers
							</span>
							<h2 className="sec-title title-anim">
								The Bill Nobody <span>Budgets For.</span>
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay=".4s">
								What a special assessment is, how Illinois boards approve one,
								how the amount is calculated and what owners and boards can do
								about it.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What a special assessment is</h3>
							<p>
								A special assessment is a one-time charge to owners, above
								their regular monthly assessments, used to fund something the
								operating budget and reserves cannot cover. It is not a fee
								for a service and it is not a fine - it is the association
								asking owners for money to pay a specific cost.
							</p>
							<p>
								The usual triggers are a capital project (roof replacement,
								masonry and facade work, plumbing risers, elevator
								modernization), an emergency repair, a shortfall created by
								underfunded reserves, or an insurance gap after a loss. A full
								roof replacement on a mid-size Chicago building is a major
								capital project - and the portion reserves do not cover is
								what becomes the special assessment.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Why they happen more often than they should</h3>
							<p>
								Special assessments are sometimes unavoidable - a garage
								ceiling collapses, a boiler fails in January, a facade
								inspection finds unsafe masonry. But most of the ones boards
								face are funding problems wearing an emergency costume:
							</p>
							<ul>
								<li>
									<strong>Reserves funded too low for too long</strong> -
									contributions held at 5-8% of the operating budget instead
									of the 15-20% reserve studies typically recommend
								</li>
								<li>
									<strong>No current reserve study</strong> - so nobody knows
									what the roof, boiler or elevators will cost or when
								</li>
								<li>
									<strong>Deferred maintenance</strong> - small repairs skipped
									until the system fails entirely
								</li>
								<li>
									<strong>Vendor spend that outran the budget</strong> -
									inflated or no-bid work quietly draining the reserve account
								</li>
							</ul>
							<p>
								The pattern matters: an association that special-assesses
								once for a genuine surprise is unlucky. An association that
								special-assesses every few years is underfunded by design, and
								the board should say so plainly.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>How the board approves one in Illinois</h3>
							<p>
								The board approves a special assessment by board vote, under
								the authority in the declaration and bylaws - but the
								mechanics matter:
							</p>
							<ol className="guide-numbered">
								<li>
									Check the declaration for any owner-approval threshold. Some
									documents require a membership vote for assessments above a
									set amount or percentage.
								</li>
								<li>
									Put it on a properly noticed board agenda, with the project,
									the bids and the funding gap in the packet.
								</li>
								<li>
									Vote, and record the amount, the purpose, the payment terms
									and the reasons in the minutes.
								</li>
								<li>
									Notify owners in writing with the amount, due date, payment
									options and who to contact with questions.
								</li>
							</ol>
							<p>
								This is general practice, not legal advice - for a large
								assessment, have association counsel review the notice and
								the authority before it goes out.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>How the amount is calculated</h3>
							<p>
								The math is simpler than it looks. Take the total project
								cost, including engineering, permits and a contingency, and
								subtract what the reserves can actually cover. The gap is the
								amount to be assessed. It is then allocated to owners
								according to their percentage interest in the common elements
								- which usually tracks unit size, not an equal split per unit.
							</p>
							<p>
								Example: a roof project where reserves cover 40% of the cost
								leaves 60% to be assessed. In a 40-unit building where units
								carry roughly equal interest, that works out to about 1.5% of
								the project cost per unit - the kind of number that lands as a
								real financial event for a household.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Payment options boards should offer</h3>
							<p>
								A lump-sum demand is the fastest way to turn a repair into a
								delinquency problem. Most boards offer a payment plan:
								</p>
							<ul>
								<li>
									<strong>Lump sum</strong> - with a discount or priority
									credit where the documents allow
								</li>
								<li>
									<strong>Installments</strong> - spread over a defined number
									of months, with the schedule written down
								</li>
								<li>
									<strong>A hardship policy</strong> - a documented path for
									owners who genuinely cannot pay on the standard schedule,
									applied consistently
								</li>
							</ul>
							<p>
								Whatever the plan, the association needs a written policy and
								consistent enforcement - selective leniency is how boards get
								sued and how collections collapse.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What owners can do when a special assessment lands</h3>
							<p>
								Owners have more leverage than they think, mostly before the
								vote: read the board packet, ask for the bids, ask what the
								reserve study projected for this component and when, and ask
								whether the funding gap was foreseeable. After the vote, ask
								for the payment terms in writing and get the plan on the
								record. If the assessment is large, a group of owners can
								request a meeting with the board - and in some declarations,
								enough owner signatures can force a vote on alternative
								funding.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>How to avoid the next one</h3>
							<p>
								There are only three levers, and boards control all of them:
								fund reserves properly (the 15-20% target in the reserve
								study), keep the study current, and control vendor spending
								with documented bids. An association that does those three
								things still faces surprises - but it faces them with money
								already set aside. Our guide to
								<Link href="/hoa-reserve-study-illinois"> HOA reserve studies in Illinois </Link>
								explains what should be in one and when to update it.
							</p>
							<p>
								For how reserves, budgets and management fit together, read
								our
								<Link href="/hoa-management-guide-chicago"> guide to HOA management in Chicago </Link>
								and the
								<Link href="/hoa-management-cost-chicago"> cost guide </Link>.
								If your board is facing a special assessment and wants a
								second opinion on the funding plan,{" "}
								<Link href="/contact">talk to us</Link> - the call is free.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialAssessmentContent;
