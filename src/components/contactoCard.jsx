export default function ContactoCard({ nombre, telefono, correo, etiqueta, onEliminar, empresa }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      {/* Nombre destacado */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">Nombre: {nombre}</h3>

      {/* Etiqueta */}
      {etiqueta && (
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
          Etoqueta: {etiqueta}
        </span>
      )}

      {/* Teléfono */}
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Teléfono:</span> {telefono}
      </p>

      {/* Correo */}
      <p className="text-gray-700 mb-4">
        <span className="font-medium">Correo:</span> {correo}
      </p>

      {/* Empresa */}
      <p className="text-gray-700 mb-4">
        <span className="font-medium">Empresa:</span> {empresa}
      </p>

      {/* Acciones (alineado a la izquierda en móvil) */}
      <div className="flex justify-start">
        <button 
          onClick={() => onEliminar(correo)}
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}