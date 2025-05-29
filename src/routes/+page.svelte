<!-- START HOME -->
<script>
    import SvelteSeo from "svelte-seo";
    import Home1 from "$lib/components/home1.svelte";
    import Home2 from "$lib/components/home2.svelte";

    const { data } = $props();
</script>

<SvelteSeo
    title="Simple page title"
    description="Simple description about a page"
/>

<Home1 />
<!-- <Home2/> -->

<!-- <div class="position-relative">
    <div class="shape overflow-hidden text-white position-absolute">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="width: 100%;"
            height="250"
            preserveAspectRatio="none"
            viewBox="0 0 1440 250"
        >
            <g mask="url(&quot;#SvgjsMask1006&quot;)" fill="none">
                <path
                    d="M 0,246 C 288,210 1152,102 1440,66L1440 250L0 250z"
                    fill="rgba(255, 255, 255, 1)"
                ></path>
            </g>
            <defs>
                <mask id="SvgjsMask1006">
                    <rect width="1440" height="250" fill="#ffffff"></rect>
                </mask>
            </defs>
        </svg>
    </div>
</div> -->
<!-- END HOME -->

<!-- START Services -->
<section class="section" id="services">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-5">
                    <h3>Layanan Kami</h3>
                    <p class="text-muted">
                        Layanan Kami adalah solusi digital untuk mengembangkan
                        bisnis dan institusi anda
                    </p>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-chart-areaspline"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">Digital Design</h6>
                            <p class="text-muted">
                                Layanan desain digital untuk kebutuhan branding,
                                promosi, dan pengembangan bisnis Anda.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-web"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">Web Application</h6>
                            <p class="text-muted">
                                Layanan pembuatan aplikasi web untuk otomasi
                                bisnis, sistem informasi, dan solusi digital
                                berbasis web sesuai kebutuhan Anda.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-cellphone-android"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">Mobile Application</h6>
                            <p class="text-muted">
                                Layanan pembuatan aplikasi mobile (Android/iOS)
                                agar bisnis dan layanan Anda mudah diakses
                                pengguna di mana saja.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-desktop-mac"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">Desktop Application</h6>
                            <p class="text-muted">
                                Layanan pembuatan aplikasi desktop untuk
                                kebutuhan bisnis atau institusi Anda, memastikan
                                performa tinggi dan kemudahan integrasi dengan
                                sistem yang sudah ada.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-application"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">
                                SaaS (Software as a Service)
                            </h6>
                            <p class="text-muted">
                                Layanan pengembangan dan penyediaan aplikasi
                                SaaS (Software as a Service) yang dapat diakses
                                secara online, memudahkan bisnis Anda dalam
                                mengelola operasional tanpa perlu infrastruktur
                                tambahan.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6">
                <div class="feature-box card border-0 mt-3">
                    <div class="card-body">
                        <div class="feature-icon mx-auto">
                            <i class="mdi mdi-leaf"></i>
                        </div>
                        <div class="mt-4">
                            <h6 class="mb-3 fs-17">Training & Workshop</h6>
                            <p class="text-muted">
                                Layanan pelatihan dan workshop untuk
                                meningkatkan kemampuan tim Anda di bidang
                                teknologi, pengembangan perangkat lunak, dan
                                transformasi digital.
                            </p>
                        </div>
                        <div class="feature-link">
                            <a
                                href="#"
                                class="text-primary text-decoration-underline"
                                >Learn More <i class="mdi mdi-arrow-right"
                                ></i></a
                            >
                        </div>
                    </div>
                    <!--end card-body-->
                </div>
                <!--end feature-box-->
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!-- END FEATURES -->

