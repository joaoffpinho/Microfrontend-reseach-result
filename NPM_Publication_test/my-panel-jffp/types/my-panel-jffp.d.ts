import { LitElement } from "lit";
export declare class MyPanelJffp extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    icon: string;
    GetApiUrl: string;
    workers: never[];
    opened: boolean;
    private onIconClickHandler;
    private onGetWorkersClickHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp': MyPanelJffp;
    }
}
export declare const MyPanelJffpReact: import("@lit-labs/react").ReactWebComponent<MyPanelJffp, {
    onIconClick: string;
}>;
