window.onload = () => {
	const wSizes = () => {

		const meta = document.createElement('meta')
		meta.setAttribute('name', 'viewport')
		meta.setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"')

		const badge = document.createElement('div')
		document.getElementsByTagName('head')[0].append(meta);
		badge.className = 'w-sizes'
		badge.style.cssText = `
			padding: 5px;
			background: #000;
			position: fixed;
			right: 0;
			bottom: 0;
			z-index: 999999;
			color: #fff;
			font-size: 12px;
			border-radius: 3px;
		`
		document.body.append(badge)

		const wResize = () => {
			wWidth = document.documentElement.clientWidth
			wHeight = document.documentElement.clientHeight
			badge.innerText = `W: ${wWidth}px H: ${wHeight}px`
		}
		wResize()
		window.addEventListener('resize', wResize)
	}
	wSizes()
}



