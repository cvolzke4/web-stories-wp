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
 * Internal dependencies
 */
import { PanelTypes } from '../../components/panels';
export { default as Display } from './display';
export { default as Save } from './save';
export { default as Preview } from './preview';

export const defaultAttributes = {
	controls: false,
	loop: false,
	autoPlay: true,
	posterId: null,
	poster: null,
	videoId: 0,
};

export const hasEditMode = false;

export const panels = [
	PanelTypes.SIZE,
	PanelTypes.POSITION,
	PanelTypes.SCALE,
	PanelTypes.ROTATION_ANGLE,
	PanelTypes.VIDEO_POSTER,
];