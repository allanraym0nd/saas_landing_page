import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
import { Paragragh } from "../shared/Paragraph"
import { pricingPlans } from "../../utils/pricing-plan"

export const Pricing = () => {
    return <section id="pricing" className="py-5">
        <Container className="text-center">
            <Title>Pricing</Title>
                <Paragragh className="mt-4">
                    Choose The Pricing Thats Right For Your Business             
                </Paragragh>
            
        </Container>

        <div>

        </div>
    </section>
}