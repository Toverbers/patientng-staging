import  { useEffect } from 'react';
import {Navigate, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/_Auth/SignUpPage';
import VerifyAccount from './pages/_Auth/VerifyCode';
import LoginPage from './pages/_Auth/LoginPage';
import ResetPassword from './pages/_Auth/ResetPassword';
import VerifyPassword from './pages/_Auth/VerifyPassword';
import BlogHome from './pages/_Blog/BlogPage';
import { BlogPost } from './pages/_Blog/BlogPost';
import CustomerStoriesPage from './pages/_CustomerStory/CustomerStoriesPage';
import CustomerStoryPost from './pages/_CustomerStory/CustomerStoryPost';
import CrowdfundingPage from './pages/_Crowdfunding/CrowdfundingPage';
import AllCampaigns from './pages/_Crowdfunding/AllCampaignPage';
import CampaignDetails from './pages/_Crowdfunding/CampaignDetailsPage';
import WebinarPage from './pages/_Webinar/WebinarPage';
import WebinarDetailsPage from './pages/_Webinar/WebinarDetailsPage';
import CreateFundraiser from './pages/_Crowdfunding/CreateCrowdFundingPage';
import PodcastPage from './pages/_Podcast/PodcastPage';
import SingleEpisode from './pages/_Podcast/SinglePodcastEpisode';
import ReviewPage from './pages/_Review/ReviewPage';
import ReviewFacility from './pages/_Review/FacilityReview';
import AccountPage from './pages/Account';
import Advocacy from './pages/Advocacy';
import AwardsPage from './pages/AwardPage'; 
//import CookieConsent from './components/cookies/CookieConsent';
import PersonalizeProfile from './pages/_Auth/PersonalizePage';
import toast, { Toaster } from 'react-hot-toast';
import useAuthStore from './store/authStore';
import Contact from './pages/_contact/Contact';
import CookieConsent from './components/cookies/CookieConsent';
import Terms from './pages/Terms';
import About from './pages/_about/About';
//import { HelmetProvider } from 'react-helmet-async';


const RedirectAuthenticatedUser = ({ children }) => {
	
    
  const token = localStorage.getItem('accessToken')
// (isAuthenticated && user ) {
/* if (token) {
  return <Navigate to='/' replace />;
} */

  const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated ) {
    return <Navigate to='/' replace />;
	}

return children;
};

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!user) {
		return <Navigate to='/login' replace />;
	}

	/* if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	} */

	return children;
};

function App() {

  const {checkAuth, checkingAuth} = useAuthStore()

  useEffect(() => {
		checkAuth();

	}, [checkAuth]);

  if (checkingAuth ) return;
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
         <Route path='/signup' element={<RegisterPage />} />
        <Route path='/verify' element={<VerifyAccount />} />
        <Route path='/personalize' element={<ProtectedRoute><PersonalizeProfile /></ProtectedRoute>} />   
        <Route path='/login' element={<RedirectAuthenticatedUser><LoginPage/></RedirectAuthenticatedUser>} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify-password' element={<VerifyPassword />} /> 
        <Route path='/blog' element={<BlogHome />} />
        <Route path='/blog/:id' element={<BlogPost />}/>
        <Route path='/stories' element={<CustomerStoriesPage />}/>
        <Route path='/stories/:id' element={<CustomerStoryPost />}/>
        <Route path='/crowdfunding' element={<CrowdfundingPage />}/>
        <Route path='/crowdfunding/create' element={<CreateFundraiser />}/>
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/webinars" element={<WebinarPage />} />
        <Route path="/webinars/:id" element={<WebinarDetailsPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:id" element={<SingleEpisode />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/review/:id" element={<ReviewFacility/>} />
        <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
        <Route path="/advocacy" element={<Advocacy/>} />
        <Route path="/awards" element={<AwardsPage />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/terms-and-condition" element={<Terms />} /> 
      </Routes>

      <Toaster />
      <CookieConsent />
    </>
  );
}

export default App;
