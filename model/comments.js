module.exports = (sequelize, type) =>
  sequelize.define(
    "comments",
    {
      commentDetailsId: {
        type: type.INTEGER,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
        allowNull: false,
      },
      blogId: {
        type: type.STRING,
        field: "blog_id",
        allowNull: false,
        foreignKey: "fk_blog_id",
      },
      comment: {
        field: "comment",
        type: type.STRING,
        allowNull: false,
      },
      isApproved: {
        field: "is_approved",
        type: type.BOOLEAN,
        defaultValue: false,
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
      tableName: "comments",
      underscored: true,
      timestamps: true,
    }
  );
