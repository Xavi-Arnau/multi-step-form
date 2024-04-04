import { createContext, useContext, useReducer } from "react";

const RegFormContext = createContext();

export const useRegFormContext = () => {
  return useContext(RegFormContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PERSONAL_INFO": {
      return { ...state, personal: { ...action.data } };
    }
    case "PLAN_SELECT": {
      return { ...state, plan: { ...action.data } };
    }
    case "PICK_ADD-ONS": {
      return { ...state, addons: { ...action.data } };
    }
    case "CHANGE_PROGRESS": {
      return { ...state, progress: action.data };
    }

    default:
      return state;
  }
};

const RegFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { progress: 1 });

  return (
    <RegFormContext.Provider value={[state, dispatch]}>
      {children}
    </RegFormContext.Provider>
  );
};

export default RegFormProvider;
