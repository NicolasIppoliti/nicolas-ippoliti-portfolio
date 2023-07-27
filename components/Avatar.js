// Next image
import Image from 'next/image';

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image
    src={'/avatar.png'}
    width={737}
    height={678}
    alt=''
    className='translate-z-0 w-full h-full max-w-[737px] max-h-[678px]'
    />
  </div>;
};

export default Avatar;
