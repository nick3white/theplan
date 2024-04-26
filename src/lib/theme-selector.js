class ThemeSelector extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({
			mode: 'open'
		});

		const style = document.createElement('style');

		style.textContent = `
            :host {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
                display: flex;
                gap: 3px;
                padding: 3px;
            }
            .theme-btn {
                flex: 1;
                border: 1px solid var(--background);
                background-size: cover;
                background-position: center;
                display: block;
                height: 50px;
                position: relative;
            }
            .theme-btn:focus , .theme-btn:hover  {
                border: 1px solid var(--foreground);
            }
            .swatches {
            width: 100%;
              display: flex;
              flex-direction: column;
              list-style-type: none;
              margin: 0;
              padding: 0;

            }
            .swatch {
            margin: 0;
            padding: 0;
            height: 30px;
            width: 100%;
            background-color: var(--color);
            }
        `;
		this.shadowRoot.appendChild(style);
	}

	connectedCallback() {
		let themes;
		if (this.hasAttribute('themes')) {
			themes = this.getAttribute('themes').split(',');
		}
		function setTheme(theme) {
			themes.forEach((t) => document.body.classList.remove(t));
			if (theme) {
				document.body.classList.add(theme);
			}
		}

		let defaultLightTheme, defaultDarkTheme, defaultTheme;
		if (this.hasAttribute('defaultLightTheme')) {
			defaultLightTheme = this.getAttribute('defaultLightTheme');
		}
		if (this.hasAttribute('defaultDarkTheme')) {
			defaultDarkTheme = this.getAttribute('defaultDarkTheme');
		}
		if (this.hasAttribute('defaultTheme')) {
			defaultTheme = this.getAttribute('defaultTheme');
		}
		themes.forEach((theme) => {
			const button = document.createElement('button');
			button.setAttribute('id', theme);
			button.classList.add('theme-btn', theme);
			button.style.backgroundImage = `url('/theplan/images/thumbs/${theme}.webp')`;

			button.addEventListener('click', () => setTheme(theme));

			// const swatches = document.createElement('ul');

			// swatches.classList.add('swatches');
			// swatches.classList.add(theme);

			// Array.from({ length: 9 }).forEach((_, i) => {
			// 	const swatch = document.createElement('li');
			// 	swatch.classList.add('swatch');
			// 	swatch.setAttribute('style', `--color: rgb(var(--color${i}));`);
			// 	swatches.appendChild(swatch);
			// });
			// button.appendChild(swatches);
			this.shadowRoot.appendChild(button);
		});
		// const dmtheme = themes[themes.length - 1]
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		// const prefersDark = false
		const isDarkMode = localStorage.getItem('darkmode') === true;
		const hardSetLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

		if (prefersDark || isDarkMode) {
			document.body.classList.add('dark');
			// setTheme('dark');
		} else if (hardSetLightMode) {
			document.body.classList.add('light');
			// setTheme('light');
		}
		setTheme(defaultTheme);
	}
}
customElements.define('theme-selector', ThemeSelector);
