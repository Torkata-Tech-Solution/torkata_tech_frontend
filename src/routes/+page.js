// src/routes/about/+page.js
export async function load({ fetch }) {
  const res = await fetch('https://admin.torkatatech.com/api/v1/home');
  const home = await res.json();

  console.log('Home data:', home.data.news);
  

  return {
    home,
  };
}