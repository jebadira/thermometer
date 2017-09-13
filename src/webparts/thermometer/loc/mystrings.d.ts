declare interface IThermometerStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'thermometerStrings' {
  const strings: IThermometerStrings;
  export = strings;
}
