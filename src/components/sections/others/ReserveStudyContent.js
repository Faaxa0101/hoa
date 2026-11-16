import Link from "next/link";

const ReserveStudyContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Planning Tool
							</span>
							<h2 className="sec-title title-anim">
								The Plan Behind <span>the Roof.</span>
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay=".4s">
								What a reserve study actually contains, how Illinois boards use
								one, how often to update it and the warning signs that yours is
								out of date.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What a reserve study is</h3>
							<p>
								A reserve study is a planning document for the parts of a
								building that wear out. It inventories the association's
								major components - roof, masonry, windows, mechanicals,
								elevators, paving, lighting - estimates what each will cost to
								repair or replace, projects when that will be needed, and
								calculates how much the association should set aside each year
								to be ready.
							</p>
							<p>
								A study is not an inspection report, a budget or an audit. It is
								the link between the building's condition and the money the
								board collects: the document that turns "the roof will need
								work someday" into a date, a cost range and an annual
								contribution. When the funding falls short anyway, the result is
								covered in our guide to
								<Link href="/special-assessments-hoa-illinois"> special assessments in Illinois </Link>.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>What is inside one</h3>
							<p>
								Most studies contain four parts:
							</p>
							<ul>
								<li>
									<strong>Component inventory</strong> - every major system
									the association is responsible for, with quantity and
									location
								</li>
								<li>
									<strong>Condition and remaining life</strong> - how worn
									each component is and how many years it should last
								</li>
								<li>
									<strong>Cost estimates</strong> - replacement or repair cost
									for each component, usually in today's terms with an
									inflation assumption
								</li>
								<li>
									<strong>Funding analysis</strong> - a 20-30 year cash flow
									model showing contributions, spending and the projected
									reserve balance
								</li>
							</ul>
							<p>
								A good study also states its assumptions plainly - inflation
								rate, interest earned, contingency - so the board can see
								where the numbers came from.
							</p>
							<figure className="guide-figure">
								<img
									src="/images/guides/hoa-reserve-study-rooftop-hvac-chicago.webp"
									width="1200"
									height="800"
									alt="Aging rooftop HVAC units and a low parapet on a Chicago brick condominium, with the downtown skyline behind."
									loading="lazy"
									decoding="async"
								/>
								<figcaption>
									The components a reserve study counts: aging rooftop HVAC,
									membrane patches, parapet and masonry, all on a Chicago
									brick building.
								</figcaption>
							</figure>
						</div>

						<div className="condo-content-block">
							<h3>Why boards need one</h3>
							<p>
								Three reasons, in order of importance:
							</p>
							<p>
								<strong>It prevents special assessments.</strong> An
								association that knows the roof has eight years left can fund
								for it over eight years. An association without a study funds
								whatever the current budget allows and discovers the roof when
								it leaks - which is how a maintenance event becomes a personal
								financial event for every owner.
							</p>
							<p>
								<strong>It is what lenders and buyers look for.</strong> A
								reserve study and a funded reserve account are standard
								questions in a condo sale, and weak answers stall closings or
								reduce prices.
							</p>
							<p>
								<strong>It gives the board a defensible budget.</strong> A
								contribution increase is easier to explain when it maps to a
								projected component replacement instead of a spreadsheet
								shortfall.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Reserve studies and Illinois boards</h3>
							<p>
								Illinois does not require every association statewide to
								commission a reserve study, but many declarations, insurers
								and lenders expect one - and some governing documents require
								periodic updates. Check the declaration and your insurance
								requirements before deciding you do not need one. This is
								general practice, not legal advice; association counsel can
								confirm what applies to your building.
							</p>
							<p>
								The study itself is usually prepared by a reserve study firm
								or qualified consultant who walks the property, counts and
								measures components and runs the funding model. Boards should
								expect a site visit, not a spreadsheet filled in remotely.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>How often to update it</h3>
							<p>
								Two rhythms matter:
							</p>
							<ul>
								<li>
									<strong>Every three to five years</strong> - a full update
									with a fresh site walk, because components age, costs move
									and projects get completed
								</li>
								<li>
									<strong>Every year</strong> - an inflation and project update
									so the funding model reflects the current budget
								</li>
							</ul>
							<p>
								The board should also revisit the study after any major
								project, any special assessment, or any change in the
								building's systems - the plan is only useful if it matches
								the building.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Funding targets and "percent funded"</h3>
							<p>
								Reserve studies typically recommend contributions in the
								range of 15-20% of the annual operating budget, calibrated to
								fully fund projected capital needs over time. The common
								measure is "percent funded" - the reserve balance divided by
								the amount that should be on hand for the components' current
								age. A building at 70% or better is in reasonable shape; below
								30% is usually a sign that the association has been funding
								too little for years.
							</p>
							<p>
								The board does not have to fix a low number in one budget. A
								multi-year plan that raises contributions steadily and
								prioritizes the nearest failing components is better than a
								dramatic increase that owners reject.
							</p>
							<figure className="guide-figure">
								<img
									src="/images/guides/hoa-reserve-funding-chart.png"
									width="880"
									height="440"
									alt="Line chart comparing two reserve funding paths over 20 years against a roof replacement in year 12: funding at 5 to 8 percent never covers more than about a third of the roof cost and drops near zero after replacement, while funding at 15 to 20 percent reaches the full roof cost by year 12."
									loading="lazy"
									decoding="async"
								/>
								<figcaption>
									Illustrative model: two funding paths against the same roof
									replacement in year 12. The underfunded path (5-8% of the
									operating budget) never reaches the project cost, so the gap
									becomes a special assessment. The reserve-first path (15-20%)
									has the full amount on hand before the roof fails.
								</figcaption>
							</figure>
						</div>

						<div className="condo-content-block">
							<h3>How boards actually use it</h3>
							<p>
								A reserve study should sit next to the budget, not in a
								drawer:
							</p>
							<ul>
								<li>Set the reserve contribution line in the annual budget</li>
								<li>Schedule projects by remaining life - not by emergency</li>
								<li>Decide when to get bids, and how much reserve to hold
								before starting</li>
								<li>Explain contribution increases to owners with a document
								instead of a promise</li>
								<li>Give buyers and lenders a straight answer during a sale</li>
							</ul>
							<p>
								Reserve money should also stay separate from operating cash,
								with board approval for every draw - the study assumes the
								funds are actually there when the component fails.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Warning signs your study is out of date</h3>
							<ul>
								<li>No study exists, or nobody can find the last one</li>
								<li>The study is more than five years old and never updated
								for inflation</li>
								<li>Components are missing - no elevator, no garage, no
								masonry line</li>
								<li>Projects completed years ago still appear as future
								spending</li>
								<li>The funding recommendation was never reflected in the
								budget</li>
								<li>The board treats the study as a one-time document instead
								of an annual tool</li>
							</ul>
							<p>
								For how reserves, budgets and management fit together, read
								our
								<Link href="/hoa-management-guide-chicago"> HOA management guide for Chicago boards </Link>.
								If your board wants a second opinion on its reserve position,{" "}
								<Link href="/contact">talk to us</Link> - the call is free.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReserveStudyContent;
