import { ActionModel } from './new/action.model';
/**
 * Created by zsouiki on 13/02/2017.
 */
export abstract class ActionConsult {

  public actionModel: ActionModel = new ActionModel();

  constructor() {
  }

  public abstract duplicate(): void;

  public abstract edit(): void;

  public abstract delete(): void;
}
