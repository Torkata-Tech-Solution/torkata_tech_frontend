<script>
    const { children, data } = $props();
</script>

<!--start page Loader -->
<!-- <div id="preloader">
    <div id="status">
        <div class="load">
            <hr />
            <hr />
            <hr />
            <hr />
        </div>
    </div>
</div> -->
<!--end page Loader -->

<!-- START NAVBAR -->
<nav id="navbar" class="navbar navbar-expand-lg fixed-top sticky">
    <div class="container">
        <a class="navbar-brand" href="/"
            ><img src="logo.png" alt="" height="23" /></a
        >
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="mdi mdi-menu text-muted"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Layanan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#client">Client</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">Tentang</a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Blog <i class="mdi mdi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="nav-link" href="/blog">Semua</a></li>
                        {#each data.information.data.news_categories as category}
                            <li><a class="nav-link" href="/blog/category/{category.slug}">{category.name}</a></li>
                        {/each}
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Kontak</a>
                </li>
            </ul>
            <!--end navbar-nav-->
            <ul class="list-inline mb-0 ps-lg-4 ms-2">
                <li class="list-inline-item">
                    <a
                        href={data.information.data.information.linkedin}
                        class="primary-link"
                        aria-label="Linkedin"
                        ><i class="mdi mdi-linkedin"></i></a
                    >
                </li>
                <li class="list-inline-item">
                    <a
                        href={data.information.data.information.instagram}
                        class="primary-link"
                        aria-label="Intagram"
                        ><i class="mdi mdi-instagram"></i></a
                    >
                </li>
            </ul>
        </div>
        <!--end collapse-->
    </div>
    <!--end container-->
</nav>
<!-- END NAVBAR -->

{@render children()}

<!-- START FOOTER -->
<footer class="bg-dark section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <ul class="list-inline social-list mb-0">
                        <li class="list-inline-item">
                            <a
                                href={data.information.data.information
                                    .linkedin}
                                class="social-icon footer-link"
                                aria-label="LinkedIn"
                                ><i class="mdi mdi-linkedin"></i></a
                            >
                        </li>
                        <li class="list-inline-item">
                            <a
                                href={data.information.data.information
                                    .instagram}
                                class="social-icon footer-link"
                                aria-label="Instagram"
                                ><i class="mdi mdi-instagram"></i></a
                            >
                        </li>
                        <li class="list-inline-item">
                            <a
                                href={data.information.data.information
                                    .facebook}
                                class="social-icon footer-link"
                                aria-label="Facebook"
                                ><i class="mdi mdi-facebook"></i></a
                            >
                        </li>
                        <li class="list-inline-item">
                            <a
                                href={data.information.data.information.twitter}
                                class="social-icon footer-link"
                                aria-label="Twitter"
                                ><i class="mdi mdi-twitter"></i></a
                            >
                        </li>
                    </ul>
                    <!--end social-->
                </div>
                <div class="footer-terms">
                    <ul class="mb-0 list-inline text-center mt-4">
                        <li class="list-inline-item">
                            <a href="#" class="footer-link">Terms & Condition</a
                            >
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="footer-link">Privacy Policy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#" class="footer-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <!--end footer-terms-->
                <div class="mt-4 pt-2 text-center">
                    <p class="text-white-50 mb-0">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        &copy; {data.information.data.information.name} -
                        <a
                            href="https://themeforest.net/search/themesdesign"
                            class="text-muted">PT. Torkata Jaya Persada</a
                        >
                    </p>
                </div>
            </div>
            <!--end row-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</footer>
<!-- END FOOTER -->

<!-- Modal -->
<div class="modal fade" id="presentationVideo" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
            <div class="modal-body p-0">
                <div class="text-end">
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="ratio ratio-16x9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Tw_By9ymAFs?si=Wl3yWIT6k2cBZrdT"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <!--end modal-body-->
        </div>
        <!--end modal-content-->
    </div>
    <!--end modal-dialog-->
</div>
<!--end modal-->

<!--start subscribe-Modal -->
<div
    class="subscribe-modal modal fade"
    id="subscribe"
    tabindex="-1"
    aria-labelledby="subscribeform"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <!--end modal-header-->
            <div class="modal-body text-center pt-0">
                <img
                    src="images/subscribe.png"
                    alt="subscribe"
                    class="img-fluid"
                />
                <h5 class="modal-title mt-2 mb-2" id="subscribeform">
                    Subscribe
                </h5>
                <p class="text-muted mb-4">
                    Join your hand with us for a better life <br /> and beautiful
                    future.
                </p>
                <form action="#">
                    <div class="input-group mb-3">
                        <input
                            type="email"
                            class="form-control border"
                            id="subscribeemail"
                            placeholder="Enter your email"
                        />
                        <button
                            class="btn btn-primary btn-sm"
                            type="submit"
                            id="button-addon2">Subscribe</button
                        >
                    </div>
                </form>
            </div>
            <!--end modal-body-->
        </div>
        <!--end modal-content-->
    </div>
    <!--end modal-dialog-->
</div>
<!--end SUBSCRIBE modal-->

<!-- Style switcher -->
<!-- <div id="style-switcher" onclick="{toggleSwitcher()}" style="left: -189px;">
    <div>
        <h6>Select your color</h6>
        <ul class="pattern list-unstyled mb-0">
            <li>
                <a
                    class="color1"
                    href="javascript: void(0);"
                    onclick="{setColor('default')}"
                ></a>
            </li>
            <li>
                <a
                    class="color2"
                    href="javascript: void(0);"
                    onclick="{setColor('success')}"
                ></a>
            </li>
            <li>
                <a
                    class="color3"
                    href="javascript: void(0);"
                    onclick="{setColor('warning')}"
                ></a>
            </li>
            <li>
                <a
                    class="color4"
                    href="javascript: void(0);"
                    onclick="{setColor('orange')}"
                ></a>
            </li>
            <li>
                <a
                    class="color5"
                    href="javascript: void(0);"
                    onclick="{setColor('info')}"
                ></a>
            </li>
            <li>
                <a
                    class="color6"
                    href="javascript: void(0);"
                    onclick="{setColor('purple')}"
                ></a>
            </li>
        </ul>
    </div>
    <div class="bottom">
        <a href="javascript: void(0);" class="settings rounded-end"
            ><i class="mdi mdi-cog mdi-spin"></i></a
        >
    </div>
</div> -->
<!-- end switcher-->

<!--start back-to-top-->
<button onclick={topFunction()} id="back-to-top" aria-label="Back to top">
    <i class="mdi mdi-arrow-up"></i>
</button>
<!--end back-to-top-->
