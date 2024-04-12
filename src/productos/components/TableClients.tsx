
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


type Cliente = {
    id:         number;
    Nombre:     string;
    Telefono:   string;
    Email:      string;
    Password:   string;
    created_at: string;
    updated_at: null;
  } 
  
  
  type Props = {
    clientes: Cliente[]
  }
  

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}


export default function CustomizedTablesClients( {clientes}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> ID </StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Email </StyledTableCell>
            <StyledTableCell align="right">Telefono </StyledTableCell>
            <StyledTableCell align="right">created_at </StyledTableCell>
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <StyledTableRow key={cliente.id}>
              <StyledTableCell component="th" scope="row">
                {cliente.id}
              </StyledTableCell>
              <StyledTableCell align="right">{ cliente.Nombre}</StyledTableCell>
              <StyledTableCell align="right"> {cliente.Email}</StyledTableCell>
              <StyledTableCell align="right"> {cliente.Telefono}</StyledTableCell>
              <StyledTableCell align="right">  {cliente.created_at} </StyledTableCell>
              <StyledTableCell align="right"> 
                <Link to={`/clientes/${cliente.id}`}>
                  <Button variant="contained" color="success">
                          Mas Informacion
                  </Button>
                </Link>
               </StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}