import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from'../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

import { getPeopleName } from '../../lib/api'

export async function getStaticProps() {

    const peoples = await getPeopleName()

    return {
        props: { peoples }
    }
}

export default function Locations({ peoples }) {
    return (
        <Layout>
            <h1>People</h1>
            <p>this is the People introduction.</p>
            {peoples.edges.map(edge => {
                const { name, title } = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                        {peoples.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                                <Card node={node} />
                            </Col>
                        })}
                    </Row>
                </Section>
            })}
        </Layout>
    )
}

