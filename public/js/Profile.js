import { template, fragment, profileContainer } from './Elements.js';
const Profile = ({ login, avatar_url, name, bio, followers, following, public_repos }) => {

    profileContainer.innerHTML = '';

    profileContainer.classList.add('profile');

    if (login) {

        template.querySelector('img').setAttribute('src', avatar_url);
        template.querySelector('img').setAttribute('title', name);
        template.querySelector('h2').textContent = name;
        template.querySelector('p').textContent = bio;
        template.querySelector('ul').innerHTML = `
    
                                                <li>${followers} <strong>Followers</strong></li>
                                                <li>${following} <strong>Following</strong></li>
                                                <li>${public_repos} <strong>Repos</strong></li>
                                                `;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        profileContainer.appendChild(fragment);
    } else {
        profileContainer.innerHTML = `
        <h3>This user doesnt exist</h3>
        `;
    }
}

export default Profile;