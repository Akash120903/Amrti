import React from "react"
import { Video, Leaf, BookOpen, Map, Award } from 'lucide-react';
const MoringaReport=()=>{
    
        
        
      
          return (
            <div className="flex flex-col w-auto h-auto bg-white overflow-hidden">
              {/* Status bar */}
              {/* <div className="flex justify-between items-center px-4 py-1 bg-white text-xs">
                <span>12:30</span>
                <div className="flex space-x-2">
                  <span>📶</span>
                  <span>🔋</span>
                  <span>100%</span>
                </div> */}
              {/* </div> */}
        
              {/* Video placeholder */}
              <div className="bg-gray-200 h-64 mt-12 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Moringa Video</span>
              </div>
        
              {/* Benefits section */}
              <div className="p-3">
                <h2 className="font-bold mb-1 text-sm">Benefits:</h2>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  <li>Rich in antioxidants;</li>
                  <li>Enhances immunity;</li>
                  <li>Aids digestion;</li>
                  <li>Regulates blood sugar; and</li>
                  <li>Manages cholesterol;</li>
                  <li>Facilitates weight loss; and</li>
                  <li>Promotes healthy skin and hair.</li>
                </ul>
              </div>
        
              {/* Order button */}
              <div className="bg-orange-100 p-3 flex justify-between items-center text-sm">
                <span>Other Products - Order now</span>
                <img src="/api/placeholder/40/40" alt="Amrit logo" className="h-6 w-6" />
              </div>
        
              {/* Product images */}
              <div className="flex justify-around p-3">
                
                  <img src="./betroot.png" alt=""  className="w-20 h-20 object-cover" />
                  <img src="./betroot.png" alt=""  className="w-20 h-20 object-cover" />
                  <img src="./betroot.png" alt=""  className="w-20 h-20 object-cover" />


              
              </div>
        
              {/* Bottom navigation */}
              <div className=" flex justify-around py-2 bg-green-50">
                {[
                  { icon: <Leaf className="w-5 h-5" />, label: 'Benefits' },
                  { icon: <BookOpen className="w-5 h-5" />, label: 'Recipes' },
                  { icon: <Map className="w-5 h-5" />, label: 'Traceability' },
                  { icon: <Award className="w-5 h-5" />, label: 'Quality' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center">
                    {icon}
                    <span className="text-[10px] mt-0.5">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        };
        

export default MoringaReport