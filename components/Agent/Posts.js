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


export default function Posts({ posts }) {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box>
                    <TabList aria-label='ContactTabs' onChange={handleChange}>
                        <Tab label='My Drafts' value='1' />
                        <Tab label='My Published Posts' value='2' />
                        <Tab label='All Posts' value='3' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Post Type</TableCell>
                                    <TableCell>Last Updated</TableCell>
                                    <TableCell>Tags</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {posts.map((val, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row"><Link href={`/agent/posts/` + val.id}><a>{val.attributes.title}</a></Link></TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.postType}</TableCell>
                                    <TableCell component="th" scope="row">{val.attributes.updatedAt}</TableCell>
                                    <TableCell component="th" scope="row">tags</TableCell>
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


