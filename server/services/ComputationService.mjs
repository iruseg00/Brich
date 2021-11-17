import AcTestResults from "../constants/AcTestResults.json";
import DcTestResults from "../constants/DcTestResults.json";
import AnxietyTestResults from "../constants/AnxietyTestResults.json";
import { SummaElements, SummaElementsByIndex } from "../constants/methods.mjs";
import {
  MULTIPLIER_PSSUQ_COMMON,
  MULTIPLIER_PSSUQ_USEFULNESS,
  MULTIPLIER_PSSUQ_UI_SUPPORT,
  MULTIPLIER_PSSUQ_UI,
  MAX_VALUE_SUS,
} from "../constants/variables.mjs";

export const SusTest = async (answers) => {
  const value = (
    (answers.reduce((summa, item) => summa + item.answer, -answers.length) *
      100) /
    (MAX_VALUE_SUS * answers.length)
  ).toFixed(0);
  const type =
    value >= 90 ? "A1" : value >= 60 ? "A2" : value >= 40 ? "A3" : "A4";
  return { value, type };
};

export const PssuqTest = async (answers) => {
  const value = (
    answers.reduce((summa, item) => summa + item.answer, 0) *
    MULTIPLIER_PSSUQ_COMMON
  ).toFixed(0);
  const usefulness =
    SummaElements(answers, 0, 8, "answer") * MULTIPLIER_PSSUQ_USEFULNESS;
  const qualityInfoSupport =
    SummaElements(answers, 8, 15, "answer") * MULTIPLIER_PSSUQ_UI_SUPPORT;
  const qualityUI =
    SummaElements(answers, 15, 18, "answer") * MULTIPLIER_PSSUQ_UI;
  return { value, usefulness, qualityInfoSupport, qualityUI };
};

export const MdtTest = async (results) => {
  let plus, minus;
  let marks = results.map((item) => item.mark);
  plus = marks.filter((item) => item == true).length;
  minus = marks.filter((item) => item == false).length;
  const length = plus + minus;
  minus &&= (minus * 100) / length;
  plus &&= (plus * 100) / length;
  return { plus, minus };
};

export const AcTest = async (answers, sex) => {
  let AK_AC = SummaElementsByIndex(
    answers,
    8,
    false,
    11,
    20,
    22,
    31,
    34,
    35,
    37
  );
  AK_AC = AcTestResults[sex][AK_AC] && AcTestResults[sex][AK_AC][0];
  AK_AC = AK_AC ? AcTestResults.results[AK_AC] : "средняя";
  let BO = SummaElementsByIndex(answers, 8, false, 0, 16, 18, 19, -22, 28, 30);
  BO = AcTestResults[sex][BO] && AcTestResults[sex][BO][1];
  BO = BO ? AcTestResults.results[BO] : "средняя";
  let CA = SummaElementsByIndex(answers, 8, false, 1, 3, 5, 6, 9, 17, 29);
  CA = AcTestResults[sex][CA] && AcTestResults[sex][CA][2];
  CA = CA ? AcTestResults.results[CA] : "средняя";
  let TO_AC = SummaElementsByIndex(
    answers,
    8,
    false,
    2,
    8,
    13,
    14,
    24,
    -26,
    -27,
    32,
    36
  );
  TO_AC = AcTestResults[sex][TO_AC] && AcTestResults[sex][TO_AC][3];
  TO_AC = TO_AC ? AcTestResults.results[TO_AC] : "средняя";

  let SP_AC = SummaElementsByIndex(
    answers,
    8,
    false,
    -4,
    7,
    10,
    12,
    15,
    23,
    25,
    33
  );
  SP_AC = AcTestResults[sex][SP_AC] && AcTestResults[sex][SP_AC][4];
  SP_AC = SP_AC ? AcTestResults.results[SP_AC] : "средняя";
  return { AK_AC, BO, CA, TO_AC, SP_AC };
};

export const DcTest = async (answers, sex) => {
  let AK = SummaElementsByIndex(
    answers,
    8,
    false,
    12,
    16,
    22,
    27,
    43,
    45,
    47,
    49
  );
  AK = DcTestResults[sex][AK] && DcTestResults[sex][AK][0];
  AK = AK ? AcTestResults.results[AK] : "средняя";
  let BO = SummaElementsByIndex(answers, 8, false, -2, 5, 7, -16, -37, 38, -49);
  BO = DcTestResults[sex][BO] && DcTestResults[sex][BO][6];
  BO = BO ? AcTestResults.results[BO] : "средняя";
  let TO = SummaElementsByIndex(
    answers,
    8,
    false,
    0,
    6,
    13,
    17,
    26,
    42,
    54,
    56
  );
  TO = DcTestResults[sex][TO] && DcTestResults[sex][TO][1];
  TO = TO ? AcTestResults.results[TO] : "средняя";
  let PA = SummaElementsByIndex(answers, 8, false, 3, 7, 24, 30, 34, 36, 40);
  PA = DcTestResults[sex][PA] && DcTestResults[sex][PA][7];
  PA = PA ? AcTestResults.results[PA] : "средняя";
  let SP = SummaElementsByIndex(answers, 8, false, 4, 8, 9, 11, 20, 23, 29, 34);
  SP = DcTestResults[sex][SP] && DcTestResults[sex][SP][2];
  SP = SP ? AcTestResults.results[SP] : "средняя";
  let US = SummaElementsByIndex(
    answers,
    8,
    false,
    15,
    19,
    28,
    33,
    50,
    52,
    53,
    55
  );
  US = DcTestResults[sex][US] && DcTestResults[sex][US][3];
  US = US ? AcTestResults.results[US] : "средняя";
  let UD = SummaElementsByIndex(
    answers,
    8,
    false,
    1,
    14,
    21,
    25,
    32,
    39,
    44,
    46,
    51
  );
  UD = DcTestResults[sex][UD] && DcTestResults[sex][UD][4];
  UD = UD ? AcTestResults.results[UD] : "средняя";
  let PO = SummaElementsByIndex(answers, 8, false, 10, 18, 31, 35, 41, 48);
  PO = DcTestResults[sex][PO] && DcTestResults[sex][PO][7];
  PO = PO ? AcTestResults.results[PO] : "средняя";
  return { AK, BO, TO, PA, SP, US, UD, PO };
};

export const AnxietyTest = async (answers) => {
  let situational = SummaElementsByIndex(
    answers,
    5,
    false,
    -0,
    -1,
    2,
    3,
    -4,
    5,
    6,
    -7,
    8,
    -9,
    -10,
    11,
    12,
    13,
    -14,
    -15,
    16,
    17,
    -18,
    -19
  );
  let personal = SummaElementsByIndex(
    answers,
    5,
    false,
    -20,
    21,
    22,
    23,
    24,
    -25,
    -26,
    27,
    28,
    -29,
    30,
    31,
    32,
    33,
    34,
    -35,
    36,
    37,
    -38,
    39
  );
  situational = situational && AnxietyTestResults.results[situational];
  personal = personal && AnxietyTestResults.results[personal];
  return { situational, personal };
};