<!-- START Process -->
<section class="section bg-light">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-4">
                    <h3>How It Works?</h3>
                    <p class="text-muted">
                        Proses kerja kami dimulai dari memahami kebutuhan Anda,
                        merancang solusi yang tepat, hingga mengembangkan dan
                        mengimplementasikan teknologi terbaik untuk bisnis Anda.
                    </p>
                </div>
            </div>
            <!--end col-->
            <div class="col-lg-10">
                <div class="timeline-page position-relative py-4">
                    <div class="timeline-item mb-lg-5 pb-5">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="text-center mb-5 mb-lg-0">
                                    <img
                                        src="images/work-1.png"
                                        alt="Work"
                                        class="img-fluid"
                                    />
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-6">
                                <div
                                    class="works-description-right text-start bg-light mx-lg-3 mx-4"
                                >
                                    <h5 class="fs-18">Ceritakan ide Anda</h5>
                                    <p class="text-muted mb-0">
                                        Kami siap mendengarkan kebutuhan dan ide
                                        Anda untuk dikembangkan menjadi solusi
                                        digital yang tepat guna. Tim kami akan
                                        membantu merancang dan mewujudkan visi
                                        Anda dengan teknologi terbaik.
                                    </p>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end timeline-item-->

                    <div class="timeline-item mb-5 pb-5">
                        <div class="row">
                            <div class="col-lg-6">
                                <div
                                    class="works-description-left text-start bg-light mx-lg-3 mx-4 text-lg-end"
                                >
                                    <h5 class="fs-18">
                                        Diskusikan kebutuhan Anda
                                    </h5>
                                    <p class="text-muted mb-0">
                                        Setelah memahami ide Anda, kami akan
                                        berdiskusi lebih lanjut untuk merumuskan
                                        kebutuhan dan tujuan bisnis Anda secara
                                        detail. Proses ini memastikan solusi
                                        yang kami tawarkan benar-benar sesuai
                                        harapan dan memberikan nilai tambah
                                        maksimal.
                                    </p>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-6 order-first order-lg-last">
                                <div class="text-center mb-5 mb-lg-0">
                                    <img
                                        src="images/work-2.png"
                                        alt="Work"
                                        class="img-fluid"
                                    />
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end timeline-item-->
                    <div class="timeline-item">
                        <div class="row align-items-start">
                            <div class="col-lg-6">
                                <div class="text-center mb-5 mb-lg-0">
                                    <img
                                        src="images/work-3.png"
                                        alt="Work"
                                        class="img-fluid"
                                    />
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-6">
                                <div
                                    class="works-description-right text-start bg-light mx-lg-3 mx-4"
                                >
                                    <h5 class="fs-18">Riset & Pengembangan</h5>
                                    <p class="text-muted mb-0">
                                        Setelah kebutuhan dan tujuan bisnis Anda
                                        jelas, tim kami akan melakukan riset dan
                                        pengembangan untuk merancang solusi
                                        digital yang inovatif, efektif, dan
                                        sesuai dengan kebutuhan Anda. Kami
                                        memastikan setiap solusi yang dihasilkan
                                        dapat diimplementasikan dengan baik dan
                                        memberikan dampak positif bagi bisnis
                                        Anda.
                                    </p>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </div>
                    <!--end timeline-item-->
                </div>
                <!-- timeline-page -->
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!-- END Process -->

<!-- START CTA -->
<section class="bg-cta" style="background-image: url('images/bg-cta01.jpg');">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center text-white">
                    <h3 class="mb-3">Video Presentation</h3>
                    <p>
                        Mulai bekerja dengan Torkata Tech Solution yang dapat
                        menyediakan semua yang Anda butuhkan untuk meningkatkan
                        awareness, mendatangkan traffic, dan membangun koneksi.
                    </p>
                    <a
                        href="#presentationVideo"
                        class="play-btn mt-4"
                        data-bs-toggle="modal"
                        aria-label="video"
                    >
                        <i class="mdi mdi-play text-white"></i>
                    </a>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!-- END CTA -->

<!-- START CLIENTS -->
<section
    class="section bg-client bg-light"
    id="client"
    style="background-image: url('images/bg.jpg');background-size: cover;"
