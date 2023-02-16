import * as React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Tab,
} from '@mui/material';
import {
    TabContext,
    TabList,
    TabPanel,
} from '@mui/lab';

import Link from "next/link";


export default function Contacts({ contacts }) {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box>
                    <TabList aria-label='ContactTabs' onChange={handleChange}>
                        <Tab label='My Contacts' value='1' />
                        <Tab label='Team Contacts' value='2' />
                        <Tab label='All Contacts' value='3' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Mobile Phone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {contacts.map((val, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row"><Link href={`/agent/contacts/` + val.id}><a>{val.attributes.firstName} {val.attributes.lastName}</a></Link></TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.emailPrimary}</TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.mobilePhone}</TableCell>
                                </TableRow>
                            );
                            })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value='2'>Tab 2</TabPanel>
                <TabPanel value='3'>Tab 3</TabPanel>
            </TabContext>
        </Box>


    );
};


