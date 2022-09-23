export async function fetchUsers() {
  const response = await fetch("https://api.github.com/users?per_page=30");

  return await response.json();
}

export async function fetchUserDetails(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  return await response.json();
}

export async function fetchUserRepos(username: string) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );

  return await response.json();
}