>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="text-center mb-5">
                    <h3>Apa yang dikatakan oleh client kami?</h3>
                    <p class="text-muted mt-2 mb-0">
                        Klien kami sangat puas dengan layanan yang kami berikan,
                        mulai dari konsultasi hingga implementasi solusi digital
                        yang efektif dan inovatif.
                    </p>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="swiper-container testimonialslider">
                    <div class="swiper-wrapper pb-5">
                        <div class="swiper-slide">
                            <div
                                class="testimonial-box text-center card border-0"
                            >
                                <div>
                                    <div
                                        class="testi-img position-relative d-inline-block"
                                    >
                                        <img
                                            src="images/users/img1.jpg"
                                            alt=""
                                            class="img-fluid rounded-circle"
                                        />
                                        <div class="quote-icon">
                                            <i class="mdi mdi-format-quote-open"
                                            ></i>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h6 class="mb-0 fs-17">
                                            David Strange
                                        </h6>
                                        <p class="text-muted mb-0">Chicago</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-0">
                                        " Very well thought out and articulate
                                        communication. Clear milestones,
                                        deadlines and fast work. Patience.
                                        Infinite patience. No shortcuts. Even if
                                        the client is being careless. The best
                                        part...always solving problems with
                                        great original ideas!. "
                                    </p>
                                </div>
                                <!--end card-body-->
                            </div>
                            <!--end testimonial-box-->
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="testimonial-box text-center card border-0"
                            >
                                <div>
                                    <div
                                        class="testi-img position-relative d-inline-block"
                                    >
                                        <img
                                            src="images/users/img2.jpg"
                                            alt=""
                                            class="img-fluid rounded-circle"
                                        />
                                        <div class="quote-icon">
                                            <i class="mdi mdi-format-quote-open"
                                            ></i>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h6 class="mb-0 fs-17">
                                            John Emmanuel
                                        </h6>
                                        <p class="text-muted mb-0">
                                            New Jersey
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-0">
                                        " It looks perfect on all major
                                        browsers, tablets, and mobile devices.
                                        All files are organized we believe it
                                        will be easy to use and edit them. This
                                        template is well organized and very easy
                                        to customize. We have added a Dark
                                        version with RTL supported. "
                                    </p>
                                </div>
                                <!--end card-body-->
                            </div>
                            <!--end testimonial-box-->
                        </div>
                        <div class="swiper-slide">
                            <div
                                class="testimonial-box text-center card border-0"
                            >
                                <div>
                                    <div
                                        class="testi-img position-relative d-inline-block"
                                    >
                                        <img
                                            src="images/users/img4.jpg"
                                            alt=""
                                            class="img-fluid rounded-circle"
                                        />
                                        <div class="quote-icon">
                                            <i class="mdi mdi-format-quote-open"
                                            ></i>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <h6 class="mb-0 fs-17">
                                            Charlize Theron
                                        </h6>
                                        <p class="text-muted mb-0">
                                            Washington
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-0">
                                        " All your client websites if you are an
                                        agency or freelancer. It got all the
                                        tools needs to create super fast
                                        responsive websites with amazing user
                                        experience. Our ever-growing library of
                                        components and pre-designed layouts will
                                        make your life easier. "
                                    </p>
                                </div>
                                <!--end card-body-->
                            </div>
                            <!--end testimonial-box-->
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <!--end col-->
        <div class="row row-cols-md-5 row-cols-1 mt-4">
            <div class="col">
                <div class="client-images text-center mt-4">
                    <img
                        src="images/clients/01.png"
                        alt="img1"
                        class="img-fluid"
                    />
                </div>
            </div>
            <!--end col-->
            <div class="col">
                <div class="client-images text-center mt-4">
                    <img
                        src="images/clients/02.png"
                        alt="img2"
                        class="img-fluid"
                    />
                </div>
            </div>
            <!--end col-->
            <div class="col">
                <div class="client-images text-center mt-4">
                    <img
                        src="images/clients/03.png"
                        alt="img3"
                        class="img-fluid"
                    />
                </div>
            </div>
            <!--end col-->
            <div class="col">
                <div class="client-images text-center mt-4">
                    <img
                        src="images/clients/04.png"
                        alt="img4"
                        class="img-fluid"
                    />
                </div>
            </div>
            <!--end col-->
            <div class="col">
                <div class="client-images text-center mt-4">
                    <img
                        src="images/clients/05.png"
                        alt="img5"
                        class="img-fluid"
                    />
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!-- END CLIENTS -->

