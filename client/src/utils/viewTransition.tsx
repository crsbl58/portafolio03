import { ExtendedDocument } from "@/interface/config";

const viewTransition = (actionF: any = () => {}) => {
  let extendedDocument = document as ExtendedDocument;
  extendedDocument.startViewTransition(() => {
    return actionF();
  });
};
export default viewTransition;
