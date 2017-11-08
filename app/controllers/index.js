import { version } from '../../package.json';
import { Router } from 'express';
import todos from './todos';

export default ({ config, db }) => {
	let api = Router();

	api.use('/todos', todos({ config, db }));

	api.get('/', (req, res) => { res.json({ version }) });

	return api;
}
