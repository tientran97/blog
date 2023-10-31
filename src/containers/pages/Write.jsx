import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Layout from "hocs/layouts/Layout";

function Write() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-32">Write</div>
      <Footer />
    </Layout>
  );
}

export default Write;
