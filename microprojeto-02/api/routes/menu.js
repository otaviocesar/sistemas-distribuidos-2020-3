module.exports = app => {
  const controller = app.controllers.menu;

  app.route('/menu')
    .get(controller.listMenu)
    .post(controller.saveMenu);

  app.route('/menu/:itemId')
    .delete(controller.removeMenu)
    .put(controller.updateMenu);
}