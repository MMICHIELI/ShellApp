/**
 * Created by mmichieli on 04/02/2018.
 */
export class ActionModel {

  public displayEditButton: boolean = false;
  public displayDuplicateButton: boolean = false;
  public displayReturnButton: boolean = false;
  public displayValidationButton: boolean = false;
  public displayAddNewRightButton: boolean = false;
  public displaySubmitToValidationButton: boolean = false;
  public displayPostButton: boolean = false;
  public displayUpdateButton: boolean = false;
  public displayDeleteButton: boolean = false;
  public displayAddButton: boolean = false;
  public displayCancelButton: boolean = false;
  public displayCreateDuplicateButton: boolean = false;
  public displaySignButton: boolean = false;
  public displayProtectButton: boolean = false;
  public displayDownloadDraftPdfButton: boolean = false;
  public displayDownloadPdfButton: boolean = false;
  public displayAddInSessionButton: boolean = false;
  public displayUpdateInSessionButton: boolean = false;
  public displayUndoConfirmButton: boolean = false;

  constructor() {
  }

  public isAllFalse() {
    let isAllFalse = true;

    if (this.displayEditButton === true) {
      isAllFalse = false;
    }
    if (this.displayDuplicateButton === true) {
      isAllFalse = false;
    }
    if (this.displayReturnButton === true) {
      isAllFalse = false;
    }
    if (this.displayValidationButton === true) {
      isAllFalse = false;
    }

    if (this.displayAddNewRightButton === true) {
      isAllFalse = false;
    }

    if (this.displaySubmitToValidationButton === true) {
      isAllFalse = false;
    }
    if (this.displayPostButton === true) {
      isAllFalse = false;
    }
    if (this.displayUpdateButton === true) {
      isAllFalse = false;
    }
    if (this.displayDeleteButton === true) {
      isAllFalse = false;
    }
    if (this.displayAddButton === true) {
      isAllFalse = false;
    }
    if (this.displayCancelButton === true) {
      isAllFalse = false;
    }
    if (this.displayCreateDuplicateButton === true) {
      isAllFalse = false;
    }
    if (this.displaySignButton === true) {
      isAllFalse = false;
    }
    if (this.displayProtectButton === true) {
      isAllFalse = false;
    }
    if (this.displayDownloadDraftPdfButton === true) {
      isAllFalse = false;
    }
    if (this.displayAddInSessionButton === true) {
      isAllFalse = false;
    }
    if (this.displayUpdateInSessionButton === true) {
      isAllFalse = false;
    }
    if (this.displayUndoConfirmButton === true) {
      isAllFalse = false;
    }
    return isAllFalse;
  }
}
