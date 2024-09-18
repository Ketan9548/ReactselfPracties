import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Fetchdata from '../DataFetch/Fetchdata.js';

export default function PaginatorTemplateDemo() {
    const [data, setData] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;
    const fetchdataval = Fetchdata(1);

    useEffect(() => {
        if (fetchdataval && Array.isArray(fetchdataval)) {
            setData(fetchdataval);
        }
    }, [fetchdataval]);

    return (
        <div className="card" style={{ padding: '2px' }}>
            <DataTable value={data} showGridlines paginator rows={5}
                tableStyle={{ minWidth: '60rem', minHeight: '60rem' }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                paginatorLeft={paginatorLeft}
                paginatorRight={paginatorRight}>

                {/* Align headers and columns properly */}
                <Column field="title" header="Title"
                    headerStyle={{ textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center' }}></Column>

                <Column field="place_of_origin" header="Place of Origin"
                    headerStyle={{ textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center' }}></Column>

                <Column field="artist_display" header="Artist Display"
                    headerStyle={{ textAlign: 'center' , marginLeft:"5px" }}
                    bodyStyle={{ textAlign: 'center' }}></Column>

                <Column field="inscriptions" header="Inscriptions"
                    headerStyle={{ textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center'}}></Column>

                <Column field="date_start" header="Date Start"
                    headerStyle={{ textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center' }}></Column>
                    
                <Column field="date_end" header="Date End"
                    headerStyle={{ textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
