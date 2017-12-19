# React Native Boilerplate

- written in typescript
- in order to use it, fetch the repo and call react-native init [ProjectName] to create /ios and /android folders
- edit index.js: change: "import App from './App'" to import App from './src/index'


run react-native init <project_name>

cd ./project_name

rm index.js App.js

git clone url... (src, rn-cli,config.js, tsconfig.json, tslint.json, index.js)

open index.js and rename the component from 'ecourt' to project_name

npm install --save typescript tslib redux react-redux @types/jasmine @types/react @types/react-native @types/react-redux @types/react-test-renderer
npm install --save-dev react-native-cli react-native-typescript-transformer ts-jest @types/jest

Change package.json so these attributes matches
{
	"scripts": {
		"start": "node_modules/.bin/react-native start --transformer node_modules/react-native-typescript-transformer/index.js --sourceExts ts,tsx"
	},
	"jest": {
		"preset": "react-native",
		"transform": {
			"^.+\\.tsx?$": "ts-jest"
		},
		"testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
		"moduleFileExtensions": [
			"ts",
			"tsx",
			"js",
			"jsx",
			"json"
		]
	}
}
