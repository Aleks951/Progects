import { combineReducers } from 'redux';

import changeBackgroundColorProject from './changeBackgroundColorProject.js';
import backgroundImageSliderProject from "./backgroundImageSliderProject.js";
import filterJavascriptProject from "./filterJavascriptProject.js";

export default combineReducers({
    changeBackgroundColorProject,
    backgroundImageSliderProject,
    filterJavascriptProject
});