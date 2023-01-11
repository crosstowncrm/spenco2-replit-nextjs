import { Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";


export default function Contacts({ contacts }) {
    return (
        <>
           <Link href="/">Back to player directory</Link>
           <h1 style={{ textAlign: "center" }}>My Contacts</h1> 
           <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {contacts.map((val, i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row"><Link href={`/agent/contact/` + val.id}><a>{val.attributes.firstName}</a></Link></TableCell>
                                <TableCell component="th" scope="row">{val.attributes.lastName}</TableCell>
                            </TableRow>
                        );
                    })}

                    </TableBody>
                </Table>
           </TableContainer>
        </>
    );
};
