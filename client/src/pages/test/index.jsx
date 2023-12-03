import React from 'react';

import { useStore } from '../../context/store';

const index = () => {
  const c = {
    sourceLang: 'cljkslkdjflksjdf',
    sourceCode: 'sousdfsdfrce code java',
    targetLang: 'jsdfsdfsdfs',
    targetCode: 'target code js',
  };
  const createConversion = useStore((state) => state.createConversion);

  return (
    <>
      <button onClick={() => createConversion(c)}>add conversiton</button>
    </>
  );
};

export default index;
