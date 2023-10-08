/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y9429efb59e35d4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "20gveit7",
    "name": "department",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y9429efb59e35d4")

  // remove
  collection.schema.removeField("20gveit7")

  return dao.saveCollection(collection)
})
