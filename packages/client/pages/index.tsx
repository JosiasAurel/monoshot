
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

const HomePage: React.FC = (): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center"
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
				<span style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start"
				}}>
					<h2 style={{
						fontSize: "2.8em",
						textAlign: "center",
						fontWeight: "bolder",
						color: "white",
						backgroundColor: "#8686ff",
						width: "fit-content",
						borderBottom: "4px solid black"
					}}>A profile for every freelancer with</h2>
					<br />
					<em style={{
						fontSize: "2.8em",
						textAlign: "center",
						fontWeight: "bolder",
						color: "white",
						backgroundColor: "#8686ff",
						width: "fit-content",
						borderBottom: "4px solid black",
					}}>MonoShot</em>
				</span>
				<Button style={{
					marginTop: "1em",
					padding: "0.5em 1em"
				}} variant="primary">
					Give it a go 👍🏽
				</Button>
			</main>
		</div >
	)
}

export default HomePage;
