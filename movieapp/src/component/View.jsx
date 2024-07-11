import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

// Example data
const rows = [
  {
    Moviename: 'Inception',
    Director: 'Christopher Nolan',
    category: 'Sci-Fi',
    releaseyear: '2010',
    image: (
      <a href="https://youtu.be/LifqWf0BAOA?si=PuAAsl2W28h-tjKW" target='_blank' rel="noopener noreferrer">
        <img src="inception.jpg" alt="Inception" width='50' />
      </a>
    ),
  },
  {
    Moviename: 'The Matrix',
    Director: 'The Wachowskis',
    category: 'Sci-Fi',
    releaseyear: '1999',
    image: <img src='m.jpg' alt="The Matrix" width='50' />,
  },
  {
    Moviename: 'Parasite',
    Director: 'Bong Joon Ho',
    category: 'Thriller',
    releaseyear: '2019',
    image: <img src='p.jpg' alt="Parasite" width='50' />,
  },
];

function View() {
  return (
    <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Moviename</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Release Year</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.Moviename}</TableCell>
              <TableCell align="right">{row.Director}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.releaseyear}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default View;
