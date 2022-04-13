module.exports = (sequelize, type) =>
  sequelize.define(
    "blog_likes",
    {
      blogLikesId: {
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
        foreignKey: "user_id_fkey",
      },
      blogId: {
        type: type.STRING,
        field: "blog_id",
        allowNull: false,
        foreignKey: "blog_id_fkey",
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
      tableName: "blog_likes",
      underscored: true,
      timestamps: true,
    }
  );