<!-- START FEATURE  -->
<!-- <section class="section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="features-box">
                    <h3 class="mb-4">We are digital creative Landing Page</h3>
                    <p class="text-muted mb-4">
                        The difference between a successful person and others is
                        not a lack of strength, not a lack of knowledge, but
                        rather a lack of will.Composed in a pseudo-Latin
                        language which more or less pseudo-Latin language
                        corresponds.
                    </p>
                    <div class="row" id="counter">
                        <div class="col-md-5 col-6">
                            <div>
                                <h5 class="counter_value" data-target="4954">
                                    &nbsp;
                                </h5>
                                <h6 class="text-muted">Happy User</h6>
                            </div>
                        </div>
                        <div class="col-md-5 col-6">
                            <div>
                                <h5 class="counter_value" data-target="1599">
                                    &nbsp;
                                </h5>
                                <h6 class="text-muted">Complate Project</h6>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="#" class="btn btn-primary"
                            >Learn More <i class="mdi mdi-arrow-right"></i></a
                        >
                    </div>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
                <div class="text-center mt-5 mt-lg-0">
                    <img
                        src="images/features.png"
                        alt="Features"
                        class="img-fluid"
                    />
                </div>
            </div>
        </div>
    </div>
</section> -->
<!-- END FEATURE -->

<!-- START PRICING -->
<!-- <section class="section bg-light" id="price">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-4">
                    <h3>Our Pricing</h3>
                    <p class="text-muted mt-2">
                        It is a long established fact that a reader will be of a
                        page when established fact looking at its layout.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="price-box card border-0 mt-4">
                    <div class="text-center">
                        <h5 class="mb-0">Starter</h5>
                    </div>
                    <div class="plan-price text-center mt-4">
                        <h1 class="text-primary mb-0 display-4 fw-medium">
                            <sup>$</sup>9<sub class="text-muted">/month</sub>
                        </h1>
                    </div>
                    <div class="price-features mt-5">
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Bandwidth:
                            <span class="fw-medium float-end">1GB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Onlinespace:
                            <span class="fw-medium float-end">500MB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-close text-primary"></i> Support:
                            <span class="fw-medium float-end">No</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Domain:
                            <span class="fw-medium float-end">1</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Hidden
                            Fees: <span class="fw-medium float-end">No</span>
                        </p>
                    </div>
                    <div class="text-center mt-4">
                        <a href="#" class="btn btn-outline-primary w-100"
                            >Join Now</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="price-box card border-0 mt-4">
                    <div class="ribbon">20% sale</div>
                    <div class="text-center">
                        <h5 class="mb-0">Advanced</h5>
                    </div>
                    <div class="plan-price text-center mt-4">
                        <h1 class="text-primary mb-0 display-4 fw-medium">
                            <sup>$</sup>19<sub class="text-muted">/month</sub>
                        </h1>
                    </div>
                    <div class="price-features mt-5">
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Bandwidth:
                            <span class="fw-medium float-end">2GB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Onlinespace:
                            <span class="fw-medium float-end">1GB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Support:
                            <span class="fw-medium float-end">Yes</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Domain:
                            <span class="fw-medium float-end">3</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Hidden
                            Fees: <span class="fw-medium float-end">No</span>
                        </p>
                    </div>
                    <div class="text-center mt-4">
                        <a href="#" class="btn btn-primary w-100">Join Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="price-box card border-0 mt-4">
                    <div class="text-center">
                        <h5 class="mb-0">Professional</h5>
                    </div>
                    <div class="plan-price text-center mt-4">
                        <h1 class="text-primary mb-0 display-4 fw-medium">
                            <sup>$</sup>29<sub class="text-muted">/month</sub>
                        </h1>
                    </div>
                    <div class="price-features mt-5">
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Bandwidth:
                            <span class="fw-medium float-end">3GB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i>
                            Onlinespace:
                            <span class="fw-medium float-end">2GB</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Support:
                            <span class="fw-medium float-end">Yes</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Domain:
                            <span class="fw-medium float-end">Unlimited</span>
                        </p>
                        <p>
                            <i class="mdi mdi-check text-primary"></i> Hidden
                            Fees: <span class="fw-medium float-end">No</span>
                        </p>
                    </div>
                    <div class="text-center mt-4">
                        <a href="#" class="btn btn-outline-primary w-100"
                            >Join Now</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->
