import { useRef, useState } from 'react';

import Editor from '@monaco-editor/react';

import SourceEditorToolBar from '../SourceEditorToolBar';
import LoadingSppiner from '../LoadingSppiner';

import { useStore } from '../../context/store';

const index = ({ sourceLang, sourceCode, loading, error }) => {
  const [editorDidMount, setEditorDidMount] = useState(false);

  const theme = useStore((state) => state.theme);
  const setSourceLang = useStore((state) => state.setSourceLang);
  const setSourceCode = useStore((state) => state.setSourceCode);

  // console.log(sourceLang);

  const copySourceCode = async () => {
    await navigator.clipboard.writeText(sourceCode);
  };

  const deleteSourceCode = () => setSourceCode('');

  const handleChange = (value) => {
    setSourceCode(value);
  };

  function handleEditorDidMount(editor, monaco) {
    setEditorDidMount(true);
  }

  const options = {
    selectOnLineNumbers: true,
    renderIndentGuides: 'on',
    autoIndent: true,
    formatOnPaste: true,
    formatOnType: true,
    automaticLayout: true,
    wordWrap: 'off',
    wrappingIndent: 'indent',
    fontSize: 15,
    fontFamily: 'Source Code Pro',
    minimap: {
      enabled: false,
    },
  };

  return (
    <>
      <div className='relative flex h-[50vh] w-full flex-col items-start justify-start lg:h-[100vh] lg:w-[50%]'>
        <SourceEditorToolBar
          deleteSourceCode={deleteSourceCode}
          copySourceCode={copySourceCode}
          defaultLang={sourceLang}
          setLang={setSourceLang}
        />

        {(loading || error) && editorDidMount && (
          <div className='custom-bg absolute left-0 top-[50px] z-10 flex h-full w-full items-center justify-center '>
            {error ? (
              <div className=' flex flex-col items-center justify-center  gap-y-2'>
                <p className='text-danger_color'>Something Went Wrong</p>
                <button className='custom-border custom-text rounded-lg border-2 px-3 py-1'>
                  Retry
                </button>
              </div>
            ) : (
              <LoadingSppiner />
            )}
          </div>
        )}

        <Editor
          language={sourceLang}
          value={sourceCode}
          onChange={handleChange}
          theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
          onMount={handleEditorDidMount}
          options={options}
        />
      </div>
    </>
  );
};

export default index;
