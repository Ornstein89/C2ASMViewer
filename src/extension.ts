
//[x] панель с настройками
//[ ] сами настройки 1) компилятор 2) показать ключи компиляции 3) скомпилировать и показать ASM и C-код

//[ ] 2 вида - для ASM и C
// 1) https://code.visualstudio.com/api/references/contribution-points#contributes.customEditors
// 2) посмотреть как сделано с MD https://github.com/shd101wyy/vscode-markdown-preview-enhanced

//[ ] настройки на отдельной панели https://code.visualstudio.com/api/references/contribution-points#contributes.configuration

//[ ] предлагать расширение, когда выделен файл С или CPP - посмотреть как сделано в расширении
// 1) посмотреть как сделано с MD https://github.com/shd101wyy/vscode-markdown-preview-enhanced

//[ ] подсветка соответствий между ASM и C
// vscode.DecorationOptions, vscode.TextEditor.setDecorations, https://github.com/MRobertEvers/vscode-compiler-explorer/blob/3758b9ec198229275656cd5117f0b432804faf53/src/compiler-view.ts#L234


// панель инструментов в редакторе https://code.visualstudio.com/api/ux-guidelines/editor-actions


// https://code.visualstudio.com/api/references/contribution-points#contributes.views
// https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers
// https://code.visualstudio.com/api/ux-guidelines/sidebars#primary-sidebar



// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require('path');
import * as vscode from 'vscode';
import   {AsmView} from "./asmview";

function find_cpp_compilers() : string[] {
	//TODO
	return [];
}

// Method is called when extension is activated
export function activate(context: vscode.ExtensionContext) {
	// vscode.window.
	const contentProvider = new AsmView(context);

	/*
	function openAsmViewToTheSide(uri?: vscode.Uri) {
		let resource = uri;
		if (!(resource instanceof vscode.Uri)) {
		  if (vscode.window.activeTextEditor) {
			// we are relaxed and don't check for markdown files
			resource = vscode.window.activeTextEditor.document.uri;
		  }
		}
		// contentProvider.initPreview(resource, vscode.window.activeTextEditor, {
		//   viewColumn: vscode.ViewColumn.Two,
		//   preserveFocus: true,
		// });
	}
	*/

	console.log('Congratulations, your extension "compilerexplorer" is now active!');
	//TODO ASAP search for the compilers
	//TODO ASAP fill sidepanel or options panel with options

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cpp-asm-viewer.openAsmViewToTheSide', async () => {
		// if(vscode.window.activeTextEditor.document.uri is String)
		const current_file_path = vscode.window.activeTextEditor?.document.fileName || "";
		const directory = current_file_path.slice(0, current_file_path.lastIndexOf("\\")) || current_file_path;
		// const workspacePath = vscode.workspace.getWorkspaceFolder(vscode.window.activeTextEditor.document.uri?.".");
		
		// открыть содержимое скомпилированного ASM-файла
		const document = await vscode.workspace.openTextDocument(
			
			// TODO ASAP open asm file by name after compilation
			vscode.Uri.file(path.join(directory, "example.asm"))

		);

		// отобразить документ в новой вкладке, во второй колонке
		// TODO представлять вкладку объектом, а не номером
		vscode.window.showTextDocument(document,2);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	//
}
