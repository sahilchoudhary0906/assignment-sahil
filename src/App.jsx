import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingService, setEditingService] = useState({ name: '', description: '', price: '' });

  const addService = () => {
    if (newService.name.trim() && newService.description.trim() && newService.price.trim()) {
      setServices([...services, { ...newService }]);
      setNewService({ name: '', description: '', price: '' });
    }
  };

  const editService = (index) => {
    setEditingIndex(index);
    setEditingService(services[index]);
  };

  const updateService = () => {
    if (editingService.name.trim() && editingService.description.trim() && editingService.price.trim()) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = { ...editingService };
      setServices(updatedServices);
      setEditingIndex(null);
      setEditingService({ name: '', description: '', price: '' });
    }
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <>
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
<div className="App text-center">
    <h1 className='text-4xl font-bold'>Healthcare Services</h1>
    
    <div className='inputs flex flex-col sm:flex-row items-center rounded-xl gap-6 py-8 justify-around sm:justify-center'>
        <input
            type="text"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            placeholder="Service Name"
            className="border rounded p-2 w-full sm:w-auto"
        />
        <input
            type="text"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            placeholder="Description"
            className="border rounded p-2 w-full sm:w-auto"
        />
        <input
            type="text"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
            placeholder="Price"
            className="border rounded p-2 w-full sm:w-auto"
        />
    </div>
    
    <button className='bg-purple-600 rounded-full w-fit px-4 py-2 hover:bg-slate-500 text-white' onClick={addService}>
        Add Service
    </button>

    <ul className='flex flex-col items-center py-12 space-y-6'>
        {services.map((service, index) => (
            <li key={index} className="w-full flex flex-col items-center">
                {editingIndex === index ? (
                    <div className='flex flex-col sm:flex-row gap-4 w-full'>
                        <>
                            <input
                                type="text"
                                value={editingService.name}
                                onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="text"
                                value={editingService.description}
                                onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                                className="border rounded p-2 w-full"
                            />
                            <input
                                type="text"
                                value={editingService.price}
                                onChange={(e) => setEditingService({ ...editingService, price: e.target.value })}
                                className="border rounded p-2 w-full"
                            />
                            <div className="buttons flex justify-center gap-3 py-5">
                                <button className='bg-white border border-black rounded-full w-fit px-2 py-2 hover:bg-slate-500 text-black' onClick={updateService}>
                                    <TiTick />
                                </button>
                                <button className='bg-white border border-black rounded-full w-fit px-2 py-2 hover:bg-slate-500 text-black' onClick={() => setEditingIndex(null)}>
                                    <MdCancel />
                                </button>
                            </div>
                        </>
                    </div>
                ) : (
                    <>
                        <div className='flex flex-col gap-3 py-12 w-full text-left'>
                            <h1>Service Name: {service.name}</h1>
                            <p>About Service: {service.description}</p>
                            <p>Price: ${service.price}</p>
                        </div>
                        <div className="flex justify-center gap-7 text-4xl">
                            <button className='bg-white border border-black rounded-full w-fit px-2 py-2 hover:bg-slate-500 text-black' onClick={() => editService(index)}>
                                <CiEdit />
                            </button>
                            <button className='bg-white border border-black rounded-full w-fit px-2 py-2 hover:bg-slate-500 text-black' onClick={() => deleteService(index)}>
                                <MdDelete />
                            </button>
                        </div>
                    </>
                )}
            </li>
        ))}
    </ul>
</div>

    </>
  );
}

export default App;