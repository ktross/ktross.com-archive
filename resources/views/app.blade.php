<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Kyle Ross – Senior Full-Stack Developer – Detroit, MI</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <header>
                <div class="container">
                    <div class="row align-items-center">
                        <nav class="brand col-md-4 py-4">
                            <router-link to="/">
                                <app-logo light width="140"></app-logo>
                            </router-link>
                        </nav>
                        <nav class="main col-md-4 py-4">
                            <router-link to="/">Home</router-link>
                            <router-link to="/blog">Blog</router-link>
                            <router-link to="/projects">Projects</router-link>
                            <router-link to="/contact">Contact</router-link>
                        </nav>
                        <nav class="external col-md-4 py-4">
                            <a rel="noreferrer noopener" target="_blank" href="https://github.com/ktross" aria-label="GitHub"><i class="fab fa-github"></i></a>
                            <a rel="noreferrer noopener" target="_blank" href="https://gitlab.com/ktross" aria-label="GitLab"><i class="fab fa-gitlab"></i></a>
                            <a rel="noreferrer noopener" target="_blank" href="https://stackoverflow.com/users/158816/ktross" aria-label="Stack Overflow"><i class="fab fa-stack-overflow"></i></a>
                            <a rel="noreferrer noopener" target="_blank" href="https://stackexchange.com/users/53133/ktross" aria-label="Stack Exchange"><i class="fab fa-stack-exchange"></i></a>
                            <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/kyle.t.ross" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/kyleross/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <router-view></router-view>
            </main>
            <footer>
                <div class="container">
                    <div class="row align-items-end">
                        <section class="copyright col-md-4 py-4">
                            &copy;2008&ndash;{{ today()->format('Y') }} Kyle Ross
                        </section>
                        <section class="nav col-md-8 py-4">
                            <div class="external">
                                <a rel="noreferrer noopener" target="_blank" href="https://github.com/ktross" aria-label="GitHub"><i class="fab fa-github"></i></a>
                                <a rel="noreferrer noopener" target="_blank" href="https://gitlab.com/ktross" aria-label="GitLab"><i class="fab fa-gitlab"></i></a>
                                <a rel="noreferrer noopener" target="_blank" href="https://stackoverflow.com/users/158816/ktross" aria-label="Stack Overflow"><i class="fab fa-stack-overflow"></i></a>
                                <a rel="noreferrer noopener" target="_blank" href="https://stackexchange.com/users/53133/ktross" aria-label="Stack Exchange"><i class="fab fa-stack-exchange"></i></a>
                                <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/kyle.t.ross" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                                <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/kyleross/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                            </div>
                            <div class="internal">
                                <router-link to="/">Home</router-link>
                                <router-link to="/blog">Blog</router-link>
                                <router-link to="/projects">Projects</router-link>
                                <router-link to="/contact">Contact</router-link>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </div>
        <script type="application/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
