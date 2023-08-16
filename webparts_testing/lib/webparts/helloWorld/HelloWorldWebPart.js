var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import "form-user-jffp";
import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = '';
        return _this;
    }
    HelloWorldWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n    <section class=\"".concat(styles.helloWorld, " ").concat(!!this.context.sdks.microsoftTeams ? styles.teams : '', "\">\n      <div class=\"").concat(styles.welcome, "\">\n        <img alt=\"\" src=\"").concat(this._isDarkTheme ? require('./assets/welcome-dark.png') : require('./assets/welcome-light.png'), "\" class=\"").concat(styles.welcomeImage, "\" />\n        <h2>Well done, ").concat(escape(this.context.pageContext.user.displayName), "!</h2>\n        <div>").concat(this._environmentMessage, "</div>\n        <div>Web part property value: <strong>").concat(escape(this.properties.description), "</strong></div>\n      </div>\n      <div>\n        <form-user-jffp \n          class=\"").concat(styles.formUserJffp, "\"\n          inputLabels='[\n            {\n              \"label\":\"Name\",\n              \"name\": \"name\", \n              \"type\": \"text\",\n              \"value\": \"name\",\n              \"placeholder\": \"name\",\n              \"required\": true\n            },\n            {\n              \"label\":\"Email\",\n              \"name\": \"email\", \n              \"type\": \"text\",\n              \"placeholder\": \"Not needed for the time being\",\n              \"disabled\": true\n            },\n            {\n              \"label\":\"Password\",\n              \"name\": \"password\",\n              \"placeholder\": \"Needed for the time being\",\n              \"type\": \"password\"\n            },\n            {\n              \"label\":\"Address\",\n              \"name\": \"address\",\n              \"placeholder\": \"Address\",\n              \"type\": \"text\",\n              \"value\": \"Address\"\n            }]' \n          get-api-url=\"http://localhost:3000/usersUniqueName/register\"\n          ></form-user-jffp>\n      </div>\n    </section>");
    };
    // get-api-url="https://n5kv.sharepoint.com/sites/DeveloperSite/_api/web/lists/getbytitle(Users)/items"
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        return this._getEnvironmentMessage().then(function (message) {
            _this._environmentMessage = message;
        });
    };
    HelloWorldWebPart.prototype._getEnvironmentMessage = function () {
        var _this = this;
        if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
            return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
                .then(function (context) {
                var environmentMessage = '';
                switch (context.app.host.name) {
                    case 'Office': // running in Office
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
                        break;
                    case 'Outlook': // running in Outlook
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
                        break;
                    case 'Teams': // running in Teams
                        environmentMessage = _this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
                        break;
                    default:
                        throw new Error('Unknown host');
                }
                return environmentMessage;
            });
        }
        return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
    };
    HelloWorldWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
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
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return HelloWorldWebPart;
}(BaseClientSideWebPart));
export default HelloWorldWebPart;
//# sourceMappingURL=HelloWorldWebPart.js.map