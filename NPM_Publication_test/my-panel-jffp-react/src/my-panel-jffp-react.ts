import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { createComponent } from "@lit-labs/react";
import React from "react";

@customElement('my-panel-jffp-react')
export class MyPanelJffpReact extends LitElement {
    static styles = css`
        .title {
            background: var(--my-panel-jffp-react-primary-bg, lightgreen);
            color: var(--my-panel-jffp-react-primary-color, #222);
            padding: 0.8rem;
            border-radius: 1rem 1rem 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease-in-out
        }

        .title.closed {
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }

        .body {
            padding: 1rem;
            border: 1px solid aquamarine
        }
    `
    @property({ type: String})
    title = 'WIDGET'

    @property({ type: String})
    icon = '1'

    @property({ type: Boolean})
    opened = false

    private onIconClickHandler(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('icon-click', {bubbles: true}))
    }

    render() {
        return html`
        <div> 
            <div class="${classMap({ 'title': true, 'closed': !this.opened})}" @click=${() => this.opened = !this.opened}> 
                ${this.title}
                <div @click=${this.onIconClickHandler}>${this.icon}</div>
            </div>

            ${when(
                this.opened,
                () => html`<div class="body"> 
                <slot></slot>
                </div>`
            )}

            
        </div>
        `
    }
}

declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp-react': MyPanelJffpReact
    }
}

export const MyPanelJffpReactExport = createComponent(
    React,
    'my-panel-jffp-react',
    MyPanelJffpReact, {
        'onIconClick': 'icon-click'
    }
)