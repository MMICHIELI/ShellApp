export class FeatureModel {
  constructor(
    public id: number,
    public label: string,
    public enable: boolean,
    public perimeter: string,
    public team: string
  ) {}
}
