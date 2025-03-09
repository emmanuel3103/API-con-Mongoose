const {Schema, model} = require ("mongoose");

const EventoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  grupo: [{
    type: Schema.Types.ObjectId,
    ref: 'Grupo',
    required: true
  }],
  participantes: [{
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }]
});

const Evento = model('Evento', EventoSchema)
module.exports = Evento;