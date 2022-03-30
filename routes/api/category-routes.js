const router = require('express').Router();
const { Category, Product } = require('../../models');
const { sequelize } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id',
      'category_name',
    ],
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(categoryFindAllData => res.json(categoryFindAllData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(categoryFindOnedata => {
    if (!categoryFindOnedata) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(categoryFindOnedata);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(categoryCreationData => res.json(categoryCreationData))
    .catch(err => {
      res.status(400).json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(categoryPutData => {
      if (!categoryPutData) {
        res.status(404).json({ message: 'no category found for this id' });
        return;
      }
      res.json(categoryPutData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(categoryDeleteData => {
    if (!categoryDeleteData) {
      res.status(404).json({ message: 'no category found for this id' });
      return;
    }
    res.json(categoryDeleteData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
