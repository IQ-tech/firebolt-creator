import { IFireboltJSON, IStep, IField } from "@/types/fireboltJSON";
import blankJSON from "../blankJSONBoilerplate";
import { JSONAction } from "./reducer.types";

function reducer(state: IFireboltJSON, action: JSONAction): IFireboltJSON {
  const { type, payload } = action;
  const currentSteps = [...state.steps];

  switch (type) {
    case "START_BLANK": {
      return blankJSON;
    }

    case "START_WITH_JSON": {
      return payload;
    }

    case "ADD_FLOW": {
      return {
        ...state,
        tracks: [...state.tracks, payload],
      };
    }

    case "SET_EXPERIENCE_FBT_VERSION": {
      return {
        ...state,
        "$schema-version": payload.experienceFbtVersion,
      };
    }

    case "SET_EXPERIENCE_VERSION": {
      return {
        ...state,
        "$form-version": payload?.experienceVersion,
      };
    }

    case "SET_EXPERIENCE_NAME": {
      return {
        ...state,
        name: payload.experienceName,
      };
    }

    case "SET_EXPERIENCE_DESCRIPTION": {
      return {
        ...state,
        business: payload?.newDescription, //  todo change to description later
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

    case "CHANGE_FLOW_STEPS": {
      const newTracks = state.tracks.map((flow) => {
        if (flow.slug === payload.slug) {
          return { slug: flow.slug, steps: payload.newSteps };
        }
        return flow;
      });

      return {
        ...state,
        tracks: newTracks,
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

    case "ADD_FIELD": {
      const templateField: IField = {
        slug: payload.fieldSlug,
        "ui:props": {},
        "ui:widget": "Text",
        "ui:styles": {
          size: "full",
        },
      };

      const stepToAddField = state.steps.find(
        (step) => step.step.slug === payload.step
      ) as IStep;

      const newFieldsArray: IField[] = [
        ...stepToAddField.step.fields,
        templateField,
      ];
      const newStep: IStep = {
        step: {
          ...stepToAddField.step,
          fields: newFieldsArray,
        },
      };

      const newSteps = state.steps.map((step) => {
        if (step.step.slug === stepToAddField.step.slug) {
          return newStep;
        }
        return step;
      });

      return {
        ...state,
        steps: newSteps,
      };
    }

    case "DELETE_FIELD": {
      const currentSteps = state?.steps;
      const stepToModify = currentSteps.find(
        (step) => step?.step?.slug === payload?.stepSlug
      );
      const newStepFields = stepToModify?.step?.fields?.filter(
        (field) => field?.slug !== payload.field
      ) as IField[];

      const newStep: IStep = {
        step: {
          ...stepToModify!.step,
          fields: newStepFields,
        },
      };

      const newSteps = state.steps.map((step) => {
        if (step.step.slug === newStep.step.slug) return newStep;
        return step;
      });

      return {
        ...state,
        steps: newSteps,
      };
    }

    case "MOVE_FIELD_UP": {
      const stepToModify = currentSteps.find(
        (step) => step?.step?.slug === payload.stepSlug
      );

      const modifiedFields = (() => {
        const fields = stepToModify?.step.fields || [];
        const fieldsCopy = [...fields];
        const originalFieldIndex = fields.findIndex(
          (field) => field.slug === payload.fieldSlug
        );
        const isFirstItem = originalFieldIndex === 0;
        if (isFirstItem) return fields;
        const toIndex = originalFieldIndex - 1;
        const field = fields[originalFieldIndex];
        fieldsCopy.splice(originalFieldIndex, 1);
        fieldsCopy.splice(toIndex, 0, field);
        return fieldsCopy;
      })();

      const newStep: IStep = {
        step: {
          ...stepToModify!.step,
          fields: modifiedFields,
        },
      };

      const newSteps = currentSteps.map((step) => {
        if (step.step.slug === newStep.step.slug) {
          return newStep;
        }
        return step;
      });

      return { ...state, steps: newSteps };
    }

    case "MOVE_FIELD_DOWN": {
      const stepToModify = currentSteps.find(
        (step) => step?.step?.slug === payload.stepSlug
      );

      const modifiedFields = (() => {
        const fields = stepToModify?.step.fields || [];
        const fieldsCopy = [...fields];
        const originalFieldIndex = fields.findIndex(
          (field) => field.slug === payload.fieldSlug
        );
        const isLastItem = originalFieldIndex === fields.length - 1;
        if (isLastItem) return fields;
        const toIndex = originalFieldIndex + 1;
        const field = fields[originalFieldIndex];
        fieldsCopy.splice(originalFieldIndex, 1);
        fieldsCopy.splice(toIndex, 0, field);
        return fieldsCopy;
      })();

      const newStep: IStep = {
        step: {
          ...stepToModify!.step,
          fields: modifiedFields,
        },
      };

      const newSteps = currentSteps.map((step) => {
        if (step.step.slug === newStep.step.slug) {
          return newStep;
        }
        return step;
      });

      return { ...state, steps: newSteps };
    }

    case "MOVE_FIELD_TO_STEP": {
      const stepToRemoveField = state.steps.find(
        (step) => step.step.slug === payload.fromStepSlug
      ) as IStep;

      const field = stepToRemoveField?.step.fields.find(
        (field) => field.slug === payload.fieldSlug
      ) as IField;

      const stepToAddField = state.steps.find(
        (step) => step.step.slug === payload.toStepSlug
      ) as IStep;

      const filteredFields = stepToAddField.step.fields.filter(
        (field) => field.slug !== payload.fieldSlug
      );

      const newStepToRemoveField: IStep = {
        step: {
          ...stepToRemoveField.step,
          fields: filteredFields,
        },
      };

      const newStepToAddField: IStep = {
        step: {
          ...stepToAddField.step,
          fields: [...stepToAddField.step.fields, field],
        },
      };

      const newSteps = state.steps.map((step) => {
        if (step.step.slug === payload.fromStepSlug) {
          return newStepToRemoveField;
        } else if (step.step.slug === payload.toStepSlug) {
          return newStepToAddField;
        }
        return step;
      });

      return { ...state, steps: newSteps };
    }

    case "EDIT_FIELD_STYLES": {
      const newCurrentSteps = currentSteps.map((step) => {
        if (step.step.slug === payload.step) {
          const newCurrentFields = step.step.fields.map((field) => {
            if (field.slug === payload.field.slug) {
              return payload.field;
            }

            return field;
          });

          step.step.fields = newCurrentFields;
        }

        return step;
      });

      return {
        ...state,
        steps: newCurrentSteps,
      };
    }

    case "EDIT_FIELD_PROPS": {
      const newCurrentSteps = currentSteps.map((step) => {
        if (step.step.slug === payload.step) {
          const newCurrentFields = step.step.fields.map((field) => {
            if (field.slug === payload.field.slug) {
              return payload.field;
            }

            return field;
          });

          step.step.fields = newCurrentFields;
        }

        return step;
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
