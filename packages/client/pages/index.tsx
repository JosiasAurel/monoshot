
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
				<h1 style={{
					fontSize: "5em"
				}}>
					💇🏽
				</h1>
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
