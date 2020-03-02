const textract = require("textract");
const countWord = require("count-words");

textract.fromFileWithPath(
  `/home/giothcode/Escritorio/testPS-clientes/INFORME DE AVANCE 1 (copia).docx`,
  (error, text) => {
    if (error) return console.log("ERROR", error);
    console.log(countWord(text));
    let ll = countWord(text);
    let element = 0;
    for (const key in ll) {
      element += ll[key];
    }
    console.log(element);
  }
);
