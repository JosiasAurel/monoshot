
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Service from "../components/Service";
import Feature from "../components/Feature";
import Button from "../components/Button";
import styles from "../styles/index.module.css";

const HomePage: React.FC = (): JSX.Element => {

	const features: { icon: string, title: string, description: string }[] = [
		{
			icon: "🔍",
			title: "Browse/Search Haircuts",
			description: "Browse or search haircuts published by various barbers."
		},
		{
			icon: "🤙🏽",
			title: "Get In Touch",
			description: "Find barber's contact and get in touch for various offers."
		},
		{
			icon: "📢",
			title: "Show your work",
			description: "If you are a barber, publish hairstyles you offer so people can discover you."
		},
		{
			icon: "📜",
			title: "Keep Track",
			description: "Keep track of all your offers in one place. CutShot keeps a record of your bookings."
		}
	];

	const sampleHaircuts = [
		{
			title: "Wavy",
			description: "A haircut to make girls go brrrr",
			price: "$150",
			photo: "/hair2.jpg"
		},
		{
			title: "Savy",
			description: "If you are a tech savy then you might like this",
			price: "$123",
			photo: "/hair1.webp"
		}
	];

	const [hairCut, setHairCut] = useState<any>(sampleHaircuts[0]);

	useEffect(() => {
		let currentIdx = 0;
		setInterval(() => {
			setHairCut(sampleHaircuts[currentIdx]);
			// setAnim("fadeout");
			currentIdx++;
			if (currentIdx == sampleHaircuts.length) {
				currentIdx = 0;
			}
		}, 1500);
	}, []);
	return (
		<div className={styles.indexPage}>
			<header className={styles.indexHeader}>
				<nav>
					<h2>CutShot</h2>
				</nav>
			</header>
			<main>
				<div style={{
					height: "80%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start"
				}}>
					<h1>Yo! <br /> Wanna Hair Cut ?</h1>
					<p style={{ marginLeft: "2em", color: "grey", fontSize: "1.5em" }}>CutShot is connecting customers with experienced barbers</p>
					<Link href="/app">
						<span style={{ marginLeft: "2em" }}>
							<Button>
								Find My Style
							</Button>
						</span>
					</Link>
				</div>

				<Service
					title="Wavy"
					description="A haircut to make girls go brrrr"
					price="$150"
					photo="/hair2.jpg"
				/>

			</main>

			<div>
				<h2>How it works</h2>
				<div style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
					<div style={{ margin: "0 1em" }}>
						<h1>Browse Haircuts</h1>
						<div>
							<div>
								<Service
									title={hairCut.title}
									description={hairCut.description}
									price={hairCut.price}
									photo={hairCut.photo}
								/>
							</div>
						</div>
					</div>

					<div style={{ margin: "0 1em" }}>
						<h1>Browse Haircuts</h1>
						<div>
							<div>
								<Service
									title={hairCut.title}
									description={hairCut.description}
									price={hairCut.price}
									photo={hairCut.photo}
								/>
							</div>
						</div>
					</div>

					<div style={{ margin: "0 1em" }}>
						<h1>Browse Haircuts</h1>
						<div>
							<div>
								<Service
									title={hairCut.title}
									description={hairCut.description}
									price={hairCut.price}
									photo={hairCut.photo}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{ margin: "2em 0" }}>
				<h2 style={{ textAlign: "center" }}>Features</h2>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
					<div style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}>
						{features.map(({ icon, title, description }) => (
							<Feature
								icon={icon}
								title={title}
								description={description}
							/>
						))}
					</div>
				</div>
			</div>
		</div >
	)
}

export default HomePage;
