import { WebShellApp } from "@websh/web-shell-app";
import manifest from "./manifest.json";

WebShellApp.manifest(manifest);
import Quill from "quill"
import "quill/dist/quill.snow.css";

var editor = new Quill('#editor', {
  theme: 'snow'
});

WebShellApp.command('file-open',({format,content,extension})=>{
  switch (format) {
    case "quill": 
    try {
      const json = JSON.parse(content)
    } catch {
      WebShellApp.throw({error:"file-cannot-open"})
    }
    editor.setContents();
      break;
    case "text":
      editor.setText(content);
      break;
  }
})

WebShellApp.command('file-save',({format})=>{
  switch (format) {
    case "quill": 
      return {content: JSON.stringify(editor.getContents())}
    case "text":
      return {content: editor.getText()}
    case "html":
        return {content: document.getElementById("editor").firstElementChild.innerHTML}
    }
  
})

WebShellApp.command('file-new',()=>{
  editor.setText("")
})
