<script lang="ts">
	import '../app.css';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input
	} from 'flowbite-svelte';

	let { children, data } = $props();

	import { onMount } from 'svelte';

	onMount(() => {
		const navbar = document.getElementById('mainNavbar');
		const handleScroll = () => {
			if (!navbar) return;
			if (window.scrollY > 0) {
				navbar.setAttribute('data-sticky', 'true');
			} else {
				navbar.removeAttribute('data-sticky');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header>
	<nav
		id="mainNavbar"
		data-sticky="false"
		class="group fixed start-0 top-0 z-40 w-full border-gray-200 bg-transparent py-2.5 data-[sticky=true]:border-b data-[sticky=true]:bg-white dark:bg-transparent dark:data-[sticky=true]:border-gray-700 dark:data-[sticky=true]:bg-gray-800"
	>
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
			<a href="../../" class="flex items-center">
				<img src="{data.information.data.information.logo}" class="mr-3 h-8" alt="Logo" />
				
			</a>
			<div class="flex items-center lg:order-2">
				<DarkMode class="me-2" />
				<button
					data-drawer-target="drawer-navigation"
					data-drawer-show="drawer-navigation"
					aria-controls="drawer-navigation"
					class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
				>
					Hubungi Kami
				</button>
				<button
					id="mobile-menu-button"
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-300 group-data-[sticky=true]:text-gray-500 hover:bg-gray-100 focus:ring-gray-600 focus:outline-none lg:hidden dark:text-gray-300 group-data-[sticky=true]:dark:text-gray-400 dark:hover:bg-gray-700"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg
						class="hidden h-6 w-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div
				class="mt-2 hidden w-full items-center justify-between bg-white lg:order-1 lg:mt-0 lg:flex lg:w-auto lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent"
				id="mobile-menu-2"
			>
				<ul class="flex flex-col rounded-lg font-medium lg:flex-row lg:space-x-8">
					<li>
						<a
							href=""
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							aria-current="page">Home</a
						>
					</li>
					<li>
						<a
							href="../../services/services-1/"
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							>Company</a
						>
					</li>
					<li>
						<a
							href="#"
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							>About</a
						>
					</li>
					<li>
						<a
							href="#"
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							>Services</a
						>
					</li>
					<li>
						<a
							href="#"
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:border-0 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							>Team</a
						>
					</li>
					<li>
						<a
							href="#"
							class="hover:!text-primary-500 lg:group-data-[sticky=true]:hover:!text-primary-700 dark:lg:group-data-[sticky=true]:hover:!text-primary-500 block py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 lg:p-0 lg:text-white lg:group-data-[sticky=true]:text-gray-900 lg:hover:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:lg:group-data-[sticky=true]:text-white lg:dark:hover:bg-transparent"
							>Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<main class="w-full antialiased">
	{@render children()}
</main>
<footer class="border-t border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
		<div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
			<div class="col-span-2">
				<a
					href="/"
					class="mb-2 flex items-center text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
				>
					<img src="{data.information.data.information.logo}" alt="" class="mr-3 h-18" />
				</a>
				<p class="my-4 text-gray-500 dark:text-gray-400">
					{ data.information.data.information.address} <br>
					No. Telp: { data.information.data.information.phone} <br>
					Email: { data.information.data.information.email}
				</p>
				<ul class="mt-5 flex space-x-6">
					<li>
						<a
							href="{data.information.data.information.facebook}"
							class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="{data.information.data.information.instagram}"
							class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="{data.information.data.information.twitter}"
							class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							href="{data.information.data.information.github}"
							class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
			<div class="lg:mx-auto">
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white">About</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white">Careers</a
						>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white">Blog</a>
					</li>
				</ul>
			</div>
			<div class="lg:mx-auto">
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
					Help center
				</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white"
							>Discord Server</a
						>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white"
							>Facebook
						</a>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white"
							>Contact Us</a
						>
					</li>
				</ul>
			</div>
			<div class="lg:mx-auto">
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white"
							>Privacy Policy</a
						>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white"
							>Licensing</a
						>
					</li>
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white">Terms</a>
					</li>
				</ul>
			</div>
			<div class="lg:mx-auto">
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ext Link</h2>
				<ul class="text-gray-500 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:text-gray-900 hover:underline dark:hover:text-white">Etc.</a>
					</li>
				</ul>
			</div>
		</div>

		<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

		<span class="block text-center text-sm text-gray-500 dark:text-gray-400"
			>© {new Date().getFullYear()}
		 Torkata Tech solution - PT. Torkata jaya Persada</span>
	</div>
</footer>
