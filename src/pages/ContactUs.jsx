import { ContactForm } from '../components/ContactForm';

export default function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>Let's build smarter. Send us a message below.</p>
      </div>
      <ContactForm />
    </div>
  );
}