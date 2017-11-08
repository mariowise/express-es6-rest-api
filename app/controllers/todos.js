import resource from 'resource-router-middleware';

export default ({ config, db }) => resource({
	index({ body }, res) {
		return db.Todo
      .findAll()
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(400).send(error));
	},

  read(req, res) {
    return db.Todo
      .findById(req.params[undefined])
      .then((todo) => res.status(200).send(todo))
      .catch((error) => res.status(400).send(error));
  },
	
  create({ body }, res) {
		return db.Todo
      .create({ title: body.title })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
	}
})
