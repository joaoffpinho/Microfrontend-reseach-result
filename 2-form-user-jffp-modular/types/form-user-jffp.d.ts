import { LitElement } from "lit";
import "./index.css";
interface MyObject {
    disabled: boolean;
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
    type: string;
    value: string;
}
export declare class FormUserJffp extends LitElement {
    static styles: import("lit").CSSResult;
    inputLabels: Array<MyObject>;
    getApiUrl: string;
    constructor();
    private submitForm;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HMTLElementTagNameMap {
        'form-user-jffp': FormUserJffp;
    }
}
export declare const FormUserJffpReact: import("@lit-labs/react").ReactWebComponent<FormUserJffp, {
    onIconClick: string;
}>;
export {};
