//[x] панель с настройками
//[ ] сами настройки 1) компилятор 2) показать ключи компиляции 3) скомпилировать и показать ASM и C-код

//[ ] 2 вида - для ASM и C
// 1) https://code.visualstudio.com/api/references/contribution-points#contributes.customEditors
// 2) посмотреть как сделано с MD https://github.com/shd101wyy/vscode-markdown-preview-enhanced

//[ ] настройки на отдельной панели https://code.visualstudio.com/api/references/contribution-points#contributes.configuration

//[ ] предлагать расширение, когда выделен файл С или CPP - посмотреть как сделано в расширении
// 1) посмотреть как сделано с MD https://github.com/shd101wyy/vscode-markdown-preview-enhanced

// панель инструментов в редакторе https://code.visualstudio.com/api/ux-guidelines/editor-actions


// https://code.visualstudio.com/api/references/contribution-points#contributes.views
// https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers
// https://code.visualstudio.com/api/ux-guidelines/sidebars#primary-sidebar



// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Method is called when extension is activated
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "compilerexplorer" is now active!');
	//TODO search for the compilers
	//TODO fill sidepanel with options

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('compilerexplorer.helloWorld', () => {
		// command contents
		vscode.window.showInformationMessage('Hello World from CompilerExplorer!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	//
}
