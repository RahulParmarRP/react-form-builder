export const QUESTION_TYPES = {
    TEXT: 'text',
    MULTIPLE_CHOICE: 'multiple_choice',
    SINGLE_RADIO: 'single_radio',
}

export const QUESTION_TYPES_DROPDOWN_VALUES = [
    {
        label: 'Text',
        value: QUESTION_TYPES.TEXT,
    },
    {
        label: 'Multi Choice Checkbox',
        value: QUESTION_TYPES.MULTIPLE_CHOICE,
    },
    {
        label: 'Single Select radio',
        value: QUESTION_TYPES.SINGLE_RADIO,
    },
]

export const EDITOR_MODE = {
    VIEW: "view",
    EDIT: "edit"
}