import LoadingSpinnerComponent from 'react-spinners-components';

export default function Spinner() {
  return (
    <div className='mx-auto flex w-full items-center justify-center p-10'>
      <LoadingSpinnerComponent type={'Gear'} color={'white'} size={'144px'} />
    </div>
  );
}
