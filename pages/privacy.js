import React from 'react'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'

const Index = () => {
	return (
		<Layout>
			<section className="px-8 py-4">
				<Paragraph>
					Synthetic Data Company only stores information about you which is submitted via our contact form.  This information includes:
					<ul className="list-disc mx-8 mt-4">
						<li>Your First Name</li>
						<li>Your Last Name</li>
						<li>Your Email Address</li>
						<li>The content of your enquiry</li>
						<li>If you provide your company name, this is also stored</li>
					</ul>
				</Paragraph>

				<Paragraph>
					We store your data for a period of 28 days after your enquiry has been closed unless you have Opted In to receiving direct marketing from us.  If you have Opted In to Direct Marketing your data will be stored for a period of 12 months at which point we will contact you to inform you your data will be deleted - you can prevent this deletion by following the instructions in that email.
				</Paragraph>

				<Paragraph>
					You can exercise your other rights under the General Data Protection Regulation by emailing us on dsar@syndata.co for more information on these rights please visit the European Commission information portal here:
					<div className="mt-2">
						<a className="text-blue-600 hover:text-blue-800" href="https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens/my-rights/what-are-my-rights_en" target="_blank" rel="noopener noreferrer">
							https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens/my-rights/what-are-my-rights_en
						</a>
					</div>
				</Paragraph>

				<Paragraph>
					We do not disclose or grant access to your data to any third parties.
				</Paragraph>

				<Paragraph>
					Our web site does not use any cookies or other technologies which might be used to track you behaviour.
				</Paragraph>

				<Paragraph>
					For more information relating to our Data Protection and Privacy policies, or if you wish to file a complaint or raise an issue - please contact our Data Protection Officer:

					<ul className="mt-2">
						<li>Think Privacy AB</li>
						<li>Stockholm,</li>
						<li>Sweden.</li>
					</ul>
					<div className="mt-2">
						<a href="mailto:syndata@think-privacy.com" className="text-blue-600 hover:text-blue-800">
							syndata@think-privacy.com
						</a>
					</div>
				</Paragraph>
			</section>
		</Layout>
	)
}

export default Index
