import { Footer } from './components/footer/footer.js';
import { Form } from './components/form/form.js';
import { Header } from './components/header/header.js';
import { List } from './components/list/list.js';
import { Main } from './components/main/main.js';
const components = [
    new Header('#root'),
    new Main('#root'),
    new Form('main'),
    new List('main'),
    new Footer('#root'),
];
