import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'thermometerStrings';
import * as Thermometer from './dist/scripts/d60dad388a184e03910ed5e41b4fde3f.js';
import { IThermometerWebPartProps } from './IThermometerWebPartProps';

export default class ThermometerWebPart extends BaseClientSideWebPart<IThermometerWebPartProps> {

  public render(): void {
    const element = React.createElement(Thermometer.default, {});
    
    ReactDom.render(element, this.domElement);
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
