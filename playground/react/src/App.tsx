import React from 'react';

import { Stack, Input } from '@crhis/growth-system-design';

function App() {
  const Icon = () => (
    <svg
      className='w-3 h-3'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 14 18'
    >
      <path d='M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
    </svg>
  );

  const HelperText = () => (
    <>
      We’ll never share your details. Read our{' '}
      <a
        href='#'
        className='font-medium text-gray-900 hover:underline dark:text-blue-500'
      >
        Privacy Policy
      </a>
      .
    </>
  );

  return (
    <Stack as='section' width='full' height={100} center p='4'>
      <Stack width='full' direction='row' mb={10}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className='h-40 w-40 bg-red-700' />
        ))}
      </Stack>

      <Input
        label='Input text'
        name='test'
        size='small'
        icon={Icon}
        placeholder='Input text'
        helperText={HelperText}
      />

      <Input
        label='Input text'
        name='test'
        size='small'
        icon={Icon}
        placeholder='Input text'
        helperText={HelperText}
        success
      />

      <Input
        label='Input text'
        name='test'
        size='small'
        icon={Icon}
        placeholder='Input text'
        helperText={HelperText}
        error={true}
        errorMessage={'You have an error'}
      />
    </Stack>
  );
}

export default App;
