import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./index.css";
import { createComponent } from "@lit-labs/react";
import React from "react";

interface MyObject {
    disabled: boolean;
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
    type: string;
    value: string;
}

@customElement('form-user-jffp')
export class FormUserJffp extends LitElement {
    static styles = css`
        .container {
            display: grid;
            grid-template-rows: auto auto;
            background:    var(--body-bg, #f5f5dc);
            color:         var(--body-color, #1F1F6F);
            border:        var(--body-border,1px solid #1F1F6F);
            border-radius: var(--body-border-radius,0.2rem);
            padding:       var(--body-padding, 2rem);
            padding:       var(--body-padding, 2rem);
            font-family:   var(--font-family, Helvetica);
            font-size:     var(--form-font-size, 20px);
            font-weight:   var(--form-font-weight, 400);
        }

        from {
            grid-column: 1/-1;
        }

        label {
            min-width: 8rem;
            margin-right: 1rem;
            text-align: left;
        }

        input {
            width: 100%;
            box-sizing: border-box;

            padding: 6px 10px;
            margin: 1% 0;

            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .infoInputs {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }

        .button-submit {
            grid-column: -1;
            justify-self: flex-end;
            background-color: var(--button-bg, #f5f5dc);
            color:            var(--button-color, #1F1F6F);
            border:           var(--button-border,1px solid #1F1F6F);
            border-radius:    var(--button-border-radius,0.2rem);
            margin-top: 2rem;
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            transition: background-color 0.3s;
            font-family: var(--font-family, Helvetica);
            font-size:   var(--button-font-size, 16px);
            font-weight: var(--button-font-weight, 400);
        }

        .button-submit:hover {
            background-color: var(--button-hover-color, white);
        }
    `

    @property({ type: Array }) inputLabels: Array<MyObject> = [];
    @property({ type: String, attribute: 'get-api-url' }) getApiUrl: string = '';

    constructor() {
        super();
        this.inputLabels = [];
        this.getApiUrl = '';
      }
    

      private async submitForm(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
      
        const form = this.shadowRoot?.querySelector("form") ?? null;
        if (!form) return;
      
        const formData = new FormData(form);
        const data: { [key: string]: FormDataEntryValue } = {};
        for (const [key, value] of formData.entries()) {
          data[key] = value;
        }
      
        console.log(data);
        console.log(JSON.stringify(data));
        console.log(this.getApiUrl);
        
        try {
          const response = await fetch(this.getApiUrl, {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
          }
      
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      
    

    render() {
        return html`
        <div class="container">
          <form @submit=${this.submitForm}>
          ${Array.isArray(this.inputLabels)
            ? this.inputLabels.map((label: MyObject) => html`
                  <div class="infoInputs">
                    <label>${label.label}:</label>
                    <input type="${label.type}" name=${label.name.toLowerCase()} placeholder=${label.placeholder} value="${label.value}" ?disabled=${label.disabled} ?required=${label.required}/>
                  </div>
                `
              )
            : 'There is a problem with the information.'}
            <button class="button-submit" type="submit">Submit</button>
          </form>
        </div>
        `;
      }
}

declare global {
    interface HMTLElementTagNameMap {
        'form-user-jffp': FormUserJffp
    }
}

export const FormUserJffpReact = createComponent(
    React,
    'form-user-jffp-react',
    FormUserJffp, {
        'onIconClick': 'icon-click'
    }
)