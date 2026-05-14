import React from "react";

export const ProposalDocument = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-slate-50 flex flex-col font-sans text-slate-900 border-8 border-slate-900 mx-auto print-exact"
      style={{
        width: "210mm",
        minHeight: "297mm",
        // No extra padding so header/footer and panels can touch the borders
      }}
    >
      {/* Header Section */}
      <header className="bg-slate-900 text-white p-8 flex justify-between items-end border-b-4 border-amber-500 shrink-0">
        <div>
          <h1 className="text-4xl font-black tracking-tighter leading-none">VÉRTIGO <span className="text-amber-500">360</span></h1>
          <p className="text-xs uppercase tracking-widest mt-2 opacity-70">Producción Audiovisual & Drones FPV</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-light italic">Propuesta Comercial</div>
          <div className="text-[10px] uppercase opacity-60">Fecha: {new Date().toLocaleDateString('es-CO')} | Ref: V360-BOD-01</div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-12 gap-0 min-h-0">
        
        {/* Left Panel: Context & Objective */}
        <section className="col-span-5 bg-white p-8 border-r border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-amber-500"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">Presentación</h2>
            </div>
            <p className="text-[11px] leading-relaxed mb-4 font-medium text-slate-700 text-justify">
              <strong>Para: Steven Muñoz</strong><br/>
              Es un placer saludarle. En <span className="font-bold">Vértigo 360</span>, somos 
              especialistas en capturar la magnitud y capacidad logística de infraestructuras comerciales a través 
              de perspectivas únicas.
            </p>
            <p className="text-[11px] leading-relaxed mb-6 font-medium text-slate-700 text-justify">
              La presente propuesta detalla nuestro servicio integral de producción audiovisual utilizando tecnología 
              aérea. Nuestro enfoque está diseñado para resaltar sus instalaciones en el Valle del Cauca, 
              generando un impacto visual profundo, emocional y altamente inmersivo.
            </p>
            
            {/* Objectives */}
            <div className="mb-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-3 border-b-2 border-slate-100 pb-1">1. Objetivo del Proyecto</h3>
              <ul className="text-[11px] space-y-2 text-slate-700">
                <li><strong className="text-slate-900 text-[10px] uppercase">Exhibición Atractiva:</strong> Mostrar las instalaciones evidenciando su capacidad y operatividad.</li>
                <li><strong className="text-slate-900 text-[10px] uppercase">Impacto Visual:</strong> Generar contenido de alto nivel para inversores y clientes.</li>
                <li><strong className="text-slate-900 text-[10px] uppercase">Posicionamiento:</strong> Mejorar la presencia digital y la percepción de valor.</li>
                <li><strong className="text-slate-900 text-[10px] uppercase">Optimización Social:</strong> Piezas ajustadas para TikTok y Facebook.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 p-6 text-white mt-4 rounded-sm shadow-xl">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-3">6. ¿Por qué Vértigo 360?</h3>
            <p className="text-[11px] leading-relaxed opacity-90 mb-4 text-justify">
              Más allá de pilotar drones, somos estrategas de la imagen corporativa. Combinamos la adrenalina de los vuelos FPV con una narrativa orientada a negocios, asegurando que cada segundo sea una inversión en el prestigio de su marca.
            </p>
            <div className="text-[9px] italic opacity-80 border-l-2 border-amber-500 pl-3 leading-relaxed">
              "Su infraestructura no es solo concreto y logística; es la fortaleza de su negocio. Nosotros nos encargamos de que el mundo la vea exactamente de esa manera."
            </div>
          </div>
        </section>

        {/* Right Panel: Tables & Finances */}
        <section className="col-span-7 p-8 bg-slate-50 flex flex-col gap-6">
          
          {/* Methodology */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">2. Descripción y Metodología</h3>
            <p className="text-[11px] text-slate-700 mb-4">
              Producción audiovisual para <strong>dos (2) bodegas comerciales</strong> en el Valle del Cauca.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 shadow-sm">01</div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-wide text-slate-900">Pre-producción</h4>
                  <p className="text-[10px] text-slate-600">Análisis, definición de recorridos aéreos, planificación de horarios (Golden Hour) y guion visual.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 shadow-sm">02</div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-wide text-slate-900">Producción (Rodaje)</h4>
                  <p className="text-[10px] text-slate-600">Despliegue técnico. Vuelos de precisión FPV en interiores y exteriores, tomas operativas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-900 shadow-sm">03</div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-wide text-slate-900">Post-producción</h4>
                  <p className="text-[10px] text-slate-600">Selección, estabilización, corrección de color (Color Grading), diseño sonoro, música libre de regalías y adaptación vertical.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">3. Entregables</h3>
            <table className="w-full text-left text-[10px] border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-700 uppercase tracking-wider text-[9px]">
                  <th className="p-2 border border-slate-300">Concepto</th>
                  <th className="p-2 border border-slate-300">Descripción Detallada</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-2 border border-slate-200 font-bold whitespace-nowrap">Videos Principales</td>
                  <td className="p-2 border border-slate-200"><strong>Dos (2) Videos Profesionales</strong> de alta calidad. (1 por bodega).</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 font-bold whitespace-nowrap">Optimización RRSS</td>
                  <td className="p-2 border border-slate-200">Formatos para <strong>TikTok (9:16) y Facebook (9:16)</strong>, alta retención.</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 font-bold whitespace-nowrap">Acabado Profesional</td>
                  <td className="p-2 border border-slate-200">Edición dinámica, Color Grading corporativo y musicalización libre de regalías.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Budget Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">4. Presupuesto Detallado</h3>
            <table className="w-full text-left text-[10px] border-collapse">
              <tbody className="bg-white">
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-700">Producción audiovisual - Bodega Comercial 1</td>
                  <td className="p-2 border border-slate-200 text-right font-mono font-medium text-slate-900">COP $2.000.000</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-700">Producción audiovisual - Bodega Comercial 2</td>
                  <td className="p-2 border border-slate-200 text-right font-mono font-medium text-slate-900">COP $2.000.000</td>
                </tr>
                <tr className="bg-slate-900 text-white">
                  <td className="p-3 border border-slate-900 font-bold tracking-widest uppercase text-[10px]">Valor Total Inversión</td>
                  <td className="p-3 border border-slate-900 text-right font-bold text-sm font-mono text-amber-400">COP $4.000.000</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[8px] text-slate-400 mt-1 text-right italic">* Valores exentos de IVA conforme al régimen correspondiente.</p>
          </div>

          {/* Conditions & Logistics */}
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="border-l-4 border-amber-500 pl-4 py-1">
              <h4 className="text-[9px] font-bold uppercase text-slate-800">5. Viáticos y Logística</h4>
              <p className="text-[9px] leading-tight mt-1 text-slate-600">
                El cliente asume viáticos completos para el equipo: transportes aéreos/terrestres, hospedaje, alimentación y transportes internos durante los días del proyecto.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-4 py-1">
              <h4 className="text-[9px] font-bold uppercase text-slate-800">Condiciones Comerciales</h4>
              <p className="text-[9px] leading-tight mt-1 text-slate-600">
                <strong>Pago:</strong> 50% anticipo / 50% contra entrega.<br/>
                <strong>Entregas:</strong> 5-8 días hábiles post-rodaje.<br/>
                <strong>Vigencia:</strong> 15 días calendario.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Signatures */}
      <footer className="px-8 py-6 bg-white border-t-2 border-slate-200 flex items-center justify-between shrink-0">
        <div className="flex gap-4 text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
          <span>Vértigo 360</span>
        </div>
        <div className="flex items-end gap-12">
          <div className="text-center">
            <div className="w-40 h-[1px] bg-slate-300 mb-2"></div>
            <p className="text-[9px] uppercase font-bold text-slate-500">Aprobación Cliente</p>
            <p className="text-[8px] text-slate-400 mt-0.5">Nombre / Firma / Sello</p>
          </div>
          <div className="text-center">
            <div className="w-40 h-[1px] bg-slate-300 mb-2"></div>
            <p className="text-[9px] uppercase font-bold text-slate-500">Vértigo 360</p>
            <p className="text-[8px] text-slate-400 mt-0.5">Representante Comercial</p>
          </div>
        </div>
      </footer>
    </div>
  );
});

ProposalDocument.displayName = "ProposalDocument";
