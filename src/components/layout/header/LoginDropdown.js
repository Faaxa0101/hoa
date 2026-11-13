"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const loginItems = [
	{
		title: "Owners & Boards",
		desc: "Balance, autopay, documents, requests",
		href: "https://app.hoa.help/web/login?redirect=/my/hoa",
	},
	{
		title: "Managers",
		desc: "HOA.help operator desk",
		href: "https://app.hoa.help/web/login?redirect=/odoo",
	},
	{
		title: "Sales Reps",
		desc: "Prospects and pipeline",
		href: "https://app.hoa.help/web/login?redirect=/odoo/crm",
	},
	{
		title: "Current residents (Buildium)",
		desc: "Until your association moves to HOA.Help",
		href: "https://www.managebuilding.com/Resident/portal/login",
	},
];

const LoginDropdown = () => {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const onDocClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onDocClick);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDocClick);
			document.removeEventListener("keydown", onKey);
		};
	}, []);

	return (
		<div className={`login-dropdown ${open ? "open" : ""}`} ref={ref}>
			<button
				type="button"
				className="login-trigger"
				aria-haspopup="true"
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				<i className="fa-solid fa-arrow-right-to-bracket"></i>
				<span>Log in</span>
				<i className="tji-arrow-down login-caret"></i>
			</button>
			<div className="login-menu" role="menu">
				{loginItems.map((item) => (
					<Link
						key={item.title}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="login-item"
						role="menuitem"
					>
						<span className="login-item-title">{item.title}</span>
						<span className="login-item-desc">{item.desc}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default LoginDropdown;
