import { IFireboltJSON, IStep, IField } from "@/types/fireboltJSON";

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
        stepSlug: string;
        field: string;
      };
    }
  | {
      type: "ADD_FIELD";
      payload: {
        step: string;
        fieldSlug: string;
      };
    }
  | {
      type: "EDIT_FIELD_STYLES";
      payload: {
        step: string;
        field: IField;
      };
    }
  | {
      type: "EDIT_FIELD_PROPS";
      payload: {
        step: string;
        field: IField;
      };
    }
  | {
      type: "EDIT_FIELD_CONFIG";
      payload: {
        attribute: keyof IField;
        value: any;
        stepSlug: string;
        fieldSlug: string;
      };
    }
  | {
      type: "MOVE_FIELD_UP";
      payload: {
        stepSlug: string;
        fieldSlug: string;
      };
    }
  | {
      type: "MOVE_FIELD_DOWN";
      payload: {
        stepSlug: string;
        fieldSlug: string;
      };
    }
  | {
      type: "MOVE_FIELD_TO_STEP";
      payload: {
        fromStepSlug: string;
        toStepSlug: string;
        fieldSlug: string;
      };
    }
  | { type: "START_BLANK"; payload?: any }
  | { type: "START_WITH_JSON"; payload: IFireboltJSON }
  | { type: "SET_EXPERIENCE_VERSION"; payload: { experienceVersion: string } }
  | {
      type: "SET_EXPERIENCE_FBT_VERSION";
      payload: { experienceFbtVersion: string };
    }
  | { type: "SET_EXPERIENCE_DESCRIPTION"; payload: { newDescription: string } }
  | { type: "SET_EXPERIENCE_NAME"; payload: { experienceName: string } }
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
      type: "CHANGE_FLOW_STEPS";
      payload: {
        slug: string;
        newSteps: string[];
      };
    }
  | {
      type: "REMOVE_FLOW";
      payload: {
        slug: string;
      };
    };
