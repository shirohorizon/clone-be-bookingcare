const ROLES_LIST = {
  "admin": 'R1',
  "doctor": 'R2',
  "patient": 'R3'
}

const POSITION_LIST = {
  "none": 'P0',
  "master": 'P1',
  "doctor": 'P2',
  "associate_professor": 'P3',
  "professor": 'P4',
}

const GENDER_LIST = {
  "male": 'M',
  "female": 'F',
  "other": 'O'
}

const ALLCODE_LIST = {
  ...GENDER_LIST,
  ...POSITION_LIST,
  ...ROLES_LIST
}

export { ROLES_LIST, GENDER_LIST, POSITION_LIST, ALLCODE_LIST }
