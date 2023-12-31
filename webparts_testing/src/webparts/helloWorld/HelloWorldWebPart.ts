import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { escape } from '@microsoft/sp-lodash-subset';

import "form-user-jffp";

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    this.domElement.innerHTML = `
    <section class="${styles.helloWorld} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
      <div class="${styles.welcome}">
        <img alt="" src="${this._isDarkTheme ? require('./assets/welcome-dark.png') : require('./assets/welcome-light.png')}" class="${styles.welcomeImage}" />
        <h2>Well done, ${escape(this.context.pageContext.user.displayName)}!</h2>
        <div>${this._environmentMessage}</div>
        <div>Web part property value: <strong>${escape(this.properties.description)}</strong></div>
      </div>
      <div>
        <form-user-jffp 
          class="${styles.formUserJffp}"
          inputLabels='[
            {
              "label":"Name",
              "name": "name", 
              "type": "text",
              "value": "name",
              "placeholder": "name",
              "required": true
            },
            {
              "label":"Email",
              "name": "email", 
              "type": "text",
              "placeholder": "Not needed for the time being",
              "disabled": true
            },
            {
              "label":"Password",
              "name": "password",
              "placeholder": "Needed for the time being",
              "type": "password"
            },
            {
              "label":"Address",
              "name": "address",
              "placeholder": "Address",
              "type": "text",
              "value": "Address"
            }]' 
          get-api-url="http://localhost:3000/usersUniqueName/register"
          ></form-user-jffp>
      </div>
    </section>`;
  }
  // get-api-url="https://n5kv.sharepoint.com/sites/DeveloperSite/_api/web/lists/getbytitle(Users)/items"

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              throw new Error('Unknown host');
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--bodyBackground', semanticColors.bodyBackground || null);
      this.domElement.style.setProperty('--bodyDivider', semanticColors.bodyFrameBackground || null);
      this.domElement.style.setProperty('--buttonBackground', semanticColors.bodyFrameBackground || null);
      this.domElement.style.setProperty('--buttonText', semanticColors.buttonText || null);
      this.domElement.style.setProperty('--buttonBorder', semanticColors.buttonBorder || null);
      this.domElement.style.setProperty('--buttonBackgroundHovered', semanticColors.buttonBackgroundHovered || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
