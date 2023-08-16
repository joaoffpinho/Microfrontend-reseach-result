import { LitElement } from "lit";
export declare class MyPanelJffpReact extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    icon: string;
    opened: boolean;
    private onIconClickHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp-react': MyPanelJffpReact;
    }
}
export declare const MyPanelJffpReactExport: import("@lit-labs/react").ReactWebComponent<MyPanelJffpReact, {
    onIconClick: string;
}>;
