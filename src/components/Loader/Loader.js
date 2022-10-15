import { Blocks } from 'react-loader-spinner';

export function Loader() {
  return (
    <Blocks
      visible={true}
      height="360"
      width="360"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '20%',
        left: '40%',
      }}
      wrapperClass="blocks-wrapper"
    />
  );
}
