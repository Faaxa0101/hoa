"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: 1,
			title: "Free Intro Call - Week 0 (30 min)",
			desc: "Talk through your issues, get practical next steps, and decide if we're a fit - no pressure. The call is completely free, no strings attached.",
		},
		{
			id: 2,
			title: "Setup & Docs - Week 1",
			desc: "Software and owner portals enabled, owner roster and vendor logins collected, welcome packets sent and the board trained.",
		},
		{
			id: 3,
			title: "Go-Live & Monitor - Week 2",
			desc: "Collections, accounts payable and reporting start, followed by a first 30-day check-in and a quarterly board cadence.",
		},
	];
	return (
		<section id="how" className="tj-working-process section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Process
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										A two-week onboarding that <span>respects your time.</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									From inquiry to live operations in about 14 days.
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={"Book a Free 30-min Call"}
										url={"https://calendly.com/mike-mkzmanagement/30min"}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Process;
