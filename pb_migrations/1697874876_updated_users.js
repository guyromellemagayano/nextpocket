/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sem9zti83ul9nou")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bydnsmdu",
    "name": "notes",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y9429efb59e35d4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sem9zti83ul9nou")

  // remove
  collection.schema.removeField("bydnsmdu")

  return dao.saveCollection(collection)
})
