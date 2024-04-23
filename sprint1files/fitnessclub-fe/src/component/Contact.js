import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  return (
    <div >
      <Header />
      <div className="d-flex flex-column">
      <p className="p-2">Contact me</p>
      <p className="p-2">phone number </p>
      <p className="p-2">Address</p>
      <p className="p-2">Email</p>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
