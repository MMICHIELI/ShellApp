import { ActionModel } from './new/action.model';
/**
 * Created by zsouiki on 13/02/2017.
 */
export abstract class ActionForm {

  public actionModel: ActionModel = new ActionModel();

  constructor() {
  }

  public abstract post(): void;

  public abstract put(): void;

}
