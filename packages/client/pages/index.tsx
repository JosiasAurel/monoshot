
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

const HomePage: React.FC = (): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			width: "100vw",
			height: "100vh",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",
			backgroundColor: "#e5e5f7",
			opacity: "0.9",
			background: "radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 37.5px 37.5px, linear-gradient(#444cf7 3px, transparent 3px) 0 -1.5px, linear-gradient(90deg, #444cf7 3px, #e5e5f7 3px) -1.5px 0",
			backgroundSize: "75px 75px, 75px 75px, 37.5px 37.5px, 37.5px 37.5px"
		}}>
			<main style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center"
			}}>
				<svg style={{
					width: "20%",
					height: "20%",
					color: "black"
				}} width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 12H18M7 12L5 10H1L3 12L1 14H5L7 12ZM18 12L16 10M18 12L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M17.5 22C20.5376 22 23 17.5228 23 12C23 6.47715 20.5376 2 17.5 2C14.4624 2 12 6.47715 12 12C12 17.5228 14.4624 22 17.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<h2 style={{
					fontSize: "2.8em",
					textAlign: "center",
					fontWeight: "bolder",
					color: "white",
					backgroundColor: "#8686ff",
					width: "fit-content",
					borderBottom: "4px solid black"
				}}>Yo! Wanna Hair Cut ?</h2>
				<span>
					<Link href="/app">
						<Button style={{
							margin: "1em 0.5em",
							padding: "0.5em 1em",
							boxShadow: "0 0 2px 2px #c2c2c2"
						}} variant="primary">
							Browse Haircuts 💇🏽
						</Button>
					</Link>
					<Link href="/app">
						<Button style={{
							margin: "1em 0.5em",
							padding: "0.5em 1em",
							boxShadow: "0 0 2px 2px #c2c2c2"
						}} variant="light">
							I'm a barber 🪒
						</Button>
					</Link>
				</span>
			</main>
		</div >
	)
}

export default HomePage;
