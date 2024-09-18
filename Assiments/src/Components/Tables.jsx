import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Fetchdata from '../DataFetch/Fetchdata.js'

export default function CheckboxRowSelectionDemo() {
    const [data, setData] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    const fetchdataval = Fetchdata(1);

    useEffect(() => {
        if (fetchdataval && Array.isArray(fetchdataval)) {
            setData(fetchdataval);
        }
    }, [fetchdataval])

    return (
        <div className="card">
            <DataTable value={data} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="title" header="title"></Column>
                <Column field="place_of_origin" header="place_of_origin"></Column>
                <Column field="artist_display" header="artist_display"></Column>
                <Column field="inscriptions" header="inscriptions"></Column>
                <Column field="date_start" header="date_start"></Column>
                <Column field="date_end" header="date_end"></Column>
            </DataTable>
        </div>
    );
}
