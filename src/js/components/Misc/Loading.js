import {Puff} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='spinner'>
      <Puff
        type='Puff'
        color='var(--primary)'
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
