import Layout from '../components/layout';
import HeroSection from '../components/HeroSection';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <BookingForm />
    </Layout>
  );
}
