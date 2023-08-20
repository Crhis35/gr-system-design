import React from 'react';

import { render } from '@testing-library/react';
import Stack from './stack';

describe('<Stack/>', () => {
  it('should render without fail', () => {
    render(<Stack />);
  });
});
