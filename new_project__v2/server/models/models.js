const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Order = sequelize.define('order',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    datacreated: {type: DataTypes.DATEONLY, },
    total: {type: DataTypes.INTEGER, }, 
})

const Payment = sequelize.define('payment',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sum: {type: DataTypes.INTEGER, },
})

const PaymentStatus = sequelize.define('paymentstatus',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, },
    color:{type:DataTypes.CHAR}, 
})

const Movie = sequelize.define('movie',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    namemovie: {type: DataTypes.STRING, },
    img:{type:DataTypes.STRING}, 
    defaultprice:{type:DataTypes.INTEGER}
})

const Event = sequelize.define('event',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    startdate: {type: DataTypes.DATEONLY, },
    finishdate:{type:DataTypes.DATEONLY, }, 
})

const Cinema = sequelize.define('cinema',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    namecinema: {type: DataTypes.STRING, },
    addres: {type: DataTypes.STRING, },
    seance_1:{type: DataTypes.STRING, },
    seance_2:{type: DataTypes.STRING, },
    seance_3:{type: DataTypes.STRING, }

    
})

const Place = sequelize.define('place',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    row: {type: DataTypes.INTEGER, },
    col:{type:DataTypes.INTEGER, }, 
    defaultpriceplace:{type:DataTypes.INTEGER,}
})

const Placeorder = sequelize.define('placeorder',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketMovie = sequelize.define('basket_movie',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})



User.hasOne(Order)
Order.belongsTo(User)

Order.hasOne(Payment)
Payment.belongsTo(Order)

Order.hasOne(PaymentStatus)
PaymentStatus.belongsTo(Order)

Payment.hasOne(PaymentStatus)
PaymentStatus.belongsTo(Payment)

Movie.hasMany(Event)
Event.belongsTo(Movie)

Event.hasMany(Order)
Order.belongsTo(Event)

Cinema.hasMany(Event)
Event.belongsTo(Cinema)

Place.hasOne(Order)
Order.belongsTo(Place)

Placeorder.hasOne(Place)
Place.belongsTo(Placeorder)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketMovie)
BasketMovie.belongsTo(Basket)

module.exports = {
    User,
    Order,
    Payment,
    PaymentStatus,
    Movie,
    Event,
    Cinema,
    Place,
    Placeorder,
    Basket,
    BasketMovie
}