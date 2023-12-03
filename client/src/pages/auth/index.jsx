import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import From from '../../components/Form';
import authPageImg from '../../assets/svg/auth_page_img.svg';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useStore } from '../../context/store';

const index = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const register = useStore((state) => state.registerUser);
  const login = useStore((state) => state.loginUser);
  const auth = useStore((state) => state.auth);

  const showToast = (type, message) => {
    toast[type](message, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  useEffect(() => {
    if (auth.error) {
      showToast('error', auth.error || 'There was an error');
    }

    if (auth.user) {
      navigate('/app');
    }
  }, [auth]);

  const handleAuth = async (e, data) => {
    e.preventDefault();

    if (auth.loading) return;

    if (isLogin) {
      login(data);
    } else {
      register(data);
    }
  };

  return (
    <section className='flex h-screen w-full items-start bg-white'>
      <ToastContainer />

      {/* Login Image */}
      <div className='hidden h-screen w-[60%] overflow-hidden bg-main_color_dark lg:block'>
        <img
          src={authPageImg}
          alt='login/registration page image'
          className='h-full w-full'
        />
      </div>

      {/* Login Form */}
      <div className='items-left flex h-screen w-full flex-col justify-center p-8 lg:w-[40%]'>
        <From isLogin={isLogin} handleAuth={handleAuth} />
        <p className='mt-4 text-xs text-text_color_light lg:text-sm'>
          Dont have account?{' '}
          <span
            className='cursor-pointer text-primary_color'
            onClick={() => setIsLogin(!isLogin)}
          >
            Register
          </span>
        </p>
      </div>
    </section>
  );
};

export default index;
