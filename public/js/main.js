import { form, search } from './Elements.js';
import GitData from './Data.js';

const handleSubmit = e => {
    e.preventDefault();
    if (search.value) {
        GitData(search.value);
        search.value = '';
    }
}
form.addEventListener('submit', handleSubmit);