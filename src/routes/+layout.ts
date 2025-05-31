
import type { LoadEvent } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

export async function load({ fetch }: LoadEvent) {
  const res = await fetch(PUBLIC_API_URL + '/info');
  const information = await res.json();


  return {
    information,
  };
}