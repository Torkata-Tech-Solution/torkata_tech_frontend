export async function load({ fetch }) {
  const res = await fetch('https://admin.torkatatech.com/api/v1/info');
  const information = await res.json();


  return {
    information,
  };
}