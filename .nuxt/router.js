import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _18aef37a = () => import('..\\pages\\video.vue' /* webpackChunkName: "pages_video" */).then(m => m.default || m)
const _b2462910 = () => import('..\\pages\\scenario.vue' /* webpackChunkName: "pages_scenario" */).then(m => m.default || m)
const _0199813e = () => import('..\\pages\\configuration.vue' /* webpackChunkName: "pages_configuration" */).then(m => m.default || m)
const _298d29ec = () => import('..\\pages\\archive.vue' /* webpackChunkName: "pages_archive" */).then(m => m.default || m)
const _32b73fa4 = () => import('..\\pages\\grid.vue' /* webpackChunkName: "pages_grid" */).then(m => m.default || m)
const _54ebaab8 = () => import('..\\pages\\map.vue' /* webpackChunkName: "pages_map" */).then(m => m.default || m)
const _13209728 = () => import('..\\pages\\security.vue' /* webpackChunkName: "pages_security" */).then(m => m.default || m)
const _7413971a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/video",
			component: _18aef37a,
			name: "video"
		},
		{
			path: "/scenario",
			component: _b2462910,
			name: "scenario"
		},
		{
			path: "/configuration",
			component: _0199813e,
			name: "configuration"
		},
		{
			path: "/archive",
			component: _298d29ec,
			name: "archive"
		},
		{
			path: "/grid",
			component: _32b73fa4,
			name: "grid"
		},
		{
			path: "/map",
			component: _54ebaab8,
			name: "map"
		},
		{
			path: "/security",
			component: _13209728,
			name: "security"
		},
		{
			path: "/",
			component: _7413971a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
