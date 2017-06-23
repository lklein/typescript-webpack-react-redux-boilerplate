import { createAction } from "redux-actions";

export interface ChangeTabActionPayload {
    activeItem: string;
}

export const ChangeTabAction = createAction<ChangeTabActionPayload, string>("ChangeTabAction", (activeItem) => ({activeItem}));