const uuidv4 = require('uuid/v4');

module.exports = app => {
  const menuDB = app.data.menu;
  const controller = {};

  const {
    menu: menuMock,
  } = menuDB;

  controller.listMenu = (req, res) => res.status(200).json(menuDB);

  controller.saveMenu = (req, res) => {
    menuMock.data.push({
      id: uuidv4(),
      nome: req.body.nome,
      preco: req.body.preco,
      acompanhamentos: req.body.acompanhamentos
    });

    res.status(201).json(menuMock);
  };

  controller.removeMenu = (req, res) => {
    const {
      itemId,
    } = req.params;

    const foundCustomerIndex = menuMock.data.findIndex(customer => customer.id === itemId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Item não encontrado na base.',
        success: false,
        menu: menuMock,
      });
    } else {
      menuMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: 'Item encontrado e deletado com sucesso!',
        success: true,
        menu: menuMock,
      });
    }
  };

  controller.updateMenu = (req, res) => {
    const { 
      itemId,
    } = req.params;

    const foundCustomerIndex = menuMock.data.findIndex(customer => customer.id === itemId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Item não encontrado na base.',
        success: false,
        menu: menuMock,
      });
    } else {
      const newCustomer = {
        id: itemId ,
        nome: req.body.nome,
        preco: req.body.preco,
        acompanhamentos: req.body.acompanhamentos,
        createdAt: new Date()
      };
      
      menuMock.data.splice(foundCustomerIndex, 1, newCustomer);
      
      res.status(200).json({
        message: 'Item encontrado e atualizado com sucesso!',
        success: true,
        menu: menuMock,
      });
    }
  }

  return controller;
}