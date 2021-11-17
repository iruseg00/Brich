import SusTable from "../db/models/SusTable.mjs";

class SusTableService 
{
    get(questionID) 
    {
        return SusTable.findOne({
            where: { questionID }
        });
    }

    getAll() 
    {
        return SusTable.findAll({attributes: ['questionID', 'question']});
    }

    create(question) 
    {
        return SusTable.findOrCreate({
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
        return SusTable.destroy({
            where: { questionID }
        });
    }
}

export default new SusTableService();