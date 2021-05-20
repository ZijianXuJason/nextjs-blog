import Head from 'next/head'

import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Zijian Xu</title>
                <meta name="despription" content="A about page" />
            </Head>
            <h1>About</h1>
            <p>about content goes here</p>
        </Layout>
    )
}