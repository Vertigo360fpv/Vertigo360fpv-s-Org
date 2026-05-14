import React, { useRef, useEffect } from 'react';
import { ProposalDocument } from './components/ProposalDocument';
import { Download, FileText, Settings, Target } from 'lucide-react';

export default function App() {
  const documentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = 'Propuesta_Comercial_Vertigo_360';
    window.print();
    document.title = originalTitle;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col md:flex-row print:bg-white print:min-h-0">
      {/* Sidebar Controls */}
      <aside className="w-full md:w-80 bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm z-10 px-4 md:h-screen md:sticky top-0 shrink-0 print:hidden">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-6 h-6 text-gray-900" />
            <h1 className="text-xl font-bold uppercase tracking-wide">Vértigo 360</h1>
          </div>
          <p className="text-sm text-gray-500">Generador de Documentos Comerciales</p>
        </div>

        <div className="space-y-6 flex-1">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="flex items-center text-sm font-semibold mb-3 tracking-wide">
              <FileText className="w-4 h-4 mr-2" />
              DETALLES DEL DOCUMENTO
            </h2>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><span className="font-medium text-gray-900">Cliente:</span> Steven Muñoz</li>
              <li><span className="font-medium text-gray-900">Tipo:</span> Propuesta Comercial</li>
              <li><span className="font-medium text-gray-900">Alcance:</span> 2 Bodegas (FPV RRSS)</li>
              <li><span className="font-medium text-gray-900">Presupuesto:</span> COP $4M</li>
              <li><span className="font-medium text-gray-900">Viáticos:</span> A cargo del cliente</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors font-medium shadow-sm active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            <span>Descargar PDF</span>
          </button>
          
          <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
            * Para generar el PDF, haz clic en Descargar y selecciona "Guardar como PDF" en el destino de impresión.
          </p>
        </div>
      </aside>

      {/* Main Preview Area */}
      <main className="flex-1 overflow-auto bg-gray-100 p-8 flex justify-center print:p-0 print:overflow-visible print:bg-white">
        {/* Container that acts as the A4 paper shadow box on screen */}
        <div className="max-w-full overflow-x-auto print:shadow-none print:m-0 pb-16 print:pb-0 print:overflow-visible">
          <div className="shadow-2xl ring-1 ring-gray-900/5 print:ring-0 print:shadow-none">
            {/* The Document */}
            <ProposalDocument ref={documentRef} />
          </div>
        </div>
      </main>
    </div>
  );
}
