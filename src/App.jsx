import "./App.css"
import ContactoCard from "./components/ContactoCard"; 

export default function App() {
  const contactos = [
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 2,
      nombre: "Juan Díaz",
      telefono: "301 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      telefono: "320 555 7788",
      correo: "luisa@sena.edu.co",
      etiqueta: "Cliente",
    },

    {
      id: 4,
      nombre: "Salome Patño",
      telefono: "301 670 6655",
      correo: "salito@miamor.com",
      etiqueta: "Instructor",
    },

    {
      
      id: 5,
      nombre: "Bibiana Muñoz",
      telefono: "316 372 2828",
      correo: "bibi.popo91@gmail.com",
      etiqueta: "Cliente",
    },

  ];

  return (
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO 📒</h1>

      <p className="app-subtitle">Contactos guardados</p>

      {contactos.map((c) => (
        <ContactoCard
          key={c.id}           
          nombre={c.nombre}    
          telefono={c.telefono} 
          correo={c.correo}    
          etiqueta={c.etiqueta}
        />
      ))}

      <p className="app-nota">
        (Versión 0.1 - solo lectura, sin agregar ni editar todavía)
      </p>
    </main>
  );
}

