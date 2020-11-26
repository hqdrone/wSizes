window.onload = () => {
	const wSizes = () => {

		const meta = document.createElement('meta')
		meta.setAttribute('name', 'viewport')
		meta.setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"')
		document.getElementsByTagName('head')[0].append(meta);

		const wSize = document.createElement('div')
		wSize.className = 'w-size'
		wSize.style.cssText = `
			padding: 5px;
			background: #000;
			opacity: .5;
			position: fixed;
			right: 0;
			bottom: 0;
			z-index: 999999;
			color: #fff;
			font-size: 12px;
			border-radius: 3px;
		`
		document.body.append(wSize)

		const wResize = () => {
			windowWidth = window.innerWidth
			windowHeight = window.innerHeight
			contentWidth = document.documentElement.clientWidth
			contentHeight = document.documentElement.clientHeight
			wSize.innerHTML = `Window Width: ${windowWidth}px<br>
				Window Height: ${windowHeight}px<br>
				Content Width: ${contentWidth}px<br>
				Content Height: ${contentHeight}px`
		}
		wResize()
		window.addEventListener('resize', wResize)
	}

	wSizes()
}