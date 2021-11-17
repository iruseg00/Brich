import PssuqTable from "../db/models/PssuqTable.mjs";

class PssuqTableService 
{
    get(questionID) 
    {
        return PssuqTable.findOne({
            where: { questionID }
        });
    }

    getAll() 
    {
        return PssuqTable.findAll({attributes: ['questionID', 'question']});
    }

    create(question) 
    {
        return PssuqTable.findOrCreate({
            where: {
                question
            },
            defaults: {
                question
            }
        });
    }

    delete(questionID) 
    {
        return PssuqTable.destroy({
            where: { questionID }
        });
    }
}

export default new PssuqTableService();