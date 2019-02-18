"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "Chartjs-markdown-preview" is now active!'
  );
  return {
    extendMarkdownIt(md) {
      const highlight = md.options.highlight;

      md.options.highlight = (code, lang) => {
        console.log("Lang is", lang);
        console.log("Code is", code.trim());
        if (lang && lang.match(/\bchart\b/i)) {
          return `<canvas class="chartjs">${code}</canvas>`;
        }

        return highlight(code, lang);
      };

      return md;
    }
  };
}

// this method is called when your extension is deactivated
export function deactivate() {}
