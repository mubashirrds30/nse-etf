import { DataTypes } from "sequelize";

// spotlight model
function ContactUsModel(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: true },
        query: { type: DataTypes.TEXT, allowNull: true },
        subject: { type: DataTypes.STRING, allowNull: true },
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: [] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('tbl_contact_us', attributes, options);
}


export { ContactUsModel };

