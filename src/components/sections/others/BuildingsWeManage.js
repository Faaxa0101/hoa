import Image from "next/image";
import Link from "next/link";

const buildings = [
	{
		title: "Northpointe O'Hare Condominium Association",
		desc: "10700 W Higgins Rd, Rosemont, IL 60018",
		img: "/images/buildings/northpointe-ohare.webp",
	},
	{
		title: "Neenah Manor Condominium",
		desc: "3158 N Neenah Ave, Chicago, IL 60634",
		img: "/images/buildings/neenah-manor-v2.webp",
	},
	{
		title: "West Barry Condominium Association",
		desc: "5502-10 W Barry Ave, Chicago, IL",
		img: "/images/buildings/west-barry-v2.webp",
	},
	{
		title: "Cullom Condominium Association",
		desc: "3414-24 W Cullom Ave, Chicago, IL 60618",
		img: "/images/buildings/cullom.webp",
	},
	{
		title: "1044 N Wolcott Condominium Association",
		desc: "1044 N Wolcott Ave, Chicago, IL 60622",
		img: "/images/buildings/wolcott-1044.webp",
	},
	{
		title: "Kristina Courtyards Condominium Association",
		desc: "9450 W Lawrence Ave, Schiller Park, IL",
		img: "/images/buildings/kristina-courtyards.webp",
	},
	{
		title: "East End Ventures",
		desc: "7716 S East End, Chicago, IL",
		img: "/images/buildings/east-end-ventures.webp",
	},
];

const BuildingCard = ({ building, idx }) => {
	return (
		<div
			className="building-card wow fadeInUp"
			data-wow-delay={`${(idx % 3) * 0.15 + 0.2}s`}
		>
			{building.img ? (
				<div className="building-img">
					<Image
						src={building.img}
						alt={`${building.title} - ${building.desc}`}
						width={640}
						height={480}
					/>
				</div>
			) : (
				<div className="building-img building-img-placeholder">
					<img src="/images/logos/hoa-help-logo-sm.webp" alt="HOA.Help" />
				</div>
			)}
			<div className="building-body">
				<h3 className="title">{building.title}</h3>
				<p className="desc">{building.desc}</p>
			</div>
		</div>
	);
};

const BuildingsWeManage = () => {
	return (
		<section id="buildings" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-home"></i> Our Portfolio
							</span>
							<h2 className="sec-title title-anim">
								Buildings We <span>Manage.</span>
							</h2>
							<p
								className="desc wow fadeInUp"
								data-wow-delay=".4s"
								style={{ marginTop: 10 }}
							>
								Condominium associations and communities across Chicago,
								Rosemont and Schiller Park - managed by our{" "}
								<Link href="/condo-management-chicago">
									condo management
								</Link>{" "}
								and{" "}
								<Link href="/association-management-chicago">
									association management
								</Link>{" "}
								teams.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 justify-content-center">
					{buildings.map((building, idx) => (
						<div key={idx} className="col-xl-4 col-md-6">
							<BuildingCard building={building} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BuildingsWeManage;
