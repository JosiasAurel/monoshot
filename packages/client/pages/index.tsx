
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Service from "../components/Service";
import styles from "../styles/index.module.css";

const HomePage: React.FC = (): JSX.Element => {
	return (
		<div className={styles.indexPage}>
			<header className={styles.indexHeader}>
				<nav>
					<h2>CutShot</h2>
				</nav>
			</header>
			<main>
				<div>
					<h1>Yo! <br /> Wanna Hair Cut ?</h1>
					<button style={{
						marginLeft: "3em",
						padding: "0.5em 2em"
					}}>
						What is this ?
					</button>
				</div>

				<Service
					title="Wavy"
					description="A haircut to make girls go brrrr"
					price="$150"
					photo="/hair2.jpg"
				/>

			</main>
		</div >
	)
}

export default HomePage;
