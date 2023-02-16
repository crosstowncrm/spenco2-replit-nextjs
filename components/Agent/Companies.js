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


export default function Companies({ companies }) {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box>
                    <TabList aria-label='CompanyTabs' onChange={handleChange}>
                        <Tab label='My Companies' value='1' />
                        <Tab label='Team Companies' value='2' />
                        <Tab label='All Companies' value='3' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Company URL</TableCell>
                                    <TableCell>Last Updated</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {companies.map((val, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row"><Link href={`/agent/companies/` + val.id}><a>{val.attributes.companyName}</a></Link></TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.companyUrl}</TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.updatedAt}</TableCell>
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


