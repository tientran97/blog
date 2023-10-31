import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Layout from "hocs/layouts/Layout"

function Home() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
                Home
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home

