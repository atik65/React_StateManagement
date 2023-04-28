import { counterModel } from "./counterModel";
import { historyModel } from "./historyModel";

const storeModel = {
  count: counterModel,
  history: historyModel,
};

export default storeModel;
