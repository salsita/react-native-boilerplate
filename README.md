# React Native Boilerplate

Why should you use it instead of pure react-native init?
- augmented with typescript, redux and jest
- nice initial demo
- neat directory structure that scales (you are not bound to use it though!)


## Installation Instructions

- fetch the repo (`git clone git@github.com:salsita/react-native-boilerplate.git`)
- rename it to your project (`mv react-native-boilerplate YOUR_PROJECT_NAME`)
- initialize a react native project (`react-native init YOUR_PROJECT_NAME`). You will be prompted that the directory already exists and if you want to proceed. Type "yes".
- change directory (`cd YOUR_PROJECT_NAME`)
- install packages and typescript additions
  - `npm install`
  - `npm install --save typescript tslib redux react-redux @types/jasmine @types/react @types/react-native @types/react-redux @types/react-test-renderer`
  - `npm install --save-dev react-native-cli react-native-typescript-transformer ts-jest @types/jest`
- overwrite a few keys in package.json:
  - value at key path `scripts.start` should be `"node_modules/.bin/react-native start --transformer node_modules/react-native-typescript-transformer/index.js --sourceExts ts,tsx"`
  - value at key path `jest` should be 
  ```
    {
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
- edit index.js: change `import App from './App'` to `import App from './src/index'` and you can also remove the `App.js`
- DONE!
