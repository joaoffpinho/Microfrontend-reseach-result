import { LitElement } from "lit";
import "./index.css";
export declare class FormUserJffp extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    password: string;
    email: string;
    constructor();
    GetApiUrl: string;
    private submitForm;
    render(): import("lit-html").TemplateResult<1>;
    handleName(e: {
        target: {
            value: string;
        };
    }): void;
    handlePassword(e: {
        target: {
            value: string;
        };
    }): void;
    handleEmail(e: {
        target: {
            value: string;
        };
    }): void;
}
declare global {
    interface HMTLElementTagNameMap {
        'form-user-jffp': FormUserJffp;
    }
}
export declare const FormUserJffpReact: import("@lit-labs/react").ReactWebComponent<FormUserJffp, {
    onIconClick: string;
}>;
