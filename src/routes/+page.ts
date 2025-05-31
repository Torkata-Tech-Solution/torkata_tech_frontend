
import type { LoadEvent } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ fetch }: LoadEvent) {
  const res = await fetch(PUBLIC_API_URL + '/home');
  const home = await res.json();

  // console.log('Home data:', home.data.news);


  return {
    home,
  };
}