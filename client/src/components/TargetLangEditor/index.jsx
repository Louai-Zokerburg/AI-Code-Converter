import { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import TargetEditorToolBar from '../TargetEditorToolBar';
import LoadingSppiner from '../LoadingSppiner';


import { useStore } from '../../context/store';

const index = ({ targetLang, targetCode, loading, error }) => {
  const [editorDidMount, setEditorDidMount] = useState(false);

  const editorRef = useRef(null);
  const theme = useStore((state) => state.theme);
  const setTargetLang = useStore((state) => state.setTargetLang);
  const setTargetCode = useStore((state) => state.setTargetCode)

  const copyTargetCode = async () => {
    await navigator.clipboard.writeText(targetCode);
  };

  const deleteTargetCode = () => setTargetCode('')

  function handleEditorDidMount(editor, monaco) {
    setEditorDidMount(true);
    editorRef.current = editor;
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
    readOnly: true,
    fontFamily: 'Source Code Pro',
    minimap: {
      enabled: false,
    },
  };

  return (
    <>
      <div className='relative flex h-[50vh] w-full flex-col items-start justify-start lg:h-[100vh] lg:w-[50%]'>
        <TargetEditorToolBar
          defaultLang={targetLang}
          copyTargetCode={copyTargetCode}
          deleteTargetCode={deleteTargetCode}
          setLang={setTargetLang}
        />

        {(loading || error) && editorDidMount && (
          <div className='custom-bg absolute left-0 top-[50px] z-10 flex h-full w-full items-center justify-center'>
            {error ? (
              <div className=' flex flex-col items-center justify-center gap-y-2'>
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
          theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
          language={targetLang}
          value={targetCode}
          onMount={handleEditorDidMount}
          options={options}
        />
      </div>
    </>
  );
};

export default index;
