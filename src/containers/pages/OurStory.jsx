import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

function OurStory() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-32">OurStory</div>
      <Footer />
    </Layout>
  );
}

export default OurStory;
