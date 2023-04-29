import counterModel from "./counterModel/counterModel";
import historyModel from "./historyModel/historyModel";

const storeModel = {
  count: counterModel,
  history: historyModel,
};

export default storeModel;
