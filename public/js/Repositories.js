import { repos, fragment, profileContainer } from './Elements.js';

const drawRepositories = arr => {
    return arr
        .slice(0, 5)
        .map(({ name, html_url }, i) => {

            repos.querySelector('a').setAttribute('href', html_url);
            repos.querySelector('a').textContent = name;
            const clone = repos.cloneNode(true);
            fragment.appendChild(clone);
            profileContainer.querySelector('.repos').appendChild(fragment);

        });
}

export const Repositories = async url => {
    try {
        const res = await fetch(`${url}/repos?sort=created`);
        const data = await res.json();
        drawRepositories(data);
    } catch (error) {
        console.log(error);
    }
}