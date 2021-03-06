/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import theme from '../../../theme';
import RadioGroup from '../radioGroup';

function ThemeProviderWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeProviderWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};

describe('RadioGroup', () => {
  const options = [
    {
      value: 'a',
      name: __('Option A', 'web-stories'),
      helper: __('This is the best option', 'web-stories'),
    },
    {
      value: 'b',
      name: __('Option B', 'web-stories'),
      helper: __('Also a good option', 'web-stories'),
    },
  ];

  it('should render with correct options', () => {
    const { getByText, getByLabelText } = render(
      <RadioGroup
        onChange={() => null}
        options={options}
        value={options[0].value}
      />,
      {
        wrapper: ThemeProviderWrapper,
      }
    );

    const optionA = getByText('Option A');
    const optionB = getByText('Option B');

    expect(optionA).toBeInTheDocument();
    expect(getByLabelText(/Option A/i)).toBeChecked();
    expect(optionB).toBeInTheDocument();
  });

  it('should change the value when clicking', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup
        onChange={onChange}
        options={options}
        value={options[0].value}
      />,
      {
        wrapper: ThemeProviderWrapper,
      }
    );
    const optionB = getByLabelText(/Option B/i);
    fireEvent.click(optionB);
    expect(onChange).toHaveBeenCalledTimes(1);

    const any = expect.anything();
    expect(onChange).toHaveBeenCalledWith('b', any);
  });
});
