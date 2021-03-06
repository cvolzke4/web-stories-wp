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
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import usePagePreviewSize from '../../utils/usePagePreviewSize';

const DashboardGrid = styled.div`
  display: grid;
  width: 100%;
  align-content: space-between;
  grid-column-gap: 10px;
  grid-template-columns: ${({ columnWidth }) =>
    `repeat(auto-fill, minmax(${columnWidth}px, 1fr))`};

  @media ${({ theme }) => theme.breakpoint.min} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardGrid = ({ children }) => {
  const { pageSize } = usePagePreviewSize();

  return <DashboardGrid columnWidth={pageSize.width}>{children}</DashboardGrid>;
};

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardGrid;
