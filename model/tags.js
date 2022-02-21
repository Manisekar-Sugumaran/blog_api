module.exports = (sequelize, type) =>
  sequelize.define(
    "tags",
    {
      tagDetailId: {
        type: type.INTEGER,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
        allowNull: false,
      },
      category: {
        type: type.STRING,
        field: "category",
        allowNull: false,
      },
      createdBy: {
        field: "created_by",
        type: type.STRING,
      },
      updatedBy: {
        field: "updated_by",
        type: type.STRING,
      },
      createdAt: {
        field: "created_at",
        type: type.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: type.DATE,
      },
    },
    {
      freezeTableName: true,
      tableName: "tags",
      underscored: true,
      timestamps: true,
    }
  );
