const {Schema, model} = require ("mongoose");

const GrupoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  usuarios: [{
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }],
  eventos: [{
    type: Schema.Types.ObjectId,
    ref: 'Evento'
  }]
});

const Grupo = model('Grupo', GrupoSchema)
module.exports = Grupo;