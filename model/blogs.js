module.exports = (sequelize, type) =>
  sequelize.define(
    "blogs",
    {
      blogDetailsId: {
        type: type.INTEGER,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: type.INTEGER,
        field: "user_id",
        allowNull: false,
      },
      title: {
        type: type.STRING,
        field: "title",
        allowNull: false,
      },
      summary: {
        field: "summary",
        type: type.STRING,
        allowNull: false,
      },
      categoryId: {
        field: "category_id",
        type: type.JSONB,
        allowNull: false,
      },
      Image: {
        field: "image",
        type: type.STRING,
        allowNull: false,
      },
      content: {
        field: "content",
        type: type.STRING,
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
      tableName: "blogs",
      underscored: true,
      timestamps: true,
    }
  );
