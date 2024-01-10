import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getRowIdFromRowModel } from "@mui/x-data-grid/internals";


function AuthorList() {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/getAuthorList', {

        })

            .then(author => setAuthor(author.data))
            .catch(err => console.log(err))
    }, [])


    const columns = [


        { field: 'end_year', headerName: 'End Year', width: 90 },
        {
            field: 'intensity',
            headerName: 'Intensity',
            width: 150,
            editable: true,
        },
        {
            field: 'likelihood',
            headerName: 'likelihood',
            width: 150,
            editable: true,
        },
        {
            field: 'topic',
            headerName: 'Topic',
            width: 330,
            editable: true,
        },
        {
            field: 'insight',
            headerName: 'Insight',
            width: 330,
            editable: true,
        },
        {
            field: 'url',
            headerName: 'Url',
            width: 660,
            editable: true,
            renderCell: (params) => (<a href={params.value}>{params.value}</a>),

        }, {
            field: 'region',
            headerName: 'Region',
            width: 330,
            editable: true,
        },
        {
            field: 'start_year',
            headerName: 'Start Year',
            width: 330,
            editable: true,
        }, {
            field: 'impact',
            headerName: 'Impact',
            width: 330,
            editable: true,
        }, {
            field: 'added',
            headerName: 'Added',
            width: 330,
            editable: true,
        }, {
            field: 'published',
            headerName: 'Published',
            width: 330,
            editable: true,
        }, {
            field: 'country',
            headerName: 'Country',
            width: 330,
            editable: true,
        }, {
            field: 'relevance',
            headerName: 'Relevance',
            width: 330,
            editable: true,
        }, {
            field: 'region',
            headerName: 'region',
            width: 330,
            editable: true,
        }, {
            field: 'title',
            headerName: 'Title',
            width: 330,
            editable: true,
        }, {
            field: 'likelihood',
            headerName: 'Likelihood',
            width: 330,
            editable: true,
        },
    ];



    return (
        <Box sx={{ height: 800, width: '80%' }}>
            <h1> AuthorList</h1>
            <h2>Entire list of Author</h2>
            <h3>for flitering  click on the menu options beside the columns header</h3>

            <DataGrid
                rows={author}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 100,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                getRowId={(row) => (row._id)}
            />
        </Box>)

}

export default AuthorList;