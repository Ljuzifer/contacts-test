import { SiLinkedin } from 'react-icons/si';

export default function FooBar() {
  return (
    <footer className='flex items-center justify-center whitespace-pre p-[2px] text-sm'>
      &copy; 2024 All rights reserved.{'  '} Created by{' '}
      <a
        href='https://www.linkedin.com/in/ljuzifer/'
        target='_blank'
        rel='noreferrer noopener nofollow'
        className='flex items-center justify-center'
      >
        &copy; LJUZIFER{'  '}
        <SiLinkedin className='text-base' />
      </a>
    </footer>
  );
}
