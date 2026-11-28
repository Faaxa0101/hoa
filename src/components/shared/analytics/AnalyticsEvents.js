"use client";

import { useEffect } from "react";

/**
 * GA4 key-event tracking for outbound conversions.
 * Events fired:
 *  - book_call_click  (any calendly.com link)
 *  - phone_click      (tel: links)
 *  - email_click      (mailto: links)
 *  - portal_click     (app.hoa.help / Odoo / Buildium resident login)
 * Mark these as key events in GA4: Admin -> Events -> Mark as key event.
 */
const ANALYTICS_EVENTS = [
	{ test: (href) => href === "/book", name: "book_call_click" },
	{ test: (href) => href.includes("calendly.com"), name: "book_call_click" },
	{ test: (href) => href.startsWith("tel:"), name: "phone_click" },
	{ test: (href) => href.startsWith("mailto:"), name: "email_click" },
	{
		test: (href) =>
			href.includes("app.hoa.help") ||
			href.includes("managebuilding.com") ||
			href.includes("/odoo"),
		name: "portal_click",
	},
];

const AnalyticsEvents = () => {
	useEffect(() => {
		const onClick = (event) => {
			const link = event.target.closest && event.target.closest("a[href]");
			if (!link) return;

			const href = link.getAttribute("href") || "";
			const match = ANALYTICS_EVENTS.find((item) => item.test(href));
			if (!match) return;

			if (typeof window.gtag !== "function") return;

			window.gtag("event", match.name, {
				link_url: link.href,
				link_text: (link.textContent || "").trim().slice(0, 100),
			});
		};

		document.addEventListener("click", onClick, true);
		return () => document.removeEventListener("click", onClick, true);
	}, []);

	return null;
};

export default AnalyticsEvents;
