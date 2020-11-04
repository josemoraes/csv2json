window.onload = () => {
  const button = document.getElementById("button-converter");

  button.addEventListener("click", handleConvert);
};

const handleConvert = () => {
  const plainText = getCSVText();
  const rows = plainText.split("\n");
  const header = rows[0].split(",");
  let convertedJSON = [];

  for (let index = 1; index < rows.length; index++) {
    const rowValues = rows[index].split(",");
    const tempObj = {};
    for (let rowIndex = 0; rowIndex < rowValues.length; rowIndex++) {
      tempObj[header[rowIndex].slice(1, -1)] = rowValues[rowIndex].slice(1, -1);
    }
    convertedJSON = [...convertedJSON, tempObj];
  }
  presentJSON(convertedJSON);
};
const getCSVText = () => {
  return document.getElementById("csv-text").value;
};
const presentJSON = (json) => {
  document.getElementById("json-output").innerText = JSON.stringify(
    json
  ).replace(/},/g, "},\r\n");
};
