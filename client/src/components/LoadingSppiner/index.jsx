import HashLoader from 'react-spinners/HashLoader';

const index = () => {
  return (
    <div className='custom-text mx-auto mt-4 flex flex-col items-center justify-center gap-y-2 text-sm'>
      <HashLoader color='#36d7b7' size={30} speedMultiplier={1} />
      <p>Loading</p>
    </div>
  );
};

export default index;
