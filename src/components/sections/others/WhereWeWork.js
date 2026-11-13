import FeatureCard from "@/components/shared/cards/FeatureCard";

const WhereWeWork = () => {
	const areas = [
		{
			title: "On-Site in Illinois",
			desc: "On-site service across Northern Illinois and Chicagoland - regular walk-throughs, meetings and vendor supervision.",
			icon: "tji-location",
		},
		{
			title: "Chicago Suburbs & Beyond",
			desc: "From Rosemont and O'Hare to Chicago, the north suburbs - Evanston, Skokie, Schaumburg, Arlington Heights, Palatine, Des Plaines and Park Ridge - and more of Illinois.",
			icon: "tji-location-2",
		},
		{
			title: "Our Office",
			desc: "10700 W Higgins Rd, Suite 270, Rosemont, IL 60018",
			icon: "tji-home",
		},
	];

	return (
		<section className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-location-3"></i> Where We Work
							</span>
							<h2 className="sec-title title-anim">
								Serving <span>Illinois.</span>
							</h2>
							<p
								className="desc wow fadeInUp"
								data-wow-delay=".4s"
								style={{ marginTop: 10 }}
							>
								On-site across Chicago, the suburbs and more of Illinois -
								based in Rosemont.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap justify-content-center">
					{areas.map((area, idx) => (
						<div key={idx} className="col-xl-4 col-md-6">
							<FeatureCard feature={area} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhereWeWork;
