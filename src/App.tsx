import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AdminProvider } from './contexts/AdminContext';
import Home from './pages/Home';
import About from './pages/About';
import CEOWord from './pages/CEOWord';
import OurServices from './pages/OurServices';
import TermsConditions from './pages/TermsConditions';
import DisabilitiesCard from './pages/DisabilitiesCard';
import CarersCard from './pages/CarersCard';
import CustomerSupportCard from './pages/CustomerSupportCard';
import FAQ from './pages/FAQ';
import Partners from './pages/Partners';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ApplyDisabilities from './pages/ApplyDisabilities';
import ApplyCarers from './pages/ApplyCarers';
import ApplyCustomerSupport from './pages/ApplyCustomerSupport';
import VerifiedLanyard from './pages/VerifiedLanyard';
import RenewDisabilities from './pages/RenewDisabilities';
import RenewCarers from './pages/RenewCarers';
import RenewCustomerSupport from './pages/RenewCustomerSupport';
import DonateNow from './pages/DonateNow';
import BecomeFranchise from './pages/BecomeFranchise';
import Contact from './pages/Contact';

// Admin Components
import Login from './admin/Login';
import DashboardLayout from './admin/DashboardLayout';
import DashboardOverview from './admin/DashboardOverview';
import DisabilitiesPage from './admin/DisabilitiesPage';
import CarersPage from './admin/CarersPage';
import CustomerSupportPage from './admin/CustomerSupportPage';
import PartnersPage from './admin/PartnersPage';
import ContactSubmissions from './admin/ContactSubmissions';
import RenewalsPage from './admin/RenewalsPage';
import Settings from './admin/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={
            <AdminProvider>
              <ProtectedRoute>
                <DashboardLayout>
                  <Routes>
                    <Route path="dashboard" element={<DashboardOverview />} />
                    <Route path="disabilities" element={<DisabilitiesPage />} />
                    <Route path="carers" element={<CarersPage />} />
                    <Route path="customer-support" element={<CustomerSupportPage />} />
                    <Route path="partners" element={<PartnersPage />} />
                    <Route path="renewals" element={<RenewalsPage />} />
                    <Route path="contact-submissions" element={<ContactSubmissions />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            </AdminProvider>
          } />

          {/* Public Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ceo-word" element={<CEOWord />} />
                  <Route path="/our-services" element={<OurServices />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/disabilities-card" element={<DisabilitiesCard />} />
                  <Route path="/carers-card" element={<CarersCard />} />
                  <Route path="/customer-support-card" element={<CustomerSupportCard />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/apply-disabilities" element={<ApplyDisabilities />} />
                  <Route path="/apply-carers" element={<ApplyCarers />} />
                  <Route path="/apply-customer-support" element={<ApplyCustomerSupport />} />
                  <Route path="/verified-lanyard" element={<VerifiedLanyard />} />
                  <Route path="/renew-disabilities" element={<RenewDisabilities />} />
                  <Route path="/renew-carers" element={<RenewCarers />} />
                  <Route path="/renew-customer-support" element={<RenewCustomerSupport />} />
                  <Route path="/donate" element={<DonateNow />} />
                  <Route path="/franchise" element={<BecomeFranchise />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;