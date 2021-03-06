/* generated by Svelte vX.Y.Z */
import { assign, children, claimElement, createElement, detachNode, init, insertNode, noop, proto } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		l: function claim(nodes) {
			div = claimElement(nodes, "DIV", { "class": true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detachNode);
			this.h();
		},

		h: function hydrate() {
			div.className = "foo";
		},

		m: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		p: noop,

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		var nodes = children(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(detachNode);
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;