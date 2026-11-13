import ButtonPrimary from "../buttons/ButtonPrimary";

const PricingPlanItems = ({ isYearlyPlan }) => {
	return (
		<>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
					<div className="pricing-header">
						<h3 className="package-name">HOA Help</h3>
						<div className="package-desc">
							<p>Free financial &amp; issues review</p>
						</div>
						<div className="package-price">
							<span className="price-number">Free</span>
						</div>
						<div className="pricing-btn">
							<ButtonPrimary
								text={"Get Free Review"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>Review of your financials &amp;
								issues
							</li>
							<li>
								<i className="tji-list"></i>Step-by-step plan to the “Promised
								Land”
							</li>
							<li>
								<i className="tji-list"></i>Tools, resources &amp; contacts
								(free or paid)
							</li>
							<li>
								<i className="tji-list"></i>Do each step yourself - or hire us
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".6s">
					<div className="pricing-header">
						<h3 className="package-name">Basic Financials</h3>
						<div className="package-desc">
							<p>Essential day-to-day management</p>
						</div>
						<div className="package-price">
							<span className="price-number">Custom</span>
							<span className="package-period">quote</span>
						</div>
						<div className="pricing-btn">
							<ButtonPrimary
								text={"Book Now"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>Assessments &amp; bill pay
							</li>
							<li>
								<i className="tji-list"></i>Real-time financials
							</li>
							<li>
								<i className="tji-list"></i>Owner web portal
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box active wow fadeInUp" data-wow-delay=".7s">
					<div className="pricing-header">
						<h3 className="package-name">Always Here</h3>
						<div className="package-desc">
							<p>Most Popular - always available</p>
						</div>
						<div className="package-price">
							<span className="price-number">Custom</span>
							<span className="package-period">quote</span>
						</div>
						<div className="pricing-btn">
							<ButtonPrimary
								text={"Book Now"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>Everything in Basic
							</li>
							<li>
								<i className="tji-list"></i>24/7 live availability
							</li>
							<li>
								<i className="tji-list"></i>Emergency response
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".8s">
					<div className="pricing-header">
						<h3 className="package-name">Dedicated Management</h3>
						<div className="package-desc">
							<p>Your own HOA manager</p>
						</div>
						<div className="package-price">
							<span className="price-number">Custom</span>
							<span className="package-period">quote</span>
						</div>
						<div className="pricing-btn">
							<ButtonPrimary
								text={"Book Now"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>Dedicated HOA manager
							</li>
							<li>
								<i className="tji-list"></i>Quarterly board meetings
							</li>
							<li>
								<i className="tji-list"></i>Capital project support
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".9s">
					<div className="pricing-header">
						<h3 className="package-name">“Never Special”</h3>
						<div className="package-desc">
							<p>Add-on reserve protection</p>
						</div>
						<div className="package-price">
							<span className="price-number">Ask</span>
							<span className="package-period">about our offer</span>
						</div>
						<div className="pricing-btn">
							<ButtonPrimary
								text={"Book Now"}
								url={"https://calendly.com/mike-mkzmanagement/30min"}
								isTextBtn={true}
							/>
						</div>
					</div>
					<div className="list-items">
						<ul>
							<li>
								<i className="tji-list"></i>Aggressive reserve policy
							</li>
							<li>
								<i className="tji-list"></i>Loan assistance if needed
							</li>
							<li>
								<i className="tji-list"></i>As-needed walk-throughs
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingPlanItems;
