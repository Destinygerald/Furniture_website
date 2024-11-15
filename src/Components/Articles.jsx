import "../App.css"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

function ArticleCard({ imgSrc, topic, title, desc, writer, writerImg, date }) {
	return (
		<div className="article-card">
			<img src={imgSrc} alt="imags" />

			<div>
				<span>{topic}</span>
				<span>{title}</span>
				<span>{desc}</span>

				<div>
					<img src={writerImg} alt="imags" />
					<span>By {writer}</span>
					<span>{date}</span>
				</div>
			</div>
		</div>
	)
}

function Articles() {
	return (
		<div className="article">
			<div className="article-left">
				<span>Articles</span>
				<span>The best furniture comes from Lalasia</span>
				<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper.</span>
				<div>
					<img src="img (2).webp" alt="imags" />
					<div className="arrows-container">
						<span><BsArrowLeft /></span>
						<span><BsArrowRight /></span>
					</div>

					<div className="article-info">
						<span>Tips and Trick</span>
						<span>Create Cozy Dinning Room Vibes</span>
						<span>Decorating with neutrals brings balance to the dinning room</span>
						<span>Read More</span>
					</div>
				</div>
			</div>

			<div className="article-right">
				<ArticleCard imgSrc="./img (8).webp" topic="Tips and Trick" title="6 ways to give your home minimalistic vibes" desc="Lorem ipsum dolor sit amet, consectetur." writer="Jeremy Jean" date="Friday, 1 April 2023" writerImg="./Ellipse 1.webp" />
				<ArticleCard imgSrc="./img (9).webp" topic="Tips and Trick" title="How to make your interiors cooler and more stylish" desc="Lorem ipsum dolor sit amet, consectetur." writer="Michael Augus" date="Friday, 1 April 2023" writerImg="./Ellipse 28.webp" />
				<ArticleCard imgSrc="./img (3).webp" topic="Tips and Trick" title="Elements to add character to your space" desc="Lorem ipsum dolor sit amet, consectetur." writer="Kim Guarah" date="Friday, 1 April 2023"  writerImg="./Ellipse 25.webp" />
			</div>
		</div>
	)
}

export default Articles;