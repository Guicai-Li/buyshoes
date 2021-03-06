.PHONY: css
css:
	mkdir -p bundle
	postcss --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: js
js:
	 babel --watch js/app.jsx --out-file  bundle/app.js

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: all
all:
	make css & make js & make server & wait

.PHONY: clean
clean:
	rm -r bundle
