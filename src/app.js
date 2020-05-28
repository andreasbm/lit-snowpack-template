import {sharedStyles} from "../styles/shared.js";
import {css, html, LitElement} from "lit-element";

/**
 * Entry point for the application.
 */
class App extends LitElement {

	/**
	 * Returns the styles of the element.
	 */
	static get styles () {
		return [
			sharedStyles,
			css`
			`
		];
	}

	/**
	 * Returns the properties of the element.
	 */
	static get properties () {
		return {
			name: {
				type: String
			}
		}
	}

	/**
	 * Returns the template of the element.
	 */
	render () {
		return html`
			<span>${this.name}</span>
		`;
	}
}

customElements.define("demo-app", App);