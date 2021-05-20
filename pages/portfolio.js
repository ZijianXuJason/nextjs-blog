import Head from 'next/head'

import Layout from '../components/layout'

export default function Portfolio() {
    return (
        <Layout>
            <Head>
                <title>Portfolio | Zijian Xu</title>
                <meta name="despription" content="A robust portfolio of web design projects" />
            </Head>
            <h1>Portfolio</h1>
            <p>Portfolio content goes here.</p>
        </Layout>
    )
}