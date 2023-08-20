import { Op } from 'sequelize'
import './dababase';

import Customer from './app/models/Customer';
import Contact from './app/models/Contact';
import { json } from 'sequelize';

class Playground {

  static async play(){
    //const customers = await Customer.findAll({
    
    //mostrar o primeiro que encontrar com findOne
    //const customers = await Customer.findOne({

    //pega 1 quando já se sabe o id
    //const customers = await Customer.findByPk(1)
      
      //mostrar campos especificos
      //attributes: ["id","name"]

      //mostra tudo menos o campos especifico
      //attributes:{ exclude: ["status"]}

      //filtros com where


    const customers = await Customer.findAll({
      //inner join
      include:[{ 
        model: Contact,
        where:{
           satatus: "ACTIVE" //inner join
        },
        required: false, //com isso reproduz o left join
      }],
      where: {
        id: 1, //pega o id 1
        [Op.or]: { //ou do status ou do name
          status:{
            [Op.eq]: "ACTIVE", //retrona O STATUS = ativo
          },
          name:{
            [Op.like] : "Dev%", //não seja igual a ativo
          },
        },
        createdAt:{
          [Op.gte]: new Date() //maior ou igual a essa data
        }
      }

    });
    

    console.log(JSON.stringify(customers, null, 1))
  }
}

Playground.play()