<!-- END PRICING -->

<!-- START FAQ -->
<!-- <section class="section" id="faq">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-5 pb-2">
                    <h3>How can we Help you?</h3>
                    <p class="text-muted mt-2">
                        It is a long established fact that a reader will be of a
                        page when established fact looking at its layout.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="mb-4 pb-2">
                    <div class="faq d-flex">
                        <div class="icon flex-shrink-0 me-3">?</div>
                        <div class="content">
                            <h5 class="fs-17">Design Your FAQ Page?</h5>
                            <p class="text-muted mb-0">
                                If your FAQ page does consist of multiple pages,
                                then one critical element you'll need to
                                consider is your navigation bar. If your search
                                bar is tricky to use or doesn't yield desired
                                results, customers.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <div class="faq d-flex">
                        <div class="icon flex-shrink-0 me-3">?</div>
                        <div class="content">
                            <h5 class="fs-17">
                                Monitor the FAQ Page's Performance?
                            </h5>
                            <p class="text-muted mb-0">
                                In this detailed guide, we’re going to dive deep
                                into the whole concept of FAQs. To discover
                                their main purpose and to find out how it can
                                help generate more sales and leads for your
                                business.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mb-4 pb-2">
                    <div class="faq d-flex">
                        <div class="icon flex-shrink-0 me-3">?</div>
                        <div class="content">
                            <h5 class="fs-17">
                                Why you should make an FAQ page?
                            </h5>
                            <p class="text-muted mb-0">
                                Every business and product website comes with a
                                set of default pages like an “About” page,
                                “Contact” page, “Privacy Policy” page, and more.
                                A FAQ page is one of the few must-have pages on
                                this list.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mb-4 pb-4">
                    <div class="faq d-flex">
                        <div class="icon flex-shrink-0 me-3">?</div>
                        <div class="content">
                            <h5 class="fs-17">Regularly update each page?</h5>
                            <p class="text-muted mb-0">
                                Most online support teams spend hours of their
                                valuable time every day answering these general
                                questions. While it could’ve been easily avoided
                                by placing a FAQs section on the website.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="query-form">
                    <h6 class="fs-18">Have any quetions?</h6>
                    <p class="text-muted">Send your quetions in our mail</p>
                    <form action="#">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter your email"
                            />
                            <button class="btn btn-primary" type="submit"
                                >submit</button
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section> -->
<!-- END FAQ -->

