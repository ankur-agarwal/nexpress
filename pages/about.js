import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'

const Index = () => {
	return (
		<Layout>
			<section className="px-8 py-4">
				<Paragraph>
					Synthetic Data Company (Syndata AB) is a Swedish company founded by some of Europe&apos;s most respected privacy professionals, data ethicists, computer scientists and futurists.
				</Paragraph>

				<Paragraph>
					The mission of Synthetic Data Company is to facilitate big data models without the privacy and data protection risks which go hand in hand with processing large quantities of personal data.
				</Paragraph>

				<Paragraph>
					Through the use of advanced machine learning technologies and custom algorithms we create extremely large data sets which match the statistical attributes of real data but which are entirely synthetic.  This means that the data can be used for most big data purposes such as predictive modeling, analytics, software testing and much more, with zero negative impact on fundamental rights.
				</Paragraph>

				<Paragraph>
					The model is built on best in class techniques for privacy and data protection by design, creating a positive sum experience whilst guaranteeing the protection of fundamental rights.
				</Paragraph>

				<Paragraph>
					This model ensures that all data processing complies with relevant data protection and privacy laws around the world whilst empowering companies to innovate and obtain the advantages that big data provides.  Not only does this model protect the fundamental rights of individuals it enables all organisations (small or large) to benefit from these technologies, narrowing the gap between traditional big data global enterprises and small to medium sized organisations.
				</Paragraph>

				<Paragraph>
					Throughout 2020 we are running a series of prototype projects with various partners to explore different use cases for this technology and develop a robust product which will go to market in early 2021.  As such, at this time we are not open for general business but if you would like further information or would like to enquire about becoming a pilot partner - please use the contact form below.
				</Paragraph>
			</section>
		</Layout>
	)
}

export default Index
