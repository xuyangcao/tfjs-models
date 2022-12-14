/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as faceDetection from '../index';
import { MediaPipeFaceDetectorModelType } from './types';
export declare const MEDIAPIPE_MODEL_CONFIG: {
    runtime: "mediapipe";
    solutionPath: string;
    maxFaces: number;
};
export declare function expectFaceDetector(detector: faceDetection.FaceDetector, image: HTMLImageElement, modelType: MediaPipeFaceDetectorModelType): Promise<void>;
