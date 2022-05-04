import { IFireboltJSON, IStep, IField } from "@/types/fireboltJSON";
import blankJSON from "./blankJSONBoilerplate";

export type JSONAction =
  | {
      type: "ADD_NEW_STEP";
      payload: IStep;
    }
  | {
      type: "EDIT_STEP";
      payload: any;
    }
  | {
      type: "DELETE_STEP";
      payload: string;
    }
  | {
      type: "DELETE_FIELD";
      payload: {
        step: string;
        field: string;
      };
    }
  | {
      type: "ADD_FIELD";
      payload: {
        step: string;
        field: IField;
      };
    }
  | {
      type: "EDIT_FIELD_STYLES";
      payload: {
        step: string;
        field: IField;
      };
    }
  | { type: "START_BLANK"; payload?: any }
  | { type: "START_WITH_JSON"; payload: IFireboltJSON }
  | {
      type: "ADD_FLOW";
      payload: {
        slug: string;
        steps: string[];
      };
    }
  | {
      type: "RENAME_FLOW";
      payload: {
        slug: string;
        newSlug: string;
      };
    }
  | {
      type: "REMOVE_FLOW";
      payload: {
        slug: string;
      };
    };

function reducer(state: IFireboltJSON, action: JSONAction) {
  const { type, payload } = action;

  const currentSteps = [...state.steps];

  switch (type) {
    case "START_BLANK": {
      return blankJSON;
    }
    case "ADD_FLOW": {
      return {
        ...state,
        tracks: [...state.tracks, payload],
      };
    }

    case "RENAME_FLOW": {
      const newFlowsArray = state.tracks.map((flow) => {
        if (flow.slug === payload.slug) {
          return { ...flow, slug: payload.newSlug };
        } else {
          return flow;
        }
      });

      return {
        ...state,
        tracks: newFlowsArray,
      };
    }

    case "REMOVE_FLOW": {
      const newFlowsArray = state.tracks.filter(
        (flow) => flow.slug !== payload.slug
      );

      return {
        ...state,
        tracks: newFlowsArray,
      };
    }

    case "ADD_NEW_STEP": {
      return {
        ...state,
        steps: [...state.steps, payload],
      };
    }
    case "EDIT_STEP": {
      const newCurrentSteps = currentSteps.map((step) => {
        if (step.step.slug === payload.slug) {
          return { step: payload.step };
        }

        return step;
      });

      return {
        ...state,
        steps: newCurrentSteps,
      };
    }
    case "DELETE_STEP": {
      const newCurrentSteps = currentSteps.filter(
        (step) => step.step.slug !== payload
      );

      return {
        ...state,
        steps: newCurrentSteps,
      };
    }
    case "EDIT_FIELD_STYLES": {
      const newCurrentSteps = currentSteps.map((step) => {
        if (step.step.slug === payload.step) {
          const newCurrentFields = step.step.fields.map(field => {
            if(field.slug === payload.field.slug) {
              return payload.field
            }

            return field
          })

          step.step.fields = newCurrentFields
        }

        return step;
      });

      console.log(newCurrentSteps)

      return {
        ...state,
        steps: newCurrentSteps,
      };
    }
    case "DELETE_FIELD": {
      const newCurrentSteps = currentSteps.map((step) => {
        if (step.step.slug === payload.step) {
          const newCurrentFields = step.step.fields.filter(
            (field) => field.slug !== payload.field
          );
          step.step.fields = newCurrentFields;
        }

        return { ...step };
      });

      return {
        ...state,
        steps: newCurrentSteps,
      };
    }
    default:
      return state;
  }
}

export default reducer;
