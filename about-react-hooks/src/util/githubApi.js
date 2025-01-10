export const getGitHubData = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}