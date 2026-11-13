import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "24/7 Live Support",
			desc: "Call, text, or email - a real person responds and drives resolution within 24-48 hours.",
			icon: "tji-support",
		},
		{
			title: "Reserve-Focused Budgets",
			desc: "Conservative budgets targeting 15-20%+ annual reserve contributions.",
			icon: "tji-growth",
		},
		{
			title: "Never Special Mindset",
			desc: "Tight financial controls and predictive maintenance to avoid surprise special assessments.",
			icon: "tji-innovative",
		},
		{
			title: "Transparent Portal",
			desc: "Owners access docs, balances, and autopay in one place.",
			icon: "tji-box",
		},
	];

	return (
		<section id="benefits" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Benefits
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											Effortless management. Effective{" "}
											<span>communication.</span>
										</h2>
									</div>
								</div>
							</div>
						) : (
						<div className="sec-heading text-center">
							<span
								className="section-logo-mark wow fadeInUp"
								data-wow-delay=".2s"
							>
								<img
									src="/images/logos/hoa-help-logo-sm.webp"
									alt="HOA.Help"
									width={126}
									height={72}
								/>
							</span>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Benefits
							</span>
								<h2 className="sec-title title-anim">
									Effortless management. Effective <span>communication.</span>
								</h2>
								<p
									className="desc wow fadeInUp"
									data-wow-delay=".4s"
									style={{ marginTop: 10 }}
								>
									Always available. Reserve-first budgeting. No surprises.
								</p>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-xl-3 col-md-6">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
