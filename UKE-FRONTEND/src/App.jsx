import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import AuthProvider from './components/Auth/AuthProvider';
import PublicRoute from './components/Auth/PublicRoute';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import PrivateRoute from './components/Auth/PrivateRoute';
import Profile from './Users/Profile/Profile';
import LandingPage from './Users/LandingPage/LandingPage';



function App() {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<LandingPage />}>
            </Route>
            <Route element={<PrivateRoute />}>
             
             
                <Route path="profile" element={<Profile />} />

              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
