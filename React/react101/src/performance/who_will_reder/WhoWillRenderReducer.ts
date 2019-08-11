import { AnyAction } from "redux";

export interface IWhoWillRenderState {
  id: number,
  name: string,
  isMale: boolean;
}

const initState = { id: -1, name: "(empty)", isMale: false };
export const WhoWillRenderReducer = (state: IWhoWillRenderState = initState, action: AnyAction) => {
  switch (action.type) {
    case "WhoRender.changeId":
      return { ...state, id: action.payload.id };
    case "WhoRender.changeName":
      return { ...state, name: action.payload.name };
    case "WhoRender.changeSex":
      return { ...state, isMale: action.payload.isMale };
    default:
      return state;
  }
};