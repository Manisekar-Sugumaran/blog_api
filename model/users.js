module.exports = (sequelize, type) =>
  sequelize.define(
    "users",
    {
      userDetailId: {
        type: type.INTEGER,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: type.STRING,
        field: "name",
        allowNull: false,
      },
      username: {
        field: "user_name",
        type: type.STRING,
      },
      email: {
        type: type.STRING,
        field: "email",
      },
      password: {
        field: "password",
        type: type.STRING,
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
      token: {
        type: type.STRING,
        field: "token",
      },
    },
    {
      freezeTableName: true,
      tableName: "users",
      underscored: true,
      timestamps: true,
    }
  );
