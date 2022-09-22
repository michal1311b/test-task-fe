export async function fetchUsers() {
  const response = await fetch("https://api.github.com/users?per_page=30");

  return await response.json();
}
