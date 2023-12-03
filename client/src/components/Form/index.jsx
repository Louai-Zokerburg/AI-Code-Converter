import { useState, useEffect } from 'react';

import FormRow from './FormRow';
import TextButton from '../Buttons/TextButton';

const index = ({ isLogin, handleAuth }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='flex w-full flex-col items-start justify-center'>
      <h1 className='mb-8 text-2xl font-semibold text-text_color_light '>
        {isLogin ? 'Login' : 'Register'}
      </h1>

      {!isLogin && (
        <FormRow
          label='Name'
          type='text'
          placeholder='Enter name'
          value={username}
          handleChange={(newName) => setUsername(newName)}
        />
      )}

      <FormRow
        isPass={false}
        label='Email'
        type='email'
        placeholder='Enter email'
        value={email}
        handleChange={(newEmail) => setEmail(newEmail)}
      />

      <FormRow
        isPass={true}
        label='Password'
        type='password'
        placeholder='Enter password'
        value={password}
        handleChange={(newPassword) => setPassword(newPassword)}
      />

      <TextButton
        handleClick={
          isLogin
            ? (e) => handleAuth(e, { email, password })
            : (e) => handleAuth(e, { username, email, password })
        }
        text={isLogin ? 'Login' : 'Register'}
      />
    </form>
  );
};

export default index;
