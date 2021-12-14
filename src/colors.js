const { presetPalettes: palettes } = require("@ant-design/colors");
const grayColors = require("./gray.js");

const presetPalettes = {
  ...palettes,
  ...grayColors,
};

const variableKeysMap = {};
const colorKeysMap = {};

const keys = Object.keys(presetPalettes);
for (let i = 0, len = keys.length; i < len; i++) {
  const key = keys[i];
  const colorItems = presetPalettes[key];
  for (let j = 0, len = colorItems.length; j < len; j++) {
    variableKeysMap[`${key}-${j + 1}`] = colorItems[j];
    colorKeysMap[colorItems[j]] = `${key}-${j + 1}`;
  }
}

const getColor = (variable) => {
  return variableKeysMap[variable];
};

const getVariable = (color) => {
  return colorKeysMap[color];
};

module.exports = {
  getColor,
  getVariable,
};
