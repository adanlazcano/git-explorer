import Api from './Api.js';
import Profile from './Profile.js';
import { Repositories } from './Repositories.js';

const GitData = async user => {
    try {
        const res = await fetch(`${Api}${user}`);
        const data = await res.json();
        Profile(data);
        !data.message && Repositories(`${Api}${user}`);
    } catch (error) {
        console.log(error);
    }
}

export default GitData;