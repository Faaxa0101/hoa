import Link from "next/link";

const tocItems = [
	{ id: "hoa-vs-condo", label: "HOA vs condo association in Illinois" },
	{ id: "what-included", label: "What association management includes" },
	{ id: "models", label: "Self-managed, hybrid, or full management" },
	{ id: "costs", label: "What management costs and how boards budget" },
	{ id: "choose", label: "How to choose a management company" },
	{ id: "transition", label: "Switching managers without chaos" },
	{ id: "buildings", label: "Chicago buildings are not all the same" },
	{ id: "reserves", label: "Reserve studies and special assessments" },
];

const BoardGuideContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> The Complete Guide
							</span>
							<h2 className="sec-title title-anim">
								What Every Chicago Board Member Should Know{" "}
								<span>About Management.</span>
							</h2>
							<p className="desc wow fadeInUp" data-wow-delay=".4s">
								Written for volunteer condo and HOA boards in Chicago and
								Illinois - what management covers, what it costs, how to choose
								a company, and how to switch without interrupting collections
								or services.
							</p>
						</div>

						<nav className="guide-toc" aria-label="Table of contents">
							<h3>In this guide</h3>
							<ol>
								{tocItems.map((item) => (
									<li key={item.id}>
										<a href={`#${item.id}`}>{item.label}</a>
									</li>
								))}
							</ol>
						</nav>

						<div className="condo-content-block">
							<p>
								Serving on a condo or HOA board is a volunteer job that quietly
								carries the financial health of an entire building. Most board
								members inherit the role with no training: one day you are an
								owner, the next you are approving budgets, chasing late
								assessments, negotiating a roof bid and explaining a reserve
								shortfall at a 7 p.m. meeting.
							</p>
							<p>
								Professional management exists to carry the administrative half
								of that job so the board can focus on decisions. But management
								comes in very different shapes - from a bookkeeper who sends
								monthly statements to a full-service company that answers owner
								calls at 2 a.m. This guide explains the differences in plain
								language, with Illinois specifics, so your board can choose
								deliberately instead of by default.
							</p>
						</div>

						<figure className="guide-figure">
							<img
								src="/images/guides/hoa-management-chicago-buildings-dusk.webp"
								width="1200"
								height="800"
								alt="Brick Chicago courtyard condo building at dusk with a high-rise behind it - the range of buildings HOA.Help manages."
								loading="lazy"
								decoding="async"
							/>
							<figcaption>
								Chicago board service spans every building type - from vintage
								courtyard walk-ups to lakefront high-rises - and each one
								carries a different management load.
							</figcaption>
						</figure>

						<div className="condo-content-block" id="hoa-vs-condo">
							<h3>1. HOA vs condo association in Illinois</h3>
							<p>
								Both are common-interest communities, but the legal structure
								differs - and that structure shapes what management can and
								cannot do.
							</p>
							<div className="guide-table-wrap">
								<table className="guide-table">
									<thead>
										<tr>
											<th></th>
											<th>Condo association</th>
											<th>HOA / homeowners association</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Governing law and documents</td>
											<td>
												Illinois Condominium Property Act plus the
												declaration and bylaws
											</td>
											<td>Covenants, conditions and restrictions (CC&amp;Rs) plus bylaws</td>
										</tr>
										<tr>
											<td>What owners own</td>
											<td>
												The unit interior; common elements are owned
												collectively
											</td>
											<td>
												The lot and structure, with shared amenities and
												common areas
											</td>
										</tr>
										<tr>
											<td>Typical Chicago examples</td>
											<td>
												Lakefront high-rises, courtyard buildings, converted
												walk-ups
											</td>
											<td>Townhome communities, suburban subdivisions</td>
										</tr>
										<tr>
											<td>Board focus</td>
											<td>
												Elevators, masonry, roofs, common utilities, reserve
												funding
											</td>
											<td>
												Landscaping, snow, private drives, rules enforcement
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p>
								Why it matters for management: reporting, reserve planning and
								enforcement all follow the governing documents. A manager who
								applies one template to both building types is guessing - ask
								any company you interview to explain how they handle your
								specific structure. More detail lives on our
								<Link href="/condo-management-chicago"> condo management </Link>
								and
								<Link href="/association-management-chicago"> association management </Link>
								pages.
							</p>
						</div>

						<div className="condo-content-block" id="what-included">
							<h3>2. What association management actually includes</h3>
							<p>
								"Full-service management" is a phrase, not a scope. The work
								breaks down into eight functions - compare any proposal
								against this list:
							</p>
							<ul>
								<li>
									<strong>Assessment collections and bill pay</strong> -
									billing every owner on schedule, applying payments, chasing
									delinquencies through a documented ladder, paying approved
									vendor invoices
								</li>
								<li>
									<strong>Financial reporting</strong> - monthly
									income-and-expense against budget, balance sheet, reserve
									activity and delinquency - readable at a board meeting
								</li>
								<li>
									<strong>Reserve tracking</strong> - reserve funds kept
									separate from operating cash, with board-approved draws and
									documentation
								</li>
								<li>
									<strong>The document drive</strong> - declarations, bylaws,
									minutes, insurance certificates and vendor contracts in a
									searchable virtual drive
								</li>
								<li>
									<strong>Owner portal and requests</strong> - balances,
									autopay, documents and a tracked request queue instead of a
									manager's inbox
								</li>
								<li>
									<strong>Vendor coordination</strong> - a local bench per
									trade, certificates of insurance, competitive bids and
									supervision
								</li>
								<li>
									<strong>Board support</strong> - meeting packets, agendas,
									minutes, action-item tracking and annual budget preparation
								</li>
								<li>
									<strong>Availability</strong> - defined response commitments,
									24/7 support and emergency escalation
								</li>
							</ul>
							<p>
								Our
								<Link href="/services/hoa-accounting"> HOA accounting services </Link>
								page covers the financial half in depth, and
								<Link href="/services/self-managed-hoa-support"> self-managed HOA support </Link>
								explains the hybrid model where the board keeps more of the
								work.
							</p>
						</div>

						<div className="condo-content-block" id="models">
							<h3>3. Self-managed, hybrid, or full management - the real decision</h3>
							<p>
								Three working models exist, and the right one depends on the
								building, not on ideology:
							</p>
							<ul>
								<li>
									<strong>Self-managed</strong> - the board does the work.
									Works for small associations with an organized treasurer and a
									simple building - until the treasurer moves away or the
									paperwork drifts.
								</li>
								<li>
									<strong>Hybrid</strong> - the board keeps every decision
									while a company handles collections, financials, documents,
									owner requests and vendors. The middle path most boards
									actually want.
								</li>
								<li>
									<strong>Full management</strong> - a manager runs the
									day-to-day operation with the board approving budgets, rules
									and projects. Sensible for larger buildings with staff,
									elevators or complex systems.
								</li>
							</ul>
							<p>
								Warning signs that self-management has outgrown itself: minutes
								not approved for months, delinquency discovered late, a
								treasurer doing books at 11 p.m., vendors chosen without bids,
								and a reserve study nobody can find. Any two of those is
								usually the point to price a hybrid model.
							</p>
						</div>

						<div className="condo-content-block" id="costs">
							<h3>4. What management costs and how boards budget</h3>
							<p>
								Chicago management generally uses one of two pricing shapes: a
								flat monthly fee for smaller associations, or a per-unit fee
								for larger buildings. The spread comes from four variables -
								unit count, service level, building age and complexity, and how
								much history comes with the association. Clean records are
								cheaper to manage than five years of reconstruction.
							</p>
							<p>
								Two budget habits matter more than the management fee itself:
								reserve contributions targeting 15-20% of the operating budget,
								and strict expense control so special assessments stay rare. A
								management fee that looks cheap while a failing roof goes
								unfunded is not saving anything - it is borrowing from owners
								at the worst possible interest rate.
							</p>
							<p>
								Our
								<Link href="/hoa-management-cost-chicago"> Chicago HOA management cost guide </Link>
								explains market ranges, what changes a quote and the contract
								clauses to watch.
							</p>
						</div>

						<div className="condo-content-block" id="choose">
							<h3>5. How to choose a management company in Chicago</h3>
							<p>
								Ask every candidate the same ten questions - and compare the
								answers, not the sales pitch:
							</p>
							<ol className="guide-numbered">
								<li>Who selects vendors, and what is the minimum number of bids above a defined threshold?</li>
								<li>How are related-party relationships and vendor referrals disclosed?</li>
								<li>What reserve funding target does the proposed budget apply, and how is it calculated?</li>
								<li>Can reserve funds move without a board vote, and who signs?</li>
								<li>What reporting arrives monthly, in what format, by which date?</li>
								<li>What is the response commitment for owner requests, and how is it tracked?</li>
								<li>Who answers at 2 a.m., and what counts as an emergency?</li>
								<li>How is the transition handled - records, bank accounts, vendor logins, portal?</li>
								<li>What does the agreement say about termination, notice and renewal?</li>
								<li>Which specific buildings in our area does the firm manage today?</li>
							</ol>
							<p>
								Red flags that repeat in this market: the same vendors winning
								year after year with no-bid "emergency" work, invoices that do
								not match contracts, reserve contributions held flat while
								vendor spend climbs, and financial reports that cannot be
								audited line by line. If the answers are vague, the vagueness
								is the answer.
							</p>
						</div>

						<div className="condo-content-block" id="transition">
							<h3>6. Switching managers without chaos</h3>
							<p>
								A well-run transition takes about two weeks and does not
								interrupt collections or bill pay:
							</p>
							<ol className="guide-numbered">
								<li>
									<strong>Week one</strong> - records and bank accounts
									transfer, the owner roster is verified, vendors and utility
									providers are notified, software and portal are set up
								</li>
								<li>
									<strong>Week two</strong> - collections and AP go live, the
									document drive is populated, welcome packets go out, the board
									is trained
								</li>
								<li>
									<strong>Day 30</strong> - first check-in on collections and
									open items, then the quarterly reporting rhythm begins
								</li>
							</ol>
							<p>
								Read the termination clause before signing with anyone: notice
								period, record transfer, and who controls the portal and the
								bank accounts. A management agreement the board cannot exit
								cleanly is a red flag by itself. The full sequence is in our
								guide to
								<Link href="/how-to-switch-hoa-management-chicago"> switching HOA management companies in Chicago </Link>.
								Questions about a specific transition: <Link href="/contact">talk to us</Link> - the call
								is free.
							</p>
						</div>

						<div className="condo-content-block" id="buildings">
							<h3>7. Chicago buildings are not all the same</h3>
							<p>
								Management realities change block by block. The main types, and
								what each one actually needs:
							</p>
							<ul>
								<li>
									<strong>High-rises</strong> - elevator maintenance contracts,
									garage operations, common-area utilities, fire-life-safety
									inspections and a reserve plan that can absorb a mechanical
									failure
								</li>
								<li>
									<strong>Vintage walk-ups and courtyard buildings</strong> -
									masonry and tuckpointing cycles, radiator and plumbing
									systems, original windows - the reserve study matters more
									than the fee
								</li>
								<li>
									<strong>Townhome and suburban HOA communities</strong> -
									landscaping and snow contracts, private drives, roofing and
									siding cycles, and consistent rules enforcement
								</li>
							</ul>
							<p>
								We work across these markets: see
								<Link href="/hoa-management-evanston"> Evanston </Link>,
								<Link href="/hoa-management-skokie"> Skokie </Link>,
								<Link href="/hoa-management-schaumburg"> Schaumburg </Link>,{" "}
								<Link href="/hoa-management-arlington-heights">
									Arlington Heights{" "}
								</Link>
								and
								<Link href="/hoa-management-palatine"> Palatine </Link>
								for the local building stock in each.
							</p>
						</div>

						<div className="condo-content-block" id="reserves">
							<h3>8. Reserve studies and special assessments explained</h3>
							<p>
								A reserve study inventories the building's major components -
								roof, masonry, mechanicals, paving - assigns remaining useful
								life and replacement cost, and models how much the association
								should fund each year. It is the difference between planning a
								roof replacement and discovering one.
							</p>
							<p>
								When reserves are underfunded, the gap becomes a special
								assessment: a one-time charge to owners, due in a lump sum or
								short payment plan. The board did not create the failing roof -
								but the funding gap is why a building event becomes a personal
								financial event for every owner. We explain both in detail:
								<Link href="/special-assessments-hoa-illinois"> how special assessments work in Illinois </Link>
								and
								<Link href="/hoa-reserve-study-illinois"> what a reserve study contains and how boards use it </Link>.
								For how these numbers fit the budget, read our
								<Link href="/hoa-management-cost-chicago"> cost guide </Link>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BoardGuideContent;
