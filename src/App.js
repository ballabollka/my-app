import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home'
import Contacts from './pages/contacts/Contacts'
import Kurs from './pages/kurs/Kurs'
import Kabunet from './pages/kabunet/Kabunet'
import Register from './pages/register/Register';
import { Routes, Route } from 'react-router-dom';
import Freelesson from './pages/freelesson/Freelesson';
import Popup from './pages/popup/Popup';
import Faq from './components/faq/Faq';
import ProtectedRoute from './pages/kabunet/ProtectedRoute'
import Aboutkurs1 from './pages/aboutkurs/Aboutkurs1';
import Pay from './pages/pay/Pay';
import UserProfile from './pages/profile/UserProfile';




function App() {
  return (
    <div className="App">
      <Popup/>


      <Routes>

      <Route path="/" element={ <> <Header/> <Home /> <Faq/> <Footer/> </>} /> 
      <Route path="/contacts" element={<> <Header/><Contacts /> <Footer/></>}  />
      <Route path="/kurs" element={<> <Header/><Kurs /> <Footer/> </> } />
      <Route path="/kabunet" element={ <Kabunet /> } />
      <Route path='/freelesson' element={ <> <Header/> <Freelesson/> </>}/>
      <Route path='/register' element={<Register/>}/>
       <Route path="/home" element={ <> <Header/> <Home /> <Footer/> </>} />

       <Route path="/kurs" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/aboutkurs1" element={<> <Header /><Aboutkurs1 /><Footer /> </>} />
        <Route path="/pay" element={<> <Header /><Pay /><Footer /> </>} />
        <Route path="/profile" element={<> <Header /> <UserProfile /> <Footer /> </>} />



        
      </Routes>

   


 

 
    </div>
  );
}

export default App;
