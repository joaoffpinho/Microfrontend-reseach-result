import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { createComponent } from "@lit-labs/react";
import React from "react";

@customElement('my-panel-jffp')
export class MyPanelJffp extends LitElement {
    static styles = css`
        .title {
            background: var(--my-panel-jffp-primary-bg, lightgreen);
            color: var(--my-panel-jffp-primary-color, #222);
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

    @property({type: URL})
    GetApiUrl = ''

    @property({type: Array})
    workers = []

    @property({ type: Boolean})
    opened = false

    private onIconClickHandler(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('icon-click', {bubbles: true}))
    }

    private onGetWorkersClickHandler(e: MouseEvent) {
        e.stopPropagation();
        fetch(this.GetApiUrl)
            .then((response) => response.json())
            .then((json) => {
                this.workers = json;
                console.log(this.workers);
                }
            )
    }

    render() {
        return html`
        <div> 
            <div class="${classMap({ 'title': true, 'closed': !this.opened})}" @click=${() => this.opened = !this.opened}> 
                ${this.title}
                <button @click=${this.onGetWorkersClickHandler}>getWorkers</button>
                <div @click=${this.onIconClickHandler}>${this.icon}</div>
            </div>

            ${when(
                this.opened,
                () => html`<div class="body">
                <slot name="topList"></slot>
                
                <ul>
                ${this.workers?.map((worker) =>
                    html`<li>${worker['name']} - ${worker['email']}</li>`
                )}
                </ul>
                <slot name="bottomList"></slot>
                </div>`
            )}

            
        </div>
        `
    }
}

declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp': MyPanelJffp
    }
}

export const MyPanelJffpReact = createComponent(
    React,
    'my-panel-jffp-react',
    MyPanelJffp, {
        'onIconClick': 'icon-click'
    }
)