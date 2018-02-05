/**
 * Created by gbray on 03/05/2017.
 */
export class TableActionButtons {

  public displayDeleteButton;
  public displayDuplicateButton;
  public displayAddButton;
  public displaySearchButton;

  constructor(displayDeleteButton: boolean, displayDuplicateButton: boolean, displayAddButton: boolean, displaySearchButton: boolean) {
    this.displayDeleteButton = displayDeleteButton;
    this.displayDuplicateButton = displayDuplicateButton;
    this.displayAddButton = displayAddButton;
    this.displaySearchButton = displaySearchButton;
  }
}
