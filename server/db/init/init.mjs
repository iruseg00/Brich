import Sus from "./sus.json";
import Mdt from "./mdt.json";
import Pssuq from "./pssuq.json";
import Ac from "./ac.json";
import Dc from "./dc.json";
import Anxiety from "./anxiety.json";
import SusTableService from "../../services/SusTableService.mjs";
import MdtTableService from "../../services/MdtTableService.mjs";
import PssuqTableService from "../../services/PssuqTableService.mjs";
import AcTableService from "../../services/AcTableService.mjs";
import DcTableService from "../../services/DcTableService.mjs";
import AnxietyTableService from "../../services/AnxietyTableService.mjs";

const { sus } = Sus;
const { mdt } = Mdt;
const { pssuq } = Pssuq;
const { ac } = Ac;
const { dc } = Dc;
const { anxiety } = Anxiety;

export default async () => {
  for (let question of sus) await SusTableService.create(question);
  for (let [adjective, mark] of mdt)
    await MdtTableService.create(adjective, mark);
  for (let question of pssuq) await PssuqTableService.create(question);
  for (let question of ac) await AcTableService.create(question);
  for (let question of dc) await DcTableService.create(question);
  for (let question of anxiety) await AnxietyTableService.create(question);
};
