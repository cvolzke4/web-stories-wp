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
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Input } from '../form';

const StyledInput = styled(Input)`
  width: 100%;
  border: none;
  padding-right: ${({ suffix }) => (Boolean(suffix) ? 6 : 0)}px;
  padding-left: ${({ prefix, label }) => (prefix || label ? 6 : 0)}px;
  letter-spacing: ${({ theme }) => theme.fonts.body2.letterSpacing};
  ${({ textCenter }) => textCenter && `text-align: center`};
`;

const Container = styled.div`
  color: ${({ theme }) => rgba(theme.colors.fg.v1, 0.3)};
  font-family: ${({ theme }) => theme.fonts.body2.family};
  font-size: ${({ theme }) => theme.fonts.body2.size};
  line-height: ${({ theme }) => theme.fonts.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.fonts.body2.letterSpacing};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => rgba(theme.colors.bg.v0, 0.3)};
  flex-basis: ${({ flexBasis }) => flexBasis}px;
`;

function Numeric({
  className,
  onBlur,
  onChange,
  prefix,
  suffix,
  isMultiple,
  label,
  symbol,
  value,
  flexBasis,
  ariaLabel,
  ...rest
}) {
  const placeholder = isMultiple ? __('multiple', 'web-stories') : '';
  const [onEdit, setOnEdit] = useState(false);

  return (
    <Container className={`${className}`} flexBasis={flexBasis}>
      {label}
      {prefix}
      <StyledInput
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        label={label}
        value={`${value}${!onEdit ? symbol : ''}`}
        aria-label={ariaLabel}
        {...rest}
        onChange={(evt) => onChange(evt.target.value, evt)}
        onBlur={(evt) => {
          if (evt.target.form) {
            evt.target.form.dispatchEvent(new window.Event('submit'));
          }
          if (onBlur) {
            onBlur();
          }
          setOnEdit(false);
        }}
        onFocus={() => setOnEdit(true)}
      />
      {suffix}
    </Container>
  );
}

Numeric.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  isMultiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  disabled: PropTypes.bool,
  symbol: PropTypes.string,
  flexBasis: PropTypes.number,
  textCenter: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Numeric.defaultProps = {
  className: null,
  disabled: false,
  isMultiple: false,
  symbol: '',
  flexBasis: 100,
  textCenter: false,
  ariaLabel: __('Standard input', 'web-stories'),
};

export default Numeric;