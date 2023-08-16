import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./index.css";
import { createComponent } from "@lit-labs/react";
import React from "react";

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
            font-family:   var(--font-family, Helvetica);
            font-size:     var(--form-font-size, 20px);
            font-weight:   var(--form-font-weight, 400);
        }

        from {
            grid-column: 1/-1;
        }

        input {
            width: fit-content;
            padding: 6px 10px;
            margin: 1% 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .infoInputs {
            margin-top: 2%;
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

    @property({type: String, reflect: true})
    name: string;

    @property({type: String, reflect: true})
    password: string;
    
    @property({type: String, reflect: true})
    email: string;
    
    constructor() {
        super();
        this.name = ''
        this.password = ''
        this.email = ''
    }

    @property({type: URL})
    GetApiUrl = ''

    

    private async submitForm(e: MouseEvent){
        e.stopPropagation();
        console.log(this.name, this.password, this.email);
        await fetch(this.GetApiUrl, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                password: this.password,
                email: this.email,
              })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            }
        )
    }

    render() {
        return html`
        <div class="container"> 
            <form>
                <div class="infoInputs">
                    <label for="name">Name:</label>
                    <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    .value=${this.name} 
                    @input="${this.handleName}" 
                    required/>
                </div>
                <div class="infoInputs">
                    <label for="password">Password:</label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    .value=${this.password} 
                    @input="${this.handlePassword}" 
                    required/>
                </div>
                <div class="infoInputs">
                    <label for="email">Email:</label>
                    <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    .value=${this.email} 
                    @input="${this.handleEmail}" 
                    required/>
                </div>
            </form>
            <button class="button-submit" type="submit" @click=${this.submitForm}>Submit</button>
        </div>
        `
    }

    handleName(e: { target: { value: string; }; }) {
        this.name = e.target.value;
      }
    handlePassword(e: { target: { value: string; }; }) {
        this.password = e.target.value;
      }
    handleEmail(e: { target: { value: string; }; }) {
        this.email = e.target.value;
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