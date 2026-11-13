import Link from "next/link";

const AccountingContent = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="sec-heading style-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-chart"></i> HOA Accounting
							</span>
							<h2 className="sec-title title-anim">
								HOA Accounting &amp; Bookkeeping{" "}
								<span>That Boards Can Actually Read.</span>
							</h2>
						</div>

						<div className="condo-content-block">
							<h3>What HOA accounting actually includes</h3>
							<p>
								Association accounting is not household bookkeeping with a
								bigger checkbook. It means billing assessments to every owner
								on schedule, applying payments to the right unit, chasing
								delinquencies consistently, paying vendors against approved
								budgets, reconciling the bank accounts every month, and
								producing statements the board can defend at a meeting:
								income and expense against budget, balance sheet, reserve
								balances and a delinquency report. We also prepare the
								year-end package your CPA needs for the audit or review and
								the association's tax return - organized, reconciled and on
								time.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Reserve funds are not a checking account</h3>
							<p>
								Reserve money belongs to the association's future, and
								accounting has to protect that boundary. We track reserve
								balances and reserve spending separately from operating
								funds, reconcile reserve accounts monthly, and report reserve
								transactions to the board with the documentation behind them.
								When a capital project finally happens, the paper trail
								already exists.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Late assessments and the collections ladder</h3>
							<p>
								Most associations lose more money to slow collections than to
								bad vendors. Our process runs one ladder for every owner:
								statement, reminder, late notice with the fine schedule the
								board approved, payment plan where appropriate, then
								board-authorized escalation. Every step is dated and visible
								to the board, so enforcement is consistent rather than
								personal - and the ledger stays clean for the year-end
								review. Boards see the delinquency report monthly, with
								status per unit, so nothing quietly ages past 90 days.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Built for board meetings, not shoeboxes</h3>
							<p>
								Every report we produce is formatted for the way boards
								actually work: one page that answers "where do we stand
								against budget" before the meeting starts, month-over-month
								trends, and a delinquency list with collection status per
								unit. Owners see their own balance and payment history in the
								portal, which cuts the "what do I owe?" calls that usually
								land on the treasurer.
							</p>
						</div>

						<div className="condo-content-block">
							<h3>Bookkeeping alone, or the full program</h3>
							<p>
								Some boards only need the financial side handled - that's our
								Basic Financials tier. Others want accounting
								plus 24/7 support and vendor coordination, which is the
								Always Here tier. If your building also needs day-to-day
								management, the
								<Link href="/condo-management-chicago"> condo management program </Link>
								and
								<Link href="/association-management-chicago"> association management program </Link>
								cover the full scope.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AccountingContent;
