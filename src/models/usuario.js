const {Schema, model} = require ("mongoose");

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  grupos: [{
    type: Schema.Types.ObjectId,
    ref: 'Grupo'
  }]
});

const Usuario = model('Usuario', UsuarioSchema)
module.exports = Usuario;