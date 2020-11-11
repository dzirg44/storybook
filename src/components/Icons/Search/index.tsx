import * as React from 'react';

export default (props: any) => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <path fill="#757575" fillRule="evenodd" d="M23.79 22.531l-6.036-6.035c-.107-.108-.248-.164-.397-.164h-.482c1.605-1.736 2.587-4.051 2.587-6.601C19.462 4.356 15.106 0 9.731 0S0 4.356 0 9.731s4.356 9.731 9.731 9.731c2.55 0 4.865-.982 6.601-2.582v.477c0 .15.061.29.164.397l6.035 6.035c.22.22.575.22.795 0l.463-.463c.22-.22.22-.575 0-.795zM9.73 17.965c-4.552 0-8.234-3.682-8.234-8.234S5.18 1.497 9.731 1.497s8.234 3.682 8.234 8.234-3.682 8.234-8.234 8.234z"/>
  </svg>
);