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
import React from 'react';
import {fireEvent, render} from '@testing-library/react';

/**
 * Internal dependencies
 */
import { renderWithTheme } from "../../../../../testUtils";
import DragHandle from '../handle';

const mockBind = jest.fn();
const mockUnbind = jest.fn();

// jest.mock('Mousetrap', () =>
//   jest.fn().mockImplementation(() => ({
//     bind: mockBind,
//     unbind: mockUnbind,
//   }))
// );

describe('DragHandle', () => {
  var bindings;

  beforeEach(() => {
    bindings = {};
    mockBind.mockReset();
    mockUnbind.mockReset();

    mockBind.mockImplementation((name, fn) => (bindings[name] = fn));
    mockUnbind.mockImplementation((name) => delete bindings[name]);
  });

  // it('should call Mousetrap.unbind on unmount', () => {
  //   const component = renderWithTheme(<DragHandle />);
  //   expect(Object.keys(bindings)).toHaveLength(2);
  //
  //   // Mousetrap.unbind() must be called when the component is unmounted.
  //   component.unmount();
  //   expect(Object.keys(bindings)).toHaveLength(0);
  // });

  describe('should raise handleHeightChange when up or down key is pressed', () => {
    var thing;
    const handleHeightChange = jest.fn();
    const mockEvent = {
      stopPropagation: () => {},
      preventDefault: () => {},
      target: {},
    };

    beforeEach(() => {
      handleHeightChange.mockReset();
      thing = renderWithTheme(<div data-testid="it"><DragHandle handleHeightChange={handleHeightChange} /></div>);
    });

    it('when up key is pressed', async () => {
      await null;
      await null;
      await null;
      fireEvent.keyDown(thing.container, { key: 'Up', which: 40 });
      fireEvent.keyPress(thing.container, { key: 'Up', which: 40 });
      await null;
      await null;
      await null;
      await null;
      await null;
      await null;
      expect(handleHeightChange).toHaveBeenCalledWith(20);
    });

    it('when down key is pressed', async () => {
      await null;
      await null;
      await null;
      fireEvent.keyDown(thing.container, { key: 'Down', which: 40 });
      fireEvent.keyPress(thing.container, { key: 'Down', which: 40 });
      await null;
      await null;
      await null;
      await null;
      await null;
      await null;
      expect(handleHeightChange).toHaveBeenCalledWith(-20);
    });
  });
});
