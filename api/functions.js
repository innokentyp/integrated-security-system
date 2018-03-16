export function test () {
	console.log('test')
}

var pages = {
  'index': 0,
  'video': 1,
  'access-control': 2,
  'security-alarm': 3,
  'fire-safety': 4
}

export function page_transition (to, from) {
  if (from) {
    return pages[to.name] < pages[from.name] ? 'slide-right' : 'slide-left'  
  } 

  return 'slide-left'
}