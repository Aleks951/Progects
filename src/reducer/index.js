import { combineReducers } from 'redux';

import changeBackgroundColorProject from './changeBackgroundColorProject.js';
import backgroundImageSliderProject from "./backgroundImageSliderProject.js";
import filterJavascriptProject from "./filterJavascriptProject.js";
import todoListJavascriptProject from "./todoListJavascriptProject";

export default combineReducers({
    changeBackgroundColorProject,
    backgroundImageSliderProject,
    filterJavascriptProject,
    todoListJavascriptProject
});