const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const {BlogPosts} = require('./models');

BlogPosts.create(
  'Lorem ipsum', `Lorem ipsum dolor sit amet, ad vel duis fabulas, ex est quem blandit tincidunt. His debet vivendum concludaturque ne, in sed fugit voluptaria, qui in eloquentiam accommodare. In elit intellegam pri, solum graecis definiebas ei vel. Vix an alii ceteros erroribus, sensibus interesset no vim.`, `John Doe`, Date());
BlogPosts.create(
  'Ipsum Lorem', `Te duo dicant causae, ius tibique sensibus voluptaria cu, vel lorem vituperatoribus ea. Vix ad case accommodare, no duo volumus oporteat molestiae, vix solum labores id. Vel an case populo melius, ut qui esse nostrud. Debet veniam in vix, his accusam definitionem ex. Te ridens probatus phaedrum duo, sea discere aliquando vituperatoribus te, nam illum ponderum eu.`, `Jane Doe`, Date());

router.get('/', (req, res) => {
  res.json(BlogPosts.get());
});


router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['name', 'ingredients'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  const item = BlogPosts.create(req.body.name, req.body.ingredients);
  res.status(201).json(item);
});

// Delete BlogPosts (by id)!
router.delete('/:id', (req, res) => {
  BlogPosts.delete(req.params.id);
  console.log(`Deleted shopping list item \`${req.params.ID}\``);
  res.status(204).end();
});


router.put('/:id', jsonParser, (req, res) => {
  const requiredFields = ['name', 'ingredients', 'id'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = (
      `Request path id (${req.params.id}) and request body id `
      `(${req.body.id}) must match`);
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating shopping list item \`${req.params.id}\``);
  const updatedItem = BlogPosts.update({
    id: req.params.id,
    name: req.body.name,
    ingredients: req.body.ingredients
  });
  res.status(204).json(updatedItem);
})

module.exports = router;