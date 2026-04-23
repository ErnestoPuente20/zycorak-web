import { db } from '../../firebase';
import {ref, onValue, update} from 'firebase/database';
import React, {useEffect, useState} from 'react'

interface PromoData {
  nombre: string;
  celular: string;
  codigo: string;
}

export default function Regalo() {

    const [codigoCorrecto, setCodigoCorrecto] = useState<string>("")
    const [isAgotado, setIsAgotado] = useState<boolean>(false)

    useEffect(() => {
        const promoRef = ref(db, 'promocion')

        const unsubscribe = onValue(promoRef, (snapshot) => {
            const data = snapshot.val()
            if(data){
                setCodigoCorrecto(data.codigo_activo);
                setIsAgotado(data.estado === 'agotado')
            }
        })

        // Limpiamos la conexion cuando el componente no se use
        return () => unsubscribe() 
    }, [])

    const [formData, setFormData] = useState<PromoData>({
        nombre: '',
        celular: '',
        codigo: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Validamos que el código coincida (ignorando mayúsculas/minúsculas)
        if (formData.codigo.trim().toUpperCase() === codigoCorrecto.toUpperCase()) {
            try {
                // actualizar firebase para que nadie mas lo use
                await update(ref(db, 'promocion'), {
                    estado: 'agotado',
                    ganador: formData.nombre,
                    celular_ganador: formData.celular,
                    fecha_canje: new Date().toLocaleString()
                });

                //Preparamos mensaje de whatsapp
                const numeroCel = "59160103912"
                const texto = `¡Hola! Soy ${formData.nombre}. Acabo de ganar el premio de TikTok con el código ${formData.codigo}. Mi celular es ${formData.celular}.`;
                const urlWa = `https://wa.me/${numeroCel}?text=${encodeURIComponent(texto)}`;

                //Redirigimos
                window.open(urlWa, '_blank', 'noopener,noreferrer')

                setFormData({
                    nombre: '',
                    celular: '',
                    codigo: ''
                });
                
            } catch (error) {
                console.error("Error al conectar con la base de datos:", error);
                alert("Hubo un error al procesar el canje. Intenta de nuevo.");
            }
        } else {
            alert('El código ingresado no es valido o ya caducó')
        }
    }

  return (
    <section className="w-full bg-dark-section border-y border-gold/20 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título con fuente Great Vibes para el toque elegante */}
        <div className="text-center mb-10">
          <h2 className="font-greatvibes text-gold-light text-4xl mb-2">Regalo Especial</h2>
          <p className="font-lato uppercase tracking-[0.3em] text-gray-400 text-xs">
            Ingresa el código de TikTok
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-6 items-center justify-center"
        >
          {/* Input Nombre */}
          <div className="w-full lg:w-64">
            <input
              name="nombre"
              type="text"
              placeholder="Nombre Completo"
              required
              disabled={isAgotado}
              className="w-full bg-transparent border-b border-gold/40 py-2 px-1 focus:border-gold-light outline-none transition-colors text-white placeholder:text-gray-500 font-lato"
              onChange={handleChange}
            />
          </div>
          
          {/* Input Celular */}
          <div className="w-full lg:w-48">
            <input
              name="celular"
              type="tel"
              placeholder="WhatsApp"
              required
              disabled={isAgotado}
              className="w-full bg-transparent border-b border-gold/40 py-2 px-1 focus:border-gold-light outline-none transition-colors text-white placeholder:text-gray-500 font-lato"
              onChange={handleChange}
            />
          </div>

          {/* Input Código */}
          <div className="w-full lg:w-40">
            <input
              name="codigo"
              type="text"
              placeholder="CÓDIGO"
              required
              disabled={isAgotado}
              className="w-full bg-transparent border-b border-gold/40 py-2 px-1 focus:border-gold-light outline-none transition-colors text-gold-light placeholder:text-gray-500 font-bold tracking-widest uppercase font-lato"
              onChange={handleChange}
            />
          </div>

          {/* Botón Dorado */}
          <button
            type="submit"
            disabled={isAgotado}
            className={`w-full lg:w-auto mt-4 lg:mt-0 px-10 py-3 rounded-sm transition-all duration-300 uppercase text-xs tracking-widest font-bold font-lato
              ${isAgotado 
                ? 'bg-dark-lighter text-gray-600 border border-gray-700 cursor-not-allowed' 
                : 'bg-gold text-dark hover:bg-gold-light shadow-[0_0_15px_rgba(181,134,60,0.3)] active:scale-95'
              }`}
          >
            {isAgotado ? 'Agotado' : 'Reclamar Regalo'}
          </button>
        </form>
        
        {isAgotado && (
          <p className="text-center text-gold/60 text-sm mt-6 font-lato italic">
            El regalo de este mes ya ha sido reclamado. ¡Atento al siguiente video!
          </p>
        )}
      </div>
    </section>
  )
}
