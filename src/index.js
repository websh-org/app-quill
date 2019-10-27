import { WebShellApp } from "@websh/web-shell-app";
import manifest from "./manifest.json";

console.log(manifest)



delete window.sessionStorage ;

var data1 = [
  [ 'Cheese', 10, 1.10, '=B1*C1'],
  [ 'Apples', 30, 0.40, '=B2*C2'],
  [ 'Carrots', 15, 0.45, '=B3*C3'],
  [ 'Oranges', 20, 0.49, '=B4*C4'],
];

window.table = jexcel(document.getElementById('editor'), {
  data:data1,
  colHeaders: [ 'Product', 'Quantity', 'Price', 'Total' ],
  colWidths: [ 300, 100, 100, 100 ],
  columns: [
      { type: 'autocomplete', source:[ 'Apples','Bananas','Carrots','Oranges','Cheese','Pears' ] },
      { type: 'number' },
      { type: 'number' },
      { type: 'number' },
  ]
});


WebShellApp.manifest(manifest)
.command('file-open', ({ format, content, type, extension }) => {
  return "OK";
})
.command('file-save', ({ format, extension }) => {
  return {}
})
.command('file-new', function ({ format }) {
  console.log({table})
  table.setData([])
  return "OK";
})
