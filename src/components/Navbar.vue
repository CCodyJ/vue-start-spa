<template>
    <nav 
                class="navbar navbar-expand-sm"
                :class="navbarClasses">
                    <a class="navbar-brand" href="#">My Portfolio</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <navbar-link
                                v-for="(page, index) in publishedPages" class="nav-item active" :key="index"
                                :page="page"
                                :index="index"
                                :isActive="activePage == index"
                                @activated="$emit('activated')"
                            ></navbar-link>
                            <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="#">Action 1</a>
                                    <a class="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button 
                                class="btn btn-primary"
                                @click.prevent="toggleNavbarColor()"
                                >{{ useDarkNavbar ? 'Toggle Light' : 'Toggle Dark' }}</button>
                        </form>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
</template>


<script>
import NavbarLink from './NavbarLink.vue';

export default 
    {
            components: {
                NavbarLink
            },
            created() {
                this.getNavClassSetting();
            },

            props: ['pages', 'activePage'],
            computed: {
                navbarClasses() {
                    return {
                        'navbar-light': !this.useDarkNavbar,
                        'bg-light': !this.useDarkNavbar, 
                        'navbar-dark': this.useDarkNavbar,
                        'bg-dark': this.useDarkNavbar
                    }
                },
                publishedPages () {
                    return this.pages.filter(p => p.published);
                }
            },
            data() {
                return {
                    useDarkNavbar: false,
                }
            },
            mounted() {
    this.getNavClassSetting();
  },
            methods: {
                toggleNavbarColor() {
                    this.useDarkNavbar = !this.useDarkNavbar;
                    this.storeNavClassSetting();
                },
                    storeNavClassSetting() {
                    localStorage.setItem('useDarkNavbar', JSON.stringify(this.useDarkNavbar));
                },
                    getNavClassSetting() {
                    const useDarkNavbar = JSON.parse(localStorage.getItem('useDarkNavbar'));
                    if (useDarkNavbar !== null) {
                    this.useDarkNavbar = useDarkNavbar;
                        }
                    }
                }
            };
</script>