<!-- START ABOUT -->
<section class="section" id="about">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="text-center">
                    <h3>
                        Kami adalah tim dinamis yang terdiri dari talenta
                        inovatif & ahli di bidang teknologi
                    </h3>
                    <p class="text-muted pt-2">
                        Kami berkomitmen menghadirkan solusi digital terbaik
                        melalui kolaborasi, kreativitas, dan keahlian di bidang
                        IT untuk mendukung pertumbuhan bisnis dan institusi
                        Anda.
                    </p>
                </div>
            </div>
        </div>
        <!--end row-->

        <div class="row justify-content-center mt-5">
            <div class="col-md-6 col-lg-3">
                <div class="text-center mt-3">
                    <h3>
                        <span class="counter_value" data-target="1499">120</span
                        ><span>+</span>
                    </h3>
                    <p class="text-muted">Complete Projects</p>
                </div>
            </div>
            <!--end col-->

            <div class="col-md-6 col-lg-3">
                <div class="text-center mt-3">
                    <h3>
                        <span class="counter_value" data-target="1080">120</span
                        ><span>K</span>
                    </h3>
                    <p class="text-muted">Satisfied Clients</p>
                </div>
            </div>
            <!--end col-->

            <div class="col-md-6 col-lg-3">
                <div class="text-center mt-3">
                    <h3 class="counter_value" data-target="608">0</h3>
                    <p class="text-muted">Team Members</p>
                </div>
            </div>
            <!--end col-->

            <div class="col-md-6 col-lg-3">
                <div class="text-center mt-3">
                    <h3 class="counter_value" data-target="252">0</h3>
                    <p class="text-muted">Employee</p>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->

        <!-- START TEAM -->
        <div class="row mt-5">
            {#each data.home.data.teams as team}
            <div class="col-md-6 col-lg-3">
                <div class="card team-box border-0 bg-transparent mt-3">
                    <div class="position-relative mx-auto">
                        <img
                            src="{team.photo}"
                            alt="team"
                            height="200"
                            class="img-fluid rounded-circle img-thumbnail"
                        />
                        <ul class="team-social list-unstyled">
                            <li>
                                <a href="{team.linkedin}" class="primary-link" aria-label="LinkedIn"
                                    ><i class="mdi mdi-linkedin"></i></a
                                >
                            </li>
                            <li class="my-1">
                                <a href="{team.instagram}" class="primary-link" aria-label="Instagram"
                                    ><i class="mdi mdi-instagram"></i></a
                                >
                            </li>
                            <li>
                                <a href="{team.github}" class="primary-link" aria-label="Github"
                                    ><i class="mdi mdi-github"></i></a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="card-body text-center">
                        <h6 class="mb-0">
                            <a href="#" class="primary-link">{team.name}</a>
                        </h6>
                        <p class="text-muted fs-14 mb-0">{team.position ?? "-"}</p>
                    </div>
                </div>
                <!--end card-->
            </div>
            {/each}
            <!--end col-->

        </div>
        <!--end row-->
        <!--END TEAM-->
    </div>
    <!--end container-->
</section>
<!-- END ABOUT -->

<!-- START CTA -->
<section class="bg-cta" style="background-image: url('images/bg-cta02.jpg');">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="text-center text-white">
                    <h2 class="mb-3">
                        Mari mulai bersama Torkata Tech Solution
                    </h2>
                    <p class="text-white-50 mb-0">
                        Kami siap membantu Anda membangun solusi digital yang
                        inovatif, efektif, dan efisien untuk mendukung
                        pertumbuhan bisnis dan institusi Anda.
                    </p>
                    <div class="mt-4 pt-4">
                        <a
                            href="#subscribe"
                            class="btn btn-outline-white"
                            data-bs-toggle="modal">Mulai</a
                        >
                    </div>
                </div>
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!-- END CTA -->

<!-- START BLOG -->
<section class="section" id="blog">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-4">
                    <h3>Blog & Artikel</h3>
                    <p class="text-muted mt-2 mb-0">
                        Temukan insight, tips, dan berita terbaru seputar
                        teknologi, pengembangan digital, serta update dari
                        Torkata Tech Solution.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">

            <!-- {data.home.news} -->
            {#each data.home.data.news as news}
                <!-- <li>{news}</li> -->
                <div class="col-lg-4 col-md-6">
                    <div class="card blog-box border-0 mt-4">
                        <div class="blog-img position-relative">
                            <img
                                src="{news.thumbnail}"
                                alt="Blog"
                                style="height: 250px; object-fit: cover;"
                                class="img-fluid rounded"
                            />
                            <div class="bg-overlay rounded"></div>
                            <div class="author">
                                <h6 class="fs-16 mb-0">
                                    <i
                                        class="mdi mdi-account-outline fs-17 align-middle me-1"
                                    ></i>
                                    {news.author.name}
                                </h6>
                                <small
                                    ><i
                                        class="mdi mdi-clock-outline fs-17 align-middle me-1"
                                    ></i> {news.created_at}</small
                                >
                            </div>
                        </div>
                        <div class="mt-3">
                            <a href="#" class="primary-link">
                                <h6 class="fs-20">
                                    {news.author.title}
                                </h6>
                            </a>
                            <p class="text-muted">
                                {news.content.substring(0, 100)}... 
                            </p>
                            <div class="mt-3">
                                <a href="#" class="text-primary"
                                    >Read More <i
                                        class="mdi mdi-arrow-right align-middle"
                                    ></i></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
<!-- END BLOG -->

<!--start contact-->
<section class="section bg-light" id="contact">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="text-center mb-5">
                    <h3>Hubungi Kami</h3>
                    <p class="text-muted mt-2">
                        Silakan hubungi kami untuk konsultasi, pertanyaan, atau
                        kebutuhan solusi digital Anda. Tim kami siap membantu
                        Anda!
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="contact-details mb-4 mb-lg-0">
                    <p class="mb-3">
                        <i
                            class="mdi mdi-email-outline align-middle text-muted fs-20 me-2"
                        ></i> <span class="fw-medium">{data.information.data.information.email}</span>
                    </p>
                    <p class="mb-3">
                        <i
                            class="mdi mdi-web align-middle text-muted fs-20 me-2"
                        ></i> <span class="fw-medium">www.torakatatech.com</span>
                    </p>
                    <p class="mb-3">
                        <i
                            class="mdi mdi-phone align-middle text-muted fs-20 me-2"
                        ></i> <span class="fw-medium">{data.information.data.information.phone}</span>
                    </p>
                    <p class="mb-3">
                        <i
                            class="mdi mdi-hospital-building text-muted fs-20 me-2"
                        ></i> <span class="fw-medium">08:00 - 22:00</span>
                    </p>
                    <p class="mb-3">
                        <i
                            class="mdi mdi-map-marker-outline text-muted fs-20 me-2"
                        ></i>
                        <span class="fw-medium"
                            >{data.information.data.information.address}</span
                        >
                    </p>
                </div>
                <!--end contact-details-->
            </div>
            <!--end col-->
            <div class="col-lg-7">
                <form
                    method="post"
                    onsubmit={validateForm()}
                    class="contact-form"
                    name="myForm"
                    id="myForm"
                >
                    <span id="error-msg"></span>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="position-relative mb-3">
                                <span class="input-group-text"
                                    ><i class="mdi mdi-account-outline"
                                    ></i></span
                                >
                                <input
                                    name="name"
                                    id="name"
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your name*"
                                />
                            </div>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-6">
                            <div class="position-relative mb-3">
                                <span class="input-group-text"
                                    ><i class="mdi mdi-email-outline"></i></span
                                >
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter your email*"
                                />
                            </div>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-12">
                            <div class="position-relative mb-3">
                                <span class="input-group-text"
                                    ><i class="mdi mdi-file-document-outline"
                                    ></i></span
                                >
                                <input
                                    name="subject"
                                    id="subject"
                                    type="text"
                                    class="form-control"
                                    placeholder="Subject"
                                />
                            </div>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-12">
                            <div class="position-relative mb-3">
                                <span class="input-group-text align-items-start"
                                    ><i class="mdi mdi-comment-text-outline"
                                    ></i></span
                                >
                                <textarea
                                    name="comments"
                                    id="comments"
                                    rows="4"
                                    class="form-control"
                                    placeholder="Enter your message*"
                                ></textarea>
                            </div>
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->
                    <div class="row">
                        <div class="col-sm-12 text-end">
                            <input
                                type="submit"
                                id="submit"
                                name="send"
                                class="btn btn-primary"
                                value="Send Message"
                            />
                        </div>
                        <!-- end col -->
                    </div>
                    <!-- end row -->
                </form>
                <!--end form-->
            </div>
            <!--end col-->
        </div>
        <!--end row-->
    </div>
    <!--end container-->
</section>
<!--end contact-->
