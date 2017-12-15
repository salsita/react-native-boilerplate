// This can be removed once resolved in CRA
// https://github.com/facebookincubator/create-react-app/issues/3199
import "tests/raf-polyfill"

import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })
