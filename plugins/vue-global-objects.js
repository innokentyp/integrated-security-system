import Vue from 'vue'

Vue.use(
	{
		install (Vue, options) {
			console.log('install vue-global-objects')

			// Page Transition
			Vue.pages = {
				'index': 'Home',
			  'map': 'Карта',
			  'video': 'Видеонаблюдение',        
        'grid': 'Командная сетка',
        'archive': 'Архив',
        'configuration': 'Конфигурация',
        'scenario': 'Сценарий',
        'security': 'Безопасность'
			}

	    Vue.pageTransition = function (to, from) {
	    	var pageOrder = Object.keys(Vue.pages)

			  if (from) {
			    return pageOrder.indexOf(to.name) < pageOrder.indexOf(from.name) ? 'slide-right' : 'slide-left'  
			  } 

			  return 'slide-left'
			}
	  }
	}
)